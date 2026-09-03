# Nathan's Pickleball Deals

A lightweight, mobile-first static site for Nathan Reed's pickleball referral links. Designed to be opened from a QR code or NFC tag at the court, so it loads fast and gets someone to a referral link in one tap.

Visual identity: dark performance-sports theme (charcoal surfaces, electric lime accent, condensed athletic type).

## Files

- `index.html` — page content and structure
- `styles.css` — all styling, including the theme (see below)
- `script.js` — small decorative script (button press feedback); the referral links work fine without it
- `assets/` — empty placeholder folder for any images you add later (e.g. `og-image.png` for social previews)

## Deploy / update on GitHub Pages

If this is replacing files in your existing `nathan-pickleball-deals` repo: open the repo on GitHub, click into each file, click the pencil (edit) icon, delete the old contents, paste in the new version, and commit. Do this for `index.html`, `styles.css`, and `script.js`. The live site updates within a minute or two — no changes needed to your Pages settings.

If you're starting fresh, see the original setup steps: create a repo, upload the four files, enable Pages under Settings → Pages (source: Deploy from a branch, branch `main`, folder `/`).

## Changing the theme later

All colors, fonts, radii, and shadows live in the `:root { ... }` block at the top of `styles.css`. To re-theme the whole site again, edit those custom properties — the HTML structure, referral links, and JS don't need to change. The decorative background (court lines, ball mark) is grouped in the `.court-bg` block in both the HTML and CSS if you want to swap it for something else.

## Before you go live

- Double-check all three referral URLs are intact (they're easy to accidentally "clean up" in an editor's autoformat).
- Add a real `assets/og-image.png` (1200×630px) if you want a nice preview when the link is shared in texts/social apps — otherwise remove the `og:image` line in `index.html`.
- Test on an actual phone at ~375px width and on real cell signal if you can.
