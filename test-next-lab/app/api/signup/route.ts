import { NextResponse } from "next/server";
import User from "@/app/models/User";
import { dbSync } from "../../utlis/dbSync";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email aur password lazmi hain" },
        { status: 400 }
      );
    }

    await dbSync();

    const existing = await User.findOne({ where: { email } });
    if (existing) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 }
      );
    }

    // bcrypt hashing
    const hashed = await bcrypt.hash(password, 10); // 10 = salt rounds

    const user = await User.create({
      email,
      password: hashed
    });

    return NextResponse.json(
      { message: "Signup successful", user },
      { status: 201 }
    );
  } catch (e: any) {
    return NextResponse.json(
      { error: e.message || "Signup failed" },
      { status: 500 }
    );
  }
}
