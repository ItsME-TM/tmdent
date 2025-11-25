import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignUpButton, SignOutButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1>Welcome </h1>
      <SignedOut>
        <SignUpButton mode="modal">Sign up</SignUpButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton>Logout</SignOutButton>
      </SignedIn>
    </div>
  );
}
