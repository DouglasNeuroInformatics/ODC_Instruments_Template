# ODC Instruments Template

A template repository for building data-collection instruments for the [Open Data Capture](https://opendatacapture.org) platform. Forms live in [`lib/forms`](./lib/forms) and interactive tasks live in [`lib/interactive`](./lib/interactive), with each instrument in its own directory containing an `index.ts` entrypoint.

Use this repository as a starting point: click **Use this template** on GitHub (or copy the files), then replace the example instrument in `lib/forms/EXAMPLE_FORM` with your own.

## What is an instrument?

An instrument is the unit of data collection in Open Data Capture — it defines what the user sees, what data is produced, and how that data is validated. See the [instruments documentation](https://opendatacapture.org/en/docs/concepts/instruments/) for a full overview.

## Installation

This repo uses [pnpm](https://pnpm.io). Install dependencies with:

```sh
pnpm install
```

You can setup an agents file with the following command:

```sh
pnpm exec instrument-guidelines --file CLAUDE.md
```

## Adding an instrument

Create a new directory under `lib/forms` (or `lib/interactive`) and add an `index.ts` that default-exports the result of `defineInstrument`. See [`lib/forms/EXAMPLE_FORM/index.ts`](./lib/forms/EXAMPLE_FORM/index.ts) for a minimal, fully-typed starting point.

## Serving an instrument

Use `serve-instrument` to preview an instrument locally. Pass the instrument's directory as the target:

```sh
pnpm exec serve-instrument lib/forms/EXAMPLE_FORM
```

The dev server runs on port `3000` by default; override it with `-p <number>`.

## Linting

Type-check and lint the instruments with:

```sh
pnpm lint
```

## Examples

Browse live examples of instruments on our playground: https://playground.opendatacapture.org
