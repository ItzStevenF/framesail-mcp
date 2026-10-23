# Asset manifest

Every image the site uses. **No photographs were supplied, so every photo below is a labelled placeholder** that is *not* Julie's work. Each placeholder shows its own file name, so you can match it to this list at a glance.

**To replace one:** save Julie's photo under the same file name in the same folder (see README.md, "Photographs"), then update its alt text: in the page's HTML for Home/About/Pricing/Contact images, or in `site/assets/data/portfolio.js` for portfolio photos.

**Shape** is the frame the photo is shown in. On Home, About, Pricing and Contact a photo of a different shape is trimmed to fit, so use or crop to the listed shape. Portfolio photos are never trimmed: there, "shape" only sets how wide the photo sits, and you set it per photo in `portfolio.js`.

All paths are inside `site/`.

| File | Where it appears | Shape | What to put here | Status | Current alt text |
|---|---|---|---|---|---|
| `images/home/hero-main.jpg` | Home: hero, large | Landscape 3:2 | Julie's signature outdoor photograph (her strongest image; ideally people/animals in a Finger Lakes setting) | Placeholder | Placeholder for Julie's signature outdoor photograph |
| `images/home/hero-detail.jpg` | Home: hero, small offset | Portrait 4:5 | Close vertical photo, ideally a dog | Placeholder | Placeholder for a vertical photograph of a dog |
| `images/about/julie-portrait.jpg` | Home: Meet Julie; About: portrait | Portrait 4:5 | Portrait of Julie | Placeholder | Placeholder for a portrait of Julie Sperano |
| `images/about/behind-the-scenes.jpg` | About: behind the scenes | Landscape 3:2 | Julie at work on a session | Placeholder | Placeholder for a behind-the-scenes photograph of Julie at work |
| `images/portfolio/people-01.jpg` | Portfolio: people; also Home: Selected work 03 + 'People' thumbnail | Portrait 4:5 | A people photograph | Placeholder | (see assets/data/portfolio.js) |
| `images/portfolio/people-02.jpg` | Portfolio: people; also Pricing: Portraits & families | Landscape 3:2 | A people photograph | Placeholder | (see assets/data/portfolio.js) |
| `images/portfolio/people-03.jpg` | Portfolio: people; also Home: Selected work 06 | Square | A people photograph | Placeholder | (see assets/data/portfolio.js) |
| `images/portfolio/people-04.jpg` | Portfolio: people | Portrait 2:3 | A people photograph | Placeholder | (see assets/data/portfolio.js) |
| `images/portfolio/dogs-01.jpg` | Portfolio: dogs; also Home: 'Dogs & pets' thumbnail | Portrait 4:5 | A dogs photograph | Placeholder | (see assets/data/portfolio.js) |
| `images/portfolio/dogs-02.jpg` | Portfolio: dogs; also Pricing: Dogs & pets | Landscape 3:2 | A dogs photograph | Placeholder | (see assets/data/portfolio.js) |
| `images/portfolio/dogs-03.jpg` | Portfolio: dogs; also Home: Selected work 02 | Portrait 2:3 | A dogs photograph | Placeholder | (see assets/data/portfolio.js) |
| `images/portfolio/dogs-04.jpg` | Portfolio: dogs; also Contact: sidebar | Square | A dogs photograph | Placeholder | (see assets/data/portfolio.js) |
| `images/portfolio/animals-01.jpg` | Portfolio: animals | Landscape 3:2 | A animals photograph | Placeholder | (see assets/data/portfolio.js) |
| `images/portfolio/animals-02.jpg` | Portfolio: animals; also Home: 'Animals' thumbnail | Portrait 4:5 | A animals photograph | Placeholder | (see assets/data/portfolio.js) |
| `images/portfolio/animals-03.jpg` | Portfolio: animals; also Home: Selected work 05 | Panorama 7:3 | A animals photograph | Placeholder | (see assets/data/portfolio.js) |
| `images/portfolio/animals-04.jpg` | Portfolio: animals | Portrait 2:3 | A animals photograph | Placeholder | (see assets/data/portfolio.js) |
| `images/portfolio/couples-01.jpg` | Portfolio: couples | Portrait 2:3 | A couples photograph | Placeholder | (see assets/data/portfolio.js) |
| `images/portfolio/couples-02.jpg` | Portfolio: couples; also Home: Selected work 04 | Landscape 3:2 | A couples photograph | Placeholder | (see assets/data/portfolio.js) |
| `images/portfolio/couples-03.jpg` | Portfolio: couples; also Home: 'Couples' thumbnail | Portrait 4:5 | A couples photograph | Placeholder | (see assets/data/portfolio.js) |
| `images/portfolio/outdoors-01.jpg` | Portfolio: outdoors | Panorama 7:3 | An outdoor/nature photograph | Placeholder | (see assets/data/portfolio.js) |
| `images/portfolio/outdoors-02.jpg` | Portfolio: outdoors; also Home: 'The outdoors' thumbnail | Portrait 4:5 | An outdoor/nature photograph | Placeholder | (see assets/data/portfolio.js) |
| `images/portfolio/outdoors-03.jpg` | Portfolio: outdoors; also Home: Selected work 01 | Landscape 3:2 | An outdoor/nature photograph | Placeholder | (see assets/data/portfolio.js) |
| `images/portfolio/outdoors-04.jpg` | Portfolio: outdoors | Square | An outdoor/nature photograph | Placeholder | (see assets/data/portfolio.js) |

## Other assets

| File | Purpose | Status |
|---|---|---|
| `images/social/share.jpg` (1200×630) | Preview card shown when the site link is shared (Facebook, iMessage, etc.) | Designed type-only card (name, services, location), usable as-is. Optionally replace with a 1200×630 crop of a signature photo with the name over it. |
| `favicon.svg`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` | Browser-tab and phone home-screen icons | Placeholder "JS" monogram in rose gold. Replace with Julie's logo mark if she has one (same file names and sizes). |
| `assets/fonts/*.woff2` | Instrument Serif and Hanken Grotesk typefaces | Final. Open Font License (licences included). |

## Alt text guidance

Alt text is read aloud to blind visitors and used by Google. Describe what's in the photo in one plain sentence: who/what, doing what, where. For example *"A black lab puppy asleep in tall grass beside Canandaigua Lake"*. Don't start with "Image of" and don't stuff in keywords. A location is welcome where it's true.
