"use client";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export default function Sessionprovider({
  children,
  Session,
}: {
  children: ReactNode;
  Session: Session | null;
}) {
  return <SessionProvider session={Session}>{children}</SessionProvider>;
}
