# Putting the website online: a step-by-step guide

This guide assumes no technical experience. Each step says what to click and what you should see. Allow **about an hour** for steps 1 to 4. Connecting the domain (step 5) then takes a little waiting while the internet catches up.

**A few words you'll meet:**

- **Hosting / host:** the company whose computers store the website and show it to visitors.
- **Deploy / publish:** copy the website files to the host so they go live.
- **Domain:** the address, `juliesperano.com`. You rent it yearly from a **registrar** (GoDaddy, Namecheap, Squarespace Domains, Google/Squarespace, Network Solutions, and so on).
- **DNS:** the internet's address book. It tells browsers which computer to visit for `juliesperano.com` and tells email senders where to deliver `@juliesperano.com` mail. It's a list of **records** (rows) at your registrar.
- **HTTPS / SSL:** the padlock in the address bar. It's free and automatic with the recommended host.

---

## Why Netlify

**Recommended host: [Netlify](https://www.netlify.com), free "Starter" plan.**

- **No code needed:** you publish by dragging a folder onto a web page.
- **The contact form works** with no extra service, and messages are emailed to you.
- **Free HTTPS**, set up automatically.
- Fast worldwide and reliable, with no software to update and no plugins to break.
- The free plan is far more than a photography portfolio needs. It includes a monthly allowance of form submissions; check Netlify's pricing page for today's exact limits.

(Alternatives such as Cloudflare Pages or GitHub Pages also host this site for free, but neither has a built-in form, so you'd need Formspree as described in the README.)

---

## Step 1: Get the website files

You need the `site` folder from this project on your computer.

- If you received a **.zip file** (for example `julie-sperano-photography-site.zip`), double-click it to unzip. You'll get a folder containing `index.html`, `about.html`, `assets`, `images` and so on.
- If you're getting it from **GitHub**: open the project page, click the green **Code** button → **Download ZIP**, unzip it, and find the `julie-sperano-photography/site` folder inside.

✅ **Check:** open the folder. You should see `index.html` directly inside it (not inside another folder). Double-click `index.html` and the home page opens in your browser.

> Tip: before going live, replace the placeholder text and photos (README.md explains how). You can also publish first with placeholders to try everything out, as long as the real domain isn't connected yet.

---

## Step 2: Create a Netlify account and publish (about 5 minutes)

1. Go to **https://app.netlify.com/signup** and sign up. Using your email address is fine.
   *Expected:* you land on your Netlify dashboard (it may ask a couple of "what are you building" questions first; any answer is fine).
2. Go to **https://app.netlify.com/drop**. You'll see a box that says something like *"Drag and drop your site output folder here."*
3. Drag the **`site` folder** (the folder itself, not the files inside it) from your computer onto that box.
   *Expected:* an upload progress bar, then a page for your new site with a green **"Published"** note and a random address like `https://sparkly-otter-12ab34.netlify.app`.
4. Click that address. **Your website is online** at a temporary address only you know about.
5. Give it a nicer temporary name: **Site configuration → General → Site details → Change site name**, and enter `juliesperano` (if it's taken, try `julie-sperano-photography`). The address becomes `https://juliesperano.netlify.app`.

✅ **Check:** visit every page from the menu. Open the Portfolio and click a photo.

---

## Step 3: Check it on your phone

Type your `….netlify.app` address into your phone's browser. Check:

- The **Menu** button at the top right opens the full-screen menu and every link works.
- The Portfolio filters scroll sideways and change the photos.
- Tapping a photo opens it full screen; swipe left/right to move through photos, and tap **Close** to exit.

Use [LAUNCH-CHECKLIST.md](LAUNCH-CHECKLIST.md) for a full test list.

---

## Step 4: Turn on the contact form and test it

Netlify needs one switch flipped to start collecting form messages.

1. In your site's Netlify dashboard, go to **Forms** in the side menu (sometimes under **Site configuration → Forms**).
2. Click **Enable form detection** (button text may vary slightly).
3. **Publish again** so Netlify finds the form: go to **Deploys**, scroll to the box that says *"Need to update your site? Drag and drop your site output folder here"*, and drag the `site` folder onto it again.
   *Expected:* under **Forms** you now see a form called **inquiry**.
4. **Get messages by email:** go to **Site configuration → Notifications → Emails and webhooks → Form submission notifications → Add notification → Email notification**. Enter the email address where Julie wants inquiries, choose the **inquiry** form, and save.
5. **Test it:** open your site's Contact page, fill in the form with your own details, tick the box and press **Send inquiry**.
   *Expected:* the page shows **"Thank you. Your note is on its way."** Within a few minutes the message appears under **Forms → inquiry** in Netlify **and** arrives in your inbox.
6. **Check the spam folder** the first time. If the notification lands there, mark it "Not spam".

If the page says **"Sorry, your message didn't send"**, form detection isn't on yet or you haven't re-published since turning it on. Repeat steps 2 and 3.

Netlify filters spam automatically. Messages it thinks are spam go to a separate **Spam** list on the Forms page, so glance at it now and then.

> ⚠️ Don't announce the site as "ready" until this test message has actually arrived in your inbox.

---

## Step 5: Connect juliesperano.com

### 5a. Before you change anything (important for email)

`juliesperano.com` already exists, and it may also carry **email** (for example `julie@juliesperano.com`). Email and the website are controlled by **different** DNS records, so you can move the website without touching email, as long as you only change the two records below.

1. **Find out where the domain's DNS is managed.** Log in to wherever you pay for the domain. If you're not sure, search your email for "juliesperano.com renewal", or look the domain up at https://lookup.icann.org (the "Registrar" line tells you the company).
   - If the current site is built with **Squarespace, Wix, Pixieset, ShowIt, SmugMug** or similar, the domain is often managed inside that service, under a "Domains" section.
2. **Take screenshots of every DNS record** before you edit anything. This is your undo button.
3. **Leave these alone:** any record of type **MX**; any **TXT** record (especially ones containing `v=spf1`, `DKIM`, `_dmarc` or `google-site-verification`); any **CNAME** whose name mentions `mail`, `autodiscover`, `selector` or `_domainkey`. These run email and ownership verification.
4. **Keep the old website until the new one works.** Download any photos or text you want from it first. Don't cancel the old service until step 6 is complete. If the domain itself is registered *through* the old site builder, cancelling that plan could cancel the domain too: check before you cancel anything.

### 5b. Tell Netlify about the domain

1. In Netlify: **Domain management → Add a domain** (or "Add custom domain"). Type `juliesperano.com` and click **Verify**, then **Add domain**.
2. Netlify will say the domain is **"awaiting external DNS"** and show a link like **"Check DNS configuration"** or **"Pending DNS verification"**. Click it: Netlify now shows **the exact records to create**. Keep this page open.

### 5c. Change the two website records at your registrar

Netlify's instructions normally ask for these two records. **Always use the values Netlify shows you if they differ from this example:**

| Type | Name / Host | Value / Points to | What it does |
|---|---|---|---|
| **A** | `@` (sometimes shown as blank or `juliesperano.com`) | `75.2.60.5` | Sends `juliesperano.com` to Netlify |
| **CNAME** | `www` | `juliesperano.netlify.app` (your Netlify address, without `https://`) | Sends `www.juliesperano.com` to Netlify |

At your registrar, open the DNS settings (often called **DNS**, **Manage DNS**, **DNS records** or **Advanced DNS**):

1. Find the existing **A** record whose name is `@`. **Edit** it and change the value to `75.2.60.5`. If there are several A records for `@`, delete the extra ones; only those, never the MX/TXT records.
2. Find the existing **CNAME** (or A) record whose name is `www`. Edit it to point to your Netlify address. If none exists, **add** one.
3. If there's an **AAAA** record for `@` or `www`, delete it (it points to the old host).
4. Save.

*Expected:* changes usually take effect within **10 minutes to a few hours** (occasionally up to 48 hours). During that window some people see the old site and some the new one. That's normal.

> **Not comfortable editing DNS?** That's reasonable. Your registrar's support team will make these two changes if you send them the table above, and asking them to "please don't touch MX or TXT records" is a sensible thing to say.

> **About Netlify DNS:** Netlify also offers to take over your entire DNS ("use Netlify DNS" / change nameservers). Skip that unless you know exactly where every email record is: switching nameservers moves *all* records, and missing one breaks email.

### 5d. HTTPS (the padlock)

Once DNS points to Netlify, Netlify creates a free certificate automatically.

1. In Netlify go to **Domain management → HTTPS**.
2. If it says *"Waiting on DNS propagation"*, wait and come back later. If there's a **Verify DNS configuration** or **Provision certificate** button, click it.
3. When it says your site has HTTPS enabled, visit `http://juliesperano.com`. It should switch to `https://` with a padlock.

Netlify also makes `www.juliesperano.com` and `juliesperano.com` lead to the same site (it picks one as the main address, which you can change under Domain management).

---

## Step 6: Final checks once the domain is live

- [ ] `https://juliesperano.com` shows the new site with a padlock.
- [ ] `https://www.juliesperano.com` also works.
- [ ] Send yourself a test inquiry from the live domain and confirm it arrives.
- [ ] **Send an email to Julie's domain address** (if she has one) from a different account, and reply to it. This confirms email still works.
- [ ] Visit a nonsense address like `juliesperano.com/xyz`: you should see the "Wandered off the trail" page.
- [ ] Paste `https://juliesperano.com` into a message to yourself and check the link preview shows the Julie Sperano card.
- [ ] Optional but recommended: add the site to **[Google Search Console](https://search.google.com/search-console)** (verify with the DNS TXT method it offers, which is an *added* TXT record and doesn't affect email) and submit `https://juliesperano.com/sitemap.xml`. Also create or update a free **Google Business Profile** for local searches like "photographer Canandaigua".

Only when all of that is true is the site properly launched.

---

## Making changes later

1. Edit the files in your `site` folder on your computer (README.md explains each kind of change).
2. Double-click `index.html` to check your change locally.
3. In Netlify, open your site → **Deploys** → drag the whole `site` folder onto the *"Drag and drop your site output folder here"* box.
4. Within a minute the live site updates. Refresh with **Ctrl+F5** (Windows) or **Cmd+Shift+R** (Mac) if you still see the old version.

Every upload is kept. If something goes wrong, open an earlier deploy in **Deploys** and click **Publish deploy** to roll back instantly.

**Keep one master copy of the `site` folder** (and a backup, for example in Dropbox or Google Drive). Always edit that copy, and always upload the whole folder.

*(Later, if someone technical helps out, Netlify can be connected to a GitHub repository so changes publish automatically. It's optional.)*

### Updating photos

Replace files in `site/images/…` keeping the same names, or edit `site/assets/data/portfolio.js` for the portfolio. Then re-upload (step 3 above). README.md, "Photographs", has the details.

### Updating prices

Edit `site/pricing.html` (README.md, "Change prices"), then re-upload.

---

## Troubleshooting

| Problem | Likely cause and fix |
|---|---|
| The site shows a "Page not found" from Netlify right after upload | You uploaded the folder *containing* `site`, or the files without the folder structure. Upload the folder that has `index.html` directly inside. |
| Photos missing (empty boxes) | File name doesn't match exactly. `Dogs-01.JPG` ≠ `dogs-01.jpg`: names are case-sensitive online. Rename the file or fix the name in the code. |
| Portfolio is blank after editing `portfolio.js` | A missing comma, quote mark or `}`. Compare your block with the one above it, or undo your last change. |
| Form says "didn't send" | Form detection is off or you didn't re-upload after enabling it (step 4). Also expected when the page is opened from your own computer. |
| Form "sends" but no email arrives | Check spam; check the notification email address in Netlify (step 4.4); check **Forms → inquiry** in Netlify, where messages are stored even if the email fails. Look in the **Spam** list too. |
| Domain still shows the old site | DNS hasn't updated yet: wait a few hours. Check the A record is exactly `75.2.60.5` and there's no leftover A/AAAA record for `@`. https://dnschecker.org shows what the world currently sees. |
| "Your connection is not private" warning | The HTTPS certificate isn't ready. Wait until DNS has updated, then use **Domain management → HTTPS → Verify DNS configuration**. |
| Email stopped working after the change | An MX or TXT record was changed or deleted. Restore it from your screenshots (step 5a), or ask your registrar/email provider for the correct values. |
| Changes don't appear | Hard-refresh (Ctrl+F5 / Cmd+Shift+R). Make sure you uploaded on the **Deploys** page of the *same* site. |
| Fonts look different when opening files from my computer | Normal: some browsers block web fonts for files opened from disk. They display correctly online. |
