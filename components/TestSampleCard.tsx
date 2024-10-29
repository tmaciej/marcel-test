"use client";

import { TestSample } from "@/definitions/types";
import { useRouter } from "next/navigation";
import { useCallback, type ComponentProps } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Skeleton } from "./ui/skeleton";

type BaseProps = ComponentProps<typeof Card>;
export interface Props extends BaseProps {
  sample: TestSample | null;
}

export function TestSampleCard({ sample, ...rest }: Props) {
  const { push } = useRouter();

  const handleDetailsButtonClick = useCallback(() => {
    if (!sample) {
      return;
    }

    push(`/sample-details/${sample.id}`);
  }, [push, sample]);

  return (
    <Card {...rest}>
      <CardHeader>
        <CardTitle>
          {sample ? sample.name : <Skeleton className="h-[1em] w-4/5" />}
        </CardTitle>
        <CardDescription>
          {sample ? (
            <span>ID: {sample.id}</span>
          ) : (
            <Skeleton className="h-[1em] w-2/5" />
          )}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-sm font-semibold">
          {sample ? (
            sample.location.laboratory.name
          ) : (
            <Skeleton className="h-[1em] my-1 w-3/5" />
          )}
        </p>
        <p className="text-sm">
          {sample ? (
            sample.location.laboratory.address
          ) : (
            <Skeleton className="h-[1em] my-1 w-3/5" />
          )}
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          {sample ? (
            sample.location.details
          ) : (
            <Skeleton className="h-[1em] my-1 w-3/5" />
          )}
        </p>
      </CardContent>

      <CardFooter className="flex justify-end">
        {sample ? (
          <Button onClick={handleDetailsButtonClick}>View Details</Button>
        ) : (
          <Skeleton className="w-[113px] h-[36px]" />
        )}
      </CardFooter>
    </Card>
  );
}

export default TestSampleCard;
