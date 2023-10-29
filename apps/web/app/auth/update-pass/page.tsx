"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

export default function UpdatePassword() {
  const supabase = createClientComponentClient();
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);

  async function updatePassword(newPass: string) {
    try {
      setLoading(true);
      await supabase.auth.updateUser({ password: newPass });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Update Password</h1>
      <input
        onChange={(e) => {
          setPass(e.target.value);
        }}
        type="password"
      />
      <button
        className="button primary block"
        disabled={loading}
        onClick={() => updatePassword(pass)}
      >
        {loading ? "Loading ..." : "Update"}
      </button>
    </div>
  );
}
