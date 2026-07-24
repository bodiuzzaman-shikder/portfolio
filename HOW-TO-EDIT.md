# How to Edit & Update Your Portfolio

Your site is **permanent and self-contained** — just three files plus your images.
Nothing needs to be "rebuilt." Open a file, change the text, save, refresh the browser.

## The files

| File | What's in it |
|------|--------------|
| `index.html` | All the text/content — every section, every card. |
| `style.css`  | Colors, fonts, spacing (the look). |
| `script.js`  | Animations + the hero typewriter phrases. |

Anywhere you see **`✏️ EDIT`** in a file, that's a spot meant for you to change.

## Common edits

**Change any text** → open `index.html`, find the words, type over them, save.

**Add your photo** → drop a square photo at `images/profile.jpg`
(overwrite the placeholder — keep the same name and it just works).

**Add project images** → put them in `images/projects/` using the exact
filenames listed in `images/projects/README.txt`.

**Add your CV** → put your PDF at `assets/cv.pdf` (the "Download CV" button links to it).

**Change the typewriter lines** → open `script.js`, edit the `TYPEWRITER_PHRASES` list at the top.

**Change the colors** → open `style.css`, edit the values under `:root` at the very top
(e.g. `--accent: #3b82f6;` is the electric blue — change it once, whole site updates).

**Your LinkedIn** → in `index.html`, search for `YOUR-LINKEDIN-USERNAME` and paste your real profile URL.

## Putting it online (free, permanent)

Any of these host static sites for free — just drag this folder in:

- **Netlify** — netlify.com → "Add new site" → drag the `portfolio-website` folder. Done.
- **GitHub Pages** — push this folder to a repo, enable Pages in settings.
- **Cloudflare Pages** — similar drag-and-drop deploy.

Once online you'll get a permanent link like `bodiuzzaman.netlify.app` that you can
put on your CV and scholarship applications. To update it later, edit the files and
re-upload (Netlify: just drag the folder again).

## Tip

To preview locally, just double-click `index.html` — it opens in your browser.
