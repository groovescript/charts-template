# My Charts

A private collection of drum charts written in [GrooveScript](https://github.com/groovescript/groovescript) and rendered to PDF automatically on every pull request.

---

## One-time setup (~5 minutes)

You're reading this inside a repo that was generated from a template — the render workflow is already installed. All you need to do is:

1. **Install the GitHub app on your iPhone.** Download it from the App Store and sign in with your GitHub account.

That's it. No terminal. No config files. No tokens.

> **First render note:** The first time the workflow runs in your repo, it takes 60–90 seconds while it downloads LilyPond. Every run after that takes about 5–10 seconds.

---

## Day-to-day: adding or editing a chart

### Step 1 — Write your chart in the web editor

Open **[groovescript.github.io/groovescript](https://groovescript.github.io/groovescript)** in any browser. Write or revise your chart using the built-in syntax highlighting to catch typos as you go. When you're ready, tap **Copy** to copy the entire chart to the clipboard.

### Step 2 — Paste it into your repo

1. Open the **GitHub** app on your iPhone
2. Navigate to your charts repo → `charts/` folder
3. Tap **+** to create a new file (e.g., `my-groove.gs`), or tap an existing file to edit it
4. Long-press in the text field → **Paste**
5. Tap **Commit changes**
6. Choose **"Create a new branch and open a pull request"** — this is important; committing directly to `main` does not trigger the render
7. Give the PR a title (e.g., `Add hi-hat pattern`), then tap **Create Pull Request**

### Step 3 — Review the PDF

Wait for the render action to finish (look for a green checkmark on the PR). Then:

1. Open the PR in the GitHub app
2. Tap **Files changed**
3. Tap the `.pdf` file to preview the rendered chart

If it looks right, **merge** the PR. If not, go back to the web editor, fix the chart, copy it again, and paste the updated version into the same file on the same branch — each new commit re-triggers the render.

---

## If something goes wrong

If your chart has a syntax error, no PDF will appear. Instead, you'll see a red **✗** on the PR check. Tap through to see the error — it will point to the exact line in your `.gs` file and describe what went wrong. Fix the file, commit the change to the same branch, and the render runs again automatically.

---

## The `charts/example.gs` file

This repo includes a short example chart (`charts/example.gs`) that shows the basic structure: a groove, a fill, and a few sections. You can edit it, rename it, or delete it — it's just a starting point.

---

## More about GrooveScript

- **[Web editor](https://groovescript.github.io/groovescript)** — write and preview charts in the browser
- **[Language reference](https://github.com/groovescript/groovescript/blob/main/docs/DSL_REFERENCE.md)** — every feature, with examples
- **[Tutorial](https://github.com/groovescript/groovescript/blob/main/docs/TUTORIAL.md)** — guided walkthrough building a full chart from scratch
