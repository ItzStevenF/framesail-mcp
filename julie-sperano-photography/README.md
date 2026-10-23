# Julie Sperano Photography: website

A five-page website for Julie Sperano Photography (juliesperano.com): portrait, dog, animal and outdoor photography in Canandaigua and the Finger Lakes, New York.

It's a plain HTML/CSS/JavaScript site. There's no build step, no monthly software and no framework to update. The `site/` folder **is** the website: put that folder on a web host and it's live.

> **First time here?** Read **[DEPLOY-GUIDE.md](DEPLOY-GUIDE.md)**. It walks you through putting the site online, step by step, with no coding experience assumed.

---

## What's in this folder

```
julie-sperano-photography/
├── README.md              ← you are here: how to edit things
├── DEPLOY-GUIDE.md        ← how to publish the site and connect juliesperano.com
├── LAUNCH-CHECKLIST.md    ← missing information + testing checklist
├── ASSET-MANIFEST.md      ← every image, where it's used, and its status
└── site/                  ← THE WEBSITE (this is the folder you upload)
    ├── index.html         Home
    ├── about.html         About Julie
    ├── portfolio.html     Portfolio (gallery + filters + full-screen viewer)
    ├── pricing.html       Pricing + FAQ
    ├── contact.html       Contact + inquiry form
    ├── privacy.html       Privacy policy (template)
    ├── thank-you.html     Shown after an inquiry if JavaScript is off
    ├── 404.html           "Page not found" page
    ├── assets/
    │   ├── css/site.css         All styling: colors, fonts, layout
    │   ├── js/site.js           Menu, animations, the inquiry form
    │   ├── js/portfolio.js      Gallery, filters, viewer (no need to edit)
    │   ├── data/portfolio.js    ★ THE LIST OF PORTFOLIO PHOTOS ★
    │   └── fonts/               The two typefaces, hosted with the site
    ├── images/
    │   ├── home/                Home page hero photos
    │   ├── portfolio/           All portfolio photos
    │   ├── about/               Julie's portrait + behind-the-scenes
    │   └── social/share.jpg     The preview image when the site is shared
    ├── favicon.svg, icon-*.png, apple-touch-icon.png   Browser tab icons
    ├── sitemap.xml, robots.txt  For Google
    ├── site.webmanifest         Phone home-screen info
    └── _headers                 Security settings read by Netlify
```

---

## Before launch: nothing in pink brackets should remain

No photographs, prices, contact details or biography were supplied, so the site is complete in design and function but **every unknown fact is a visible placeholder**:

- **Text placeholders** look like `[Insert price]`, tinted pink with an underline so you can't miss them. In the code they look like this:
  ```html
  <span class="ph">[Insert price]</span>
  ```
- **Notes to Julie** are pink-edged boxes (for example "Julie to write" on the About page). In the code: `class="ph-block"`.
- **Placeholder photos** are soft colored panels that literally say *PLACEHOLDER IMAGE: replace with: dogs-01.jpg*.

