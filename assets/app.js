const langs = ["en", "id"]; const storage = window.localStorage;
const state = { theme: storage.getItem("theme") || "dark", lang: storage.getItem("lang") || autoDetectLang(), blog: { cat: "all", q: "" }, courses: { cat: "all", q: "" }, user: JSON.parse(storage.getItem("user") || "null"), loading: false, error: null };
function autoDetectLang() { const l = (navigator.language || "en").toLowerCase(); return l.startsWith("id") ? "id" : "en"; }
function applyTheme() { document.documentElement.setAttribute("data-theme", state.theme); const moon = document.getElementById("iconMoon"); const sun = document.getElementById("iconSun"); if (state.theme === "dark") { moon.classList.remove("hidden"); sun.classList.add("hidden"); } else { moon.classList.add("hidden"); sun.classList.remove("hidden"); } }
const t = { en: { "nav.home":"Home","nav.about":"About Us","nav.courses":"Courses","nav.blogs":"Blogs","nav.contact":"Contact","nav.signin":"Sign In","nav.register":"Register","home.title":"Welcome to Hacker Web School","home.subtitle":"Learn, build, and share in the terminal green vibe.","home.cta":"Explore Courses","home.hero.title":"Build like a hacker","home.hero.subtitle":"Fast, minimal, terminal‑green web learning.","home.logo.title":"HWS Security","about.title":"About Us","about.copy":"We teach modern web skills, from basics to advanced full‑stack.","about.intro":"Security‑minded web learning in terminal‑green style.","about.feature1.title":"Security First","about.feature1.copy":"Practical, safe‑by‑default patterns.","about.feature2.title":"Minimal Design","about.feature2.copy":"Focus on clarity and speed.","about.feature3.title":"Hands‑on","about.feature3.copy":"Build real projects step by step.","about.timeline.2022":"2022","about.timeline.2022.copy":"Founded and launched core lessons.","about.timeline.2023":"2023","about.timeline.2023.copy":"Expanded courses and community events.","about.timeline.2024":"2024","about.timeline.2024.copy":"Security track and advanced tooling.","about.quote":"Code fast, ship safely, learn together.","about.cta.btn":"Join the Guild","about.stats.learners_num":"10K+","about.stats.learners":"Learners","about.stats.projects_num":"120+","about.stats.projects":"Projects","about.stats.articles_num":"80+","about.stats.articles":"Articles","courses.title":"Courses","courses.categories":"Categories","courses.search_ph":"Search courses","courses.category.all":"All","courses.category.frontend":"Frontend","courses.category.backend":"Backend","courses.category.security":"Security","courses.category.devops":"DevOps","courses.item.cta":"Enroll","courses.item1.title":"Frontend Fundamentals","courses.item1.meta":"By HWS • 12h • Beginner","courses.item1.rating_count":"(1,203)","courses.item1.price":"$19.99","courses.item2.title":"React & Routing","courses.item2.meta":"By HWS • 16h • Intermediate","courses.item2.rating_count":"(987)","courses.item2.price":"$24.99","courses.item3.title":"Backend Basics","courses.item3.meta":"By HWS • 18h • Intermediate","courses.item3.rating_count":"(1,104)","courses.item3.price":"$29.99","courses.item4.title":"Security Essentials","courses.item4.meta":"By HWS • 10h • Beginner","courses.item4.rating_count":"(1,560)","courses.item4.price":"$19.99","blogs.title":"Blogs","blogs.post1.title":"The Terminal Aesthetic","blogs.post1.copy":"Why green‑on‑black still inspires developers.","blogs.post1.cta":"Read","blogs.post2.title":"Dark Mode Done Right","blogs.post2.copy":"Designing accessible themes for night owls.","blogs.post2.cta":"Read","blogs.post3.title":"Routing Without Frameworks","blogs.post3.copy":"Hash‑based navigation with vanilla JS.","blogs.post3.cta":"Read","blogs.post4.title":"Minimal i18n in Static Sites","blogs.post4.copy":"Data attributes and simple dictionaries.","blogs.post4.cta":"Read","blogs.filter.title":"Filter","blogs.filter.search_ph":"Search blogs","blogs.filter.all":"All","blogs.filter.dev":"Dev","blogs.filter.design":"Design","blogs.filter.theme":"Theme","contact.title":"Contact","contact.name":"Name","contact.email":"Email","contact.message":"Message","contact.submit":"Send","contact.success":"Message sent. We'll get back to you.","contact.name_ph":"Your name","contact.email_ph":"name@example.com","contact.message_ph":"Say hello","signin.title":"Sign In","signin.email":"Email","signin.password":"Password","signin.submit":"Sign In","signin.email_ph":"name@example.com","signin.password_ph":"Your password","register.title":"Register","register.name":"Name","register.email":"Email","register.password":"Password","register.submit":"Create Account","register.name_ph":"Your name","register.email_ph":"name@example.com","register.password_ph":"Create a password","footer.brand":"HWS Security","footer.brand_copy":"Terminal‑green learning and tools.","footer.resources":"Resources","footer.product":"Product","footer.docs":"Docs","footer.docs.start":"Getting Started","footer.docs.api":"API Basics","footer.docs.tutorials":"Tutorials","footer.subscribe":"Subscribe","footer.subscribe_ph":"Enter your email","footer.subscribe_btn":"Subscribe","footer.subscribe_success":"Subscribed. Check your inbox.","footer.cta.title":"Join the HWS Guild","footer.cta.copy":"Get weekly terminal‑green tips & security‑minded practices.","footer.cta.btn":"Join Now","footer.privacy":"Privacy Protection","footer.project":"Project Linked","footer.project.github":"GitHub","footer.project.docs":"Docs","footer.project.issues":"Issues","footer.project.roadmap":"Roadmap",
"dashboard.profile":"Profile","dashboard.theme_editor":"Theme Editor","dashboard.signout":"Sign Out","dashboard.welcome":"Welcome back","dashboard.courses_enrolled":"Courses Enrolled","dashboard.progress":"Progress","dashboard.achievements":"Achievements",
"profile.title":"Profile Settings","profile.name":"Name","profile.email":"Email","profile.bio":"Bio","profile.theme":"Theme","profile.language":"Language","profile.save":"Save Changes",
"theme_editor.title":"Theme Editor","theme_editor.elements":"Elements","theme_editor.header":"Header","theme_editor.navigation":"Navigation","theme_editor.hero":"Hero Section","theme_editor.card":"Card","theme_editor.button":"Button","theme_editor.footer":"Footer","theme_editor.properties":"Properties","theme_editor.select_element":"Select an element to edit properties","theme_editor.save":"Save Theme","theme_editor.reset":"Reset"
 }, id: { "nav.home":"Beranda","nav.about":"Tentang Kami","nav.courses":"Kursus","nav.blogs":"Blog","nav.contact":"Kontak","nav.signin":"Masuk","nav.register":"Daftar","home.title":"Selamat datang di Hacker Web School","home.subtitle":"Belajar, membangun, dan berbagi dalam nuansa hijau terminal.","home.cta":"Jelajahi Kursus","home.hero.title":"Bangun seperti hacker","home.hero.subtitle":"Belajar web cepat, minimal, nuansa hijau terminal.","home.logo.title":"HWS Security","about.title":"Tentang Kami","about.copy":"Kami mengajarkan keterampilan web modern, dari dasar hingga full‑stack.","about.intro":"Pembelajaran web berfokus keamanan dalam gaya hijau terminal.","about.feature1.title":"Keamanan Utama","about.feature1.copy":"Pola praktis aman secara default.","about.feature2.title":"Desain Minimal","about.feature2.copy":"Fokus pada kejelasan dan kecepatan.","about.feature3.title":"Praktik Langsung","about.feature3.copy":"Bangun proyek nyata selangkah demi selangkah.","about.timeline.2022":"2022","about.timeline.2022.copy":"Didirikan dan meluncurkan pelajaran inti.","about.timeline.2023":"2023","about.timeline.2023.copy":"Perluas kursus dan acara komunitas.","about.timeline.2024":"2024","about.timeline.2024.copy":"Jalur keamanan dan alat lanjut.","about.quote":"Ngoding cepat, rilis aman, belajar bersama.","about.cta.btn":"Gabung Guild","about.stats.learners_num":"10K+","about.stats.learners":"Pembelajar","about.stats.projects_num":"120+","about.stats.projects":"Proyek","about.stats.articles_num":"80+","about.stats.articles":"Artikel","courses.title":"Kursus","courses.categories":"Kategori","courses.search_ph":"Cari kursus","courses.category.all":"Semua","courses.category.frontend":"Frontend","courses.category.backend":"Backend","courses.category.security":"Keamanan","courses.category.devops":"DevOps","courses.item.cta":"Daftar","courses.item1.title":"Fundamental Frontend","courses.item1.meta":"Oleh HWS • 12j • Pemula","courses.item1.rating_count":"(1.203)","courses.item1.price":"$19.99","courses.item2.title":"React & Routing","courses.item2.meta":"Oleh HWS • 16j • Menengah","courses.item2.rating_count":"(987)","courses.item2.price":"$24.99","courses.item3.title":"Dasar Backend","courses.item3.meta":"Oleh HWS • 18j • Menengah","courses.item3.rating_count":"(1.104)","courses.item3.price":"$29.99","courses.item4.title":"Esensial Keamanan","courses.item4.meta":"Oleh HWS • 10j • Pemula","courses.item4.rating_count":"(1.560)","courses.item4.price":"$19.99","blogs.title":"Blog","blogs.post1.title":"Estetika Terminal","blogs.post1.copy":"Mengapa hijau‑di‑atas‑hitam tetap menginspirasi developer.","blogs.post1.cta":"Baca","blogs.post2.title":"Dark Mode yang Tepat","blogs.post2.copy":"Merancang tema aksesibel untuk begadang.","blogs.post2.cta":"Baca","blogs.post3.title":"Routing Tanpa Framework","blogs.post3.copy":"Navigasi berbasis hash dengan JS murni.","blogs.post3.cta":"Baca","blogs.post4.title":"i18n Minimal di Situs Statis","blogs.post4.copy":"Atribut data dan kamus sederhana.","blogs.post4.cta":"Baca","blogs.filter.title":"Filter","blogs.filter.search_ph":"Cari blog","blogs.filter.all":"Semua","blogs.filter.dev":"Dev","blogs.filter.design":"Desain","blogs.filter.theme":"Tema","contact.title":"Kontak","contact.name":"Nama","contact.email":"Surel","contact.message":"Pesan","contact.submit":"Kirim","contact.success":"Pesan terkirim. Kami akan membalas.","contact.name_ph":"Nama Anda","contact.email_ph":"nama@contoh.com","contact.message_ph":"Ucapkan halo","signin.title":"Masuk","signin.email":"Surel","signin.password":"Kata Sandi","signin.submit":"Masuk","signin.email_ph":"nama@contoh.com","signin.password_ph":"Kata sandi Anda","register.title":"Daftar","register.name":"Nama","register.email":"Surel","register.password":"Kata Sandi","register.submit":"Buat Akun","register.name_ph":"Nama Anda","register.email_ph":"nama@contoh.com","register.password_ph":"Buat kata sandi","footer.brand":"HWS Security","footer.brand_copy":"Pembelajaran dan alat bernuansa hijau terminal.","footer.resources":"Sumber Daya","footer.product":"Produk","footer.docs":"Dokumentasi","footer.docs.start":"Mulai","footer.docs.api":"Dasar API","footer.docs.tutorials":"Tutorial","footer.subscribe":"Langganan","footer.subscribe_ph":"Masukkan surel Anda","footer.subscribe_btn":"Langganan","footer.subscribe_success":"Berlangganan. Periksa kotak masuk Anda.","footer.cta.title":"Gabung HWS Guild","footer.cta.copy":"Dapatkan tips hijau terminal & praktik keamanan mingguan.","footer.cta.btn":"Gabung Sekarang","footer.privacy":"Perlindungan Privasi","footer.project":"Tautan Proyek","footer.project.github":"GitHub","footer.project.docs":"Dokumentasi","footer.project.issues":"Isu","footer.project.roadmap":"Peta Jalan",
"dashboard.profile":"Profil","dashboard.theme_editor":"Editor Tema","dashboard.signout":"Keluar","dashboard.welcome":"Selamat datang kembali","dashboard.courses_enrolled":"Kursus Diikuti","dashboard.progress":"Kemajuan","dashboard.achievements":"Pencapaian",
"profile.title":"Pengaturan Profil","profile.name":"Nama","profile.email":"Surel","profile.bio":"Bio","profile.theme":"Tema","profile.language":"Bahasa","profile.save":"Simpan Perubahan",
"theme_editor.title":"Editor Tema","theme_editor.elements":"Elemen","theme_editor.header":"Header","theme_editor.navigation":"Navigasi","theme_editor.hero":"Bagian Hero","theme_editor.card":"Kartu","theme_editor.button":"Tombol","theme_editor.footer":"Footer","theme_editor.properties":"Properti","theme_editor.select_element":"Pilih elemen untuk mengedit properti","theme_editor.save":"Simpan Tema","theme_editor.reset":"Reset"
 } };
