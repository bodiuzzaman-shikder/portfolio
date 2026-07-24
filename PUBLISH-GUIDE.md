# 🚀 How to Publish Your Portfolio (GitHub Pages + Netlify)

Your site is already built and committed to git in this `website` folder.
You just need to put it online. Pick **one** method below. GitHub Pages is
recommended for a scholarship/engineering portfolio (cleaner, more professional URL).

---

## OPTION A — GitHub Pages via GitHub Desktop  ⭐ easiest for beginners

**1. Make a GitHub account**
Go to https://github.com → Sign up. Choose a public-friendly username, e.g.
`bodiuzzaman-shikder` (it becomes part of your web address).

**2. Install GitHub Desktop**
Download from https://desktop.github.com → install → sign in with your GitHub account.

**3. Add this folder**
In GitHub Desktop: **File → Add Local Repository** →
browse to this `website` folder → Add.
(It's already a git repo, so it will be recognized instantly.)

**4. Publish**
Click **Publish repository** (top bar).
- Name: `portfolio`
- **Uncheck** "Keep this code private" (Pages needs it public on the free plan)
- Click **Publish repository**

**5. Turn on GitHub Pages**
Go to `https://github.com/YOUR-USERNAME/portfolio` in your browser →
**Settings** (top menu) → **Pages** (left sidebar) →
- Source: **Deploy from a branch**
- Branch: **main** , folder: **/ (root)** → **Save**

Wait ~1 minute, refresh. Your live link appears at the top:
**`https://YOUR-USERNAME.github.io/portfolio/`**

**To update later:** edit files → open GitHub Desktop → write a short summary →
**Commit to main** → **Push origin**. Live site refreshes in under a minute.

---

## OPTION B — GitHub Pages via Terminal (Personal Access Token)

**1–2.** Same as above: create the GitHub account, then create an **empty**
repository named `portfolio` on github.com (do NOT add a README — you have one).

**3. Create a Personal Access Token (your password for git)**
GitHub → click your avatar → **Settings** → **Developer settings** (bottom left) →
**Personal access tokens → Tokens (classic)** → **Generate new token (classic)** →
- Note: `portfolio push`
- Expiration: 90 days (or longer)
- Tick the **`repo`** checkbox
- **Generate token** → COPY it (you won't see it again)

**4. Connect and push** (run these in PowerShell, inside this folder)
```powershell
cd "G:\My Drive\Personal files\Application for Scholarship\Portfolio Website\website"
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```
When prompted:
- Username: your GitHub username
- Password: **paste the token** (not your GitHub password)

**5. Turn on GitHub Pages** — same as Option A, Step 5.

**To update later:**
```powershell
git add .
git commit -m "Update content"
git push
```

---

## OPTION C — Netlify (no git needed, drag & drop)

1. Go to https://www.netlify.com → Sign up (you can sign up with GitHub).
2. On the dashboard: **Add new site → Deploy manually**.
3. **Drag this entire `website` folder** onto the upload area.
4. Done — you get a link like `https://random-name.netlify.app`.
5. (Optional) **Site settings → Change site name** to something like
   `bodiuzzaman-shikder` → your link becomes `bodiuzzaman-shikder.netlify.app`.

**To update later:** edit files → drag the folder onto Netlify again (or connect
your GitHub repo so it auto-deploys on every push).

You can do BOTH GitHub Pages and Netlify — they don't conflict.

---

## After you're live
- Put the link on your CV, LinkedIn, and scholarship/job applications.
- Add your real LinkedIn URL in `index.html` (search for `YOUR-LINKEDIN-USERNAME`).
- (Optional, ~$10/yr) Buy a custom domain like `bodiuzzaman.com` and connect it —
  both GitHub Pages and Netlify support custom domains in their settings.

Tip: Google Drive syncs this folder as a backup automatically. The `.git` folder
inside it is normal — leave it alone.
