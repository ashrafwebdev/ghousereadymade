/* Drawn product illustrations — used until real photos are added in products.js */
(function () {
  function pal(h) {
    return {
      m: "hsl(" + h + ",62%,46%)",
      l: "hsl(" + h + ",75%,72%)",
      d: "hsl(" + h + ",58%,30%)",
      g: "#f5b301"
    };
  }
  function kolam(c) {
    var s = "";
    for (var y = 22; y < 200; y += 40) for (var x = 22; x < 200; x += 40)
      s += '<circle cx="' + x + '" cy="' + y + '" r="2.2" fill="' + c + '" opacity=".35"/>';
    return s;
  }
  var blouseBody = "M58 52 L84 40 Q100 58 116 40 L142 52 L168 78 L151 97 L138 86 L138 142 Q100 154 62 142 L62 86 L49 97 L32 78 Z";

  var draw = {
    blouse: function (p) {
      return '<path d="' + blouseBody + '" fill="' + p.m + '"/>' +
        '<path d="M84 40 Q100 70 116 40" fill="none" stroke="' + p.d + '" stroke-width="4"/>' +
        '<path d="M62 132 Q100 144 138 132" fill="none" stroke="' + p.g + '" stroke-width="5"/>' +
        '<path d="M32 78 L49 97 M168 78 L151 97" stroke="' + p.g + '" stroke-width="5"/>' +
        '<path d="M100 66 V140" stroke="' + p.d + '" stroke-width="2" stroke-dasharray="3 5"/>';
    },
    "blouse-popcorn": function (p) {
      var dots = "";
      for (var y = 62; y < 140; y += 10) for (var x = 68; x < 136; x += 10)
        dots += '<circle cx="' + (x + (y % 20 ? 5 : 0)) + '" cy="' + y + '" r="3" fill="' + p.l + '"/>';
      return '<clipPath id="pc"><path d="' + blouseBody + '"/></clipPath>' +
        '<path d="' + blouseBody + '" fill="' + p.m + '"/>' +
        '<g clip-path="url(#pc)">' + dots + '</g>' +
        '<path d="M84 40 Q100 66 116 40" fill="none" stroke="' + p.d + '" stroke-width="4"/>';
    },
    "blouse-fancy": function (p) {
      return '<path d="' + blouseBody + '" fill="' + p.m + '"/>' +
        '<path d="M80 42 Q100 86 120 42" fill="' + p.d + '"/>' +
        '<path d="M80 42 Q100 86 120 42" fill="none" stroke="' + p.g + '" stroke-width="4"/>' +
        '<g fill="' + p.g + '"><circle cx="100" cy="100" r="6"/><circle cx="84" cy="112" r="4"/><circle cx="116" cy="112" r="4"/>' +
        '<circle cx="72" cy="124" r="3"/><circle cx="128" cy="124" r="3"/><circle cx="100" cy="124" r="4"/></g>' +
        '<path d="M62 136 Q100 148 138 136" fill="none" stroke="' + p.g + '" stroke-width="5" stroke-dasharray="2 6" stroke-linecap="round"/>' +
        '<path d="M32 78 L49 97 M168 78 L151 97" stroke="' + p.g + '" stroke-width="6"/>';
    },
    patiala: function (p) {
      return '<rect x="72" y="30" width="56" height="12" rx="4" fill="' + p.d + '"/>' +
        '<path d="M72 42 H128 Q160 110 132 160 L112 164 L102 84 H98 L88 164 L68 160 Q40 110 72 42 Z" fill="' + p.m + '"/>' +
        '<path d="M80 50 Q66 100 76 150 M92 52 Q84 100 88 156 M120 50 Q134 100 124 150 M108 52 Q116 100 112 156" stroke="' + p.d + '" stroke-width="2.5" fill="none" opacity=".6"/>' +
        '<rect x="66" y="156" width="24" height="12" rx="3" fill="' + p.g + '"/><rect x="110" y="156" width="24" height="12" rx="3" fill="' + p.g + '"/>' +
        '<path d="M100 42 v14" stroke="#fff" stroke-width="2"/>';
    },
    leggings: function (p) {
      return '<rect x="76" y="28" width="48" height="10" rx="4" fill="' + p.d + '"/>' +
        '<path d="M76 38 H124 L128 172 H108 L101 78 H99 L92 172 H72 Z" fill="' + p.m + '"/>' +
        '<path d="M86 50 L82 168 M114 50 L118 168" stroke="' + p.l + '" stroke-width="3" opacity=".7"/>';
    },
    palazzo: function (p) {
      return '<rect x="76" y="28" width="48" height="12" rx="4" fill="' + p.d + '"/>' +
        '<path d="M76 40 H124 L158 170 H106 L101 84 H99 L94 170 H42 Z" fill="' + p.m + '"/>' +
        '<path d="M60 170 L86 60 M76 170 L92 70 M140 170 L114 60 M124 170 L108 70" stroke="' + p.l + '" stroke-width="2.5" opacity=".75"/>' +
        '<path d="M42 170 H94 M106 170 H158" stroke="' + p.g + '" stroke-width="5"/>';
    },
    shawl: function (p) {
      return '<circle cx="100" cy="64" r="22" fill="#e9c7a4"/>' +
        '<path d="M66 70 Q68 30 100 28 Q132 30 134 70 L140 110 Q150 150 168 170 H32 Q50 150 60 110 Z" fill="' + p.m + '"/>' +
        '<path d="M80 62 Q82 44 100 44 Q118 44 120 62 Q118 88 100 90 Q82 88 80 62 Z" fill="#e9c7a4"/>' +
        '<path d="M66 70 Q100 118 134 70" fill="none" stroke="' + p.d + '" stroke-width="3"/>' +
        '<path d="M32 170 H168" stroke="' + p.g + '" stroke-width="5"/>' +
        '<circle cx="92" cy="64" r="2.5" fill="#3b2415"/><circle cx="108" cy="64" r="2.5" fill="#3b2415"/>';
    },
    veil: function (p) {
      return '<path d="M58 80 Q58 30 100 28 Q142 30 142 80 L150 150 Q100 176 50 150 Z" fill="' + p.d + '"/>' +
        '<rect x="72" y="62" width="56" height="18" rx="9" fill="#e9c7a4"/>' +
        '<circle cx="88" cy="71" r="3" fill="#3b2415"/><circle cx="112" cy="71" r="3" fill="#3b2415"/>' +
        '<path d="M66 82 H134 L140 140 Q100 158 60 140 Z" fill="' + p.m + '"/>' +
        '<path d="M66 82 H134" stroke="' + p.g + '" stroke-width="4"/>';
    },
    mask: function (p) {
      return '<path d="M44 84 Q30 100 44 118 M156 84 Q170 100 156 118" stroke="' + p.d + '" stroke-width="5" fill="none"/>' +
        '<path d="M52 72 Q100 56 148 72 L152 124 Q100 156 48 124 Z" fill="' + p.m + '"/>' +
        '<path d="M56 88 Q100 76 144 88 M56 106 Q100 98 144 106" stroke="' + p.l + '" stroke-width="3" fill="none"/>' +
        '<path d="M52 72 Q100 56 148 72" stroke="' + p.g + '" stroke-width="4" fill="none"/>';
    },
    socks: function (p) {
      return '<path d="M44 34 H80 V120 Q80 132 92 138 L112 150 Q124 158 114 170 H62 Q44 170 44 150 Z" fill="' + p.m + '"/>' +
        '<rect x="44" y="34" width="36" height="12" fill="' + p.g + '"/>' +
        '<path d="M120 30 H156 V110 Q162 112 166 124 L168 148 Q168 160 156 160 H128 Q116 160 116 148 V112 Q118 110 120 108 Z" fill="' + p.l + '"/>' +
        '<rect x="120" y="30" width="36" height="12" fill="' + p.d + '"/>' +
        '<path d="M132 124 V150 M144 124 V150 M156 124 V150" stroke="' + p.m + '" stroke-width="3"/>';
    },
    pillow: function (p) {
      return '<path d="M36 58 Q100 40 164 58 Q176 100 164 142 Q100 160 36 142 Q24 100 36 58 Z" fill="' + p.m + '"/>' +
        '<path d="M50 70 Q100 56 150 70 Q158 100 150 130 Q100 144 50 130 Q42 100 50 70 Z" fill="none" stroke="' + p.l + '" stroke-width="3" stroke-dasharray="6 5"/>' +
        '<g fill="' + p.g + '"><circle cx="100" cy="100" r="10"/><circle cx="100" cy="100" r="18" fill="none" stroke="' + p.g + '" stroke-width="3"/></g>';
    },
    fabric: function (p) {
      return '<path d="M40 60 H150 Q164 60 164 74 V150 H54 Q40 150 40 136 Z" fill="' + p.m + '"/>' +
        '<ellipse cx="54" cy="105" rx="14" ry="45" fill="' + p.d + '"/><ellipse cx="54" cy="105" rx="6" ry="20" fill="' + p.l + '"/>' +
        '<path d="M80 60 V150 M110 60 V150 M140 60 V150" stroke="' + p.l + '" stroke-width="2" opacity=".6"/>' +
        '<rect x="60" y="160" width="110" height="18" rx="3" fill="' + p.g + '"/>' +
        '<path d="M70 160 v8 M82 160 v5 M94 160 v8 M106 160 v5 M118 160 v8 M130 160 v5 M142 160 v8 M154 160 v5" stroke="#5a3b00" stroke-width="2"/>' +
        '<text x="115" y="176" font-size="10" font-weight="800" fill="#5a3b00" text-anchor="middle" font-family="sans-serif">1 m</text>';
    },
    skirt: function (p) {
      return '<rect x="68" y="34" width="64" height="14" rx="5" fill="' + p.d + '"/>' +
        '<path d="M92 48 q-4 14 -10 18 M108 48 q4 14 10 18" stroke="' + p.g + '" stroke-width="3" fill="none"/>' +
        '<path d="M68 48 H132 L164 168 Q100 180 36 168 Z" fill="' + p.m + '"/>' +
        '<path d="M84 52 L66 172 M100 52 V176 M116 52 L134 172" stroke="' + p.l + '" stroke-width="2.5" opacity=".7"/>' +
        '<path d="M36 168 Q100 180 164 168" stroke="' + p.g + '" stroke-width="5" fill="none"/>';
    },
    makkana: function (p) {
      return '<path d="M52 96 Q52 36 100 34 Q148 36 148 96 Q156 138 150 170 H50 Q44 138 52 96 Z" fill="' + p.m + '"/>' +
        '<circle cx="100" cy="92" r="30" fill="#f0cfae"/>' +
        '<path d="M70 92 Q70 56 100 56 Q130 56 130 92" fill="none" stroke="' + p.d + '" stroke-width="6"/>' +
        '<circle cx="90" cy="92" r="3" fill="#3b2415"/><circle cx="110" cy="92" r="3" fill="#3b2415"/>' +
        '<path d="M92 104 Q100 110 108 104" stroke="#b5533c" stroke-width="2.5" fill="none" stroke-linecap="round"/>' +
        '<circle cx="84" cy="102" r="4" fill="#f4a3a3" opacity=".7"/><circle cx="116" cy="102" r="4" fill="#f4a3a3" opacity=".7"/>' +
        '<g fill="' + p.g + '"><circle cx="72" cy="150" r="4"/><circle cx="100" cy="156" r="4"/><circle cx="128" cy="150" r="4"/></g>';
    },
    nighty: function (p) {
      return '<path d="M76 30 Q100 44 124 30 L150 50 L140 72 L130 66 L150 172 Q100 182 50 172 L70 66 L60 72 L50 50 Z" fill="' + p.m + '"/>' +
        '<path d="M84 34 Q100 52 116 34 L114 70 Q100 76 86 70 Z" fill="' + p.d + '"/>' +
        '<g fill="' + p.l + '"><circle cx="80" cy="100" r="6"/><circle cx="118" cy="112" r="6"/><circle cx="92" cy="140" r="6"/><circle cx="126" cy="150" r="5"/><circle cx="70" cy="160" r="5"/></g>' +
        '<path d="M50 172 Q100 182 150 172" stroke="' + p.g + '" stroke-width="4" fill="none"/>';
    },
    lungi: function (p) {
      var st = "";
      for (var x = 48; x < 156; x += 18) st += '<rect x="' + x + '" y="40" width="7" height="130" fill="' + p.d + '" opacity=".75"/>';
      return '<rect x="40" y="40" width="120" height="130" rx="4" fill="' + p.l + '"/>' + st +
        '<rect x="40" y="96" width="120" height="8" fill="' + p.d + '" opacity=".5"/><rect x="40" y="120" width="120" height="8" fill="' + p.d + '" opacity=".5"/>' +
        '<rect x="40" y="40" width="120" height="10" fill="' + p.m + '"/><rect x="40" y="160" width="120" height="10" fill="' + p.m + '"/>' +
        '<rect x="118" y="140" width="30" height="18" rx="2" fill="#fff"/><rect x="122" y="144" width="22" height="10" fill="' + p.g + '"/>';
    },
    bedsheet: function (p) {
      return '<path d="M30 92 L100 60 L170 92 L100 124 Z" fill="' + p.l + '"/>' +
        '<path d="M30 92 L100 124 L100 160 L30 128 Z" fill="' + p.m + '"/><path d="M170 92 L100 124 L100 160 L170 128 Z" fill="' + p.d + '"/>' +
        '<g fill="' + p.m + '"><circle cx="80" cy="84" r="8"/><circle cx="118" cy="96" r="8"/><circle cx="100" cy="74" r="5"/><circle cx="136" cy="86" r="5"/></g>' +
        '<g fill="' + p.g + '"><circle cx="80" cy="84" r="3"/><circle cx="118" cy="96" r="3"/></g>' +
        '<ellipse cx="72" cy="80" rx="18" ry="8" fill="#fff" opacity=".85"/>';
    },
    kids: function (p) {
      return '<path d="M72 40 Q100 56 128 40 L156 64 L142 84 L132 76 L150 164 Q100 176 50 164 L68 76 L58 84 L44 64 Z" fill="' + p.m + '"/>' +
        '<path d="M86 46 Q100 60 114 46" fill="none" stroke="#fff" stroke-width="4"/>' +
        '<g fill="' + p.l + '"><circle cx="84" cy="110" r="7"/><circle cx="116" cy="124" r="7"/><circle cx="96" cy="146" r="7"/><circle cx="126" cy="96" r="5"/></g>' +
        '<path d="M50 164 Q100 176 150 164" stroke="' + p.g + '" stroke-width="5" fill="none"/>';
    }
  };

  window.productArt = function (prod) {
    var p = pal(prod.tint || 330);
    var fn = draw[prod.art] || draw.blouse;
    return '<svg viewBox="0 0 200 200" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">' +
      '<rect width="200" height="200" fill="hsl(' + prod.tint + ',80%,95%)"/>' + kolam(p.d) +
      '<ellipse cx="100" cy="182" rx="60" ry="7" fill="' + p.d + '" opacity=".12"/>' +
      fn(p) + '</svg>';
  };
})();