**To find every placeholder:** open the `site` folder in a free editor such as [Visual Studio Code](https://code.visualstudio.com/) (File → Open Folder), press **Ctrl+Shift+F** (Windows) or **Cmd+Shift+F** (Mac), and search for `class="ph` . Each result is something to fill in. When you replace one, delete the whole `<span class="ph">…</span>` wrapper and keep just your text.

[LAUNCH-CHECKLIST.md](LAUNCH-CHECKLIST.md) lists everything that's missing.

---

## How to edit things

You can edit any of these files in a plain text editor. Visual Studio Code (free) is the easiest because it colors the code and lets you search all files at once. **Don't use Microsoft Word or Pages**: they add hidden formatting that breaks web pages.

After editing, save, refresh the page in your browser to check it, then republish (see DEPLOY-GUIDE.md, "Making changes later").

### Change the words on a page

Open the page's `.html` file (for example `about.html`), find the sentence (Ctrl/Cmd+F), and type over it. Only change the text **between** the angle-bracket tags. For example, in

```html
<p class="muted">I&rsquo;m a photographer based in Canandaigua, New York.</p>
```

change only `I&rsquo;m a photographer based in Canandaigua, New York.`

Two special codes you'll see in the text: `&rsquo;` is a curly apostrophe (’) and `&amp;` is an ampersand (&). You can type a normal `'` and `&` instead if you like.

**All of the writing is a draft for Julie to approve.** It is written in her voice but it doesn't state any facts about her beyond what was provided (her name, Canandaigua, and what she photographs). Read every line and change anything that doesn't sound like her.

### Change prices (pricing.html)

Each session on the pricing page is one block that starts with `<article class="session"`. Inside it:

| What you see on the page | What to look for in pricing.html |
|---|---|
| From [Insert price] | `From <span class="ph">[Insert price]</span>` → change to `From $350` |
| Session length | `<dt>Session length</dt><dd>…</dd>` |
| What's included | `<dt>What&rsquo;s included</dt><dd>…</dd>` |
| Image delivery | `<dt>Image delivery</dt><dd>…</dd>` |
| Additional options | `<dt>Additional options</dt><dd>…</dd>` |

The travel, deposit and rescheduling notes are under **"Good to know"**, and the FAQ answers are in the `<details>` blocks below that.

**To remove a session you don't offer** (for example "Outdoor & nature"): delete its whole `<article class="session" …> … </article>` block **and** its line in the small list near the top of the pricing section (`<li><a href="#outdoors">…</a></li>`). Also remove it from the "Type of photography" dropdown in `contact.html` (`<option data-key="outdoors" …>`).

### Change contact details and social links

The email, phone, Instagram and Facebook placeholders appear in the **footer of every page**, on the **contact page** sidebar, and in the **privacy policy**. Use search across all files (Ctrl/Cmd+Shift+F) for `[Insert email address]`, `[Insert phone number`, `[Instagram link]` and `[Facebook link]`, and replace each one. VS Code's search panel has a **Replace All** button that does every page at once.

To turn a placeholder into a real link, replace

```html
<span class="ph">[Instagram link]</span>
```
with
```html
<a href="https://www.instagram.com/YOUR-USERNAME/">Instagram</a>
```

And for email:
```html
<a href="mailto:hello@example.com">hello@example.com</a>
```

There's also one email placeholder in `contact.html` that visitors see only if the form fails to send: `data-fallback-email="[Insert email address]"`. Put the plain email address there (no link code).

If there's no phone number to show, delete that whole line (`<li>…</li>` in the footer, `<div><dt>Phone</dt>…</div>` on the contact page).

### Change the Home page category descriptions or headline

All in `index.html`. The big headline is the line that starts with `<h1 class="hero__title"`. The five collections ("People", "Dogs & pets"…) are the `<li class="subject">` blocks.

---

## Photographs

### Replacing a placeholder photo (the simplest way)

Every placeholder image already has its final file name. To swap one, **save Julie's photo with exactly the same file name into the same folder**, replacing the placeholder. Then update its description (alt text). That's it.

For example, to replace the home page's big photo: save the photo as `hero-main.jpg`, put it in `site/images/home/` (replace the existing file), then in `index.html` search for `hero-main.jpg` and change `alt="Placeholder for Julie's signature outdoor photograph"` to a real description such as `alt="Two golden retrievers running along the shore of Canandaigua Lake at sunset"`.

[ASSET-MANIFEST.md](ASSET-MANIFEST.md) lists every image, where it appears, and the shape it should be.

**Shapes matter on the Home, About, Pricing and Contact pages.** Those photos sit in fixed frames (for example a tall 4:5 frame), and a photo of a different shape gets trimmed to fit. Use a photo of the shape listed in the manifest, or crop it to that shape first. Portfolio photos are never trimmed.

### Preparing photos for the web

Large camera files make the site slow. Before adding a photo:

1. **Size:** export it at about **2000 pixels on the long edge** (2400 for very wide panoramas).
2. **Format:** JPG, quality around 75 to 82%. Aim for **under 600 KB** per photo.
3. **Color:** export in **sRGB** (other color spaces look dull in browsers).
4. **File name:** lowercase, no spaces, describing the picture: `golden-retriever-canandaigua-lake.jpg`, not `IMG_4821.JPG`. Google reads file names.

Lightroom: *File → Export*, set "Resize to Fit: Long Edge 2000 px", "Quality 80", "Color Space sRGB". No Lightroom? The free website [squoosh.app](https://squoosh.app) does the same in a browser.

### Adding, removing or reordering portfolio photos

The portfolio is built from one list: **`site/assets/data/portfolio.js`**. The instructions are at the top of that file. In short, each photo is a block like this:

```js
{
  file: "golden-retriever-lake.jpg", category: "dogs", shape: "landscape",
  alt: "A golden retriever shaking off water at the edge of Canandaigua Lake",
  caption: "Maple, Canandaigua Lake"
},
```

- Put the photo in `site/images/portfolio/`.
- **category** is one of `people`, `dogs`, `animals`, `couples`, `outdoors`.
- **shape** is `portrait` (tall), `landscape` (wide), `square` or `panorama` (very wide). It controls how wide the photo sits in the layout.
- **caption** is optional: use `""` for none and the category name is shown instead.
- Blocks are separated by commas. If the gallery goes blank after an edit, a comma or quote mark is usually missing.
- Photos show in the order they're listed, and the layout varies itself automatically so it never looks like a grid of identical tiles. Mixing shapes looks best.
- When a placeholder block is replaced, delete its `placeholder: true` part.
- **Removing a whole category:** if a category has no photos, its filter button disappears automatically. To rename a category, edit the labels at the top of the file (`PORTFOLIO_CATEGORIES`).

Other pages link straight to a collection: `portfolio.html#dogs` opens the portfolio with Dogs already selected.

---

## The contact form

The form is set up for **Netlify Forms**, a free feature of the recommended host. When someone submits it, Netlify stores the message and emails it to Julie. There's no account key or password anywhere in the code, so nothing secret is exposed.

- Required fields: name, email, type of photography, message and the consent box. Visitors see a friendly message beside any field they missed.
- After sending, visitors see a "Thank you" message on the same page. If something goes wrong they see an error and the email address to use instead. **The form never silently throws a message away.**
- A hidden "honeypot" field catches most spam robots.
- Links from the pricing page pre-select the session type (`contact.html?type=dogs`).

**The form only sends once the site is on Netlify with form detection turned on.** Opened from your own computer, it shows the "didn't send" message, which is expected. Setup and testing steps are in [DEPLOY-GUIDE.md](DEPLOY-GUIDE.md), step 4.

**Using a different host?** The form needs a form service there instead. [Formspree](https://formspree.io) (free tier) is the beginner-friendly option: create a form, copy the address it gives you (like `https://formspree.io/f/abcdwxyz`), and in `site/assets/js/site.js` change `fetch("/", {` to `fetch("https://formspree.io/f/abcdwxyz", {`. Also add `"Accept": "application/json",` on the `headers:` line. Then update the privacy policy to name Formspree instead of Netlify.

---

## Design notes (for whoever maintains this next)

- **Palette** (all in `:root` at the top of `assets/css/site.css`): ivory `#f6f1e8` backgrounds, charcoal `#2a2724` type, sage `#7a876f` accents, and rose gold `#b76e79`, which is used for rules, marks and large display type only. Small rose text uses the darker `#8f4d58` so it stays readable (passes WCAG AA contrast).
- **Type:** *Instrument Serif* (display) and *Hanken Grotesk* (text). Both are open-licence fonts (SIL OFL, licences in `assets/fonts/`) hosted with the site, so no visitor data goes to Google Fonts.
- **Layout:** a 12-column grid used asymmetrically: offset images, staggered steps, numbered editorial lists instead of card grids.
- **Accessibility:** semantic headings, skip link, visible focus outlines, keyboard-operable menu, filters and viewer (arrow keys, Esc, focus returns where you were), labelled form fields with clear error messages, and every animation switched off for people who've asked their device to reduce motion.
- **SEO:** a unique title and description per page, canonical URLs, link-preview (Open Graph) tags with a share image, `sitemap.xml`, `robots.txt`, and Local Business structured data on the home page that says only what's known (name, Canandaigua NY, Finger Lakes service area). When a phone number or email is confirmed, it's fine to add `"telephone"` / `"email"` to that block in `index.html`.

### Previewing on your own computer

- **Simplest:** double-click `site/index.html`. Everything works except sending the form, and some browsers show the backup fonts instead of the real ones (both are fine online).
- **Exact preview:** if you have Node.js installed, run `npx http-server site` in this folder and open the address it prints.
- **Best:** deploy to Netlify (DEPLOY-GUIDE.md, step 2). You get a free private-ish test address like `something.netlify.app` before you touch the real domain.

### Page header and footer

The header and footer markup is identical on every page (look for the `SITE HEADER` / `SITE FOOTER` comments). If you add a navigation link, add it on every page. VS Code's search-and-replace across files makes this a single step.
