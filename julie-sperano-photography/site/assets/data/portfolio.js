/* ==========================================================================
   PORTFOLIO CONTENTS: the only file you need to edit to change the gallery.
   --------------------------------------------------------------------------
   HOW TO ADD A PHOTO
     1. Put the photo in the folder  images/portfolio/
        (JPG, about 2000 pixels on the long side, under ~600 KB).
     2. Copy one of the { ... } blocks below, paste it where you want the
        photo to appear, and change the details:
          file     the photo's file name, exactly as it is in the folder
          category one of: people, dogs, animals, couples, outdoors
          shape    portrait (tall), landscape (wide), square, or panorama.
                   This sets how wide the photo sits in the layout. The photo
                   itself is never cropped.
          alt      a plain description of the photo, for people using screen
                   readers and for Google. Describe what is in the picture.
          caption  optional short line shown under the photo ("" for none)
     3. Save the file and refresh the Portfolio page.

   HOW TO REMOVE A PHOTO: delete its whole { ... }, block (including the comma).
   HOW TO REORDER: cut and paste blocks. Photos appear in this order.

   A category with no photos is hidden from the filter bar automatically.

   Every photo marked placeholder: true is a stand-in, not Julie's work.
   Replace the image file and alt text, then delete the placeholder line.
   ========================================================================== */

window.PORTFOLIO_CATEGORIES = [
  { key: "people",   label: "People & portraits" },
  { key: "dogs",     label: "Dogs & pets" },
  { key: "animals",  label: "Animals & wildlife" },
  { key: "couples",  label: "Couples & moments" },
  { key: "outdoors", label: "The outdoors" }
];

window.PORTFOLIO = [
  {
    file: "outdoors-01.jpg", category: "outdoors", shape: "panorama",
    alt: "Placeholder for a wide landscape photograph",
    caption: "[Caption, e.g. place and season]", placeholder: true
  },
  {
    file: "people-01.jpg", category: "people", shape: "portrait",
    alt: "Placeholder for a portrait photograph",
    caption: "", placeholder: true
  },
  {
    file: "dogs-02.jpg", category: "dogs", shape: "landscape",
    alt: "Placeholder for a horizontal dog photograph",
    caption: "[Caption, e.g. the dog's name]", placeholder: true
  },
  {
    file: "couples-01.jpg", category: "couples", shape: "portrait",
    alt: "Placeholder for a couples photograph",
    caption: "", placeholder: true
  },
  {
    file: "animals-01.jpg", category: "animals", shape: "landscape",
    alt: "Placeholder for an animal photograph",
    caption: "", placeholder: true
  },
  {
    file: "dogs-01.jpg", category: "dogs", shape: "portrait",
    alt: "Placeholder for a vertical dog portrait",
    caption: "", placeholder: true
  },
  {
    file: "people-02.jpg", category: "people", shape: "landscape",
    alt: "Placeholder for a family or group photograph",
    caption: "", placeholder: true
  },
  {
    file: "outdoors-02.jpg", category: "outdoors", shape: "portrait",
    alt: "Placeholder for a vertical nature photograph",
    caption: "", placeholder: true
  },
  {
    file: "people-03.jpg", category: "people", shape: "square",
    alt: "Placeholder for a square portrait photograph",
    caption: "", placeholder: true
  },
  {
    file: "animals-03.jpg", category: "animals", shape: "panorama",
    alt: "Placeholder for a wide wildlife photograph",
    caption: "", placeholder: true
  },
  {
    file: "couples-02.jpg", category: "couples", shape: "landscape",
    alt: "Placeholder for a horizontal couples photograph",
    caption: "", placeholder: true
  },
  {
    file: "dogs-03.jpg", category: "dogs", shape: "portrait",
    alt: "Placeholder for a tall dog photograph",
    caption: "", placeholder: true
  },
  {
    file: "animals-02.jpg", category: "animals", shape: "portrait",
    alt: "Placeholder for a vertical animal portrait",
    caption: "", placeholder: true
  },
  {
    file: "outdoors-03.jpg", category: "outdoors", shape: "landscape",
    alt: "Placeholder for a horizontal outdoor photograph",
    caption: "", placeholder: true
  },
  {
    file: "people-04.jpg", category: "people", shape: "portrait",
    alt: "Placeholder for a tall portrait photograph",
    caption: "", placeholder: true
  },
  {
    file: "dogs-04.jpg", category: "dogs", shape: "square",
    alt: "Placeholder for a square pet photograph",
    caption: "", placeholder: true
  },
  {
    file: "couples-03.jpg", category: "couples", shape: "portrait",
    alt: "Placeholder for a vertical couples photograph",
    caption: "", placeholder: true
  },
  {
    file: "animals-04.jpg", category: "animals", shape: "portrait",
    alt: "Placeholder for a tall animal photograph",
    caption: "", placeholder: true
  },
  {
    file: "outdoors-04.jpg", category: "outdoors", shape: "square",
    alt: "Placeholder for a square nature photograph",
    caption: "", placeholder: true
  }
];
