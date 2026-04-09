/* ── Business data keyed by image filename ─────────────────────────────── */
var BUSINESSES = {
  'audubon-park-garden-district-map.png': [
    { icon: '🏪', name: 'East End Market',          desc: 'Neighborhood food hall with MICHELIN-rated eateries, local vendors, and artisan goods.' },
    { icon: '☕', name: 'Lineage Coffee Roasting',   desc: 'Specialty coffee roaster and café beloved by the neighborhood.' },
    { icon: '☕', name: 'Stardust Video & Coffee',   desc: 'Eclectic indie café doubling as a video library and art gallery.' },
    { icon: '🍷', name: 'Swirlery Wine Bar',         desc: 'Cozy neighborhood wine bar with natural wines and small plates.' },
    { icon: '🌿', name: 'The Briar Patch',           desc: 'Garden boutique and gift shop specializing in plants and home décor.' },
    { icon: '🎵', name: 'Park Ave CDs',              desc: 'Iconic independent record store carrying new and used vinyl and CDs.' },
    { icon: '🥦', name: 'Deeply Rooted Produce',     desc: 'Community-focused farm stand featuring locally grown produce.' }
  ],
  'city-district-map.png': [
    { icon: '🎭', name: 'Dr. Phillips Center',       desc: 'World-class performing arts center hosting Broadway shows, concerts, and events.' },
    { icon: '🎭', name: 'SAK Comedy Lab',            desc: 'Orlando\'s premier improv comedy club with shows nightly since 1991.' },
    { icon: '🏛️', name: 'Orange County History Center', desc: 'Museum showcasing Central Florida\'s history in a landmark 1927 courthouse.' },
    { icon: '🍻', name: 'Wall Street Plaza',         desc: 'Open-air bar complex with multiple venues at the heart of downtown nightlife.' },
    { icon: '🏍️', name: 'Ace Café Orlando',          desc: 'Iconic motorsports-themed restaurant and music venue.' },
    { icon: '🍔', name: 'Hamburger Mary\'s Orlando', desc: 'Lively bar and grill featuring drag show performances and themed events.' },
    { icon: '🍹', name: 'Tanqueray\'s Bar & Wraps',  desc: 'Downtown dive bar classic known for wraps and no-frills good times since 1985.' }
  ],
  'the-drive-college-park-main-street-map.png': [
    { icon: '⛳', name: 'Dubsdread Golf Course',     desc: 'Historic 1924 public golf course and beloved neighborhood landmark.' },
    { icon: '🍽️', name: 'The Ravenous Pig',          desc: 'Award-winning gastropub with a seasonal menu and craft cocktails.' },
    { icon: '☕', name: 'Foxtail Coffee Co.',         desc: 'Local specialty coffee chain with a welcoming neighborhood café vibe.' },
    { icon: '🎨', name: 'Timothy\'s Gallery',         desc: 'Contemporary fine art gallery featuring local and regional artists.' },
    { icon: '🧁', name: 'Se7en Bites',               desc: 'Southern-inspired bakery and brunch spot famous for biscuits and pies.' },
    { icon: '🍕', name: 'Antonio\'s La Fiamma',       desc: 'Family-owned Italian restaurant and pizza spot, a College Park staple.' },
    { icon: '🛍️', name: 'The Garden Gate',           desc: 'Charming boutique gift shop along Edgewater Drive.' }
  ],
  'gateway-orlando-market-street-map.png': [
    { icon: '🌮', name: 'El Zócalo Mexican Restaurant', desc: 'Authentic Mexican dining serving the OBT corridor for decades.' },
    { icon: '🍗', name: 'Pollo Campero',             desc: 'Popular Central American fried chicken chain with a loyal local following.' },
    { icon: '🛒', name: 'OBT Farmers Market',        desc: 'Community market along the Orange Blossom Trail connecting local vendors.' },
    { icon: '💈', name: 'Variety Barber Shop',       desc: 'Classic neighborhood barbershop serving the Gateway community.' },
    { icon: '🤝', name: 'Barber Park Recreation',    desc: 'Community park with sports facilities and programming for local youth.' },
    { icon: '🌎', name: 'International Food Center', desc: 'Multi-cultural grocery serving the diverse Gateway corridor community.' },
    { icon: '🍽️', name: 'Pio Pio Restaurant',        desc: 'Latin American restaurant known for grilled chicken and hearty plates.' }
  ],
  'ivanhoe-village-main-street-map.png': [
    { icon: '🎨', name: 'Orlando Museum of Art',     desc: 'Premier visual arts institution with rotating exhibitions and a permanent collection.' },
    { icon: '🔬', name: 'Orlando Science Center',    desc: 'Four-floor science museum with interactive exhibits, planetarium, and IMAX.' },
    { icon: '🍺', name: 'Liam\'s Irish Pub',         desc: 'Lively Irish pub serving imported pints, shepherd\'s pie, and live music.' },
    { icon: '🍷', name: 'Imperial Wine Bar & Beer Garden', desc: 'Relaxed wine bar with an expansive outdoor beer garden and live music.' },
    { icon: '🪑', name: 'Burton\'s of Orlando',      desc: 'Established antique dealer in the heart of the Antique Row strip.' },
    { icon: '🎭', name: 'Loch Haven Cultural Park',  desc: 'Outdoor arts campus home to museums, theatres, and community events.' },
    { icon: '🍔', name: 'The Nook on Robinson',      desc: 'Quirky neighborhood gastropub known for burgers and craft beer.' }
  ],
  'milk-district-main-street-map.png': [
    { icon: '🍺', name: 'Redlight Redlight Beer Parlour', desc: 'Award-winning craft beer bar with one of Florida\'s best tap selections.' },
    { icon: '🎵', name: 'Will\'s Pub',               desc: 'Beloved indie music venue and bar with nightly live performances since 1993.' },
    { icon: '🍔', name: 'Graffiti Junktion',         desc: 'Craft burger joint with creative toppings and an art-covered interior.' },
    { icon: '🥪', name: 'Stasio\'s Italian Deli',    desc: 'Old-school Italian deli with imported meats, cheeses, and prepared foods.' },
    { icon: '☕', name: 'Austin\'s Coffee',           desc: 'Indie coffee shop and music venue known for open mics and community events.' },
    { icon: '🥩', name: 'Beefy King',                desc: 'Orlando institution since 1968, serving no-frills beef and turkey sandwiches.' },
    { icon: '🌮', name: 'Tako Cheena',               desc: 'Fusion taco spot blending Caribbean, Asian, and Latin flavors creatively.' }
  ],
  'mills-50-main-street-map.png': [
    { icon: '🍜', name: 'Hawkers Asian Street Fare',  desc: 'Trendy restaurant serving Southeast Asian street food and cocktails.' },
    { icon: '🍜', name: 'Little Saigon (Pho 88)',    desc: 'Anchor of Orlando\'s Vietnamese dining scene with pho, banh mi, and more.' },
    { icon: '🌮', name: 'Tako Cheena',               desc: 'Inventive fusion tacos where Caribbean and Asian flavors collide.' },
    { icon: '🎮', name: 'The Geek Easy',             desc: 'Gamer bar stocked with retro consoles, board games, and craft beer.' },
    { icon: '🍽️', name: 'Artisan\'s Table',          desc: 'Upscale farm-to-table dining celebrating Florida ingredients and artisanship.' },
    { icon: '🧁', name: 'Se7en Bites',              desc: 'Southern-inspired bakery and brunch destination known for inventive sweets.' },
    { icon: '☕', name: 'Foxtail Coffee – Mills',    desc: 'Flagship location of Orlando\'s beloved local specialty coffee chain.' }
  ],
  'parramore-main-street-map.jpg': [
    { icon: '🍳', name: 'Nikki\'s Place',            desc: 'Historic soul food institution beloved for down-home Southern cooking since 1949.' },
    { icon: '🏟️', name: 'Kia Center',               desc: 'Multi-purpose arena hosting the Orlando Magic and major concerts and events.' },
    { icon: '⚽', name: 'Inter&Co Stadium',           desc: 'Home of Orlando City SC and Orlando Pride professional soccer clubs.' },
    { icon: '🎓', name: 'UCF Creative Village',      desc: 'Urban campus bringing UCF and Valencia College programs to downtown Orlando.' },
    { icon: '🤝', name: 'Callahan Community Center', desc: 'Dr. J.B. Callahan Neighborhood Center offering programs and services to residents.' },
    { icon: '🎶', name: 'The Social',               desc: 'Intimate live music venue just east of Parramore hosting indie and touring acts.' },
    { icon: '🌱', name: 'Parramore Community Garden', desc: 'Resident-managed community garden supporting food security in the neighborhood.' }
  ],
  'sodo-district-main-street-map.png': [
    { icon: '🍺', name: 'Rockpit Brewing Co.',       desc: 'SoDo\'s hometown craft brewery with a large taproom and rotating seasonal beers.' },
    { icon: '🍷', name: 'The Wine Room',             desc: 'Self-serve wine and tapas bar with an enomatic wine dispensing system.' },
    { icon: '☕', name: 'Foxtail Coffee – SoDo',     desc: 'Local specialty coffee chain location serving the South Orange Avenue corridor.' },
    { icon: '🥦', name: 'Perrine\'s Produce',         desc: 'Family-owned produce stand bringing fresh fruits and vegetables to SoDo.' },
    { icon: '🌿', name: 'Wadeview Park',             desc: 'Community park with a pool, tennis courts, and a neighborhood rec center.' },
    { icon: '🍽️', name: 'Proper & Wild',            desc: 'Neighborhood restaurant focused on thoughtfully sourced, seasonal fare.' },
    { icon: '🛒', name: 'SoDo Shopping Center',      desc: 'Community retail hub anchored by a Sprouts grocery along South Orange Ave.' }
  ],
  'thornton-park-main-street-map.png': [
    { icon: '🍷', name: 'Eola Wine Company',         desc: 'Cozy wine bar overlooking Lake Eola with an excellent by-the-glass selection.' },
    { icon: '🍽️', name: 'Soco Restaurant',          desc: 'Southern comfort food elevated with craft cocktails in a warm, stylish setting.' },
    { icon: '🍹', name: 'The Stubborn Mule',         desc: 'Craft cocktail bar known for creative takes on classics and a laid-back vibe.' },
    { icon: '🥬', name: 'Thornton Park Farmers Market', desc: 'Sunday morning market at Lake Eola with local produce, food, and artisan vendors.' },
    { icon: '🎶', name: 'Garp & Fuss',              desc: 'Intimate neighborhood live music bar tucked into the Thornton Park streetscape.' },
    { icon: '🍔', name: 'Graze Street American',     desc: 'Casual eatery offering grass-fed burgers, grain bowls, and fresh-made juices.' },
    { icon: '☕', name: 'Lineage Coffee – Thornton', desc: 'Neighborhood outpost of the beloved local specialty coffee brand.' }
  ],
  'west-lakes-market-street-map.jpg': [
    { icon: '🏟️', name: 'Camping World Stadium',    desc: 'Outdoor stadium hosting the Orlando Citrus Bowl game and major concerts.' },
    { icon: '🌿', name: 'Lorna Doone Park',          desc: 'Community park with athletic fields and the John N. Jackson Pool and Garden.' },
    { icon: '🍖', name: 'Western Grill',             desc: 'Neighborhood grill serving hearty portions to the West Lakes community.' },
    { icon: '🛍️', name: 'Kirkman Flea Market',      desc: 'Sprawling indoor/outdoor market where vendors offer diverse goods and finds.' },
    { icon: '🌎', name: 'La Borinqueña Morcillería', desc: 'Puerto Rican restaurant and market serving authentic island cuisine.' },
    { icon: '💈', name: 'West Lakes Barber & Style', desc: 'Community barbershop serving the diverse West Lakes neighborhood.' },
    { icon: '🌱', name: 'John N. Jackson Garden & Pool', desc: 'Beloved community garden and aquatic facility managed by the City of Orlando.' }
  ]
};