function applyLang() { const dict = t[state.lang]; document.querySelectorAll("[data-i18n]").forEach(el=>{ const k = el.getAttribute("data-i18n"); if (dict[k]) el.textContent = dict[k]; }); document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{ const k = el.getAttribute("data-i18n-placeholder"); if (dict[k]) el.setAttribute("placeholder", dict[k]); }); }
function navigate() { const target = (location.hash.replace('#','') || "home"); document.querySelectorAll('.page-section').forEach(s=>s.classList.remove('active')); const section = document.getElementById(target); if (section) section.classList.add('active'); document.querySelectorAll('.nav-link').forEach(a=>{ a.classList.toggle('active', a.getAttribute('data-route')===target); }); }
function cycleLang() { const idx = langs.indexOf(state.lang); state.lang = langs[(idx+1)%langs.length]; storage.setItem("lang", state.lang); applyLang(); }
function toggleTheme() { state.theme = state.theme === "dark" ? "light" : "dark"; storage.setItem("theme", state.theme); applyTheme(); }
function applyBlogFilter() { const items = document.querySelectorAll('.blog-item'); const q = state.blog.q.toLowerCase(); items.forEach(it=>{ const cat = it.getAttribute('data-category'); const text = (it.textContent||'').toLowerCase(); const catOk = state.blog.cat==='all' || state.blog.cat===cat; const qOk = !q || text.includes(q); it.style.display = (catOk && qOk) ? '' : 'none'; }); }
function verifyHeroImage() { const img = document.getElementById('heroImage'); if (!img) return; img.addEventListener('error', ()=>{ const space = img.parentElement; img.classList.add('hidden'); if (space) space.classList.add('image-fallback'); }); }
function initBackTop() { const btn = document.getElementById('backTop'); if (!btn) return; const toggle=()=>{ btn.classList.toggle('show', window.scrollY > 240); }; window.addEventListener('scroll', toggle, { passive: true }); toggle(); btn.addEventListener('click', ()=>{ window.scrollTo({ top:0, behavior:'smooth' }); }); }
function bind() { document.getElementById("langToggle").addEventListener("click", ()=>{ cycleLang(); startTyping(); }); document.getElementById("themeToggle").addEventListener("click", toggleTheme); window.addEventListener("hashchange", ()=>{ navigate(); const target=(location.hash.replace('#','')||'home'); if (target==='home') { startTyping(); verifyHeroImage(); } if (target==='courses') { renderCourses(); applyLang(); } if (target==='blogs') { renderBlogs(); applyLang(); } if (target==='dashboard') { renderDashboard(); applyLang(); } if (target==='profile') { renderProfile(); applyLang(); } if (target==='theme-editor') { renderThemeEditor(); applyLang(); } updateAuthUI(); }); const mt = document.getElementById('menuToggle'); if (mt) { mt.addEventListener('click', ()=>{ document.querySelector('.nav').classList.toggle('open'); }); }
  const cf = document.getElementById("contactForm"); if (cf) cf.addEventListener("submit", e=>{ e.preventDefault(); document.getElementById("contactSuccess").classList.remove("hidden"); const m={ name:document.getElementById("contactName").value, email:document.getElementById("contactEmail").value, msg:document.getElementById("contactMsg").value, ts:Date.now() }; saveMessage(m); }); const rf = document.getElementById("registerForm"); if (rf) rf.addEventListener("submit", async e=>{ e.preventDefault(); const name=document.getElementById("registerName").value; const email=document.getElementById("registerEmail").value; const password=document.getElementById("registerPassword").value; await registerUser(name, email, password); }); const sf = document.getElementById("signinForm"); if (sf) sf.addEventListener("submit", async e=>{ e.preventDefault(); const email=document.getElementById("signinEmail").value; const password=document.getElementById("signinPassword").value; await signInUser(email, password); }); const subf = document.getElementById("subscribeForm"); if (subf) subf.addEventListener("submit", e=>{ e.preventDefault(); document.getElementById("subscribeSuccess").classList.remove("hidden"); const email=document.getElementById("subscribeEmail").value; saveSubscription({ email, ts:Date.now() }); }); const bs = document.getElementById('blogSearch'); if (bs) { bs.addEventListener('input', e=>{ state.blog.q = e.target.value; applyBlogFilter(); }); }
  document.querySelectorAll('.blog-sidebar .chip').forEach(ch=>{ ch.addEventListener('click', ()=>{ document.querySelectorAll('.blog-sidebar .chip').forEach(c=>c.classList.remove('active')); ch.classList.add('active'); state.blog.cat = ch.getAttribute('data-cat'); applyBlogFilter(); }); }); const cs=document.getElementById('coursesSearch'); if (cs) { cs.addEventListener('input', e=>{ state.courses.q = (e.target.value||'').toLowerCase(); renderCourses(); applyLang(); }); } document.querySelectorAll('.courses-sidebar .chip').forEach(ch=>{ ch.addEventListener('click', ()=>{ document.querySelectorAll('.courses-sidebar .chip').forEach(c=>c.classList.remove('active')); ch.classList.add('active'); state.courses.cat = ch.getAttribute('data-cat')||'all'; renderCourses(); applyLang(); }); }); const signoutBtn = document.getElementById('signoutBtn'); if (signoutBtn) signoutBtn.addEventListener('click', signOutUser); document.getElementById("year").textContent = new Date().getFullYear(); }
