---
title: Project status and how to contribute
description: "Where Omodroid stands today: no source code and no release. How to get notified about the first build, open a useful issue and send a pull request."
sheet: 2
---

# Project status and how to follow or contribute

Omodroid is planned. The repository has documentation, a license and a formatting check. It has no source code, no release and no install steps.

## Where the project stands

| Item          | State                                                                         |
| ------------- | ----------------------------------------------------------------------------- |
| Goal          | An Android launcher and overlay for the Omoda 5 (2023) infotainment head unit |
| Source code   | None yet                                                                      |
| Releases      | None yet                                                                      |
| Install steps | Planned to be added to the README together with the first build               |
| Roadmap       | None published                                                                |
| License       | MIT                                                                           |

The goal line comes from the README. The project is meant for owners who want to customize that screen. Nothing else about the launcher has been published, so there is no feature list or schedule to show here.

::: warning Nothing to install
You cannot use Omodroid to put apps on the head unit today. Any file that claims to be an Omodroid download does not come from this project.
:::

## Get notified about the first release

The README suggests watching or starring the repository.

1. Open [halitsever/omodroid](https://github.com/halitsever/omodroid) on GitHub while signed in.
2. Select **Watch**, then **Custom**, then tick **Releases**. GitHub will notify you when a release is published and stay quiet otherwise.
3. Select **Star** if you only want to bookmark the project.

## Open an issue

Questions and ideas go to the [issue tracker](https://github.com/halitsever/omodroid/issues). Search the existing issues first.

For an idea, use the [feature request template](https://github.com/halitsever/omodroid/issues/new?template=feature_request.md). It asks four things:

- the problem you are trying to solve
- the solution you would like
- alternatives you have considered
- any other context or screenshots

The contributing guide asks you to start with the problem and then describe the solution. For an owner, that means describing what you want to change on the screen and why the stock software gets in the way.

The project has not published a list of head unit details it needs from owners. Until it does, a clear description of the problem is the most useful thing you can send. Leave personal data out of a public issue, for example a VIN, a licence plate or account details that show up in a photo of the screen.

For a question, open a [blank issue](https://github.com/halitsever/omodroid/issues/new) and describe what you are trying to do. A bug report template exists as well, but it will only become useful once there is a build to test.

## Send a pull request

There is no code to change yet, so pull requests are limited to documentation for now. The steps in the contributing guide are:

1. Fork the repository and create a branch from `main`.
2. Keep the change focused on one fix or feature.
3. Format the files with Prettier. CI runs `npx -y prettier@3.6.2 --check .` and fails on unformatted Markdown or YAML.
4. Write commit messages in the Conventional Commits style, for example `docs: fix typo in readme`.
5. Open the pull request against `main` and link the issue it closes.

Small fixes such as typos can go straight to a pull request. For bigger changes, wait until the direction is agreed in an issue before writing anything.

## Security and conduct

Report security problems privately through [GitHub's private vulnerability reporting](https://github.com/halitsever/omodroid/security/advisories/new), not in a public issue. The repository also has a [code of conduct](https://github.com/halitsever/omodroid/blob/main/.github/CODE_OF_CONDUCT.md) that applies to issues and pull requests.

## Türkçe

README'de Omoda 5 sahipleri için kısa bir Türkçe bölüm var. Özeti: proje erken aşamada, depoda kaynak kodu ya da sürüm yok ve kurulum adımları ilk sürümle birlikte eklenecek.
