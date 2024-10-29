"use client";

import { Button } from "@/components/ui/button";

export default function SampleDetailsError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container mx-auto flex flex-col items-center">
      <h2 className="text-xl mb-2">Something went wrong!</h2>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}
