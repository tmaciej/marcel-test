import { Progress } from "@/components/ui/progress";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function SampleDetailsLoading({ children }: Props) {
  return (
    <>
      <Progress indeterminate />
      {children}
    </>
  );
}
