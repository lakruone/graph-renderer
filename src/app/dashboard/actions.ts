"use server";

type RenderGraphResult = {
  edges?: string[];
  nodes?: string[];
  message?: string;
};

const MAX_NODES = 6;

export async function renderGraph(formData: FormData): Promise<RenderGraphResult>  {
  const graphNotation = formData.get("graph-notation") as string;

  if (!graphNotation) {
    return {
      message: "Hey, your graph notation is missing!",
    };
  }

  // CODE FOR TASK 3.4 -----------------------------------------
  const lines = graphNotation.trim().split("\n");

  // Set to store unique nodes and edges
  const nodes = new Set<string>();
  const edges = new Set<string>();

  try {
    for (let i = 0; i < lines.length; i++) {
      const trimmedLine = lines[i].trim();
      // Match pattern: single uppercase letter, ->, single uppercase letter
      const match = trimmedLine.match(/^([A-Z])->([A-Z])$/);

      if (!match) {
        return {
          message: `Hey, there was an error parsing line ${i + 1} of your graph notation!`,
        };
      }

      const [, source, target] = match;
      nodes.add(source);
      nodes.add(target);
      edges.add(`${source}${target}`);

      // Check if we've exceeded max nodes
      if (nodes.size > MAX_NODES) {
        return {
          nodes: Array.from(nodes).slice(0, MAX_NODES),
          edges: Array.from(edges),
        };
      }
    }

    return {
      edges: Array.from(edges),
      nodes: Array.from(nodes),
    };

  } catch (error) {
    return {
      message: `Hey, there was an error parsing your graph notation! error = ${error}`,
    };
  }
  // END OF CODE FOR TASK 3.4 ----------------------------------
}
