import { samples } from "@/constants/data";
import { delay } from "@/lib/utils";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const query = searchParams.get("query");

  if (typeof query !== "string" || query.length < 3) {
    return NextResponse.json(
      {
        error: "Bad Request",
      },
      {
        status: 400,
      }
    );
  }

  const data = samples
    .filter((sample) => sample.id.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 3);

  // Simulate server lag
  await delay(Math.random() > 0.5 ? 1000 : 0);

  return NextResponse.json({
    data,
  });
}
