"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function redirectToDashboard(formData: FormData) {
  // CODE FOR TASK 2.4 -----------------------------------------
  const name: string = formData.get("name") as string;

  const sanitizedName = name
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ');

  if (!sanitizedName) {
    throw new Error("Hey, your name is missing!");
  }

  cookies().set("gr-name", sanitizedName);
  redirect("/dashboard");
  // END OF CODE FOR TASK 2.4 ----------------------------------
}
