import { NextResponse } from "next/server";

export function GET(_, response) {
  console.log(`ID:${response.params.id}`);

  const { id } = response.params;

  return NextResponse.json({
    message: "hello world",
    id,
  });
}
