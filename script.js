// mood data — songs are static, books come from Google Books API

const songs = {
  happy: [
    { title: "Ik Vaari Aa",            artist: "Arijit Singh",               genre: "Hindi Indie",        lang: "Hindi"   },
    { title: "Waka Waka",               artist: "Shakira",                     genre: "Pop / Afrobeat",     lang: "English" },
    { title: "Can't Stop the Feeling",  artist: "Justin Timberlake",           genre: "Pop / Funk",         lang: "English" },
    { title: "Badtameez Dil",           artist: "Pritam ft. Benny Dayal",      genre: "Bollywood Dance",    lang: "Hindi"   },
    { title: "Happy",                   artist: "Pharrell Williams",            genre: "Neo Soul",           lang: "English" },
    { title: "Gallan Goodiyaan",        artist: "Shankar–Ehsaan–Loy",          genre: "Bollywood",          lang: "Hindi"   },
    { title: "Shake It Off",            artist: "Taylor Swift",                 genre: "Pop",                lang: "English" },
    { title: "Balam Pichkari",          artist: "Vishal–Shekhar",              genre: "Bollywood Dance",    lang: "Hindi"   },
    { title: "Uptown Funk",             artist: "Mark Ronson ft. Bruno Mars",   genre: "Funk / Pop",         lang: "English" },
    { title: "Uff Teri Ada",            artist: "KK & Shekhar Ravjiani",        genre: "Bollywood Pop",      lang: "Hindi"   },
  ],
  melancholic: [
    { title: "Tum Hi Ho",               artist: "Arijit Singh",                genre: "Bollywood Ballad",   lang: "Hindi"   },
    { title: "The Night We Met",        artist: "Lord Huron",                  genre: "Indie Folk",         lang: "English" },
    { title: "Ae Dil Hai Mushkil",      artist: "Arijit Singh",                genre: "Bollywood",          lang: "Hindi"   },
    { title: "Skinny Love",             artist: "Bon Iver",                    genre: "Indie Folk",         lang: "English" },
    { title: "Channa Mereya",           artist: "Arijit Singh",                genre: "Bollywood",          lang: "Hindi"   },
    { title: "Liability",               artist: "Lorde",                       genre: "Art Pop",            lang: "English" },
    { title: "Agar Tum Saath Ho",       artist: "Alka Yagnik & Arijit Singh",  genre: "Bollywood",          lang: "Hindi"   },
    { title: "Motion Picture Soundtrack", artist: "Radiohead",                 genre: "Art Rock",           lang: "English" },
    { title: "Judaai",                  artist: "Rekha Bhardwaj & KK",         genre: "Bollywood",          lang: "Hindi"   },
    { title: "Someone Like You",        artist: "Adele",                       genre: "Soul / Pop",         lang: "English" },
  ],
  energetic: [
    { title: "Zinda Hoon Main",         artist: "Siddharth Mahadevan",         genre: "Bollywood Rock",     lang: "Hindi"   },
    { title: "Blinding Lights",         artist: "The Weeknd",                  genre: "Synth-Pop",          lang: "English" },
    { title: "Bhaag DK Bose",           artist: "Ram Sampath",                 genre: "Indie Rock",         lang: "Hindi"   },
    { title: "POWER",                   artist: "Kanye West",                  genre: "Hip-Hop",            lang: "English" },
    { title: "Shut Up and Dance",       artist: "WALK THE MOON",               genre: "Indie Pop",          lang: "English" },
    { title: "Ghungroo",                artist: "Arijit Singh & Shilpa Rao",   genre: "Bollywood Upbeat",   lang: "Hindi"   },
    { title: "Lose Yourself",           artist: "Eminem",                      genre: "Hip-Hop",            lang: "English" },
    { title: "Dilli Wali Girlfriend",   artist: "Vishal–Shekhar",              genre: "Bollywood Dance",    lang: "Hindi"   },
    { title: "Mr. Brightside",          artist: "The Killers",                 genre: "Indie Rock",         lang: "English" },
    { title: "Sadda Haq",               artist: "Mohit Chauhan",               genre: "Bollywood Rock",     lang: "Hindi"   },
  ],
  romantic: [
    { title: "Tere Liye",               artist: "Atif Aslam",                  genre: "Bollywood Romance",  lang: "Hindi"   },
    { title: "Perfect",                 artist: "Ed Sheeran",                  genre: "Pop Ballad",         lang: "English" },
    { title: "Teri Meri Prem Kahani",   artist: "Rahat Fateh Ali Khan",        genre: "Bollywood",          lang: "Hindi"   },
    { title: "At Last",                 artist: "Etta James",                  genre: "Soul / Jazz",        lang: "English" },
    { title: "Pehli Nazar Mein",        artist: "Atif Aslam",                  genre: "Bollywood Romance",  lang: "Hindi"   },
    { title: "La Vie en Rose",          artist: "Édith Piaf",                  genre: "Chanson",            lang: "French"  },
    { title: "Janam Janam",             artist: "Arijit Singh",                genre: "Bollywood",          lang: "Hindi"   },
    { title: "All of Me",               artist: "John Legend",                 genre: "Soul / Pop",         lang: "English" },
    { title: "Kuch Kuch Hota Hai",      artist: "Udit Narayan & Kavita K.",    genre: "Bollywood Classic",  lang: "Hindi"   },
    { title: "Thinking Out Loud",       artist: "Ed Sheeran",                  genre: "Pop Soul",           lang: "English" },
  ],
  calm: [
    { title: "Naina (Dangal)",          artist: "Arijit Singh",                genre: "Bollywood Soft",     lang: "Hindi"   },
    { title: "Holocene",                artist: "Bon Iver",                    genre: "Indie Folk",         lang: "English" },
    { title: "Iktara",                  artist: "Kavita Seth",                 genre: "Indie Folk",         lang: "Hindi"   },
    { title: "Comptine d'un autre été", artist: "Yann Tiersen",                genre: "Neo-Classical",      lang: "Instrumental" },
    { title: "Tere Jaisa Yaar Kahan",   artist: "Kishore Kumar",               genre: "Bollywood Classic",  lang: "Hindi"   },
    { title: "River",                   artist: "Leon Bridges",                genre: "Soul / Gospel",      lang: "English" },
    { title: "Aaoge Jab Tum",           artist: "Ustad Rashid Khan",           genre: "Classical Fusion",   lang: "Hindi"   },
    { title: "Coffee and Flowers",      artist: "Novo Amor",                   genre: "Ambient Folk",       lang: "English" },
    { title: "Breathe (2 AM)",          artist: "Anna Nalick",                 genre: "Soft Rock",          lang: "English" },
    { title: "Kabira",                  artist: "Rekha Bhardwaj & Tochi Raina", genre: "Sufi / Folk",       lang: "Hindi"   },
  ],
  mysterious: [
    { title: "Khaamoshiyan",            artist: "Arijit Singh",                genre: "Bollywood Haunting", lang: "Hindi"   },
    { title: "Teardrop",                artist: "Massive Attack",              genre: "Trip-Hop",           lang: "English" },
    { title: "Tum Tak",                 artist: "A.R. Rahman",                 genre: "Sufi / Bollywood",   lang: "Hindi"   },
    { title: "Climbing Up the Walls",   artist: "Radiohead",                   genre: "Art Rock",           lang: "English" },
    { title: "Mann Kasoor",             artist: "Prateek Kuhad",               genre: "Indie Pop",          lang: "Hindi"   },
    { title: "Video Games",             artist: "Lana Del Rey",                genre: "Dream Pop",          lang: "English" },
    { title: "Arziyan",                 artist: "A.R. Rahman & Javed Ali",     genre: "Sufi Qawwali",       lang: "Hindi"   },
    { title: "Strange Mercy",           artist: "St. Vincent",                 genre: "Art Rock",           lang: "English" },
    { title: "Raat Ke Dhai Baje",       artist: "K.K.",                        genre: "Bollywood",          lang: "Hindi"   },
    { title: "Black",                   artist: "Pearl Jam",                   genre: "Grunge / Rock",      lang: "English" },
  ],
  angry: [
    { title: "Killing in the Name",     artist: "Rage Against the Machine",    genre: "Metal / Rap",        lang: "English" },
    { title: "Sadda Haq",               artist: "Mohit Chauhan",               genre: "Bollywood Rock",     lang: "Hindi"   },
    { title: "Run the World (Girls)",   artist: "Beyoncé",                     genre: "R&B / Pop",          lang: "English" },
    { title: "Emotional Atyachar",      artist: "Usha Uthup",                  genre: "Indie Bollywood",    lang: "Hindi"   },
    { title: "Bad Guy",                 artist: "Billie Eilish",               genre: "Electropop",         lang: "English" },
    { title: "Break Stuff",             artist: "Limp Bizkit",                 genre: "Nu-Metal",           lang: "English" },
    { title: "Dard-e-Disco",            artist: "Vishal–Shekhar",              genre: "Bollywood",          lang: "Hindi"   },
    { title: "Lose Yourself",           artist: "Eminem",                      genre: "Hip-Hop",            lang: "English" },
    { title: "Dhunki",                  artist: "Sunidhi Chauhan",             genre: "Bollywood Dance",    lang: "Hindi"   },
    { title: "POWER",                   artist: "Kanye West",                  genre: "Hip-Hop",            lang: "English" },
  ],
  nostalgic: [
    { title: "Kal Ho Naa Ho",           artist: "Sonu Nigam",                  genre: "Bollywood Classic",  lang: "Hindi"   },
    { title: "The Sound of Silence",    artist: "Simon & Garfunkel",           genre: "Folk Rock",          lang: "English" },
    { title: "Kabhi Kabhi Mere Dil Mein", artist: "Lata Mangeshkar",           genre: "Vintage Bollywood",  lang: "Hindi"   },
    { title: "Vienna",                  artist: "Billy Joel",                  genre: "Classic Pop",        lang: "English" },
    { title: "Ek Pyaar Ka Nagma Hai",   artist: "Lata Mangeshkar & Mukesh",    genre: "Vintage Bollywood",  lang: "Hindi"   },
    { title: "Yesterday",               artist: "The Beatles",                 genre: "Classic Rock",       lang: "English" },
    { title: "Yeh Dil Deewana",         artist: "Udit Narayan",                genre: "Bollywood 90s",      lang: "Hindi"   },
    { title: "Fast Car",                artist: "Tracy Chapman",               genre: "Folk / Soul",        lang: "English" },
    { title: "Pehla Nasha",             artist: "Udit Narayan & Sadhana S.",   genre: "Bollywood Classic",  lang: "Hindi"   },
    { title: "Landslide",               artist: "Fleetwood Mac",               genre: "Classic Rock",       lang: "English" },
  ],
};