// Initialize loading state variables first
let loadingTimeout = null;
let loadingCount = 0; // Track nested loading calls

function setLoading(isLoading) {
  // Track loading requests
  if (isLoading) {
    loadingCount++;
  } else {
    loadingCount = Math.max(0, loadingCount - 1);
  }
  
  // Only update UI if this is the last loading request
  if (loadingCount === 0 || isLoading) {
    // Clear any existing timeout
    if (loadingTimeout) {
      clearTimeout(loadingTimeout);
      loadingTimeout = null;
    }
    
    state.loading = isLoading;
    const loader = document.getElementById('globalLoader');
    const main = document.getElementById('mainContent');
    
    if (isLoading) {
      // Show loader immediately when starting to load
      if (loader) loader.classList.remove('hidden');
      if (main) main.classList.add('loading');
    } else {
      // Add a small delay before hiding to prevent flickering
      loadingTimeout = setTimeout(() => {
        if (loader) loader.classList.add('hidden');
        if (main) main.classList.remove('loading');
      }, 200); // 200ms for faster response
    }
  }
}

// Initialize with minimal loading
let initialLoad = true;
let dbInitialized = false;

applyTheme(); applyLang(); navigate(); startTyping(); verifyHeroImage(); initBackTop(); 

// Initialize database without blocking UI - only show loading for initial load
if (initialLoad) {
  setLoading(true);
  initialLoad = false;
}

