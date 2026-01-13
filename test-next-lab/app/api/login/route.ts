import User from "@/app/models/User";
import { dbSync } from "@/app/utlis/dbSync";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
const body = await req.json();
const {email} = body;

//check whether email exists or not 
if (!email) {
    return NextResponse.json(
      { error: "Email is required" },
      { status: 400 }
    );
}
await dbSync(); 
const ifUserExists = await User.findOne({where: {email}});
if (ifUserExists){
    return NextResponse.json({
        message : "Login Successfully",
        status : 200
    })
  } 
}catch (error) {
    return NextResponse.json(
      { error: "Login failed" },
      { status: 500 }
    );
  }
}