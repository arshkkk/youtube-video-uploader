"use client";
import { Button, CardContent, CardFooter, Input, Label } from "ui";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowserClient } from "../../../src/utils/supabase";

export function EmailPasswordForm({ type }: { type: "login" | "signup" }) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function signUpNewUser() {
    setLoading(true);
    const { error } = await supabaseBrowserClient.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: "http://localhost:3000/auth/callback",
      },
    });

    if (error) {
      alert(error.message || "Something Went Wrong!");
    }

    setLoading(false);
  }

  async function loginUser() {
    setLoading(true);
    const { data, error } = await supabaseBrowserClient.auth.signInWithPassword(
      {
        email,
        password,
      },
    );
    if (error) {
      alert(error.message || "Something Went Wrong!");
    }

    console.log("Data", data, error);

    if (data.user) {
      alert("Logged in Successfully!");
      router.replace("/profile-ssr");
    }
    setLoading(false);
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (type === "signup") {
          void signUpNewUser();
        } else void loginUser();
      }}
    >
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="m@example.com"
            required
            type="email"
            value={email}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            minLength={6}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            type="password"
            value={password}
          />
        </div>
      </CardContent>

      <CardFooter>
        <Button
          className="w-full"
          disabled={loading}
          loading={loading}
          type="submit"
        >
          {type === "signup" ? "Create account" : "Login"}
        </Button>
      </CardFooter>
    </form>
  );
}