// Initialize database with proper error handling
dbInit().then(()=>{ 
  dbInitialized = true;
  // Only render if we're on the right page
  const currentHash = location.hash.replace('#','') || 'home';
  if (currentHash === 'blogs') {
    renderBlogs();
  }
  if (currentHash === 'courses') {
    renderCourses();
  }
  applyLang(); 
  
  // Hide loading after database init
  setTimeout(() => setLoading(false), 150);
}).catch(err => {
  console.warn('Database initialization failed:', err);
  // Hide loading even if db fails
  setTimeout(() => setLoading(false), 150);
  // Continue without database features
  dbInitialized = true;
});

bind();
function startTyping() { const el = document.getElementById('heroType'); if (!el) return; if (el.textContent && el.textContent.length>0) return; const text = state.lang==='id' ? 'akses_diberikan$' : 'access_granted$'; let i=0; const step=()=>{ if (i<=text.length) { el.textContent = text.slice(0,i); i++; setTimeout(step, 80); } }; step(); }
let db={ conn:null };
function openDB(){ return new Promise((res,rej)=>{ const req=indexedDB.open('hws-db',2); req.onupgradeneeded=()=>{ const d=req.result; if(!d.objectStoreNames.contains('courses')) d.createObjectStore('courses',{ keyPath:'id' }); if(!d.objectStoreNames.contains('blogs')) d.createObjectStore('blogs',{ keyPath:'id' }); if(!d.objectStoreNames.contains('messages')) d.createObjectStore('messages',{ autoIncrement:true }); if(!d.objectStoreNames.contains('subscriptions')) d.createObjectStore('subscriptions',{ keyPath:'email' }); if(!d.objectStoreNames.contains('users')) d.createObjectStore('users',{ keyPath:'email' }); if(!d.objectStoreNames.contains('profiles')) d.createObjectStore('profiles',{ keyPath:'email' }); if(!d.objectStoreNames.contains('themes')) d.createObjectStore('themes',{ keyPath:'id' }); }; req.onsuccess=()=>res(req.result); req.onerror=()=>rej(req.error); }); }
async function dbInit(){ try{ db.conn = await openDB(); if(!storage.getItem('hws_seed_v1')){ await seedCourses(); await seedBlogs(); storage.setItem('hws_seed_v1','1'); } }catch(e){} }
function tx(name,mode){ return db.conn.transaction(name,mode).objectStore(name); }
function put(name,val){ return new Promise((res,rej)=>{ const r=tx(name,'readwrite').put(val); r.onsuccess=()=>res(); r.onerror=()=>rej(r.error); }); }
function getAll(name){ return new Promise((res,rej)=>{ const r=tx(name,'readonly').getAll(); r.onsuccess=()=>res(r.result||[]); r.onerror=()=>rej(r.error); }); }
async function seedCourses(){ const items=[ { id:'c1', cat:'frontend', key:'courses.item1', stars:'★★★★★' }, { id:'c2', cat:'frontend', key:'courses.item2', stars:'★★★★☆' }, { id:'c3', cat:'backend', key:'courses.item3', stars:'★★★★☆' }, { id:'c4', cat:'security', key:'courses.item4', stars:'★★★★★' } ]; for(const it of items){ await put('courses', it); } }
async function seedBlogs(){ const items=[ { id:'b1', cat:'design', key:'blogs.post1' }, { id:'b2', cat:'theme', key:'blogs.post2' }, { id:'b3', cat:'dev', key:'blogs.post3' }, { id:'b4', cat:'dev', key:'blogs.post4' } ]; for(const it of items){ await put('blogs', it); } }
async function renderCourses(){ 
  if(!db.conn) return; 
  
  // No loading state for course rendering - it's fast
  const list=await getAll('courses'); 
  const q=(state.courses.q||'').toLowerCase(); 
  const cat=state.courses.cat||'all'; 
  const filtered=list.filter(it=> (cat==='all'||it.cat===cat) && (!q || ((t[state.lang][it.key+'.title']||'').toLowerCase().includes(q))) ); 
  const grid=document.getElementById('courseGrid')||document.querySelector('.course-grid'); 
  if(!grid) return; 
  
  grid.innerHTML=''; 
  filtered.forEach(it=>{ 
    const card=document.createElement('div'); 
    card.className='course-card'; 
    const thumb=document.createElement('div'); 
    thumb.className='course-thumb'; 
    const body=document.createElement('div'); 
    body.className='course-body'; 
    const title=document.createElement('div'); 
    title.className='course-title'; 
    title.setAttribute('data-i18n', it.key+'.title'); 
    title.textContent=t[state.lang][it.key+'.title']||''; 
    const meta=document.createElement('div'); 
    meta.className='course-meta'; 
    meta.setAttribute('data-i18n', it.key+'.meta'); 
    meta.textContent=t[state.lang][it.key+'.meta']||''; 
    const rating=document.createElement('div'); 
    rating.className='course-rating'; 
    const stars=document.createElement('span'); 
    stars.textContent=it.stars; 
    const rc=document.createElement('span'); 
    rc.className='rating-count'; 
    rc.setAttribute('data-i18n', it.key+'.rating_count'); 
    rc.textContent=t[state.lang][it.key+'.rating_count']||''; 
    rating.appendChild(stars); 
    rating.appendChild(document.createTextNode(' ')); 
    rating.appendChild(rc); 
    const price=document.createElement('div'); 
    price.className='course-price'; 
    price.setAttribute('data-i18n', it.key+'.price'); 
    price.textContent=t[state.lang][it.key+'.price']||''; 
    const btn=document.createElement('a'); 
    btn.className='btn ghost'; 
    btn.href='#register'; 
    btn.setAttribute('data-i18n','courses.item.cta'); 
    btn.textContent=t[state.lang]['courses.item.cta']||''; 
    body.appendChild(title); 
    body.appendChild(meta); 
    body.appendChild(rating); 
    body.appendChild(price); 
    body.appendChild(btn); 
    card.appendChild(thumb); 
    card.appendChild(body); 
    grid.appendChild(card); 
  }); 
}
async function renderBlogs(){ 
  if(!db.conn) return; 
  
  // No loading state for blog rendering - it's fast
  const list=await getAll('blogs'); 
  const main=document.getElementById('blogMain'); 
  if(!main) return; 
  
  main.innerHTML=''; 
  list.forEach(it=>{ 
    const art=document.createElement('article'); 
    art.className='card blog-item'; 
    art.setAttribute('data-category', it.cat); 
    const h=document.createElement('h3'); 
    h.setAttribute('data-i18n', it.key+'.title'); 
    h.textContent=t[state.lang][it.key+'.title']||''; 
    const p=document.createElement('p'); 
    p.setAttribute('data-i18n', it.key+'.copy'); 
    p.textContent=t[state.lang][it.key+'.copy']||''; 
    const a=document.createElement('a'); 
    a.className='btn ghost'; 
    a.href='#blogs'; 
    a.setAttribute('data-i18n', it.key+'.cta'); 
    a.textContent=t[state.lang][it.key+'.cta']||''; 
    art.appendChild(h); 
    art.appendChild(p); 
    art.appendChild(a); 
    main.appendChild(art); 
  }); 
  applyBlogFilter(); 
}
function saveMessage(m){ if(!db.conn) return; put('messages', m); }
function saveSubscription(s){ if(!db.conn) return; put('subscriptions', s); }

