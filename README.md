# ODC Instruments Template

A template repository for building data-collection instruments for the [Open Data Capture](https://opendatacapture.org) platform. Forms live in [`lib/forms`](./lib/forms) and interactive tasks live in [`lib/interactive`](./lib/interactive), with each instrument in its own directory containing an `index.ts` entrypoint.

Use this repository as a starting point: click **Use this template** on GitHub (or copy the files), then replace the example instrument in `lib/forms/EXAMPLE_FORM` with your own.

## What is an instrument?

An instrument is the unit of data collection in Open Data Capture — it defines what the user sees, what data is produced, and how that data is validated. See the [instruments documentation](https://opendatacapture.org/en/docs/concepts/instruments/) for a full overview.

## Getting started

There are two paths through this section, depending on your experience:

- **[For developers](#for-developers)** — a quick reference if you already have [Node.js](https://nodejs.org) and [pnpm](https://pnpm.io) installed.
- **[For beginners](#for-beginners-from-scratch)** — a step-by-step walkthrough from a brand-new computer, assuming no prior knowledge.

### For developers

#### Installation

This repo uses [pnpm](https://pnpm.io). Install dependencies with:

```sh
pnpm install
```

You can setup an agents file with the following command:

```sh
pnpm exec instrument-guidelines --file CLAUDE.md
```

#### Adding an instrument

Create a new directory under `lib/forms` (or `lib/interactive`) and add an `index.ts` that default-exports the result of `defineInstrument`. See [`lib/forms/EXAMPLE_FORM/index.ts`](./lib/forms/EXAMPLE_FORM/index.ts) for a minimal, fully-typed starting point.

#### Serving an instrument

Use `serve-instrument` to preview an instrument locally. Pass the instrument's directory as the target:

```sh
pnpm exec serve-instrument lib/forms/EXAMPLE_FORM
```

The dev server runs on port `3000` by default; override it with `-p <number>`.

#### Linting

Type-check and lint the instruments with:

```sh
pnpm lint
```

### For beginners (from scratch)

New to programming? No problem. These steps take you from a brand-new computer all the way to a running preview of an instrument, assuming **no prior knowledge**. You'll install a few free tools, then copy and paste a handful of commands.

A few terms you'll see below:

- **Terminal** — a text window where you type commands instead of clicking buttons. We'll use the one built into the code editor (VS Code) because it automatically opens "inside" your project folder.
- **Node.js** — the program that runs the JavaScript/TypeScript code in this project.
- **pnpm** — the tool that downloads the other pieces of code (the "dependencies") this project needs.

Pick your operating system and follow the steps in order.

<details>
<summary><strong>Windows</strong></summary>

1. **Get the project files.** At the top of this page on GitHub, click the green **Use this template** button → **Create a new repository** to make your own copy. (If you just want to try it out, click **Code → Download ZIP** instead, then unzip the file to a folder you'll remember, such as your Desktop.) Installing Git is optional — the ZIP route needs no extra tools.

2. **Install a code editor (VS Code).** Download it from [code.visualstudio.com](https://code.visualstudio.com), run the installer, and accept the defaults. VS Code is where you'll read, edit, and run the project.

3. **Install Node.js.** Go to [nodejs.org](https://nodejs.org) and click the big **LTS** download button (LTS means the stable, recommended version). Run the downloaded `.msi` installer and click through it, accepting all the defaults.

4. **Open the project in VS Code.** Start VS Code, then choose **File → Open Folder…** and select the project folder from step 1.

5. **Open a terminal.** In VS Code's menu, choose **Terminal → New Terminal**. A text panel appears at the bottom — it's already pointed at your project folder.

6. **Install everything and run an instrument.** Type these commands one at a time, pressing **Enter** after each:

   ```sh
   corepack enable
   pnpm install
   pnpm exec serve-instrument lib/forms/EXAMPLE_FORM
   ```

   (`corepack enable` sets up `pnpm` and only needs to be run once.)

7. **View it.** Open your web browser and go to [http://localhost:3000](http://localhost:3000). You should see the example instrument. To stop the preview, click in the terminal and press **Ctrl + C**.

</details>

<details>
<summary><strong>macOS</strong></summary>

1. **Get the project files.** At the top of this page on GitHub, click the green **Use this template** button → **Create a new repository** to make your own copy. (If you just want to try it out, click **Code → Download ZIP** instead, then unzip the file to a folder you'll remember, such as your Desktop.) Installing Git is optional — the ZIP route needs no extra tools.

2. **Install a code editor (VS Code).** Download it from [code.visualstudio.com](https://code.visualstudio.com), open the downloaded file, and drag VS Code into your **Applications** folder. This is where you'll read, edit, and run the project.

3. **Install Node.js.** Go to [nodejs.org](https://nodejs.org) and click the big **LTS** download button (LTS means the stable, recommended version). Open the downloaded `.pkg` installer and click through it, accepting all the defaults.

4. **Open the project in VS Code.** Start VS Code, then choose **File → Open Folder…** and select the project folder from step 1.

5. **Open a terminal.** In VS Code's menu, choose **Terminal → New Terminal**. A text panel appears at the bottom — it's already pointed at your project folder. (macOS also ships with a **Terminal** app in Applications → Utilities, but the VS Code terminal is easier because you don't have to navigate to the folder yourself.)

6. **Install everything and run an instrument.** Type these commands one at a time, pressing **Return** after each:

   ```sh
   corepack enable
   pnpm install
   pnpm exec serve-instrument lib/forms/EXAMPLE_FORM
   ```

   (`corepack enable` sets up `pnpm` and only needs to be run once.)

7. **View it.** Open your web browser and go to [http://localhost:3000](http://localhost:3000). You should see the example instrument. To stop the preview, click in the terminal and press **Control + C**.

</details>

<details>
<summary><strong>Linux</strong></summary>

These steps assume you're comfortable opening a terminal.

1. **Get the project files.** Use the green **Use this template** button on GitHub to create your own copy, then clone it, or download and unzip the project. `cd` into the project folder.

2. **Install a code editor (VS Code).** Optional but recommended — install it from [code.visualstudio.com](https://code.visualstudio.com) or your distribution's package manager.

3. **Install nvm** (Node Version Manager). Follow the official instructions at [github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm#installing-and-updating), then **close and reopen your terminal** so the `nvm` command becomes available.

4. **Install the right Node.js version.** From inside the project folder, run:

   ```sh
   nvm install
   nvm use
   ```

   This reads the project's `.nvmrc` file and installs the Node.js version it expects.

5. **Install everything and run an instrument:**

   ```sh
   corepack enable
   pnpm install
   pnpm exec serve-instrument lib/forms/EXAMPLE_FORM
   ```

   (`corepack enable` sets up `pnpm` and only needs to be run once.)

6. **View it.** Open your web browser and go to [http://localhost:3000](http://localhost:3000). Press **Ctrl + C** in the terminal to stop the preview.

</details>

Once you've done this once, you can re-run an instrument any time with `pnpm exec serve-instrument <directory>`, and the [For developers](#for-developers) reference above is your day-to-day quick reference.

## Examples

Browse live examples of instruments on our playground: https://playground.opendatacapture.org
