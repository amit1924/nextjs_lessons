import { NextResponse } from "next/server";
import { users } from "../../util/db";

// http://localhost:3000/backend/api/users

export function GET() {
  const data = users;
  return NextResponse.json({
    data,
  });
}