/* ── DOM refs ──────────────────────────────────────────────────────────── */
var modal         = document.getElementById('modal');
var backdrop      = document.getElementById('modal-backdrop');
var closeBtn      = document.getElementById('modal-close');
var modalImg      = document.getElementById('modal-img');
var modalType     = document.getElementById('modal-type');
var modalTitle    = document.getElementById('modal-title');
var modalDate     = document.getElementById('modal-date');
var modalDesc     = document.getElementById('modal-desc');
var modalBizList  = document.getElementById('modal-businesses');
var fullscreenBtn = document.getElementById('modal-fullscreen');
var imgPane       = document.querySelector('.modal-img-pane');

/* ── Tab switching ─────────────────────────────────────────────────────── */
document.querySelectorAll('.tab-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var target = btn.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach(function(b) {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    document.querySelectorAll('.tab-panel').forEach(function(p) {
      p.classList.remove('active');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    var panel = document.getElementById('tab-' + target);
    if (panel) panel.classList.add('active');
  });
});

/* ── Business list builder ─────────────────────────────────────────────── */
function buildBusinessList(imgKey) {
  modalBizList.innerHTML = '';
  var items = BUSINESSES[imgKey] || [];
  if (items.length === 0) {
    var li = document.createElement('li');
    li.style.fontStyle = 'italic';
    li.style.color = 'var(--ink-soft)';
    li.textContent = 'Business listings coming soon.';
    modalBizList.appendChild(li);
    return;
  }
  items.forEach(function(biz) {
    var li   = document.createElement('li');
    var icon = document.createElement('span');
    icon.className = 'biz-icon';
    icon.textContent = biz.icon;
    var info = document.createElement('span');
    var name = document.createElement('span');
    name.className = 'biz-name';
    name.textContent = biz.name;
    var desc = document.createElement('span');
    desc.className = 'biz-desc';
    desc.textContent = biz.desc;
    info.appendChild(name);
    info.appendChild(desc);
    li.appendChild(icon);
    li.appendChild(info);
    modalBizList.appendChild(li);
  });
}

