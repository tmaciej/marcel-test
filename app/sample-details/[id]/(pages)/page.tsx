import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TestSample } from "@/definitions/types";
import { AvatarImage } from "@radix-ui/react-avatar";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
});

// Could use something better than native fetch here like axios
// but there aren't many API calls in this app at the moment
async function getSample(sampleId: string): Promise<TestSample> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/sample/${sampleId}`
  );
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.error || "Unkown error");
  }

  return json.data;
}

export default async function SampleDetailsPage({ params }: Props) {
  const id = (await params).id;
  const sample = await getSample(id);

  return (
    <article className="flex flex-col gap-8 max-w-xl mx-auto">
      <header>
        <h2 className="text-2xl text-center mb-1">{sample.name}</h2>
        <p className="text-lg text-center text-muted-foreground">
          ID: {sample.id}
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Current Custodian</CardTitle>
        </CardHeader>

        <CardContent className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/120" />
            <AvatarFallback>
              {getInitials(sample.custodian.fullName)}
            </AvatarFallback>
          </Avatar>

          <div>
            <p className="text-lg">{sample.custodian.fullName}</p>
            <p className="text-sm text-muted-foreground">
              <a
                href={`mailto:${sample.custodian.emailAddress}`}
                className="underline"
              >
                {sample.custodian.emailAddress}
              </a>{" "}
              • <span>{sample.custodian.phoneNumber}</span>
            </p>
          </div>
        </CardContent>

        <CardFooter className="flex justify-end">
          <Button>Take Custody</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Current Location</CardTitle>
          <CardDescription>
            Since{" "}
            {dateFormatter.format(new Date(sample.location.dateOfArrival))}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-sm font-semibold">
            {sample.location.laboratory.name}
          </p>
          <p className="text-sm">{sample.location.laboratory.address}</p>
          <p className="text-sm text-muted-foreground mt-2">
            {sample.location.details}
          </p>
        </CardContent>

        <CardFooter className="flex justify-end">
          <Button>Update Location</Button>
        </CardFooter>
      </Card>
    </article>
  );
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}
