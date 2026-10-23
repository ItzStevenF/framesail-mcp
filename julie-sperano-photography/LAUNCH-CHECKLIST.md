# Launch checklist

## Part 1: Information and accounts Julie needs to supply

Nothing below was available while building the site, so none of it has been invented. Each item is a visible pink `[placeholder]` until it's filled in (search the `site` folder for `class="ph` to find them all).

### Photographs (the most important item)
- [ ] **A curated set of real photographs** to replace every placeholder (23 photographs; [ASSET-MANIFEST.md](ASSET-MANIFEST.md) lists each one with its shape and purpose). Suggested minimum: 3 to 4 strong images per portfolio category, plus a hero image.
- [ ] **Confirm which categories to keep.** The site has five: people, dogs & pets, other animals & wildlife, couples, outdoors. Drop any that Julie doesn't have the work for (README.md explains how).
- [ ] **A portrait of Julie** and, ideally, a **behind-the-scenes** photo.
- [ ] Alt text (a one-line description) for each photo.
- [ ] Optional: a logo or monogram to replace the placeholder "JS" browser icon.

### About Julie (About page + Home "Meet Julie")
- [ ] Her story in her own words: background, how she started, what keeps her photographing (3 to 5 sentences).
- [ ] One or two sentences for the Home page introduction.
- [ ] A one-line quote about why she does this work.
- [ ] Review all draft copy (written in her voice): philosophy, "What I love", "What to expect". Change anything that isn't true to her.
- [ ] Only add credentials, years of experience, awards or publications if they're real.
- [ ] Optional: genuine client testimonials (with the client's permission). None were invented, so there's no testimonial section yet; one can be added.

### Pricing (pricing.html)
For **each** session type (Portraits & families, Couples, Dogs & pets, Other animals, Outdoor & nature, Custom):
- [ ] Starting or package price
- [ ] Session length
- [ ] What's included (planning call, location help, number of edited images…)
- [ ] Image delivery (online gallery? how long? download/print rights?)
- [ ] Additional options (prints, extra images, extra people/pets…)
- [ ] Confirm whether "Outdoor & nature" means prints, commissions or licensing, or remove it.

Booking policies:
- [ ] Travel: radius included, and any fee beyond it
- [ ] Booking: contract, deposit/retainer amount, when the balance is due
- [ ] Rescheduling and cancellation policy, including weather

FAQ answers: rain policy, dogs at family sessions, deposit, delivery time, prints.

### Contact details
- [ ] Email address for the footer, contact page, form error message and privacy policy
- [ ] Phone number, or a decision to leave it off
- [ ] Instagram and Facebook links (or other platforms), or remove those lines
- [ ] Typical reply time ("within two working days")
- [ ] Delivery method and timeframe for the "How a session unfolds" step 4 on the Home page

### Legal / privacy
- [ ] Review the privacy-policy template (privacy.html): add the date, data retention period, and any other tools used (email provider, CRM). It's a plain-language template, not legal advice.
- [ ] Confirm the footer line "Photographs may not be used without permission" suits her.
- [ ] Make sure every portfolio image of a client has that client's permission to be shown (model release).

### Accounts and access
- [ ] A **Netlify** account (free) — see DEPLOY-GUIDE.md, step 2
- [ ] **Login for the domain registrar** where juliesperano.com's DNS is managed
- [ ] Knowledge of **where juliesperano.com email is hosted** (Google Workspace, Microsoft 365, the registrar, etc.), so its records are left untouched
- [ ] Access to the **current website** to save any content before switching
- [ ] The **email address** that should receive inquiries (Netlify notification)
- [ ] Optional: Google Search Console and Google Business Profile access

No API keys, passwords or secret credentials are needed in the website files.

---

## Part 2: Testing checklist

Run through this on the temporary `….netlify.app` address first, then again on `juliesperano.com`.

### Every page, on a computer
- [ ] Home, About, Portfolio, Pricing, Contact all open from the top menu.
- [ ] The **Book an inquiry** button (top right) opens the Contact page.
- [ ] Every link in the footer works, including **Privacy policy**.
- [ ] Clicking the **Julie Sperano** name at top left returns to Home.
- [ ] No pink `[placeholder]` text and no "PLACEHOLDER IMAGE" panels remain.
- [ ] No photo appears stretched, squashed or badly cropped.
- [ ] The browser tab shows the right page title and icon.

### Home page
- [ ] Each of the five collections ("People", "Dogs & pets"…) opens the Portfolio with that filter selected.
- [ ] Each "Selected work" photo opens the matching collection.
- [ ] "Read my story", "Full portfolio" and "Start an inquiry" go where they say.

### Portfolio
- [ ] Each filter shows only that category; the count beside it is right.
- [ ] Clicking a photo opens it full screen.
- [ ] **Arrow keys** move between photos; **Esc** closes; the ← → buttons and **Close** work.
- [ ] Clicking the dark area around the photo closes it.
- [ ] Captions show correctly.

### Pricing
- [ ] Every price and detail is filled in and correct.
- [ ] The numbered session list jumps to each session.
- [ ] Each "Inquire about this session" link opens Contact with the right type already chosen.
- [ ] FAQ questions open and close.

### Contact form
- [ ] Pressing **Send inquiry** with empty fields shows a message beside each required field and puts the cursor in the first one.
- [ ] A bad email (e.g. `julie@`) is caught.
- [ ] A complete test inquiry shows **"Thank you. Your note is on its way."**
- [ ] The test inquiry **arrives by email** and appears in Netlify under **Forms → inquiry**.
- [ ] All fields (name, email, phone, type, date, location, message) arrive filled in.
- [ ] Reply to the test email: it goes to the visitor's address.

### Phone and tablet
Test on at least one iPhone/Safari and one Android/Chrome if possible.
- [ ] **Menu** opens and closes; every link works; the page doesn't scroll behind it.
- [ ] Nothing is cut off at the sides and there's no sideways scrolling.
- [ ] Text is comfortably readable without zooming.
- [ ] Portfolio filters scroll sideways; photos open full screen; **swipe** moves between them.
- [ ] Form fields are easy to tap; the phone's keyboard shows "@" for email and numbers for phone.
- [ ] Turn the phone sideways: the layout still works.

### Accessibility basics
- [ ] Using only the **Tab** key, you can reach every link, button and form field, and you can always see where you are (rose outline).
- [ ] The first Tab press shows **"Skip to content"**.
- [ ] With "Reduce motion" turned on (iPhone: Settings → Accessibility → Motion; Mac: System Settings → Accessibility → Display), pages appear without the fade-in effects.
- [ ] Every real photo has meaningful alt text.

### After the domain is connected
- [ ] `https://juliesperano.com` and `https://www.juliesperano.com` both load with a padlock.
- [ ] `juliesperano.com/anything-wrong` shows the custom "Wandered off the trail" page.
- [ ] Julie's domain **email still sends and receives**.
- [ ] Sharing the link in a message shows the Julie Sperano preview card.
- [ ] Optional: run https://pagespeed.web.dev on the home page; aim for green scores once real photos are in (if they're slow, the photos are too large: see README "Preparing photos").
- [ ] Optional: submit `https://juliesperano.com/sitemap.xml` in Google Search Console.

---

## What was verified during the build

Checked in a real browser (Chromium) at desktop (1440 px) and phone (390 px) widths:

- All 8 pages load with **no console errors**, **no broken images**, **no sideways scrolling** and **no dead internal links**.
- Mobile menu opens, closes and navigates.
- Portfolio filters, deep links (`#dogs`), the full-screen viewer, arrow keys, Esc and focus return all work.
- The contact form validates, pre-selects the session type from pricing links, and sends exactly the Netlify Forms fields (`form-name=inquiry&…`). It shows the success message on a successful response and the error message (never silent) on failure.
- Keyboard tab order starts with the skip link and follows the page.

**Not yet verified (it can't be until the site is deployed):** real delivery of form submissions through Netlify, the live domain, DNS and HTTPS. Steps 4 to 6 of DEPLOY-GUIDE.md cover these.
