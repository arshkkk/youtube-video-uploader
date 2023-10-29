"use client";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Skeleton,
} from "ui";
import Link from "next/link";
import { useSession } from "../../hooks";
import { supabaseBrowserClient } from "../../utils/supabase";

export function UserNav() {
  const { session } = useSession();
  console.log(session);

  async function signout() {
    await supabaseBrowserClient.auth.signOut();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {session ? (
          <Button className="relative h-8 w-8 rounded-full" variant="ghost">
            <Avatar className="h-8 w-8">
              <AvatarImage
                alt="@shadcn"
                src={session.user.user_metadata.avatar_url}
              />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </Button>
        ) : (
          <Skeleton className="h-8 w-8 rounded-full" />
        )}
      </DropdownMenuTrigger>
      {session ? (
        <DropdownMenuContent align="end" className="w-56" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {session.user.user_metadata.name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {session.user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link href="/profile">
              <DropdownMenuItem>Profile</DropdownMenuItem>
            </Link>
            {/*<DropdownMenuItem>*/}
            {/*  Billing*/}
            {/*  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>*/}
            {/*</DropdownMenuItem>*/}
            {/*<DropdownMenuItem>*/}
            {/*  Settings*/}
            {/*  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>*/}
            {/*</DropdownMenuItem>*/}
            {/*<DropdownMenuItem>New Team</DropdownMenuItem>*/}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={signout}>
            Log out
            {/*<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>*/}
          </DropdownMenuItem>
        </DropdownMenuContent>
      ) : null}
    </DropdownMenu>
  );
}