const moods = {
  happy:       { label: "Happy ☀️",       books: ["funny feel-good fiction", "comedy lighthearted novel"] },
  melancholic: { label: "Melancholic 🌧️", books: ["grief literary fiction heartbreak", "melancholy poignant prose"] },
  energetic:   { label: "Energetic ⚡",    books: ["action adventure thriller", "motivational sport biography"] },
  romantic:    { label: "Romantic 🌹",     books: ["romance love story classic", "passionate love novel"] },
  calm:        { label: "Calm 🌊",         books: ["mindfulness nature philosophy", "peaceful meditative fiction"] },
  mysterious:  { label: "Mysterious 🌙",   books: ["gothic mystery thriller dark", "psychological suspense noir"] },
  angry:       { label: "Fierce 🔥",       books: ["dystopian rebellion fiction", "social commentary revolution"] },
  nostalgic:   { label: "Nostalgic 🍂",    books: ["coming of age classic fiction", "childhood memory nostalgic"] },
};

// state
let currentMood = null;
let bookCache   = [];
const SHOW = 4;

// helpers
const $ = id => document.getElementById(id);
const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
const pick = (arr, n) => shuffle(arr).slice(0, n);
const esc = s => String(s || "").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");

// fetch books from Google Books API
async function fetchBooks(queries) {
  const results = [];
  for (const q of pick(queries, 2)) {
    try {
      const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(q)}&maxResults=10&printType=books`);
      const data = await res.json();
      for (const item of data.items || []) {
        const v = item.volumeInfo || {};
        const thumb = v.imageLinks?.thumbnail || v.imageLinks?.smallThumbnail || null;
        results.push({
          title:   v.title || "Untitled",
          authors: (v.authors || ["Unknown"]).join(", "),
          genre:   (v.categories || ["Fiction"])[0],
          cover:   thumb?.replace("http://", "https://") || null,
          link:    v.previewLink || `https://books.google.com/books?id=${item.id}`,
          year:    v.publishedDate?.slice(0, 4) || null,
          pages:   v.pageCount || null,
        });
      }
    } catch { /* silently skip failed queries */ }
  }
  // deduplicate by title
  const seen = new Set();
  return results.filter(b => seen.has(b.title) ? false : !!seen.add(b.title));
}

