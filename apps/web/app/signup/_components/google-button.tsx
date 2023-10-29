import { Button, Icons } from "ui";
import { useState } from "react";
import { supabaseBrowserClient } from "@/utils/supabase";

export function GoogleButton() {
  const [loading, setLoading] = useState(false);
  async function loginViaGoogle() {
    setLoading(true);
    const { error } = await supabaseBrowserClient.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: "http://localhost:3000/auth/callback" },
    });

    if (error) {
      alert(error.message);
    }
  }

  return (
    <Button loading={loading} onClick={loginViaGoogle} variant="outline">
      <Icons.google className="mr-2 h-4 w-4" />
      Google
    </Button>
  );
}
