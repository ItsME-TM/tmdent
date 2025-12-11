import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import AdminDashboardClient from "./AdminDashboardClient";


async function page() {
  const user = await currentUser();

  //check if the user authenticated
  if (!user) redirect("/");

  //check if the user is admin
  const adminEmail = process.env.ADMIN_EMAIL;
  const userEmail = user?.emailAddresses[0]?.emailAddress;

  if (!userEmail || userEmail !== adminEmail) redirect("/dashboard");

  return <AdminDashboardClient />;
}

export default page;
