/*
 * ============================================================
 *  GHOUSE READYMADES — STORE SETTINGS
 *  Edit this file to change phone number, shipping fee,
 *  YouTube channel, offer banner, etc. No coding needed.
 * ============================================================
 */
window.STORE = {
  name: { en: "Ghouse Readymades", ta: "கவுஸ் ரெடிமேட்ஸ்" },

  // WhatsApp number with country code, digits only (orders are sent here)
  whatsapp: "918220461646",
  phone: "+918220461646",
  phoneDisplay: "82204 61646",

  // Shown in every WhatsApp order so you know it came from the website
  siteUrl: "ashrafwebdev.github.io/ghousereadymade",

  address: {
    en: "Chidambaram Main Road, Lalpet – 608 303 (Near Govt. Higher Secondary School)",
    ta: "சிதம்பரம் மெயின் ரோடு, லால்பேட்டை – 608 303 (அரசு மேல்நிலைப் பள்ளி அருகில்)"
  },
  mapQuery: "Chidambaram Main Road, Lalpet, Tamil Nadu 608303",

  currency: "₹",

  shipping: {
    fee: 50,                 // flat per order, anywhere in Tamil Nadu
    courier: "ST Courier",
    allowPickup: true        // allow "collect from shop" (no shipping fee)
  },

  // Payment options shown at checkout (details are shared on WhatsApp)
  payments: ["upi", "bank"],
  allowCOD: false,           // set true if you accept cash on delivery

  // YouTube: paste your channel link, and add video IDs to feature them
  // Video ID = the part after "v=" in https://www.youtube.com/watch?v=XXXXXXXXXXX
  youtube: {
    channelUrl: "https://www.youtube.com/results?search_query=Ghouse+Readymades+Lalpet",
    videos: [
      // { id: "XXXXXXXXXXX", title: { en: "New jacket collection", ta: "புதிய ஜாக்கெட் கலெக்ஷன்" } },
    ]
  },

  // Optional top banner for a YouTube / festival offer. Leave text empty to hide.
  offerBanner: {
    en: "",
    ta: ""
  },

  instagram: "",
  facebook: ""
};
