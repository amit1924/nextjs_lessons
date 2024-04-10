import { NextResponse } from "next/server";

// http://localhost:3000/backend/api/4

export function GET(_, response) {
  console.log(`ID:${response.params.id}`);

  const { id } = response.params;

  return NextResponse.json({
    message: "hello world",
    id,
  });
}
