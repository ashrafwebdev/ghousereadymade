/*
 * ============================================================
 *  PRODUCT LIST
 *  - regularPrice: normal selling price (₹) when there is no offer.
 *               FILL THESE IN — until you do, the struck-out "was" price
 *               is not shown, and after the offer ends the product
 *               shows "Ask price on WhatsApp" instead of a price.
 *  - onOffer:   true = sells at the offer price (js/config.js) while the
 *               offer is on; false = always sells at regularPrice
 *  - inStock:   false shows "Sold out" and disables ordering
 *  - images:    add your photos to /images and list them, e.g.
 *               images: ["images/readymade-jacket-1.jpg"]
 *               (until then a drawn illustration is shown)
 *  - options:   size / type choices the customer must pick
 *  - colors:    true shows the colour picker
 * ============================================================
 */
window.CATEGORIES = [
  { id: "all",      en: "All",            ta: "அனைத்தும்" },
  { id: "jackets",  en: "Jackets",        ta: "ஜாக்கெட்" },
  { id: "pants",    en: "Pants",          ta: "பேன்ட்" },
  { id: "burqa",    en: "Burqa Wear",     ta: "புர்கா" },
  { id: "essentials", en: "Essentials",   ta: "அத்தியாவசியம்" },
  { id: "kids",     en: "Kids",           ta: "குழந்தைகள்" }
];

