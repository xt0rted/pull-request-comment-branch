# Changelog

## Unreleased

- Bumped `@actions/core` from 1.2.7 to 1.7.0
- Bumped `@actions/github` from 4.0.0 to 5.0.1
- Bumped `node-fetch` from 2.6.1 to 2.6.7

## Version 1.3.0

- Bumped `@actions/core` from 1.2.5 to 1.2.7
- Updated the `repo_token` input so it defaults to `GITHUB_TOKEN`. If you're already using this value you can remove this setting from your workflow.

## Version 1.2.0

- Deprecated `ref` and `sha` outputs in favor of `head_ref` and `head_sha`.
- Added `base_ref` and `base_sha` outputs
- Bumped `@actions/core` from 1.2.2 to 1.2.5
- Bumped `@actions/github` from 2.1.1 to 4.0.0

## Version 1.1.0

- Bumped `@actions/github` from 2.1.0 to 2.1.1

## Version 1.0.0

- Initial release