/* ── Modal open / close ────────────────────────────────────────────────── */
function openModal(card) {
  var imgKey = card.dataset.img;
  modalImg.src            = imgKey;
  modalImg.alt            = card.dataset.title + ' map';
  modalType.textContent   = card.dataset.type;
  modalTitle.textContent  = card.dataset.title;
  modalDate.textContent   = card.dataset.date;
  modalDesc.textContent   = card.dataset.desc;

  buildBusinessList(imgKey);

  /* Reset to About tab each open */
  document.querySelectorAll('.tab-btn').forEach(function(b) {
    var isAbout = b.dataset.tab === 'about';
    b.classList.toggle('active', isAbout);
    b.setAttribute('aria-selected', isAbout ? 'true' : 'false');
  });
  document.querySelectorAll('.tab-panel').forEach(function(p) {
    p.classList.toggle('active', p.id === 'tab-about');
  });

  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  closeBtn.focus();
}

function closeModal() {
  exitFullscreen();
  modal.hidden = true;
  document.body.style.overflow = '';
}

document.querySelectorAll('.card').forEach(function(card) {
  card.addEventListener('click', function() { openModal(card); });
  card.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(card);
    }
  });
});

closeBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

/* ── Fullscreen (Fullscreen API + CSS fallback for iOS Safari) ─────────── */
function isFullscreen() {
  return !!(
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    imgPane.classList.contains('fullscreen-css')
  );
}

