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
            {/* // CODE FOR TASK 2.2 -----------------------------------------*/}
            <section className="flex-1 flex flex-col items-center justify-center gap-8 z-10">
        <div className="animate-pulse text-2xl text-left bg-gradient-to-l from-teal-300 to-teal-600 text-transparent bg-clip-text">
          Welcome to <br />
          <span className="text-5xl font-bold">Graph Renderer.</span>
        </div>
        
        <div className="border-2 border-gray-300 rounded p-5 bg-slate-50">
          <form
             action={async (formData: FormData) => {
              try {
                await redirectToDashboard(formData);
              } catch (err: any) {
                setError(err.message);
              }
            }}
          >
            <label htmlFor="name" className="block text-gray-600 mb-2">
              What's your name?
            </label>
            <div className="flex gap-2 text-gray-700">
              <Input
                id="name"
                type="text"
                placeholder="e.g. John Appleseed"
              />
              <Button type="submit" theme="primary">
                Continue
              </Button>
            </div>
          </form>
        </div>
      </section>
      {/* // END OF CODE FOR TASK 2.2 ---------------------------------- */}
    </main>
  );
}
