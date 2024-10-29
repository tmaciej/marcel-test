import { samples } from "@/constants/data";
import { delay } from "@/lib/utils";
import { NextResponse, type NextRequest } from "next/server";

interface Context {
  params: Promise<{ id: string }>;
}

export async function GET(_request: NextRequest, { params }: Context) {
  const id = (await params).id;

  const data = samples.find((sample) => sample.id === id);

  if (!data) {
    return NextResponse.json(
      {
        error: "Sample does not exist",
      },
      {
        status: 404,
      }
    );
  }

  // Simulate server lag
  await delay(Math.random() > 0.5 ? 1000 : 0);

  return NextResponse.json({
    data,
  });
}