// skeleton cards while books load
function showSkeletons() {
  $("book-cards").innerHTML = Array.from({ length: SHOW }, (_, i) => `
    <div class="rec-card skeleton" style="animation-delay:${i * 0.07}s">
      <div class="skeleton-cover"></div>
      <div class="card-body">
        <div class="skeleton-line w70"></div>
        <div class="skeleton-line w50"></div>
        <div class="skeleton-line w40"></div>
      </div>
    </div>`).join("");
}

// render song cards from static data
function renderSongs(mood) {
  $("music-cards").innerHTML = "";
  pick(songs[mood], SHOW).forEach((s, i) => {
    const card = document.createElement("div");
    card.className = "rec-card";
    card.style.animationDelay = `${i * 0.08}s`;
    card.innerHTML = `
      <div class="card-cover-placeholder">🎵</div>
      <div class="card-body">
        <div class="card-title">${esc(s.title)}</div>
        <div class="card-artist">${esc(s.artist)}</div>
        <span class="card-tag">${esc(s.genre)}</span>
        <div class="card-lang">${esc(s.lang)}</div>
      </div>`;
    $("music-cards").appendChild(card);
  });
}

// render book cards from API results
function renderBooks(books) {
  if (!books.length) {
    $("book-cards").innerHTML = `<div class="api-error">⚠ Couldn't load books. Try shuffling again.</div>`;
    return;
  }
  $("book-cards").innerHTML = "";
  pick(books, SHOW).forEach((b, i) => {
    const card = document.createElement("div");
    card.className = "rec-card";
    card.style.animationDelay = `${i * 0.08}s`;
    const cover = b.cover
      ? `<img class="card-cover book-cover" src="${b.cover}" alt="${esc(b.title)}" loading="lazy"/>`
      : `<div class="card-cover-placeholder">📖</div>`;
    const meta = [b.year, b.pages ? b.pages + " pp" : null].filter(Boolean).join(" · ");
    card.innerHTML = `
      ${cover}
      <div class="card-body">
        <div class="card-title">${esc(b.title)}</div>
        <div class="card-artist">${esc(b.authors)}</div>
        <span class="card-tag">${esc(b.genre)}</span>
        ${meta ? `<div class="card-meta">${meta}</div>` : ""}
        <div class="card-actions">
          <a class="card-link" href="${b.link}" target="_blank" rel="noopener">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 9.5L9.5 1.5M5 1.5h4.5v4.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Google Books
          </a>
        </div>
      </div>`;
    $("book-cards").appendChild(card);
  });
}

