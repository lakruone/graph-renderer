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
          {/* // CODE FOR TASK 4.2 ----------------------------------------- */}
          <div className="flex-1">
            <h2 className="bg-teal-500 text-white px-4 py-2 font-bold uppercase tracking-widest">
              Graph Editor
            </h2>
            <div className="border-2 border-gray-300 bg-slate-50 rounded p-4 border-b-2 mt-4 flex-1 items-center justify-center">
              <h4 className="text-sm mb-4 text-gray-600">Enter your graph notation below:</h4>
              <form action={async (formData: FormData) => {
                const result = await renderGraph(formData);
                
                setGraphNodes(result.nodes ?? []);
                setGraphEdges(result.edges ?? []);
                setError(result.message ?? null);
              }}
              onReset={() => {
                setGraphNodes([]);
                setGraphEdges([]);
                setError(null);
              }}
              >
                <TextArea id="graph-notation" placeholder="e.g. A->B" />
                <div className="flex gap-2">
                  <Button type="submit" theme="primary"> Generate </Button>
                  <Button type="reset" theme="secondary"> Clear </Button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <h2 className="bg-teal-500 text-white px-4 py-2 font-bold uppercase tracking-widest">
              Adjacency Matrix
            </h2>
            <Matrix graphNodes={graphNodes} graphEdges={graphEdges} />
          </div>
          {/*// END OF CODE FOR TASK 4.2 ---------------------------------- */}
        </div>
      </section>
    </main>
  );
}
