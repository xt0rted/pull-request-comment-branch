import { context, getOctokit } from "@actions/github";

interface PullRequestDetailsResponse {
  repository: {
    pullRequest: {
      headRef: {
        name: string;
        target: {
          oid: string;
        };
      };
      baseRef: {
        name: string;
        target: {
          oid: string;
        };
      };
      headRepository: {
        name: string;
        owner: {
          login: string;
        };
      };
    };
  };
}

export async function isPullRequest(token: string) {
  const client = getOctokit(token);

  const { data: { pull_request } } = await client.rest.issues.get({
    ...context.repo,
    issue_number: context.issue.number,
  });

  return !!pull_request;
}

export async function pullRequestDetails(token: string) {
  const client = getOctokit(token);

  const {
    repository: {
      pullRequest: {
        baseRef,
        headRef,
        headRepository,
      },
    },
  } = await client.graphql<PullRequestDetailsResponse>(
    `
      query pullRequestDetails($repo:String!, $owner:String!, $number:Int!) {
        repository(name: $repo, owner: $owner) {
          pullRequest(number: $number) {
            baseRef {
              name
              target {
                oid
              }
            }
            headRef {
              name
              target {
                oid
              }
            }
            headRepository {
              name
              owner {
                login
              }
            }
          }
        }
      }
    `,
    {
      ...context.repo,
      number: context.issue.number
    },
  );

  return {
    base_ref: baseRef.name,
    base_sha: baseRef.target.oid,
    head_ref: headRef.name,
    head_sha: headRef.target.oid,
    head_repo: headRepository.name,
    head_owner: headRepository.owner.login,
  };
}
