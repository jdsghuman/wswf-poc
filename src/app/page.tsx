import Container from "@/components/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ZoomLink from "@/components/zoom-link";

export default function Home() {
  return (
    <Container>
      <div className="my-4 flex justify-end">
        <ZoomLink meetingId="1234567890" passcode="password123" />
      </div>
      <div className="flex w-full m-2 mt-8">
        <div className="flex-1 ml-1 mr-1">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
        <div className="flex-1 ml-1 mr-1">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Container>
  );
}
