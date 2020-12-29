import { getInput, setFailed, setOutput } from "@actions/core";

import { isPullRequest, pullRequestDetails } from "./PullRequests";

export async function run() {
  try {
    const token = getInput("repo_token", { required: true });

    if (!isPullRequest(token)) {
      throw Error("Comment is not on a pull request");
    }

    const {
      base_ref,
      base_sha,
      head_ref,
      head_sha,
    } = await pullRequestDetails(token);

    setOutput("base_ref", base_ref);
    setOutput("base_sha", base_sha);
    setOutput("head_ref", head_ref);
    setOutput("head_sha", head_sha);

    // Deprecated
    setOutput("ref", head_ref);
    setOutput("sha", head_sha);
  } catch (error) {
    if (getInput("fail").toLowerCase() == 'true')
      setFailed(error.message);
    throw error;
  }
}

run();
