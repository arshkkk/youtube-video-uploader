"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "ui";
import Link from "next/link";
import { EmailPasswordForm } from "../signup/_components/email-password-form";
import { GoogleButton } from "../signup/_components/google-button";

export default function Login() {
  return (
    <div className="w-96 mx-auto">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login into your account
          </CardDescription>
        </CardHeader>

        <EmailPasswordForm type="login" />

        <CardContent className="grid gap-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <GoogleButton />
          </div>

          <div className="flex items-center">
            <p className="text-sm text-muted-foreground ml-auto">
              Do Not have an account?{"      "}
            </p>
            <Link href="/signup">
              {" "}
              <p className="ml-1 text-muted-foreground hover:text-foreground font-bold text-sm">
                {" "}
                Sign Up.
              </p>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
