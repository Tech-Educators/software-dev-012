import { NoUser } from "@/components/NoUser";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
            <SignInButton />
            <NoUser />
          </SignedOut>
          <SignedIn>
            <UserButton />
            {children}
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}
