import Container from "@/components/Container";
import Link from "next/link";

export default async function NotFound() {
  return (
    <Container className="justify-center self-center text-center">
      <h3>
        Product not found. Please{" "}
        <Link href="/" className="underline">
          click
        </Link>{" "}
        here to go to Home page
      </h3>
    </Container>
  );
}
