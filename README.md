# Nathan's Pickleball Deals

A lightweight, mobile-first static site for Nathan Reed's pickleball referral links. Designed to be opened from a QR code or NFC tag at the court, so it loads fast and gets someone to a referral link in one tap.

## Files

- `index.html` — page content and structure
- `styles.css` — all styling, including the theme (see below)
- `script.js` — small decorative script (tap sparkle, load-in animation); the referral links work fine without it
- `assets/` — empty placeholder folder for any images you add later (e.g. `og-image.png` for social previews)

## Deploy with GitHub Pages (no Claude Code needed)

1. Go to your existing GitHub repo (the one your pickleball app lives in), or create a new one.
2. If you want this at its own URL, create a new repo instead — e.g. `nathan-pickleball-deals`.
3. Click **Add file → Upload files**, drag in `index.html`, `styles.css`, `script.js`, and the `assets` folder, then commit.
4. Go to **Settings → Pages**.
5. Under **Build and deployment**, set **Source** to "Deploy from a branch," branch `main`, folder `/ (root)`. Save.
6. GitHub will give you a URL like `https://yourusername.github.io/repo-name/` within a minute or two.
7. Generate your QR code / program your NFC tag to point at that URL.

## Deploy with Claude Code instead

If you'd rather do this from your terminal: point Claude Code at your local clone of the target repo, ask it to copy these four items in, commit, and push to `main` (or open a PR). Since Claude Code already has your GitHub credentials configured from your pickleball app, it can push directly.

## Changing the theme later

All colors, fonts, radii, and shadows live in the `:root { ... }` block at the top of `styles.css`. To re-theme the whole site, edit those custom properties — the HTML structure, referral links, and JS don't need to change. The decorative background elements (rainbow, sparkles, hearts, flowers) are grouped in the `.sky` block in both the HTML and CSS if you want to swap them for different decorations.

## Before you go live

- Double-check all three referral URLs are intact (they're easy to accidentally "clean up" in an editor's autoformat).
- Add a real `assets/og-image.png` (1200×630px) if you want a nice preview when the link is shared in texts/social apps — otherwise remove the `og:image` line in `index.html`.
- Test on an actual phone at ~375px width and on real cell signal if you can.
