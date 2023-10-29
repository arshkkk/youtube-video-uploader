"use client";

import { Button, Icons } from "ui";
import Link from "next/link";
import { useState } from "react";

export function YoutubeIntegrationButton() {
  const [loading, setLoading] = useState(false);

  return (
    <Link href="/auth/youtube/">
      <Button
        className="font-bold font-cal text-sm"
        loading={loading}
        onClick={() => {
          setLoading(true);
        }}
      >
        <Icons.youtube className="h-6 w-6 mr-2" />
        Add Channel
      </Button>
    </Link>
  );
}
