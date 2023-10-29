"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "ui";
import Link from "next/link";
import { GoogleButton } from "./_components/google-button";
import { EmailPasswordForm } from "./_components/email-password-form";

export default function Signup() {
  return (
    <div className="w-96 mx-auto">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>

        <EmailPasswordForm type="signup" />

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
              Have an account?{"      "}
            </p>
            <Link href="/login">
              {" "}
              <p className="ml-1 text-muted-foreground hover:text-foreground font-bold text-sm">
                {" "}
                Sign In.
              </p>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
