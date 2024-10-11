"use client";

import Button from "@/components/button";
import Error from "@/components/error";
import Input from "@/components/input";
import Watermark from "@/components/watermark";
import { redirectToDashboard } from "./actions";
import { useState } from "react";

export default function Page() {
  const [error, setError] = useState<string | null>(null);

  return (
    <main className="bg-teal-100 flex flex-col h-screen">
      <Watermark />
      {error && <Error message={error} />}
      {/* // CODE FOR TASK 2.2 -----------------------------------------
      
      // END OF CODE FOR TASK 2.2 ---------------------------------- */}
    </main>
  );
}
