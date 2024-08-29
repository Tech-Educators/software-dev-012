import { SignInButton } from "@clerk/nextjs";

export function NoUser() {
  return (
    <div>
      <p>Please sign in</p>
      <SignInButton />
    </div>
  );
}
