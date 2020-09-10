# Pull Request Comment Branch

[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=xt0rted/pull-request-comment-branch)](https://dependabot.com)

Get the head ref and sha of a pull request comment.

Workflows for pull request comments are triggered using the [`issue_comment`](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows#issue-comment-event-issue_comment) event which runs for both issues and pull requests.
This action lets you filter your workflow to comments only on pull requests.
It also gets the head ref and sha for the pull request branch which can be used later in the workflow.

The pull request head ref and sha are important because `issue_comment` workflows run against the repository's `default` branch (usually `mater`) and not the pull request's branch.
With this action you'll be able to pass the ref to [`actions/checkout`](https://github.com/actions/checkout) and work with the pull request's code.

## Usage

```yml
on:
  issue_comment:
    types: created

jobs:
  pr-comment:
    runs-on: ubuntu-latest
    steps:
      - uses: xt0rted/pull-request-comment-branch@v1.2.0
        id: comment-branch
        with:
          repo_token: ${{ secrets.GITHUB_TOKEN }}

      - uses: actions/checkout@v2
        if: success()
        with:
          ref: ${{ steps.comment-branch.outputs.head_ref }}

      - run: git rev-parse --abbrev-ref HEAD
      - run: git rev-parse --verify HEAD
```

## Options

### Required

Name | Allowed values | Description
-- | -- | --
`repo_token` | `GITHUB_TOKEN` or a custom value | The token used to call the GitHub api.

## Outputs

Name | Decription
-- | --
`base_ref` | The name of the branch the pull request will merge into.
`base_sha` | The head sha of the branch the pull request will merge into.
`head_ref` | The name of the pull request branch the comment belongs to.
`head_sha` | The head sha of the pull request branch the comment belongs to.
`ref` | Deprecated, use `head_ref` instead.
`sha` | Deprecated, use `head_sha` instead.

## License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