function setError(message) {
  state.error = message;
  const errorEl = document.getElementById('errorMessage');
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.classList.remove('hidden');
    setTimeout(() => {
      errorEl.classList.add('hidden');
      state.error = null;
    }, 5000);
  }
}

function hashPassword(password) {
  return btoa(password.split('').reverse().join(''));
}

async function registerUser(name, email, password) {
  try {
    // Quick validation before showing loading
    if (!name || !email || !password) {
      setError(state.lang === 'id' ? 'Semua field harus diisi' : 'All fields are required');
      return false;
    }
    
    if (password.length < 6) {
      setError(state.lang === 'id' ? 'Kata sandi minimal 6 karakter' : 'Password must be at least 6 characters');
      return false;
    }
    
    // Check if database is ready
    if (!dbInitialized) {
      setError(state.lang === 'id' ? 'Database belum siap' : 'Database not ready');
      return false;
    }
    
    setLoading(true);
    
    // Add a minimum loading time for better UX (reduced from 800ms)
    const startTime = Date.now();
    
    const existing = await new Promise((res, rej) => {
      const r = tx('users', 'readonly').get(email);
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
    
    if (existing) {
      setError(state.lang === 'id' ? 'Email sudah terdaftar' : 'Email already registered');
      setLoading(false);
      return false;
    }
    
    const user = {
      email,
      name,
      password: hashPassword(password),
      createdAt: Date.now(),
      role: 'student'
    };
    
    const profile = {
      email,
      name,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=00ff41&color=000`,
      bio: '',
      preferences: {
        theme: state.theme,
        language: state.lang
      }
    };
    
    await put('users', user);
    await put('profiles', profile);
    
    state.user = user;
    storage.setItem('user', JSON.stringify(user));
    
    // Ensure minimum loading time (reduced to 400ms)
    const elapsed = Date.now() - startTime;
    const minTime = 400;
    if (elapsed < minTime) {
      await new Promise(resolve => setTimeout(resolve, minTime - elapsed));
    }
    
    setLoading(false);
    window.location.hash = '#dashboard';
    return true;
  } catch (error) {
    setLoading(false);
    setError(state.lang === 'id' ? 'Gagal mendaftar' : 'Registration failed');
    return false;
  }
}

async function signInUser(email, password) {
  try {
    // Quick validation
    if (!email || !password) {
      setError(state.lang === 'id' ? 'Email dan kata sandi harus diisi' : 'Email and password are required');
      return false;
    }
    
    // Check if database is ready
    if (!dbInitialized) {
      setError(state.lang === 'id' ? 'Database belum siap' : 'Database not ready');
      return false;
    }
    
    setLoading(true);
    
    // Add minimum loading time (reduced from 600ms)
    const startTime = Date.now();
    
    const user = await new Promise((res, rej) => {
      const r = tx('users', 'readonly').get(email);
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
    
    if (!user || user.password !== hashPassword(password)) {
      setError(state.lang === 'id' ? 'Email atau kata sandi salah' : 'Invalid email or password');
      setLoading(false);
      return false;
    }
    
    state.user = user;
    storage.setItem('user', JSON.stringify(user));
    
    const profile = await new Promise((res, rej) => {
      const r = tx('profiles', 'readonly').get(email);
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
    
    if (profile && profile.preferences) {
      state.theme = profile.preferences.theme || state.theme;
      state.lang = profile.preferences.language || state.lang;
      applyTheme();
      applyLang();
    }
    
    // Ensure minimum loading time (reduced to 300ms)
    const elapsed = Date.now() - startTime;
    const minTime = 300;
    if (elapsed < minTime) {
      await new Promise(resolve => setTimeout(resolve, minTime - elapsed));
    }
    
    setLoading(false);
    window.location.hash = '#dashboard';
    return true;
  } catch (error) {
    setLoading(false);
    setError(state.lang === 'id' ? 'Gagal masuk' : 'Sign in failed');
    return false;
  }
}

function signOutUser() {
  state.user = null;
  storage.removeItem('user');
  window.location.hash = '#home';
}

function updateUserProfile(updates) {
  if (!state.user) return;
  
  return new Promise(async (res, rej) => {
    try {
      const profile = await new Promise((resolve, reject) => {
        const r = tx('profiles', 'readonly').get(state.user.email);
        r.onsuccess = () => resolve(r.result);
        r.onerror = () => reject(r.error);
      });
      
      if (profile) {
        const updatedProfile = { ...profile, ...updates };
        await put('profiles', updatedProfile);
        res(updatedProfile);
      }
    } catch (error) {
      rej(error);
    }
  });
}

function updateAuthUI() {
  const authLinks = document.querySelectorAll('.auth-link');
  const userMenu = document.getElementById('userMenu');
  const userName = document.getElementById('userName');
  
  authLinks.forEach(link => {
    const route = link.getAttribute('data-route');
    const isAuthRoute = route === 'signin' || route === 'register';
    const isUserRoute = route === 'dashboard' || route === 'profile' || route === 'theme-editor';
    
    if (state.user) {
      if (isAuthRoute) link.style.display = 'none';
      if (isUserRoute) link.style.display = '';
    } else {
      if (isAuthRoute) link.style.display = '';
      if (isUserRoute) link.style.display = 'none';
    }
  });
  
  if (userMenu) {
    userMenu.classList.toggle('hidden', !state.user);
    if (state.user && userName) {
      userName.textContent = state.user.name;
    }
  }
}

async function renderDashboard() {
  if (!state.user) {
    window.location.hash = '#signin';
    return;
  }
  
  const profile = await new Promise((res, rej) => {
    const r = tx('profiles', 'readonly').get(state.user.email);
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
  
  const dashboard = document.getElementById('dashboard');
  if (!dashboard) return;
  
  dashboard.innerHTML = `
    <div class="dashboard-container">
      <aside class="dashboard-sidebar">
        <div class="profile-card">
          <img src="${profile?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(state.user.name)}&background=00ff41&color=000`}" alt="Avatar" class="avatar">
          <h3>${state.user.name}</h3>
          <p>${state.user.email}</p>
        </div>
        <nav class="dashboard-nav">
          <a href="#profile" class="dashboard-link" data-route="profile">
            <span data-i18n="dashboard.profile">Profile</span>
          </a>
          <a href="#theme-editor" class="dashboard-link" data-route="theme-editor">
            <span data-i18n="dashboard.theme_editor">Theme Editor</span>
          </a>
          <button id="signoutBtn" class="dashboard-link danger">
            <span data-i18n="dashboard.signout">Sign Out</span>
          </button>
        </nav>
      </aside>
      <main class="dashboard-main">
        <h2 data-i18n="dashboard.welcome">Welcome back, ${state.user.name}!</h2>
        <div class="dashboard-stats">
          <div class="stat-card">
            <h3 data-i18n="dashboard.courses_enrolled">Courses Enrolled</h3>
            <span class="stat-number">0</span>
          </div>
          <div class="stat-card">
            <h3 data-i18n="dashboard.progress">Progress</h3>
            <span class="stat-number">0%</span>
          </div>
          <div class="stat-card">
            <h3 data-i18n="dashboard.achievements">Achievements</h3>
            <span class="stat-number">0</span>
          </div>
        </div>
      </main>
    </div>
  `;
  
  const signoutBtn = dashboard.querySelector('#signoutBtn');
  if (signoutBtn) signoutBtn.addEventListener('click', signOutUser);
}

async function renderProfile() {
  if (!state.user) {
    window.location.hash = '#signin';
    return;
  }
  
  const profile = await new Promise((res, rej) => {
    const r = tx('profiles', 'readonly').get(state.user.email);
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
  
  const profileSection = document.getElementById('profile');
  if (!profileSection) return;
  
  profileSection.innerHTML = `
    <div class="profile-container">
      <h2 data-i18n="profile.title">Profile Settings</h2>
      <form id="profileForm" class="profile-form">
        <div class="form-group">
          <label data-i18n="profile.name">Name</label>
          <input type="text" id="profileName" value="${profile?.name || state.user.name}" required>
        </div>
        <div class="form-group">
          <label data-i18n="profile.email">Email</label>
          <input type="email" value="${state.user.email}" disabled>
        </div>
        <div class="form-group">
          <label data-i18n="profile.bio">Bio</label>
          <textarea id="profileBio" rows="4">${profile?.bio || ''}</textarea>
        </div>
        <div class="form-group">
          <label data-i18n="profile.theme">Theme</label>
          <select id="profileTheme">
            <option value="dark" ${state.theme === 'dark' ? 'selected' : ''}>Dark</option>
            <option value="light" ${state.theme === 'light' ? 'selected' : ''}>Light</option>
          </select>
        </div>
        <div class="form-group">
          <label data-i18n="profile.language">Language</label>
          <select id="profileLanguage">
            <option value="en" ${state.lang === 'en' ? 'selected' : ''}>English</option>
            <option value="id" ${state.lang === 'id' ? 'selected' : ''}>Indonesia</option>
          </select>
        </div>
        <button type="submit" class="btn primary" data-i18n="profile.save">Save Changes</button>
      </form>
    </div>
  `;
  
  const profileForm = profileSection.querySelector('#profileForm');
  if (profileForm) {
    profileForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('profileName').value;
      const bio = document.getElementById('profileBio').value;
      const theme = document.getElementById('profileTheme').value;
      const language = document.getElementById('profileLanguage').value;
      
      try {
        await updateUserProfile({ name, bio });
        
        if (theme !== state.theme) {
          state.theme = theme;
          storage.setItem('theme', theme);
          applyTheme();
        }
        
        if (language !== state.lang) {
          state.lang = language;
          storage.setItem('lang', language);
          applyLang();
        }
        
        setError(state.lang === 'id' ? 'Profil diperbarui' : 'Profile updated');
      } catch (error) {
        setError(state.lang === 'id' ? 'Gagal memperbarui profil' : 'Failed to update profile');
      }
    });
  }
}

function renderThemeEditor() {
  if (!state.user) {
    window.location.hash = '#signin';
    return;
  }
  
  const themeEditor = document.getElementById('theme-editor');
  if (!themeEditor) return;
  
  themeEditor.innerHTML = `
    <div class="theme-editor-container">
      <h2 data-i18n="theme_editor.title">Theme Editor</h2>
      <div class="theme-editor-layout">
        <aside class="theme-sidebar">
          <h3 data-i18n="theme_editor.elements">Elements</h3>
          <div class="theme-elements">
            <div class="theme-element" draggable="true" data-element="header">
              <span data-i18n="theme_editor.header">Header</span>
            </div>
            <div class="theme-element" draggable="true" data-element="nav">
              <span data-i18n="theme_editor.navigation">Navigation</span>
            </div>
            <div class="theme-element" draggable="true" data-element="hero">
              <span data-i18n="theme_editor.hero">Hero Section</span>
            </div>
            <div class="theme-element" draggable="true" data-element="card">
              <span data-i18n="theme_editor.card">Card</span>
            </div>
            <div class="theme-element" draggable="true" data-element="button">
              <span data-i18n="theme_editor.button">Button</span>
            </div>
            <div class="theme-element" draggable="true" data-element="footer">
              <span data-i18n="theme_editor.footer">Footer</span>
            </div>
          </div>
        </aside>
        <main class="theme-preview">
          <div class="theme-canvas" id="themeCanvas">
            <div class="preview-header">Header</div>
            <div class="preview-nav">Navigation</div>
            <div class="preview-hero">Hero Section</div>
            <div class="preview-card">Card</div>
            <div class="preview-button">Button</div>
            <div class="preview-footer">Footer</div>
          </div>
        </main>
        <aside class="theme-properties">
          <h3 data-i18n="theme_editor.properties">Properties</h3>
          <div class="theme-props" id="themeProps">
            <p data-i18n="theme_editor.select_element">Select an element to edit properties</p>
          </div>
          <div class="theme-actions">
            <button class="btn primary" id="saveTheme" data-i18n="theme_editor.save">Save Theme</button>
            <button class="btn ghost" id="resetTheme" data-i18n="theme_editor.reset">Reset</button>
          </div>
        </aside>
      </div>
    </div>
  `;
  
  initDragAndDrop();
}

function initDragAndDrop() {
  const elements = document.querySelectorAll('.theme-element');
  const canvas = document.getElementById('themeCanvas');
  
  elements.forEach(element => {
    element.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', e.target.getAttribute('data-element'));
    });
  });
  
  if (canvas) {
    canvas.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
    
    canvas.addEventListener('drop', (e) => {
      e.preventDefault();
      const elementType = e.dataTransfer.getData('text/plain');
      const previewElement = canvas.querySelector(`.preview-${elementType}`);
      if (previewElement) {
        previewElement.classList.add('selected');
        showElementProperties(elementType);
      }
    });
  }
}

function showElementProperties(elementType) {
  const propsDiv = document.getElementById('themeProps');
  if (!propsDiv) return;
  
  const properties = {
    header: ['background-color', 'color', 'padding', 'border-radius'],
    nav: ['background-color', 'color', 'font-size', 'padding'],
    hero: ['background-color', 'color', 'min-height', 'padding'],
    card: ['background-color', 'border-color', 'border-radius', 'padding'],
    button: ['background-color', 'color', 'border-radius', 'padding'],
    footer: ['background-color', 'color', 'padding', 'border-radius']
  };
  
  const elementProps = properties[elementType] || [];
  
  propsDiv.innerHTML = `
    <h4>${elementType.charAt(0).toUpperCase() + elementType.slice(1)} Properties</h4>
    ${elementProps.map(prop => `
      <div class="prop-group">
        <label>${prop}:</label>
        <input type="text" class="prop-input" data-prop="${prop}" placeholder="Enter value">
      </div>
    `).join('')}
  `;
  
  propsDiv.querySelectorAll('.prop-input').forEach(input => {
    input.addEventListener('change', (e) => {
      const prop = e.target.getAttribute('data-prop');
      const value = e.target.value;
      applyElementStyle(elementType, prop, value);
    });
  });
}

function applyElementStyle(elementType, property, value) {
  const root = document.documentElement;
  const cssVar = `--${elementType}-${property.replace('-', '')}`;
  root.style.setProperty(cssVar, value);
}
