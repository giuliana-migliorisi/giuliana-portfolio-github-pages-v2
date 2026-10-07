# Giuliana Migliorisi — static portfolio

A GitHub Pages-ready portfolio with three navigable pages:

- `/` — introduction and temporary portrait
- `/selected-works.html` — case study gallery
- `/cases/freshstock/index.html` — FreshStock case study

No build step or external asset service is required. The case study's five supplied screenshots are embedded in its HTML. Its interactive flows export to SVG.

## Publish

1. Unzip this archive. Upload the **contents** (not the enclosing folder) to the root of a GitHub repository.
2. In the repository's Settings → Pages, deploy from the `main` branch and `/ (root)` folder.
3. Open the Pages URL, then follow Selected Work → FreshStock. Relative links work for both a personal domain and a repository subpath.

## Replace the portrait

`assets/portrait-placeholder.png` is an AI-generated image of an anonymous person. It does **not** depict Giuliana. Replace that file with your own photo using the same filename, or update the `src` and dimensions of the portrait image in `index.html`. Remove or edit its placeholder caption and alt text when you do.

## Edit and add cases

Edit `cases/freshstock/index.html` as plain HTML. Before publishing it as a historical first-person case study, add the exact role, timeframe, collaborators, process, and verified outcomes. The current reconstructed visual system and analytical user story are labeled accordingly.

For another project, create `cases/project-name/index.html` and add a card to `selected-works.html`. Keep links relative so GitHub Pages works at a repository subpath. The shared homepage and gallery styling is in `assets/site.css`.
