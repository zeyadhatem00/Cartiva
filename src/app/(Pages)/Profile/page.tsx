"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";
export default function page() {
  useEffect(() => {
    redirect("/Profile/Address");
  }, []);

  return <div></div>;
}
