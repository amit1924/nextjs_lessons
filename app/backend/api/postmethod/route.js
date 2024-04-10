import { NextResponse } from "next/server";

//http://localhost:3000/backend/api/postmethod

export async function POST(req, res) {
  try {
    // Parse the request body as JSON
    const body = await req.json();

    // Extract email and password from the parsed body
    const { name, email, password } = body;
    console.log(name, email, password);

    // Convert password to string and check its length
    if (String(password).length < 8) {
      console.log("Password length is less than 8 characters");
      return NextResponse.json(
        {
          error: "Password must be at least 8 characters",
        },
        { status: 400 }
      );
    }

    console.log("Password length is sufficient");

    return NextResponse.json({ message: "Successfully created data" });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.error(error);
  }
}
