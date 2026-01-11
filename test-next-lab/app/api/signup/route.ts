//route.ts for signup 
import { NextResponse } from 'next/server';
import pool from '../../utlis/dbConnect'; // Aapne folder ka naam 'utlis' rakha hai
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
    try {
        // 1. Frontend se data receive karein
        const { fname, lname, email, password } = await request.json();

        // Basic validation
        if (!email || !password) {
            return NextResponse.json({ message: "Email and Password are required" }, { status: 400 });
        }

        // 2. Check karein user pehle se register toh nahi
        const userCheck = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (userCheck.rows.length > 0) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 });
        }

        // 3. Password ko secure (Hash) karein
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 4. Database mein insert karein
        const query = `
            INSERT INTO users (first_name, last_name, email, password)
            VALUES ($1, $2, $3, $4)
            RETURNING id, email;
        `;
        const values = [fname, lname, email, hashedPassword];
        
        const result = await pool.query(query, values);

        return NextResponse.json({ 
            message: "User created successfully!", 
            user: result.rows[0] 
        }, { status: 201 });

    } catch (error: any) {
        console.error("Database Error:", error);
        return NextResponse.json({ 
            message: "Internal Server Error", 
            error: error.message 
        }, { status: 500 });
    }
}