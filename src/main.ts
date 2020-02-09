import { getInput, setFailed, setOutput } from "@actions/core";
import { context } from "@actions/github";
import { Octokit } from "@octokit/rest";

export async function run() {
  try {
    const token = getInput("repo_token", { required: true });
    const client = new Octokit({ auth: `token ${token}` });

    const { data: { pull_request } } = await client.issues.get({
      ...context.repo,
      issue_number: context.issue.number,
    });

    if (!pull_request) {
      throw Error("Comment is not on a pull request");
    }

    const { data: { head: { ref, sha } } } = await client.pulls.get({
      ...context.repo,
      pull_number: context.issue.number,
    });

    setOutput("ref", ref);
    setOutput("sha", sha);
  } catch (error) {
    setFailed(error.message);
    throw error;
  }
}

run();
