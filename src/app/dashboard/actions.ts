"use server";

const MAX_NODES = 6;

export async function renderGraph(formData: FormData) {
  const graphNotation = formData.get("graph-notation") as string;

  if (!graphNotation) {
    return {
      message: "Hey, your graph notation is missing!",
    };
  }

  // CODE FOR TASK 3.4 -----------------------------------------
  // END OF CODE FOR TASK 3.4 ----------------------------------
}