(function () {
  var blouseSizes = ["32", "34", "36", "38", "40", "42", "44"];
  var pantSizes = ["S", "M", "L", "XL", "XXL", "Free Size"];

  window.PRODUCTS = [
    {
      id: "readymade-jacket", code: "P01", cat: "jackets", art: "blouse", tint: 340,
      en: "Readymade Jacket", ta: "ரெடிமேட் ஜாக்கெட்",
      tag: { en: "Ready to wear", ta: "உடனே அணியலாம்" },
      desc: {
        en: "Stitched readymade jacket (blouse) — no tailor waiting. Comfortable daily-wear fit that goes with any saree.",
        ta: "தைத்து தயாரான ரெடிமேட் ஜாக்கெட் — டெய்லருக்கு காத்திருக்க வேண்டாம். எந்த சேலைக்கும் பொருந்தும் தினசரி அணியும் ஃபிட்."
      },
      regularPrice: null, onOffer: true, inStock: true, colors: true,
      options: [{ key: "size", values: blouseSizes }],
      keywords: "blouse readymade jacket saree"
    },
    {
      id: "popcorn-jacket", code: "P02", cat: "jackets", art: "blouse-popcorn", tint: 12,
      en: "Popcorn Jacket", ta: "பாப்கார்ன் ஜாக்கெட்",
      tag: { en: "Stretchable", ta: "ஸ்ட்ரெச்சபிள்" },
      desc: {
        en: "Popcorn-textured stretchable jacket that adjusts to your body. One piece fits many sizes — a favourite for easy matching.",
        ta: "உடலுக்கு ஏற்ப விரியும் பாப்கார்ன் டெக்ஸ்சர் ஜாக்கெட். ஒரே பீஸ் பல சைஸுக்கு பொருந்தும் — எளிதாக மேட்ச் செய்யலாம்."
      },
      regularPrice: null, onOffer: true, inStock: true, colors: true,
      options: [{ key: "size", values: ["Free Size"] }],
      keywords: "popcorn blouse stretch jacket"
    },
    {
      id: "fancy-jacket", code: "P03", cat: "jackets", art: "blouse-fancy", tint: 280,
      en: "Fancy Jacket", ta: "பேன்சி ஜாக்கெட்",
      tag: { en: "Party look", ta: "பார்ட்டி லுக்" },
      desc: {
        en: "Fancy designer-style jacket for functions and festivals. Grand look at an everyday price.",
        ta: "விசேஷங்கள், பண்டிகைகளுக்கு ஏற்ற பேன்சி டிசைனர் ஜாக்கெட். தினசரி விலையில் கிராண்ட் லுக்."
      },
      regularPrice: null, onOffer: true, inStock: true, colors: true,
      options: [{ key: "size", values: blouseSizes }],
      keywords: "fancy designer blouse jacket party function"
    },
    {
      id: "patiala-pant", code: "P04", cat: "pants", art: "patiala", tint: 200,
      en: "Patiala Pant", ta: "பட்டியாலா பேன்ட்",
      tag: { en: "Pleated", ta: "மடிப்பு டிசைன்" },
      desc: {
        en: "Loose, pleated patiala pant with gathered ankles. Pairs with kurtis and tops for all-day comfort.",
        ta: "மடிப்புகளுடன் தளர்வான பட்டியாலா பேன்ட். குர்தி, டாப்ஸுடன் நாள் முழுதும் வசதியாக அணியலாம்."
      },
      regularPrice: null, onOffer: true, inStock: true, colors: true,
      options: [{ key: "size", values: pantSizes }],
      keywords: "patiala pant salwar bottom"
    },
    {
      id: "leggings-pant", code: "P05", cat: "pants", art: "leggings", tint: 160,
      en: "Leggings Pant", ta: "லெக்கின்ஸ் பேன்ட்",
      tag: { en: "Soft stretch", ta: "மென்மையான ஸ்ட்ரெச்" },
      desc: {
        en: "Soft, stretchable leggings for daily wear, college and work. Snug fit that moves with you.",
        ta: "தினசரி, காலேஜ், வேலைக்கு ஏற்ற மென்மையான ஸ்ட்ரெச் லெக்கின்ஸ். உடலோடு ஒட்டிய வசதியான ஃபிட்."
      },
      regularPrice: null, onOffer: true, inStock: true, colors: true,
      options: [{ key: "size", values: pantSizes }],
      keywords: "leggings legging pant stretch"
    },
    {
      id: "palazzo-pant", code: "P06", cat: "pants", art: "palazzo", tint: 30,
      en: "Palazzo Pant", ta: "பிளாஜோ பேன்ட்",
      tag: { en: "Wide flare", ta: "அகலமான ஃப்ளேர்" },
      desc: {
        en: "Flowy wide-leg palazzo — airy and elegant for hot Tamil Nadu days.",
        ta: "காற்றோட்டமான அகல கால் பிளாஜோ — தமிழ்நாட்டு வெயிலுக்கு ஏற்ற ஸ்டைல்."
      },
      regularPrice: null, onOffer: true, inStock: true, colors: true,
      options: [{ key: "size", values: pantSizes }],
      keywords: "palazzo plazo pant wide"
    },
    {
      id: "burqa-shawl", code: "P07", cat: "burqa", art: "shawl", tint: 250,
      en: "Burqa Shawl", ta: "புர்கா ஷால்",
      tag: { en: "Soft drape", ta: "மென்மையான ட்ரேப்" },
      desc: {
        en: "Lightweight burqa shawl / hijab that drapes neatly and stays comfortable all day.",
        ta: "எடை குறைந்த புர்கா ஷால் / ஹிஜாப் — அழகாக அமரும், நாள் முழுதும் வசதி."
      },
      regularPrice: null, onOffer: true, inStock: true, colors: true,
      options: [],
      keywords: "burqa burka shawl hijab scarf dupatta"
    },
    {
      id: "burqa-face-veil", code: "P08", cat: "burqa", art: "veil", tint: 220,
      en: "Burqa Face Veil (Niqab)", ta: "புர்கா முகமூடி",
      tag: { en: "Breathable", ta: "காற்றோட்டம்" },
      desc: {
        en: "Breathable face veil (niqab) with a comfortable tie — perfect with any burqa.",
        ta: "காற்றோட்டமான புர்கா முகமூடி (நிகாப்) — எந்த புர்காவுக்கும் பொருந்தும்."
      },
      regularPrice: null, onOffer: true, inStock: true, colors: true,
      options: [],
      keywords: "burqa niqab face veil mugamoodi"
    },
    {
      id: "burqa-mask", code: "P09", cat: "burqa", art: "mask", tint: 300,
      en: "Burqa Mask", ta: "புர்கா மாஸ்க்",
      tag: { en: "Easy fit", ta: "எளிதாக அணியலாம்" },
      desc: {
        en: "Easy-fit burqa mask for daily outings, travel and college.",
        ta: "வெளியே செல்ல, பயணம், காலேஜுக்கு ஏற்ற எளிதான புர்கா மாஸ்க்."
      },
      regularPrice: null, onOffer: true, inStock: true, colors: true,
      options: [],
      keywords: "burqa mask face"
    },
    {
      id: "hand-leg-socks", code: "P10", cat: "burqa", art: "socks", tint: 45,
      en: "Hand & Leg Socks", ta: "கை, கால் ஷாக்ஸ்",
      tag: { en: "Hand / Leg", ta: "கை / கால்" },
      desc: {
        en: "Stretchable hand and leg socks for full coverage with burqa — soft and breathable.",
        ta: "புர்காவுடன் முழுமையான மறைப்புக்கு கை, கால் ஷாக்ஸ் — மென்மையானது, காற்றோட்டமானது."
      },
      regularPrice: null, onOffer: true, inStock: true, colors: true,
      options: [{ key: "type", values: ["Hand Socks", "Leg Socks"] }],
      keywords: "socks hand leg gloves sleeves"
    },
    {
      id: "pillow-cover", code: "P11", cat: "essentials", art: "pillow", tint: 120,
      en: "Pillow Cover", ta: "தலையணை உறை",
      tag: { en: "Home", ta: "வீட்டிற்கு" },
      desc: {
        en: "Fresh pillow cover to brighten your bedroom. Easy wash, standard size.",
        ta: "படுக்கையறைக்கு புதுப்பொலிவு தரும் தலையணை உறை. எளிதாக துவைக்கலாம், ஸ்டாண்டர்ட் சைஸ்."
      },
      regularPrice: null, onOffer: true, inStock: true, colors: true,
      options: [],
      keywords: "pillow cover thalaiyanai home bed"
    },
    {
      id: "jacket-bit", code: "P12", cat: "essentials", art: "fabric", tint: 350,
      en: "Jacket Bit (1 Metre)", ta: "ஜாக்கெட் பிட் (1 மீட்டர்)",
      tag: { en: "1 Metre", ta: "1 மீட்டர்" },
      desc: {
        en: "1 metre jacket (blouse) cloth — stitch it your way with your own tailor.",
        ta: "1 மீட்டர் ஜாக்கெட் துணி — உங்கள் டெய்லரிடம் விருப்பப்படி தைத்துக்கொள்ளலாம்."
      },
      regularPrice: null, onOffer: true, inStock: true, colors: true,
      options: [],
      keywords: "jacket bit blouse piece cloth fabric metre"
    },
    {
      id: "inskirt", code: "P13", cat: "essentials", art: "skirt", tint: 20,
      en: "Inskirt (Petticoat)", ta: "உள்பாவாடை",
      tag: { en: "Saree essential", ta: "சேலைக்கு அவசியம்" },
      desc: {
        en: "Cotton-feel inskirt / petticoat with drawstring — the base every saree needs.",
        ta: "நாடாவுடன் கூடிய உள்பாவாடை — ஒவ்வொரு சேலைக்கும் தேவையான அடிப்படை."
      },
      regularPrice: null, onOffer: true, inStock: true, colors: true,
      options: [{ key: "size", values: ["M", "L", "XL", "XXL"] }],
      keywords: "inskirt petticoat ulpavadai saree"
    },
    {
      id: "makkana", code: "P14", cat: "kids", art: "makkana", tint: 190,
      en: "Kids Makkana (1–5 yrs)", ta: "மக்கனா (1–5 வயது)",
      tag: { en: "1–5 years", ta: "1–5 வயது" },
      desc: {
        en: "Cute, easy slip-on makkana (head scarf) for little girls aged 1 to 5.",
        ta: "1 முதல் 5 வயது குழந்தைகளுக்கான அழகான, எளிதாக அணியும் மக்கனா."
      },
      regularPrice: null, onOffer: true, inStock: true, colors: true,
      options: [{ key: "age", values: ["1–2 yrs", "2–3 yrs", "3–4 yrs", "4–5 yrs"] }],
      keywords: "makkana maqna kids scarf hijab girl"
    },
    {
      id: "kids-wear", code: "P15", cat: "kids", art: "kids", tint: 55,
      en: "Kids Wear (1–2 yrs)", ta: "குழந்தைகள் உடை (1–2 வயது)",
      tag: { en: "1–2 years", ta: "1–2 வயது" },
      desc: {
        en: "Soft and colourful outfit for babies aged 1 to 2 — comfy for play and sleep.",
        ta: "1–2 வயது குழந்தைகளுக்கான மென்மையான, வண்ணமயமான உடை — விளையாட, தூங்க வசதி."
      },
      regularPrice: null, onOffer: true, inStock: true, colors: true,
      options: [{ key: "gender", values: ["Boy", "Girl", "Any"] }],
      keywords: "kids wear baby dress frock romper"
    }
  ];

  // Colour choices shown for products with colors: true
  window.COLORS = [
    { id: "any",    en: "Any colour", ta: "ஏதேனும் நிறம்", hex: "conic-gradient(#e11d48,#f59e0b,#16a34a,#2563eb,#9333ea,#e11d48)" },
    { id: "black",  en: "Black",  ta: "கருப்பு",   hex: "#1f1f1f" },
    { id: "white",  en: "White",  ta: "வெள்ளை",   hex: "#f7f5f0" },
    { id: "red",    en: "Red",    ta: "சிவப்பு",   hex: "#c8102e" },
    { id: "maroon", en: "Maroon", ta: "மெரூன்",    hex: "#6d1024" },
    { id: "pink",   en: "Pink",   ta: "பிங்க்",    hex: "#ec6f9d" },
    { id: "blue",   en: "Blue",   ta: "நீலம்",     hex: "#1d4ed8" },
    { id: "navy",   en: "Navy",   ta: "நேவி",      hex: "#1b2a4e" },
    { id: "green",  en: "Green",  ta: "பச்சை",     hex: "#15803d" },
    { id: "yellow", en: "Yellow", ta: "மஞ்சள்",    hex: "#f5b301" },
    { id: "purple", en: "Purple", ta: "ஊதா",       hex: "#7e22ce" },
    { id: "grey",   en: "Grey",   ta: "சாம்பல்",   hex: "#8a8a8a" }
  ];

  // Translations for option names / values
  window.OPTION_LABELS = {
    size:   { en: "Size",   ta: "சைஸ்" },
    type:   { en: "Type",   ta: "வகை" },
    age:    { en: "Age",    ta: "வயது" },
    gender: { en: "For",    ta: "யாருக்கு" },
    color:  { en: "Colour", ta: "நிறம்" }
  };
  window.OPTION_VALUES_TA = {
    "Free Size": "ஃப்ரீ சைஸ்",
    "Hand Socks": "கை ஷாக்ஸ்",
    "Leg Socks": "கால் ஷாக்ஸ்",
    "1–2 yrs": "1–2 வயது", "2–3 yrs": "2–3 வயது", "3–4 yrs": "3–4 வயது", "4–5 yrs": "4–5 வயது",
    "Boy": "ஆண் குழந்தை", "Girl": "பெண் குழந்தை", "Any": "ஏதேனும்"
  };
})();
