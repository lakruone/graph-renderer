"use client";

import Button from "./button";
import Error from "./error";
import Instructions from "./instructions";
import Matrix from "./matrix";
import TextArea from "./textarea";
import { renderGraph } from "@/app/dashboard/actions";
import { useState } from "react";

export default function Dashboard() {
  const [error, setError] = useState<string | null>(null);
  const [graphNodes, setGraphNodes] = useState<string[]>([]);
  const [graphEdges, setGraphEdges] = useState<string[]>([]);

  return (
    <main className="bg-teal-100 flex-1 flex flex-col">
      {error && <Error message={error} />}
      <section className="flex-1 flex flex-col gap-4 bg-teal-50 m-5 p-4 rounded border-2 border-gray-300 z-10">
        <Instructions />
        <div className="flex-1 flex flex-col gap-4 md:flex-row">
          {/* // CODE FOR TASK 4.2 -----------------------------------------
              // END OF CODE FOR TASK 4.2 ---------------------------------- */}
        </div>
      </section>
    </main>
  );
}