function enterFullscreen() {
  if (imgPane.requestFullscreen) {
    imgPane.requestFullscreen().catch(function() { cssFullscreen(true); });
  } else if (imgPane.webkitRequestFullscreen) {
    imgPane.webkitRequestFullscreen();
  } else if (imgPane.mozRequestFullScreen) {
    imgPane.mozRequestFullScreen();
  } else {
    /* iOS Safari fallback */
    cssFullscreen(true);
  }
  updateFullscreenBtn(true);
}

function exitFullscreen() {
  if (imgPane.classList.contains('fullscreen-css')) {
    cssFullscreen(false);
    updateFullscreenBtn(false);
    return;
  }
  if (isFullscreen()) {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
  }
}

function cssFullscreen(on) {
  imgPane.classList.toggle('fullscreen-css', on);
  /* prevent body scroll while CSS fullscreen is active */
  document.body.style.overflow = on ? 'hidden' : 'hidden'; /* modal already locks it */
}

function updateFullscreenBtn(entering) {
  var label = entering ? 'Exit Full Screen' : 'Full Screen';
  fullscreenBtn.setAttribute('aria-label', label);
  var textNode = fullscreenBtn.lastChild;
  if (textNode && textNode.nodeType === 3) {
    textNode.nodeValue = ' ' + label;
  }
}

fullscreenBtn.addEventListener('click', function() {
  if (isFullscreen()) {
    exitFullscreen();
    updateFullscreenBtn(false);
  } else {
    enterFullscreen();
  }
});

/* Keep button label in sync when browser exits fullscreen via OS/Esc */
document.addEventListener('fullscreenchange', function() {
  updateFullscreenBtn(!!document.fullscreenElement);
});
document.addEventListener('webkitfullscreenchange', function() {
  updateFullscreenBtn(!!document.webkitFullscreenElement);
});
