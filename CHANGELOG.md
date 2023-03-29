# Changelog

## Unreleased

## [2.0.0](https://github.com/xt0rted/pull-request-comment-branch/compare/v1.4.0...v2.0.0) - 2023-03-29

- Updated node runtime from 12 to 16
- Removed deprecated `ref` and `sha` outputs. If you're using these then you should switch to `head_ref` and `head_sha` respectively.

## [1.4.0](https://github.com/xt0rted/pull-request-comment-branch/compare/v1.3.0...v1.4.0) - 2022-10-23

- Bumped `@actions/core` from 1.2.7 to 1.10.0
- Bumped `@actions/github` from 4.0.0 to 5.1.1
- Bumped `node-fetch` from 2.6.1 to 2.6.7

## [1.3.0](https://github.com/xt0rted/pull-request-comment-branch/compare/v1.2.0...v1.3.0) - 2021-05-09

- Bumped `@actions/core` from 1.2.5 to 1.2.7
- Updated the `repo_token` input so it defaults to `GITHUB_TOKEN`. If you're already using this value you can remove this setting from your workflow.

## [1.2.0](https://github.com/xt0rted/pull-request-comment-branch/compare/v1.1.0...v1.2.0) - 2020-09-09

- Deprecated `ref` and `sha` outputs in favor of `head_ref` and `head_sha`.
- Added `base_ref` and `base_sha` outputs
- Bumped `@actions/core` from 1.2.2 to 1.2.5
- Bumped `@actions/github` from 2.1.1 to 4.0.0

## [1.1.0](https://github.com/xt0rted/pull-request-comment-branch/compare/v1.0.0...v1.1.0) - 2020-02-21

- Bumped `@actions/github` from 2.1.0 to 2.1.1

## [1.0.0](https://github.com/xt0rted/pull-request-comment-branch/releases/tag/v1.0.0) - 2020-02-09

- Initial release