// called when a mood is selected
async function applyMood(mood) {
  currentMood = mood;

  document.body.className = `mood-${mood}`;
  document.querySelectorAll(".mood-card").forEach(c =>
    c.classList.toggle("active", c.dataset.mood === mood)
  );
  $("current-mood-label").textContent = `Mood: ${moods[mood].label}`;

  const section = $("suggestions-section");
  section.classList.remove("hidden");
  setTimeout(() => section.scrollIntoView({ behavior: "smooth", block: "start" }), 100);

  renderSongs(mood);

  showSkeletons();
  bookCache = await fetchBooks(moods[mood].books);
  renderBooks(bookCache);
}

// shuffle buttons
$("refresh-music").addEventListener("click", () => { if (currentMood) renderSongs(currentMood); });
$("refresh-books").addEventListener("click", async () => {
  if (!currentMood) return;
  if (bookCache.length) {
    renderBooks(bookCache);
  } else {
    showSkeletons();
    bookCache = await fetchBooks(moods[currentMood].books);
    renderBooks(bookCache);
  }
});

// mood card clicks
document.querySelectorAll(".mood-card").forEach(card => {
  card.tabIndex = 0;
  card.addEventListener("click", () => applyMood(card.dataset.mood));
  card.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); applyMood(card.dataset.mood); }
  });
});

// form validation
const form = $("suggestion-form");

function validate() {
  const fields = ["f-name","f-mood","f-type","f-title","f-reason"];
  fields.forEach(id => {
    $(id).classList.remove("error");
    $("err-" + id.slice(2)).textContent = "";
  });

  const val = id => $(id).value.trim();
  let ok = true;

  const check = (id, msg, condition) => {
    if (condition) { $(id).classList.add("error"); $("err-" + id.slice(2)).textContent = msg; ok = false; }
  };

  check("f-name",   "Name is required.",          !val("f-name") || val("f-name").length < 2);
  check("f-mood",   "Pick a mood.",                !$("f-mood").value);
  check("f-type",   "Song or book?",               !$("f-type").value);
  check("f-title",  "Enter a title or artist.",    !val("f-title") || val("f-title").length < 2);
  check("f-reason", "Write at least a sentence.",  !val("f-reason") || val("f-reason").length < 10);

  return ok;
}

["f-name","f-title","f-reason"].forEach(id => $(id).addEventListener("blur", validate));

form.addEventListener("submit", e => {
  e.preventDefault();
  if (!validate()) return;
  form.querySelector(".submit-btn").disabled = true;
  $("form-success").classList.remove("hidden");
  setTimeout(() => {
    form.reset();
    form.querySelector(".submit-btn").disabled = false;
    $("form-success").classList.add("hidden");
  }, 4000);
});

// init from URL hash
window.addEventListener("DOMContentLoaded", () => {
  const hash = location.hash.slice(1);
  if (moods[hash]) applyMood(hash);
});