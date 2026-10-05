/* =========================================================================
   LKPD INTERAKTIF — STRUKTUR TREE DAN HIERARKI
   Informatika Kelas IX / Fase D — Berpikir Komputasional
   SMP Negeri 19 Kota Bekasi
   -------------------------------------------------------------------------
   Seluruh logika permainan berada di berkas ini.
   Guru dapat mengubah identitas, fitur, bobot bintang, dan warna
   hanya melalui objek CONFIG di bawah. Data soal berada pada konstanta
   DATA_* tepat setelah CONFIG.
   ========================================================================= */

/* =============================== 1. CONFIG =============================== */
const CONFIG = {
  // === IDENTITAS ===
  SCHOOL_NAME: "SMP Negeri 19 Kota Bekasi",
  SUBJECT: "Informatika",
  GRADE: "Kelas IX / Fase D",
  TOPIC: "Struktur Tree dan Hierarki",
  FOOTER_TEXT: "LKPD Informatika Kelas 9 · Struktur Tree dan Hierarki · © 2026 SMP Negeri 19 Kota Bekasi",

  // === FITUR ===
  ENABLE_TIMER: true,
  TIMER_SECONDS: 60,
  ENABLE_SOUND: true,
  ENABLE_HINTS: true,
  ENABLE_TEACHER_MODE: true,
  ENABLE_PRINT: true,
  ENABLE_DOWNLOAD_TXT: true,
  SHUFFLE_QUESTIONS: true,
  SHUFFLE_CARDS: true,

  // === STORAGE ===
  STORAGE_KEY: "lkpd_tree_progress_v1",

  // === BOBOT BINTANG ===
  STARS: {
    THREE_STARS_MAX_MISTAKES: 0,
    TWO_STARS_MAX_MISTAKES: 3,
    ONE_STAR_MIN_CORRECT: 1
  },

  // === WARNA (override CSS variables) ===
  COLOR_PRIMARY: "#1F3B73",
  COLOR_ACCENT: "#2E6BD6",
  COLOR_SUCCESS: "#2E6B3E",
  COLOR_DANGER: "#C0392B"
};

/* ============================ 2. DATA PERMAINAN ========================== */

/* --- Misi 1: Kartu Hierarki (LKPD 1) --- */
const M1_CARDS = [
  { id: "c-root",        label: "SMP Nusantara 1",   level: 0 },
  { id: "c-9a",          label: "Kelas 9A",          level: 1 },
  { id: "c-9b",          label: "Kelas 9B",          level: 1 },
  { id: "c-osis",        label: "OSIS",              level: 1 },
  { id: "c-ketua",       label: "Ketua Kelas",       level: 2 },
  { id: "c-wakil",       label: "Wakil Kelas",       level: 2 },
  { id: "c-sekretaris",  label: "Sekretaris",        level: 2 },
  { id: "c-bendahara",   label: "Bendahara",         level: 2 },
  { id: "c-acara",       label: "Seksi Acara",       level: 2 },
  { id: "c-dokumentasi", label: "Seksi Dokumentasi", level: 2 }
];

const M1_SLOTS = [
  { id: "s-root", level: 0 },
  { id: "s-l1a",  level: 1 },
  { id: "s-l1b",  level: 1 },
  { id: "s-l1c",  level: 1 },
  { id: "s-l2a",  level: 2 },
  { id: "s-l2b",  level: 2 },
  { id: "s-l2c",  level: 2 },
  { id: "s-l2d",  level: 2 },
  { id: "s-l2e",  level: 2 },
  { id: "s-l2f",  level: 2 }
];

/* --- Misi 2: Folder Digital (LKPD 2) --- */
const M2_FOLDERS = ["Informatika", "Matematika", "IPA", "Pribadi"];

const M2_FILES = [
  { id: "f1", label: "Tugas1_Tree.docx",       target: "Informatika", isFolder: false },
  { id: "f2", label: "Tugas2_Algoritma.docx",  target: "Informatika", isFolder: false },
  { id: "f3", label: "Gambar",                 target: "Informatika", isFolder: true  },
  { id: "f4", label: "PR_BangunRuang.pdf",     target: "Matematika",  isFolder: false },
  { id: "f5", label: "Laporan_Percobaan.docx", target: "IPA",         isFolder: false },
  { id: "f6", label: "Jadwal_Kelas.xlsx",      target: "Pribadi",     isFolder: false },
  { id: "f7", label: "Lagu.mp3",               target: "Pribadi",     isFolder: false },
  { id: "f8", label: "Foto_Liburan.jpg",       target: "Pribadi",     isFolder: false }
];

const M2_PATH_BENAR = "tugas_sekolah/informatika/tugas1_tree.docx";

/* --- Misi 3: Jejak Path (6 pertanyaan, LKPD 3) --- */
const M3_QUESTIONS = [
  {
    teks: "Apa akar (root) dari struktur di atas?",
    opsi: ["Kelas 9", "Sekolah", "9A", "Wakil"],
    benar: 1,
    penjelasan: "Akar (root) adalah simpul (node) paling atas pada struktur pohon. Pada struktur di atas, 'Sekolah' berada di posisi paling atas."
  },
  {
    teks: "Sebutkan semua daun (leaf).",
    opsi: [
      "7A, 7B, 8A, 8B, 9A",
      "7A, 7B, 8A, 8B, 9A, Ketua, Wakil",
      "Sekolah, Kelas 9",
      "Ketua, Wakil"
    ],
    benar: 1,
    penjelasan: "Daun (leaf) adalah simpul yang tidak memiliki anak (child). 7A, 7B, 8A, 8B, 9A, Ketua, dan Wakil semuanya tidak punya anak."
  },
  {
    teks: "Apa induk (parent) dari Ketua?",
    opsi: ["9A", "9B", "Kelas 9", "Sekolah"],
    benar: 1,
    penjelasan: "Ketua berada tepat satu tingkat di bawah 9B, sehingga 9B adalah induk (parent)-nya."
  },
  {
    teks: "Apa saudara (sibling) dari 9A?",
    opsi: ["7A", "8A", "9B", "Ketua"],
    benar: 2,
    penjelasan: "Saudara (sibling) adalah simpul yang memiliki induk (parent) sama. 9A dan 9B sama-sama anak dari Kelas 9."
  },
  {
    teks: "Tuliskan path (jalur) dari Sekolah ke Wakil (pilih urutan yang benar):",
    opsi: [
      "Sekolah → Kelas 9 → 9A → Wakil",
      "Sekolah → Kelas 9 → 9B → Wakil",
      "Sekolah → 9B → Wakil",
      "Sekolah → Wakil → 9B"
    ],
    benar: 1,
    penjelasan: "Path (jalur) adalah urutan simpul dari akar menuju tujuan. Wakil berada di dalam 9B, dan 9B berada di dalam Kelas 9."
  },
  {
    teks: "Berapa tingkat (level) pada struktur tersebut?",
    opsi: ["2", "3", "4", "5"],
    benar: 2,
    penjelasan: "Tingkat dihitung dari akar. Sekolah = tingkat 0, Kelas 7/8/9 = tingkat 1, 7A/7B/8A/8B/9A/9B = tingkat 2, Ketua/Wakil = tingkat 3. Jadi ada 4 tingkat (tingkat 0 sampai tingkat 3)."
  }
];

/* --- Misi 4: Tantangan Cepat (5 soal campuran) --- */
const M4_QUESTIONS = [
  {
    tipe: "pg",
    teks: "Bagian paling atas pada struktur pohon disebut ....",
    opsi: ["daun", "akar", "cabang", "path"],
    benar: 1,
    penjelasan: "Simpul paling atas pada struktur pohon disebut akar (root)."
  },
  {
    tipe: "isian",
    teks: "Jika path D:\\Sekolah\\Kelas9\\Informatika\\Tugas.docx, maka induk (parent) folder Informatika adalah ....",
    jawaban: ["kelas9"],
    penjelasan: "Folder Informatika berada tepat di dalam folder Kelas9, sehingga Kelas9 adalah induk (parent)-nya."
  },
  {
    tipe: "uraian",
    teks: "Mengapa struktur pohon membantu kita mencari file lebih cepat?",
    kataKunci: ["tertingkat", "terkelompok", "hierarki", "urut", "jalur", "mudah dicari", "tidak bercampur"],
    penjelasan: "Struktur pohon membuat berkas tersusun bertingkat dan terkelompok, sehingga berkas mudah dicari dan tidak bercampur dalam satu tempat."
  },
  {
    tipe: "pg",
    teks: "Istilah Inggris untuk \"daun\" dalam struktur pohon adalah ....",
    opsi: ["root", "node", "leaf", "path"],
    benar: 2,
    penjelasan: "Leaf berarti daun, yaitu simpul yang tidak memiliki anak (child)."
  },
  {
    tipe: "pg",
    teks: "Contoh hierarki di sekolah adalah ....",
    opsi: [
      "SMP Nusantara 1 → Kelas 9 → 9A",
      "Tugas1_Tree.docx → Tugas2_Algoritma.docx",
      "Gambar → Lagu.mp3",
      "Semua jawaban benar"
    ],
    benar: 0,
    penjelasan: "Hierarki menunjukkan tingkatan dari atas ke bawah. Contoh yang benar adalah SMP Nusantara 1 → Kelas 9 → 9A."
  }
];

/* --- Teks petunjuk (hint) tiap misi --- */
const HINTS = {
  1: "Perhatikan: induk (parent) harus berada satu tingkat (level) di atas anak (child). Akar (root) adalah simpul paling atas dan tidak punya induk.",
  2: "Perhatikan jenis berkasnya: tugas Informatika, tugas Matematika, laporan IPA, atau keperluan pribadi. Path (jalur) ditulis dari folder paling luar sampai nama berkas.",
  3: "Daun (leaf) adalah simpul yang tidak punya anak (child). Saudara (sibling) punya induk (parent) yang sama. Tingkat (level) dihitung mulai dari akar = tingkat 0.",
  4: "Baca soal dengan teliti. Untuk path, induk (parent) adalah folder yang berada tepat satu tingkat di atas folder tersebut."
};

/* ============================ 3. TEKS DWIBAHASA ========================== */
const I18N = {
  id: {
    startBtn: "Mulai Misi (Start Mission)",
    next: "Lanjut (Next)",
    back: "Kembali (Back)",
    retry: "Ulangi (Retry)",
    hint: "Petunjuk (Hint)",
    report: "Lihat Laporan (Report)"
  },
  en: {
    startBtn: "Start Mission (Mulai Misi)",
    next: "Next (Lanjut)",
    back: "Back (Kembali)",
    retry: "Retry (Ulangi)",
    hint: "Hint (Petunjuk)",
    report: "View Report (Lihat Laporan)"
  }
};

/* ============================== 4. STATE ================================= */
const defaultState = () => ({
  nama: "",
  lang: "id",
  sound: true,
  waktuMulai: null,
  waktuSelesai: null,
  misi: {
    1: { selesai: false, bintang: 0, kesalahan: 0, jawaban: {} },
    2: { selesai: false, bintang: 0, kesalahan: 0, jawaban: {} },
    3: { selesai: false, bintang: 0, kesalahan: 0, jawaban: {} },
    4: { selesai: false, bintang: 0, kesalahan: 0, skor: 0, jawaban: {} }
  }
});

let state = defaultState();

/* State sementara permainan (tidak disimpan ke localStorage) */
const runtime = {
  m1Placed: 0,
  m2Placed: 0,
  m2PathBenar: false,
  m3Order: [],
  m3Index: 0,
  m3Correct: 0,
  m3Answered: false,
  m4Order: [],
  m4Index: 0,
  m4Benar: 0,
  m4TimerId: null,
  m4Sisa: 0,
  m4Aktif: false,
  selectedCard: null,
  currentScreen: 0
};

/* ============================== 5. UTILITAS ============================== */

/** Mengacak isi array (Fisher–Yates) tanpa mengubah array asli. */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Membuat elemen bintang SVG inline. */
function starSVG(filled, extraClass) {
  const cls = "star" + (filled ? " filled" : "") + (extraClass ? " " + extraClass : "");
  return '<svg class="' + cls + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
    '<path d="M12 2.6l2.95 5.98 6.6.96-4.78 4.65 1.13 6.57L12 17.66l-5.9 3.1 1.13-6.57L2.45 9.54l6.6-.96L12 2.6z"/></svg>';
}

/** Membuat deretan bintang 0–3. */
function starRow(jumlah, besar) {
  let html = '<span class="mission-stars" role="img" aria-label="' + jumlah + ' dari 3 bintang">';
  for (let i = 1; i <= 3; i++) {
    html += starSVG(i <= jumlah, besar ? "star-large" : "");
  }
  return html + "</span>";
}

/** Format durasi milidetik menjadi teks "X menit Y detik". */
function formatDurasi(ms) {
  if (!ms || ms < 0) return "-";
  const totalDetik = Math.floor(ms / 1000);
  const menit = Math.floor(totalDetik / 60);
  const detik = totalDetik % 60;
  if (menit === 0) return detik + " detik";
  return menit + " menit " + detik + " detik";
}

/** Normalisasi teks jawaban singkat: huruf kecil, tanpa spasi & tanda baca. */
function normalisasiTeks(s) {
  return String(s).toLowerCase().replace(/\s+/g, "").replace(/[^a-z0-9]/g, "");
}

/** Normalisasi path: samakan pemisah, buang huruf drive, huruf kecil semua. */
function normalisasiPath(s) {
  return String(s)
    .trim()
    .toLowerCase()
    .replace(/\\/g, "/")
    .replace(/^[a-z]:\//, "")
    .replace(/^\/+/, "")
    .replace(/\/+/g, "/")
    .replace(/\/$/, "");
}

/** Bintang berdasarkan jumlah kesalahan (Misi 1 & 2). */
function bintangDariKesalahan(kesalahan) {
  if (kesalahan <= CONFIG.STARS.THREE_STARS_MAX_MISTAKES) return 3;
  if (kesalahan <= CONFIG.STARS.TWO_STARS_MAX_MISTAKES) return 2;
  return 1;
}

/** Bintang untuk Misi 3 berdasarkan jumlah jawaban benar. */
function bintangM3(benar, total) {
  if (benar >= total) return 3;
  if (benar >= Math.ceil(total * 0.6)) return 2;
  if (benar >= CONFIG.STARS.ONE_STAR_MIN_CORRECT) return 1;
  return 0;
}

/** Bintang untuk Misi 4 berdasarkan skor 0–100. */
function bintangM4(skor) {
  if (skor >= 100) return 3;
  if (skor >= 60) return 2;
  if (skor >= 20) return 1;
  return 0;
}

/* ============================== 6. SUARA ================================= */
let audioCtx = null;

function playTone(freq, durasi, tipe) {
  if (!CONFIG.ENABLE_SOUND || !state.sound) return;
  try {
    if (!audioCtx) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      audioCtx = new Ctx();
    }
    if (audioCtx.state === "suspended") audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = tipe || "sine";
    osc.frequency.value = freq;
    const now = audioCtx.currentTime;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.14, now + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + durasi);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + durasi + 0.02);
  } catch (err) {
    /* Perangkat tidak mendukung Web Audio API — abaikan dengan aman. */
  }
}

function soundCorrect() {
  playTone(880, 0.14, "sine");
  window.setTimeout(function () { playTone(1320, 0.18, "sine"); }, 110);
}

function soundWrong() {
  playTone(200, 0.26, "square");
}

function soundFinish() {
  playTone(660, 0.14, "sine");
  window.setTimeout(function () { playTone(880, 0.14, "sine"); }, 130);
  window.setTimeout(function () { playTone(1180, 0.24, "sine"); }, 260);
}

/* ========================== 7. PENYIMPANAN DATA ========================== */

function simpanState() {
  try {
    localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    /* localStorage penuh atau dinonaktifkan — aplikasi tetap berjalan. */
  }
}

function muatState() {
  try {
    const raw = localStorage.getItem(CONFIG.STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return;
    const fresh = defaultState();
    state = Object.assign(fresh, parsed);
    state.misi = Object.assign(fresh.misi, parsed.misi || {});
    for (let n = 1; n <= 4; n++) {
      state.misi[n] = Object.assign(defaultState().misi[n], parsed.misi ? parsed.misi[n] : {});
    }
  } catch (err) {
    state = defaultState();
  }
}

/** Fungsi global untuk guru: ketik lkpdReset() di Console browser. */
window.lkpdReset = function () {
  try { localStorage.removeItem(CONFIG.STORAGE_KEY); } catch (err) { /* abaikan */ }
  state = defaultState();
  resetSemuaRuntime();
  terapkanBahasa();
  perbaruiHeaderProgress();
  showScreen(0);
  showToast("Semua data telah dihapus. (All data cleared.)", "ok");
};

function resetSemuaRuntime() {
  hentikanTimerM4();
  runtime.m1Placed = 0;
  runtime.m2Placed = 0;
  runtime.m2PathBenar = false;
  runtime.m3Index = 0;
  runtime.m3Correct = 0;
  runtime.m3Answered = false;
  runtime.m4Index = 0;
  runtime.m4Benar = 0;
  runtime.m4Aktif = false;
  runtime.selectedCard = null;
}

/* ========================== 8. NAVIGASI SCREEN =========================== */

function showScreen(nomor) {
  document.querySelectorAll(".screen").forEach(function (s) { s.classList.remove("active"); });
  const target = document.getElementById("screen-" + nomor);
  if (target) target.classList.add("active");
  runtime.currentScreen = nomor;
  window.scrollTo(0, 0);

  if (nomor === 1) renderPetaMisi();
  if (nomor === 2) siapkanMisi1();
  if (nomor === 3) siapkanMisi2();
  if (nomor === 4) siapkanMisi3();
  if (nomor === 5) siapkanMisi4();
  if (nomor === 6) renderLaporan();
}

function perbaruiHeaderProgress() {
  let selesai = 0;
  let bintang = 0;
  for (let n = 1; n <= 4; n++) {
    if (state.misi[n].selesai) selesai++;
    bintang += state.misi[n].bintang || 0;
  }
  const elCount = document.getElementById("hdrMissionCount");
  const elStars = document.getElementById("hdrStars");
  if (elCount) elCount.textContent = selesai + "/4";
  if (elStars) {
    elStars.setAttribute("aria-label", "Total bintang " + bintang + " dari 12");
    let html = "";
    for (let i = 1; i <= 3; i++) html += starSVG(i <= Math.min(bintang, 12));
    html += '<span style="font-size:12px;margin-left:4px">' + bintang + "/12</span>";
    elStars.innerHTML = html;
  }
}

/* ============================= 9. MODAL & TOAST ========================== */

let feedbackCallback = null;

function showFeedbackModal(judul, isiHTML, onClose) {
  document.getElementById("feedbackTitle").textContent = judul;
  document.getElementById("feedbackBody").innerHTML = isiHTML;
  feedbackCallback = onClose || null;
  document.getElementById("feedbackModal").hidden = false;
  document.getElementById("btnFeedbackOk").focus();
}

function closeFeedbackModal() {
  document.getElementById("feedbackModal").hidden = true;
  const cb = feedbackCallback;
  feedbackCallback = null;
  if (typeof cb === "function") cb();
}

function showToast(pesan, tipe) {
  const wrap = document.getElementById("toastWrap");
  if (!wrap) return;
  const el = document.createElement("div");
  el.className = "toast" + (tipe ? " " + tipe : "");
  el.textContent = pesan;
  wrap.appendChild(el);
  window.setTimeout(function () {
    if (el.parentNode) el.parentNode.removeChild(el);
  }, 2000);
}

/* ========================== 10. SISTEM SERET-LEPAS ======================= */

const drag = {
  aktif: false,
  bergerak: false,
  sumber: null,
  payload: null,
  ghost: null,
  startX: 0,
  startY: 0
};

function jadikanDraggable(el, payload) {
  el.classList.add("draggable");
  el.setAttribute("tabindex", "0");
  el.setAttribute("role", "button");
  el.setAttribute("aria-label", "Kartu " + payload.label + ". Tekan Enter untuk memilih.");
  el.addEventListener("pointerdown", function (ev) { mulaiSeret(ev, el, payload); });
  el.addEventListener("keydown", function (ev) {
    if (ev.key === "Enter" || ev.key === " " || ev.key === "Spacebar") {
      ev.preventDefault();
      pilihKartu(el, payload);
    }
  });
}

function mulaiSeret(ev, el, payload) {
  if (typeof ev.button === "number" && ev.button !== 0) return;
  ev.preventDefault();
  drag.aktif = true;
  drag.bergerak = false;
  drag.sumber = el;
  drag.payload = payload;
  drag.startX = ev.clientX;
  drag.startY = ev.clientY;
  document.addEventListener("pointermove", saatSeret);
  document.addEventListener("pointerup", akhirSeret);
  document.addEventListener("pointercancel", akhirSeret);
}

function saatSeret(ev) {
  if (!drag.aktif) return;
  const dx = ev.clientX - drag.startX;
  const dy = ev.clientY - drag.startY;
  if (!drag.bergerak && Math.sqrt(dx * dx + dy * dy) < 6) return;

  if (!drag.bergerak) {
    drag.bergerak = true;
    buatGhost(ev);
    if (drag.sumber) drag.sumber.classList.add("is-dragging");
  }

  if (drag.ghost) {
    drag.ghost.style.left = ev.clientX + "px";
    drag.ghost.style.top = ev.clientY + "px";
  }
  sorotZona(ev.clientX, ev.clientY);
}

function buatGhost(ev) {
  if (!drag.sumber) return;
  const ghost = drag.sumber.cloneNode(true);
  ghost.removeAttribute("id");
  ghost.classList.add("drag-ghost");
  ghost.removeAttribute("tabindex");
  const rect = drag.sumber.getBoundingClientRect();
  ghost.style.width = rect.width + "px";
  ghost.style.left = ev.clientX + "px";
  ghost.style.top = ev.clientY + "px";
  document.body.appendChild(ghost);
  drag.ghost = ghost;
}

function akhirSeret(ev) {
  document.removeEventListener("pointermove", saatSeret);
  document.removeEventListener("pointerup", akhirSeret);
  document.removeEventListener("pointercancel", akhirSeret);

  if (!drag.aktif) return;
  const bergerak = drag.bergerak;
  const sumber = drag.sumber;
  const payload = drag.payload;

  if (drag.ghost && drag.ghost.parentNode) drag.ghost.parentNode.removeChild(drag.ghost);
  drag.ghost = null;
  if (sumber) sumber.classList.remove("is-dragging");
  hapusSorotan();

  drag.aktif = false;
  drag.bergerak = false;
  drag.sumber = null;
  drag.payload = null;

  if (bergerak) {
    const zona = zonaDiTitik(ev.clientX, ev.clientY);
    if (zona && payload) {
      tanganiDrop(zona, payload, sumber);
    }
  } else {
    pilihKartu(sumber, payload);
  }
}

function zonaDiTitik(x, y) {
  const el = document.elementFromPoint(x, y);
  if (!el) return null;
  return el.closest(".dropzone");
}

function sorotZona(x, y) {
  hapusSorotan();
  const zona = zonaDiTitik(x, y);
  if (zona) zona.classList.add("drop-hover");
}

function hapusSorotan() {
  document.querySelectorAll(".drop-hover").forEach(function (z) { z.classList.remove("drop-hover"); });
}

function pilihKartu(el, payload) {
  if (runtime.selectedCard && runtime.selectedCard.el === el) {
    el.classList.remove("selected");
    runtime.selectedCard = null;
    return;
  }
  if (runtime.selectedCard && runtime.selectedCard.el) {
    runtime.selectedCard.el.classList.remove("selected");
  }
  if (!el || !payload) return;
  el.classList.add("selected");
  runtime.selectedCard = { el: el, payload: payload };
  showToast('Kartu "' + payload.label + '" dipilih. Klik slot tujuan. (Selected.)');
}

function bersihkanPilihan() {
  if (runtime.selectedCard && runtime.selectedCard.el) {
    runtime.selectedCard.el.classList.remove("selected");
  }
  runtime.selectedCard = null;
}

function tanganiDrop(zona, payload, sumber) {
  const jenis = zona.dataset.zoneKind;
  if (jenis === "m1") dropM1(zona, payload, sumber);
  else if (jenis === "m2") dropM2(zona, payload, sumber);
  bersihkanPilihan();
}

/* ============================== 11. MISI 1 =============================== */

function siapkanMisi1() {
  const pool = document.getElementById("m1Pool");
  const tier0 = document.getElementById("m1Tier0");
  const tier1 = document.getElementById("m1Tier1");
  const tier2 = document.getElementById("m1Tier2");
  const fb = document.getElementById("m1Feedback");
  if (!pool || !tier0) return;

  fb.textContent = "";
  fb.className = "inline-feedback";
  pool.innerHTML = "";
  tier0.innerHTML = "";
  tier1.innerHTML = "";
  tier2.innerHTML = "";

  const kartu = CONFIG.SHUFFLE_CARDS ? shuffle(M1_CARDS) : M1_CARDS.slice();
  kartu.forEach(function (c) {
    const el = document.createElement("div");
    el.className = "card-chip";
    el.dataset.cardId = c.id;
    el.textContent = c.label;
    jadikanDraggable(el, { kind: "m1", id: c.id, label: c.label, level: c.level });
    pool.appendChild(el);
  });

  M1_SLOTS.forEach(function (slot) {
    const el = document.createElement("div");
    el.className = "slot dropzone";
    el.dataset.zoneKind = "m1";
    el.dataset.slot = slot.id;
    el.dataset.level = String(slot.level);
    el.setAttribute("tabindex", "0");
    el.setAttribute("role", "button");
    el.setAttribute("aria-label", "Slot tingkat " + slot.level + ". Tekan Enter untuk meletakkan kartu terpilih.");
    el.textContent = slot.level === 0 ? "Letakkan akar (root) di sini" : "Tingkat " + slot.level;
    el.addEventListener("click", function () { klikSlotM1(el); });
    el.addEventListener("keydown", function (ev) {
      if (ev.key === "Enter" || ev.key === " " || ev.key === "Spacebar") {
        ev.preventDefault();
        klikSlotM1(el);
      }
    });

    if (slot.level === 0) tier0.appendChild(el);
    else if (slot.level === 1) tier1.appendChild(el);
    else tier2.appendChild(el);
  });

  document.getElementById("m1Mistakes").textContent = String(state.misi[1].kesalahan || 0);
  runtime.m1Placed = 0;
  document.getElementById("btnNext1").disabled = !state.misi[1].selesai;

  if (state.misi[1].selesai) {
    fb.textContent = "Misi ini sudah selesai. Tekan Ulangi (Retry) untuk mencoba lagi.";
    fb.className = "inline-feedback ok";
  }
}

function klikSlotM1(slotEl) {
  if (!runtime.selectedCard) {
    showToast("Pilih satu kartu terlebih dahulu. (Select a card first.)");
    return;
  }
  tanganiDrop(slotEl, runtime.selectedCard.payload, runtime.selectedCard.el);
  bersihkanPilihan();
}

function pesanSalahM1(kartu, levelSlot) {
  if (kartu.level === 0) {
    return '"' + kartu.label + '" adalah akar (root). Akar tidak boleh diletakkan di bawah simpul lain.';
  }
  if (levelSlot === 0) {
    return '"' + kartu.label + '" bukan akar (root). Akar (root) adalah simpul paling atas, yaitu nama sekolah.';
  }
  if (kartu.level === 2 && levelSlot === 1) {
    return '"' + kartu.label + '" bukan anak langsung dari SMP Nusantara 1. "' + kartu.label + '" adalah anak (child) dari OSIS.';
  }
  if (kartu.level === 1 && levelSlot === 2) {
    return '"' + kartu.label + '" bukan anak dari OSIS. "' + kartu.label + '" berada satu tingkat di bawah sekolah, sejajar dengan OSIS.';
  }
  return 'Posisi "' + kartu.label + '" belum tepat. Perhatikan tingkat (level) simpulnya.';
}

function dropM1(zona, kartu, sumber) {
  if (state.misi[1].selesai) {
    showToast("Misi 1 sudah selesai. Tekan Ulangi (Retry) untuk bermain lagi.");
    return;
  }
  if (zona.classList.contains("filled")) {
    showToast("Slot ini sudah terisi. (This slot is already filled.)");
    return;
  }

  const levelSlot = Number(zona.dataset.level);
  const fb = document.getElementById("m1Feedback");

  if (kartu.level === levelSlot) {
    // Penempatan benar
    zona.classList.add("filled");
    zona.classList.remove("dropzone");
    zona.innerHTML = "";
    const chip = document.createElement("span");
    chip.className = "slot-chip";
    chip.textContent = kartu.label;
    zona.appendChild(chip);
    zona.removeAttribute("tabindex");

    if (sumber && sumber.parentNode) sumber.parentNode.removeChild(sumber);

    zona.classList.add("correct");
    window.setTimeout(function () { zona.classList.remove("correct"); }, 460);

    soundCorrect();
    runtime.m1Placed++;
    state.misi[1].jawaban[zona.dataset.slot] = kartu.label;
    simpanState();

    fb.textContent = "Tepat! (Correct!) " + kartu.label + " berada di tingkat yang benar.";
    fb.className = "inline-feedback ok";

    if (runtime.m1Placed >= M1_SLOTS.length) selesaikanMisi1();
  } else {
    // Penempatan salah
    state.misi[1].kesalahan++;
    document.getElementById("m1Mistakes").textContent = String(state.misi[1].kesalahan);
    simpanState();

    soundWrong();
    zona.classList.add("wrong");
    window.setTimeout(function () { zona.classList.remove("wrong"); }, 460);
    if (sumber) {
      sumber.classList.add("shake");
      window.setTimeout(function () { sumber.classList.remove("shake"); }, 460);
    }

    const pesan = pesanSalahM1(kartu, levelSlot);
    fb.textContent = "Belum tepat. (Not quite.) " + pesan;
    fb.className = "inline-feedback err";
  }
}

function selesaikanMisi1() {
  const kesalahan = state.misi[1].kesalahan;
  const bintang = bintangDariKesalahan(kesalahan);
  state.misi[1].selesai = true;
  state.misi[1].bintang = bintang;
  simpanState();
  perbaruiHeaderProgress();
  soundFinish();

  const ringkasan =
    '<p><strong>Misi Selesai! (Mission Complete!)</strong></p>' +
    '<p>Kesalahan: <strong>' + kesalahan + '</strong></p>' +
    '<p>Bintang: ' + starRow(bintang, true) + '</p>' +
    "<p><strong>Akar (Root)</strong> = SMP Nusantara 1</p>" +
    "<p><strong>Daun (Leaf)</strong> = Kelas 9A, Kelas 9B, Ketua Kelas, Wakil Kelas, Sekretaris, Bendahara, Seksi Acara, Seksi Dokumentasi</p>" +
    "<p><strong>Contoh path (jalur)</strong> = SMP Nusantara 1 &rarr; OSIS &rarr; Ketua Kelas</p>";

  showFeedbackModal("Misi 1 Selesai", ringkasan, function () {
    document.getElementById("btnNext1").disabled = false;
    const fb = document.getElementById("m1Feedback");
    fb.textContent = "Misi 1 selesai. Tekan Lanjut (Next) untuk ke Misi 2.";
    fb.className = "inline-feedback ok";
  });
}

/* ============================== 12. MISI 2 =============================== */

function siapkanMisi2() {
  const pool = document.getElementById("m2Pool");
  const folders = document.getElementById("m2Folders");
  const fb = document.getElementById("m2Feedback");
  const pathFb = document.getElementById("m2PathFeedback");
  if (!pool || !folders) return;

  fb.textContent = "";
  fb.className = "inline-feedback";
  pathFb.textContent = "";
  pathFb.className = "inline-feedback";
  pool.innerHTML = "";
  folders.innerHTML = "";
  document.getElementById("m2PathInput").value = state.misi[2].jawaban.path || "";
  document.getElementById("m2PathInput").classList.remove("benar", "salah");

  const berkas = CONFIG.SHUFFLE_CARDS ? shuffle(M2_FILES) : M2_FILES.slice();
  berkas.forEach(function (f) {
    const el = document.createElement("div");
    el.className = "card-chip" + (f.isFolder ? " is-folder" : "");
    el.textContent = f.label + (f.isFolder ? " (folder)" : "");
    jadikanDraggable(el, { kind: "m2", id: f.id, label: f.label, target: f.target });
    pool.appendChild(el);
  });

  const rootEl = document.createElement("div");
  rootEl.className = "folder-root";
  rootEl.innerHTML = '<span aria-hidden="true">[DIR]</span> Tugas_Sekolah';
  folders.appendChild(rootEl);

  const grid = document.createElement("div");
  grid.className = "folder-grid";

  M2_FOLDERS.forEach(function (nama) {
    const zone = document.createElement("div");
    zone.className = "folder-zone dropzone";
    zone.dataset.zoneKind = "m2";
    zone.dataset.folder = nama;
    zone.setAttribute("tabindex", "0");
    zone.setAttribute("role", "button");
    zone.setAttribute("aria-label", "Subfolder " + nama + ". Tekan Enter untuk meletakkan berkas terpilih.");

    const title = document.createElement("div");
    title.className = "folder-name";
    title.innerHTML = '<span aria-hidden="true">[DIR]</span> ' + nama;
    zone.appendChild(title);

    const items = document.createElement("div");
    items.className = "folder-items";
    zone.appendChild(items);

    zone.addEventListener("click", function () { klikFolderM2(zone); });
    zone.addEventListener("keydown", function (ev) {
      if (ev.key === "Enter" || ev.key === " " || ev.key === "Spacebar") {
        ev.preventDefault();
        klikFolderM2(zone);
      }
    });

    grid.appendChild(zone);
  });

  folders.appendChild(grid);

  document.getElementById("m2Mistakes").textContent = String(state.misi[2].kesalahan || 0);
  runtime.m2Placed = 0;
  runtime.m2PathBenar = false;
  document.getElementById("btnNext2").disabled = !state.misi[2].selesai;

  if (state.misi[2].selesai) {
    fb.textContent = "Misi ini sudah selesai. Tekan Ulangi (Retry) untuk mencoba lagi.";
    fb.className = "inline-feedback ok";
  }
}

function klikFolderM2(zone) {
  if (!runtime.selectedCard) {
    showToast("Pilih satu berkas terlebih dahulu. (Select a file first.)");
    return;
  }
  tanganiDrop(zone, runtime.selectedCard.payload, runtime.selectedCard.el);
  bersihkanPilihan();
}

function dropM2(zona, berkas, sumber) {
  if (state.misi[2].selesai) {
    showToast("Misi 2 sudah selesai. Tekan Ulangi (Retry) untuk bermain lagi.");
    return;
  }
  const folder = zona.dataset.folder;
  const fb = document.getElementById("m2Feedback");

  if (berkas.target === folder) {
    const items = zona.querySelector(".folder-items");
    if (items) {
      const item = document.createElement("div");
      item.className = "folder-item";
      item.textContent = berkas.label;
      items.appendChild(item);
    }
    if (sumber && sumber.parentNode) sumber.parentNode.removeChild(sumber);

    zona.classList.add("correct");
    window.setTimeout(function () { zona.classList.remove("correct"); }, 460);

    soundCorrect();
    runtime.m2Placed++;
    state.misi[2].jawaban[berkas.id] = folder;
    simpanState();

    fb.textContent = "Tepat! (Correct!) " + berkas.label + " diletakkan di folder " + folder + ".";
    fb.className = "inline-feedback ok";

    if (runtime.m2Placed >= M2_FILES.length) {
      showToast("Semua berkas sudah rapi. Sekarang isi soal path (jalur).", "ok");
      document.getElementById("m2PathInput").focus();
    }
  } else {
    state.misi[2].kesalahan++;
    document.getElementById("m2Mistakes").textContent = String(state.misi[2].kesalahan);
    simpanState();

    soundWrong();
    zona.classList.add("wrong");
    window.setTimeout(function () { zona.classList.remove("wrong"); }, 460);
    if (sumber) {
      sumber.classList.add("shake");
      window.setTimeout(function () { sumber.classList.remove("shake"); }, 460);
    }

    fb.textContent = "Belum tepat. (Not quite.) " + berkas.label + " kurang cocok di folder " + folder +
      ". Pikirkan jenis isinya: tugas sekolah, matematika, IPA, atau keperluan pribadi.";
    fb.className = "inline-feedback err";
  }
}

function periksaPathM2() {
  const input = document.getElementById("m2PathInput");
  const fb = document.getElementById("m2PathFeedback");
  const nilai = input.value;

  if (!nilai.trim()) {
    showToast("Tuliskan path (jalur) terlebih dahulu.");
    input.focus();
    return;
  }

  if (runtime.m2Placed < M2_FILES.length) {
    fb.textContent = "Rapikan dulu semua berkas ke subfolder yang tepat, lalu periksa path (jalur).";
    fb.className = "inline-feedback err";
    return;
  }

  if (state.misi[2].selesai) {
    showToast("Misi 2 sudah selesai.");
    return;
  }

  if (normalisasiPath(nilai) === M2_PATH_BENAR) {
    runtime.m2PathBenar = true;
    state.misi[2].jawaban.path = nilai.trim();
    simpanState();
    input.classList.remove("salah");
    input.classList.add("benar");
    soundCorrect();
    fb.textContent = "Tepat! (Correct!) Path (jalur) ditulis dari folder paling luar sampai nama berkas, dengan pemisah \\ atau /.";
    fb.className = "inline-feedback ok";
    selesaikanMisi2();
  } else {
    state.misi[2].kesalahan++;
    document.getElementById("m2Mistakes").textContent = String(state.misi[2].kesalahan);
    simpanState();
    input.classList.remove("benar");
    input.classList.add("salah");
    soundWrong();
    fb.textContent = "Belum tepat. (Not quite.) Susunannya: Tugas_Sekolah → Informatika → Tugas1_Tree.docx. " +
      "Contoh: D:\\Tugas_Sekolah\\Informatika\\Tugas1_Tree.docx";
    fb.className = "inline-feedback err";
  }
}

function selesaikanMisi2() {
  if (!runtime.m2PathBenar) return;
  const kesalahan = state.misi[2].kesalahan;
  const bintang = bintangDariKesalahan(kesalahan);
  state.misi[2].selesai = true;
  state.misi[2].bintang = bintang;
  simpanState();
  perbaruiHeaderProgress();
  soundFinish();

  const ringkasan =
    '<p><strong>Misi Selesai! (Mission Complete!)</strong></p>' +
    '<p>Kesalahan: <strong>' + kesalahan + '</strong></p>' +
    '<p>Bintang: ' + starRow(bintang, true) + '</p>' +
    "<p><strong>Path (jalur) yang benar:</strong><br><code>D:\\Tugas_Sekolah\\Informatika\\Tugas1_Tree.docx</code></p>" +
    "<p>Struktur folder: <strong>Tugas_Sekolah</strong> (akar) &rarr; <strong>Informatika, Matematika, IPA, Pribadi</strong> (anak) &rarr; berkas-berkas (daun).</p>";

  showFeedbackModal("Misi 2 Selesai", ringkasan, function () {
    document.getElementById("btnNext2").disabled = false;
    const fb = document.getElementById("m2Feedback");
    fb.textContent = "Misi 2 selesai. Tekan Lanjut (Next) untuk ke Misi 3.";
    fb.className = "inline-feedback ok";
  });
}

/* ============================== 13. MISI 3 =============================== */

function siapkanMisi3() {
  runtime.m3Index = 0;
  runtime.m3Correct = 0;
  runtime.m3Answered = false;
  runtime.m3Order = CONFIG.SHUFFLE_QUESTIONS ? shuffle(M3_QUESTIONS) : M3_QUESTIONS.slice();

  document.getElementById("m3Total").textContent = String(runtime.m3Order.length);
  document.getElementById("m3Correct").textContent = "0";
  document.getElementById("btnNext3").disabled = !state.misi[3].selesai;
  document.getElementById("btnNextQuestion").disabled = true;
  document.getElementById("btnNextQuestion").textContent = "Soal Berikutnya (Next)";

  if (state.misi[3].selesai) {
    document.getElementById("m3Feedback").textContent = "Misi ini sudah selesai. Tekan Ulangi (Retry) untuk mencoba lagi.";
    document.getElementById("m3Feedback").className = "inline-feedback ok";
  } else {
    document.getElementById("m3Feedback").textContent = "";
    document.getElementById("m3Feedback").className = "inline-feedback";
  }

  renderSoalM3();
}

function renderSoalM3() {
  const q = runtime.m3Order[runtime.m3Index];
  const qEl = document.getElementById("m3Question");
  const optEl = document.getElementById("m3Options");
  const counter = document.getElementById("m3Counter");
  const fill = document.getElementById("m3ProgressFill");
  const nextBtn = document.getElementById("btnNextQuestion");

  if (!q) return;

  runtime.m3Answered = false;
  counter.textContent = String(runtime.m3Index + 1);
  fill.style.width = ((runtime.m3Index) / runtime.m3Order.length * 100) + "%";

  qEl.textContent = q.teks;
  optEl.innerHTML = "";
  document.getElementById("m3Feedback").textContent = "";
  document.getElementById("m3Feedback").className = "inline-feedback";
  nextBtn.disabled = true;
  nextBtn.textContent = (runtime.m3Index === runtime.m3Order.length - 1)
    ? "Selesai (Finish)"
    : "Soal Berikutnya (Next)";

  const huruf = ["A", "B", "C", "D"];

  q.opsi.forEach(function (teks, i) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn";
    btn.setAttribute("aria-label", "Pilihan " + huruf[i] + ": " + teks);
    btn.innerHTML = '<span class="opt-key">' + huruf[i] + ".</span><span>" + teks + "</span>";
    btn.addEventListener("click", function () { jawabM3(i); });
    optEl.appendChild(btn);
  });
}

function jawabM3(pilihanIndex) {
  if (runtime.m3Answered) return;
  runtime.m3Answered = true;

  const q = runtime.m3Order[runtime.m3Index];
  const tombol = document.querySelectorAll("#m3Options .option-btn");
  const fb = document.getElementById("m3Feedback");
  const benar = pilihanIndex === q.benar;

  tombol.forEach(function (b, i) {
    b.disabled = true;
    if (i === q.benar) b.classList.add("benar");
    else if (i === pilihanIndex) b.classList.add("salah");
  });

  if (benar) {
    runtime.m3Correct++;
    document.getElementById("m3Correct").textContent = String(runtime.m3Correct);
    soundCorrect();
    fb.textContent = "Tepat! (Correct!) " + q.penjelasan;
    fb.className = "inline-feedback ok";
  } else {
    soundWrong();
    fb.textContent = "Belum tepat. (Not quite.) Jawaban yang benar adalah " +
      ["A", "B", "C", "D"][q.benar] + ". " + q.penjelasan;
    fb.className = "inline-feedback err";
  }

  document.getElementById("btnNextQuestion").disabled = false;
  simpanState();
}

function lanjutSoalM3() {
  runtime.m3Index++;
  if (runtime.m3Index >= runtime.m3Order.length) {
    selesaikanMisi3();
    return;
  }
  renderSoalM3();
}

function selesaikanMisi3() {
  const total = runtime.m3Order.length;
  const benar = runtime.m3Correct;
  const bintang = bintangM3(benar, total);

  state.misi[3].selesai = true;
  state.misi[3].bintang = bintang;
  state.misi[3].jawaban = { benar: benar, total: total };
  simpanState();
  perbaruiHeaderProgress();
  soundFinish();

  document.getElementById("m3ProgressFill").style.width = "100%";
  document.getElementById("btnNextQuestion").disabled = true;

  const ringkasan =
    '<p><strong>Misi Selesai! (Mission Complete!)</strong></p>' +
    "<p>Jawaban benar: <strong>" + benar + " dari " + total + "</strong></p>" +
    '<p>Bintang: ' + starRow(bintang, true) + "</p>" +
    "<p>Ingat: akar (root) di paling atas, daun (leaf) tidak punya anak (child), dan path (jalur) ditulis dari akar menuju tujuan.</p>";

  showFeedbackModal("Misi 3 Selesai", ringkasan, function () {
    document.getElementById("btnNext3").disabled = false;
    const fb = document.getElementById("m3Feedback");
    fb.textContent = "Misi 3 selesai. Tekan Lanjut (Next) untuk ke Misi 4.";
    fb.className = "inline-feedback ok";
  });
}

/* ============================== 14. MISI 4 =============================== */

function siapkanMisi4() {
  hentikanTimerM4();
  runtime.m4Aktif = false;
  runtime.m4Index = 0;
  runtime.m4Benar = 0;
  runtime.m4Order = CONFIG.SHUFFLE_QUESTIONS ? shuffle(M4_QUESTIONS) : M4_QUESTIONS.slice();

  document.getElementById("m4Total").textContent = String(runtime.m4Order.length);
  document.getElementById("m4Counter").textContent = "1";
  document.getElementById("m4ProgressFill").style.width = "0%";
  document.getElementById("m4Question").textContent = "Tekan tombol Mulai Tantangan (Start) untuk memulai.";
  document.getElementById("m4Options").innerHTML = "";
  document.getElementById("m4ShortWrap").hidden = true;
  document.getElementById("m4Feedback").textContent = "";
  document.getElementById("m4Feedback").className = "inline-feedback";
  document.getElementById("btnM4Start").disabled = false;
  document.getElementById("btnNext4").disabled = !state.misi[4].selesai;

  const timerEl = document.getElementById("m4Timer");
  timerEl.hidden = !CONFIG.ENABLE_TIMER;
  timerEl.classList.remove("warning");
  document.getElementById("m4TimerValue").textContent = String(CONFIG.TIMER_SECONDS);
}

function mulaiMisi4() {
  hentikanTimerM4();
  runtime.m4Aktif = true;
  runtime.m4Index = 0;
  runtime.m4Benar = 0;
  document.getElementById("btnM4Start").disabled = true;
  document.getElementById("m4Feedback").textContent = "";
  document.getElementById("m4Feedback").className = "inline-feedback";

  if (CONFIG.ENABLE_TIMER) {
    runtime.m4Sisa = CONFIG.TIMER_SECONDS;
    perbaruiTampilanTimer();
    runtime.m4TimerId = window.setInterval(function () {
      runtime.m4Sisa--;
      perbaruiTampilanTimer();
      if (runtime.m4Sisa <= 0) {
        hentikanTimerM4();
        selesaikanMisi4(true);
      }
    }, 1000);
  }

  renderSoalM4();
}

function perbaruiTampilanTimer() {
  const el = document.getElementById("m4Timer");
  const val = document.getElementById("m4TimerValue");
  if (!el || !val) return;
  val.textContent = String(Math.max(0, runtime.m4Sisa));
  if (runtime.m4Sisa <= 10) el.classList.add("warning");
  else el.classList.remove("warning");
}

function hentikanTimerM4() {
  if (runtime.m4TimerId) {
    window.clearInterval(runtime.m4TimerId);
    runtime.m4TimerId = null;
  }
}

function renderSoalM4() {
  const q = runtime.m4Order[runtime.m4Index];
  if (!q) {
    selesaikanMisi4(false);
    return;
  }

  document.getElementById("m4Counter").textContent = String(runtime.m4Index + 1);
  document.getElementById("m4ProgressFill").style.width =
    (runtime.m4Index / runtime.m4Order.length * 100) + "%";
  document.getElementById("m4Question").textContent = q.teks;
  document.getElementById("m4Feedback").textContent = "";
  document.getElementById("m4Feedback").className = "inline-feedback";

  const optEl = document.getElementById("m4Options");
  const shortWrap = document.getElementById("m4ShortWrap");
  const shortInput = document.getElementById("m4ShortInput");
  optEl.innerHTML = "";
  shortInput.value = "";
  shortInput.disabled = false;

  if (q.tipe === "pg") {
    shortWrap.hidden = true;
    const huruf = ["A", "B", "C", "D"];
    q.opsi.forEach(function (teks, i) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-btn";
      btn.setAttribute("aria-label", "Pilihan " + huruf[i] + ": " + teks);
      btn.innerHTML = '<span class="opt-key">' + huruf[i] + ".</span><span>" + teks + "</span>";
      btn.addEventListener("click", function () { jawabM4PG(i); });
      optEl.appendChild(btn);
    });
  } else {
    shortWrap.hidden = false;
    document.getElementById("m4ShortLabel").textContent = (q.tipe === "uraian")
      ? "Tulis jawaban singkatmu (minimal satu kata kunci):"
      : "Jawaban singkat:";
    window.setTimeout(function () { shortInput.focus(); }, 60);
  }
}

function jawabM4PG(pilihanIndex) {
  if (!runtime.m4Aktif) return;
  const q = runtime.m4Order[runtime.m4Index];
  const tombol = document.querySelectorAll("#m4Options .option-btn");
  tombol.forEach(function (b) { b.disabled = true; });

  const benar = pilihanIndex === q.benar;
  tombol.forEach(function (b, i) {
    if (i === q.benar) b.classList.add("benar");
    else if (i === pilihanIndex) b.classList.add("salah");
  });

  if (benar) {
    runtime.m4Benar++;
    soundCorrect();
  } else {
    soundWrong();
  }

  const fb = document.getElementById("m4Feedback");
  fb.textContent = (benar ? "Tepat! (Correct!) " : "Belum tepat. (Not quite.) ") + q.penjelasan;
  fb.className = "inline-feedback " + (benar ? "ok" : "err");

  window.setTimeout(lanjutSoalM4, 900);
}

function jawabM4Isian() {
  if (!runtime.m4Aktif) return;
  const q = runtime.m4Order[runtime.m4Index];
  const input = document.getElementById("m4ShortInput");
  const nilai = input.value.trim();

  if (!nilai) {
    showToast("Tuliskan jawabanmu terlebih dahulu.");
    input.focus();
    return;
  }

  let benar = false;
  if (q.tipe === "isian") {
    const norm = normalisasiTeks(nilai);
    benar = q.jawaban.some(function (j) { return norm === normalisasiTeks(j); });
  } else if (q.tipe === "uraian") {
    const rendah = nilai.toLowerCase();
    benar = q.kataKunci.some(function (k) { return rendah.indexOf(k) !== -1; });
  }

  input.disabled = true;
  document.getElementById("btnM4Submit").disabled = true;
  window.setTimeout(function () {
    document.getElementById("btnM4Submit").disabled = false;
  }, 1200);

  if (benar) {
    runtime.m4Benar++;
    soundCorrect();
  } else {
    soundWrong();
  }

  const fb = document.getElementById("m4Feedback");
  fb.textContent = (benar ? "Tepat! (Correct!) " : "Belum tepat. (Not quite.) ") + q.penjelasan;
  fb.className = "inline-feedback " + (benar ? "ok" : "err");

  window.setTimeout(lanjutSoalM4, 1000);
}

function lanjutSoalM4() {
  if (!runtime.m4Aktif) return;
  runtime.m4Index++;
  if (runtime.m4Index >= runtime.m4Order.length) {
    selesaikanMisi4(false);
    return;
  }
  renderSoalM4();
}

function selesaikanMisi4(waktuHabis) {
  hentikanTimerM4();
  runtime.m4Aktif = false;

  const total = runtime.m4Order.length;
  const skor = runtime.m4Benar * 20;
  const bintang = bintangM4(skor);

  state.misi[4].selesai = true;
  state.misi[4].bintang = bintang;
  state.misi[4].skor = skor;
  state.misi[4].jawaban = { benar: runtime.m4Benar, total: total, waktuHabis: !!waktuHabis };
  simpanState();
  perbaruiHeaderProgress();
  soundFinish();

  document.getElementById("m4ProgressFill").style.width = "100%";
  document.getElementById("m4Options").innerHTML = "";
  document.getElementById("m4ShortWrap").hidden = true;
  document.getElementById("m4Question").textContent = waktuHabis
    ? "Waktu habis! (Time is up!)"
    : "Semua soal telah dijawab.";

  const ringkasan =
    '<p><strong>Misi Selesai! (Mission Complete!)</strong></p>' +
    (waktuHabis ? "<p>Waktu 60 detik telah habis.</p>" : "") +
    "<p>Jawaban benar: <strong>" + runtime.m4Benar + " dari " + total + "</strong></p>" +
    "<p>Skor (Score): <strong>" + skor + "</strong> dari 100</p>" +
    '<p>Bintang: ' + starRow(bintang, true) + "</p>";

  showFeedbackModal("Misi 4 Selesai", ringkasan, function () {
    document.getElementById("btnNext4").disabled = false;
    const fb = document.getElementById("m4Feedback");
    fb.textContent = "Misi 4 selesai. Tekan Lanjut (Next) untuk melihat Laporan Akhir.";
    fb.className = "inline-feedback ok";
  });
}

/* ============================ 15. PETA MISI ============================== */

function misiTerbuka(nomor) {
  if (nomor === 1) return true;
  return !!state.misi[nomor - 1].selesai;
}

function renderPetaMisi() {
  const grid = document.getElementById("missionGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const daftar = [
    {
      n: 1,
      judul: "Misi 1 — Susun Pohon Sekolah (Build the School Tree)",
      desc: "Seret dan lepas (drag and drop) 10 kartu hierarki ke slot pohon yang tepat."
    },
    {
      n: 2,
      judul: "Misi 2 — Rapikan Folder Rani (Tidy Rani's Folder)",
      desc: "Pindahkan 8 berkas dan folder ke subfolder yang tepat, lalu tulis path (jalur) lengkapnya."
    },
    {
      n: 3,
      judul: "Misi 3 — Jejak Path (Path Tracker)",
      desc: "Jawab 6 pertanyaan tentang akar (root), daun (leaf), induk (parent), saudara (sibling), dan path (jalur)."
    },
    {
      n: 4,
      judul: "Misi 4 — Tantangan Cepat (Quick Challenge)",
      desc: "Jawab 5 soal campuran dalam 60 detik. Setiap jawaban benar bernilai 20 poin."
    }
  ];

  let selesai = 0;
  let totalBintang = 0;

  daftar.forEach(function (m) {
    const misi = state.misi[m.n];
    const terbuka = misiTerbuka(m.n);
    if (misi.selesai) { selesai++; totalBintang += misi.bintang; }

    const card = document.createElement("button");
    card.type = "button";
    card.className = "mission-card" + (misi.selesai ? " done" : "") + (terbuka ? "" : " locked");
    card.setAttribute("aria-label",
      "Misi " + m.n + ". " + m.judul + ". Status: " +
      (misi.selesai ? "selesai, " + misi.bintang + " bintang" : (terbuka ? "terbuka" : "terkunci")));

    let statusHTML = "";
    if (misi.selesai) {
      statusHTML = '<span class="mission-status status-done">Selesai (Completed)</span>' + starRow(misi.bintang, false);
    } else if (terbuka) {
      statusHTML = '<span class="mission-status status-open">Terbuka (Open)</span>';
    } else {
      statusHTML = '<span class="mission-status status-locked">Terkunci (Locked)</span>';
    }

    card.innerHTML =
      '<span class="mission-badge">' + m.n + "</span>" +
      '<span class="mission-title">' + m.judul + "</span>" +
      '<span class="mission-desc">' + m.desc + "</span>" +
      statusHTML;

    if (terbuka) {
      card.addEventListener("click", function () { showScreen(m.n + 1); });
    } else {
      card.addEventListener("click", function () {
        showToast("Selesaikan Misi " + (m.n - 1) + " terlebih dahulu. (Finish the previous mission first.)", "err");
      });
    }

    grid.appendChild(card);
  });

  document.getElementById("mapProgressText").textContent = selesai + "/4";
  document.getElementById("mapStarText").textContent = totalBintang + "/12";
  document.getElementById("mapProgressFill").style.width = (selesai / 4 * 100) + "%";
  const bar = document.getElementById("mapProgressBar");
  if (bar) bar.setAttribute("aria-valuenow", String(selesai));
}

/* ============================ 16. LAPORAN AKHIR ========================== */

function renderLaporan() {
  let selesai = 0;
  let totalBintang = 0;
  for (let n = 1; n <= 4; n++) {
    if (state.misi[n].selesai) selesai++;
    totalBintang += state.misi[n].bintang || 0;
  }

  if (selesai === 4 && !state.waktuSelesai) {
    state.waktuSelesai = Date.now();
    simpanState();
  }

  const namaInput = document.getElementById("inputNamaAkhir");
  if (namaInput) namaInput.value = state.nama || "";

  const sekarang = new Date();
  document.getElementById("repTanggal").textContent =
    sekarang.toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" }) +
    ", " + sekarang.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });

  document.getElementById("repBintang").innerHTML = totalBintang + " / 12 " + starRow(Math.min(totalBintang, 12), false);
  document.getElementById("repMisi").textContent = selesai + " / 4";

  const mulai = state.waktuMulai || Date.now();
  const akhir = state.waktuSelesai || Date.now();
  document.getElementById("repWaktu").textContent = formatDurasi(akhir - mulai);

  const detail = document.getElementById("repDetail");
  detail.innerHTML = "";

  const judulMisi = {
    1: "Misi 1 — Susun Pohon Sekolah (Build the School Tree)",
    2: "Misi 2 — Rapikan Folder Rani (Tidy Rani's Folder)",
    3: "Misi 3 — Jejak Path (Path Tracker)",
    4: "Misi 4 — Tantangan Cepat (Quick Challenge)"
  };

  for (let n = 1; n <= 4; n++) {
    const misi = state.misi[n];
    const row = document.createElement("div");
    row.className = "report-row";

    let catatan = "";
    if (n === 1 || n === 2) {
      catatan = "Kesalahan (Mistakes): " + misi.kesalahan;
    } else if (n === 3) {
      catatan = "Jawaban benar: " + (misi.jawaban.benar || 0) + " dari " + (misi.jawaban.total || 6);
    } else if (n === 4) {
      catatan = "Skor (Score): " + (misi.skor || 0) + " dari 100";
    }

    row.innerHTML =
      '<span class="rr-title">' + judulMisi[n] + "</span>" +
      starRow(misi.bintang || 0, false) +
      '<span class="rr-note">' +
      (misi.selesai ? "Status: Selesai (Completed). " + catatan : "Status: Belum selesai (Not completed).") +
      "</span>";

    detail.appendChild(row);
  }

  document.getElementById("btnPrint").style.display = CONFIG.ENABLE_PRINT ? "" : "none";
  document.getElementById("btnDownloadTxt").style.display = CONFIG.ENABLE_DOWNLOAD_TXT ? "" : "none";
}

function susunTeksLaporan() {
  let selesai = 0;
  let totalBintang = 0;
  for (let n = 1; n <= 4; n++) {
    if (state.misi[n].selesai) selesai++;
    totalBintang += state.misi[n].bintang || 0;
  }
  const mulai = state.waktuMulai || Date.now();
  const akhir = state.waktuSelesai || Date.now();
  const tanggal = new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });

  const baris = [];
  baris.push("=====================================================");
  baris.push("LAPORAN LKPD INTERAKTIF — STRUKTUR TREE DAN HIERARKI");
  baris.push("Informatika Kelas IX / Fase D — Berpikir Komputasional");
  baris.push(CONFIG.SCHOOL_NAME);
  baris.push("=====================================================");
  baris.push("Nama Murid   : " + (state.nama || "(belum diisi)"));
  baris.push("Tanggal      : " + tanggal);
  baris.push("Total Bintang: " + totalBintang + " / 12");
  baris.push("Misi Selesai : " + selesai + " / 4");
  baris.push("Total Waktu  : " + formatDurasi(akhir - mulai));
  baris.push("-----------------------------------------------------");

  const judulMisi = {
    1: "Misi 1 — Susun Pohon Sekolah (Build the School Tree)",
    2: "Misi 2 — Rapikan Folder Rani (Tidy Rani's Folder)",
    3: "Misi 3 — Jejak Path (Path Tracker)",
    4: "Misi 4 — Tantangan Cepat (Quick Challenge)"
  };

  for (let n = 1; n <= 4; n++) {
    const m = state.misi[n];
    baris.push(judulMisi[n]);
    baris.push("  Status    : " + (m.selesai ? "Selesai (Completed)" : "Belum selesai (Not completed)"));
    baris.push("  Bintang   : " + (m.bintang || 0) + " / 3");
    if (n === 1 || n === 2) baris.push("  Kesalahan : " + (m.kesalahan || 0));
    if (n === 3) baris.push("  Benar     : " + (m.jawaban.benar || 0) + " dari " + (m.jawaban.total || 6));
    if (n === 4) baris.push("  Skor      : " + (m.skor || 0) + " dari 100");
    baris.push("");
  }

  baris.push("--- RINCIAN JAWABAN MISI 1 (susunan pohon) ---");
  const kunci1 = Object.keys(state.misi[1].jawaban).sort();
  if (kunci1.length === 0) baris.push("(belum ada jawaban)");
  kunci1.forEach(function (k) { baris.push("  " + k + " : " + state.misi[1].jawaban[k]); });
  baris.push("");

  baris.push("--- RINCIAN JAWABAN MISI 2 (penempatan berkas) ---");
  const kunci2 = Object.keys(state.misi[2].jawaban).filter(function (k) { return k !== "path"; }).sort();
  if (kunci2.length === 0) baris.push("(belum ada jawaban)");
  kunci2.forEach(function (k) { baris.push("  " + k + " : " + state.misi[2].jawaban[k]); });
  baris.push("  path : " + (state.misi[2].jawaban.path || "(belum diisi)"));
  baris.push("");

  baris.push("Catatan: laporan ini dihasilkan otomatis oleh LKPD Interaktif Struktur Tree dan Hierarki.");
  baris.push("=====================================================");
  return baris.join("\n");
}

function unduhLaporanTxt() {
  const teks = susunTeksLaporan();
  const blob = new Blob([teks], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const nama = (state.nama || "murid").replace(/[^a-zA-Z0-9]/g, "_");
  a.href = url;
  a.download = "LKPD_Tree_" + nama + "_" + new Date().toISOString().slice(0, 10) + ".txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
  showToast("Laporan berhasil diunduh. (Report downloaded.)", "ok");
}

/* ============================ 17. DWIBAHASA ============================== */

function terapkanBahasa() {
  const kamus = I18N[state.lang] || I18N.id;
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    if (kamus[key]) el.textContent = kamus[key];
  });

  const btnLang = document.getElementById("btnLang");
  if (btnLang) {
    const idCls = state.lang === "id" ? "lang-part active" : "lang-part";
    const enCls = state.lang === "en" ? "lang-part active" : "lang-part";
    btnLang.innerHTML = '<span class="' + idCls + '">ID</span> | <span class="' + enCls + '">EN</span>';
    btnLang.setAttribute("aria-label",
      "Bahasa antarmuka saat ini: " + (state.lang === "id" ? "Indonesia" : "English") + ". Klik untuk mengganti.");
  }
  document.documentElement.lang = state.lang === "en" ? "en" : "id";
}

/* ============================= 18. INISIALISASI ========================== */

function terapkanWarna() {
  const root = document.documentElement;
  root.style.setProperty("--color-primary", CONFIG.COLOR_PRIMARY);
  root.style.setProperty("--color-accent", CONFIG.COLOR_ACCENT);
  root.style.setProperty("--color-success", CONFIG.COLOR_SUCCESS);
  root.style.setProperty("--color-danger", CONFIG.COLOR_DANGER);
}

function pasangEvent() {
  // --- Tombol pada layar pembuka ---
  document.getElementById("btnStart").addEventListener("click", function () {
    const nama = document.getElementById("inputNamaAwal").value.trim();
    if (nama) state.nama = nama;
    if (!state.waktuMulai) state.waktuMulai = Date.now();
    simpanState();
    soundCorrect();
    showScreen(1);
  });

  document.getElementById("inputNamaAwal").addEventListener("change", function () {
    state.nama = this.value.trim();
    simpanState();
  });

  // --- Tombol navigasi umum (data-go) ---
  document.querySelectorAll("[data-go]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const tujuan = Number(btn.dataset.go);
      if (tujuan === 6) {
        if (!state.misi[4].selesai && !state.misi[3].selesai) {
          showToast("Selesaikan misi terlebih dahulu. (Finish the missions first.)", "err");
          return;
        }
      }
      showScreen(tujuan);
    });
  });

  // --- Peta misi ---
  document.getElementById("btnMapReport").addEventListener("click", function () { showScreen(6); });

  // --- Misi 1 ---
  document.getElementById("btnRetry1").addEventListener("click", function () {
    state.misi[1].kesalahan = 0;
    state.misi[1].jawaban = {};
    simpanState();
    runtime.m1Placed = 0;
    siapkanMisi1();
    perbaruiHeaderProgress();
    showToast("Misi 1 diulang dari awal. (Mission 1 restarted.)", "ok");
  });
  document.getElementById("btnHint1").addEventListener("click", function () {
    showFeedbackModal("Petunjuk (Hint) — Misi 1", "<p>" + HINTS[1] + "</p>", null);
  });

  // --- Misi 2 ---
  document.getElementById("btnRetry2").addEventListener("click", function () {
    state.misi[2].kesalahan = 0;
    state.misi[2].jawaban = {};
    state.misi[2].selesai = false;
    state.misi[2].bintang = 0;
    simpanState();
    runtime.m2Placed = 0;
    runtime.m2PathBenar = false;
    siapkanMisi2();
    perbaruiHeaderProgress();
    showToast("Misi 2 diulang dari awal. (Mission 2 restarted.)", "ok");
  });
  document.getElementById("btnHint2").addEventListener("click", function () {
    showFeedbackModal("Petunjuk (Hint) — Misi 2", "<p>" + HINTS[2] + "</p>", null);
  });
  document.getElementById("btnCheckPath").addEventListener("click", periksaPathM2);
  document.getElementById("m2PathInput").addEventListener("keydown", function (ev) {
    if (ev.key === "Enter") { ev.preventDefault(); periksaPathM2(); }
  });

  // --- Misi 3 ---
  document.getElementById("btnNextQuestion").addEventListener("click", lanjutSoalM3);
  document.getElementById("btnRetry3").addEventListener("click", function () {
    state.misi[3].selesai = false;
    state.misi[3].bintang = 0;
    state.misi[3].jawaban = {};
    simpanState();
    document.getElementById("btnNext3").disabled = true;
    siapkanMisi3();
    perbaruiHeaderProgress();
    showToast("Misi 3 diulang dari awal. (Mission 3 restarted.)", "ok");
  });
  document.getElementById("btnHint3").addEventListener("click", function () {
    showFeedbackModal("Petunjuk (Hint) — Misi 3", "<p>" + HINTS[3] + "</p>", null);
  });

  // --- Misi 4 ---
  document.getElementById("btnM4Start").addEventListener("click", function () {
    if (state.misi[4].selesai) {
      showToast("Misi 4 sudah selesai. Tekan Ulangi (Retry) untuk bermain lagi.");
      return;
    }
    mulaiMisi4();
  });
  document.getElementById("btnM4Submit").addEventListener("click", jawabM4Isian);
  document.getElementById("m4ShortInput").addEventListener("keydown", function (ev) {
    if (ev.key === "Enter") { ev.preventDefault(); jawabM4Isian(); }
  });
  document.getElementById("btnRetry4").addEventListener("click", function () {
    hentikanTimerM4();
    state.misi[4].selesai = false;
    state.misi[4].bintang = 0;
    state.misi[4].skor = 0;
    state.misi[4].jawaban = {};
    simpanState();
    document.getElementById("btnNext4").disabled = true;
    siapkanMisi4();
    perbaruiHeaderProgress();
    showToast("Misi 4 diulang dari awal. (Mission 4 restarted.)", "ok");
  });

  // --- Modal umpan balik ---
  document.getElementById("btnFeedbackOk").addEventListener("click", closeFeedbackModal);

  // --- Bantuan ---
  document.getElementById("btnHelp").addEventListener("click", function () {
    document.getElementById("helpModal").hidden = false;
    document.getElementById("btnHelpClose").focus();
  });
  document.getElementById("btnHelpClose").addEventListener("click", function () {
    document.getElementById("helpModal").hidden = true;
  });

  // --- Mode guru ---
  const btnTeacher = document.getElementById("btnTeacher");
  if (CONFIG.ENABLE_TEACHER_MODE) {
    btnTeacher.addEventListener("click", function () {
      document.getElementById("teacherModal").hidden = false;
      document.getElementById("btnTeacherClose").focus();
    });
  } else {
    btnTeacher.style.display = "none";
  }
  document.getElementById("btnTeacherClose").addEventListener("click", function () {
    document.getElementById("teacherModal").hidden = true;
  });

  // --- Suara ---
  const btnSound = document.getElementById("btnSound");
  function perbaruiTombolSuara() {
    btnSound.textContent = state.sound ? "Suara: Aktif" : "Suara: Mati";
    btnSound.setAttribute("aria-label",
      state.sound ? "Efek suara aktif. Klik untuk mematikan." : "Efek suara mati. Klik untuk mengaktifkan.");
  }
  btnSound.addEventListener("click", function () {
    state.sound = !state.sound;
    simpanState();
    perbaruiTombolSuara();
    if (state.sound) soundCorrect();
  });
  perbaruiTombolSuara();

  // --- Bahasa ---
  document.getElementById("btnLang").addEventListener("click", function () {
    state.lang = state.lang === "id" ? "en" : "id";
    simpanState();
    terapkanBahasa();
  });

  // --- Tombol Reset di header ---
  // Memungkinkan murid mengulang dari awal tanpa mengubah struktur keseluruhan.
  const btnReset = document.getElementById("btnReset");
  if (btnReset) {
    btnReset.addEventListener("click", function () {
      const konfirmasi = window.confirm(
        "Apakah Anda yakin ingin mengulang dari awal?\n" +
        "Semua progres (nama, bintang, jawaban, waktu) akan dihapus.\n\n" +
        "Are you sure you want to start over?\n" +
        "All progress (name, stars, answers, time) will be cleared."
      );
      if (konfirmasi) {
        window.lkpdReset();
      }
    });
  }

  // --- Laporan akhir ---
  document.getElementById("inputNamaAkhir").addEventListener("change", function () {
    state.nama = this.value.trim();
    simpanState();
    showToast("Nama murid disimpan. (Student name saved.)", "ok");
  });

  document.getElementById("btnPrint").addEventListener("click", function () {
    window.print();
  });

  document.getElementById("btnDownloadTxt").addEventListener("click", unduhLaporanTxt);

  document.getElementById("btnResetAll").addEventListener("click", function () {
    const konfirmasi1 = window.confirm("Hapus SEMUA data dan ulangi semua misi? (Delete ALL data and restart?)");
    if (!konfirmasi1) return;
    const konfirmasi2 = window.confirm("Konfirmasi terakhir: data nama, bintang, dan jawaban akan hilang permanen. Lanjutkan?");
    if (!konfirmasi2) return;
    window.lkpdReset();
  });

  // --- Tutup modal dengan tombol Escape ---
  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape") {
      ["helpModal", "teacherModal", "feedbackModal"].forEach(function (id) {
        const m = document.getElementById(id);
        if (m && !m.hidden) m.hidden = true;
      });
    }
  });
}

function inisialisasi() {
  terapkanWarna();
  muatState();

  if (!state.waktuMulai) {
    state.waktuMulai = Date.now();
    simpanState();
  }

  // Terapkan teks footer dari CONFIG agar mudah diubah guru.
  const footer = document.getElementById("footerText");
  if (footer) footer.textContent = CONFIG.FOOTER_TEXT;

  // Isi nama pada layar pembuka bila sudah tersimpan.
  const namaAwal = document.getElementById("inputNamaAwal");
  if (namaAwal && state.nama) namaAwal.value = state.nama;

  pasangEvent();
  terapkanBahasa();
  perbaruiHeaderProgress();

  // Aktifkan kembali tombol Lanjut bila misi terkait sudah pernah selesai.
  document.getElementById("btnNext1").disabled = !state.misi[1].selesai;
  document.getElementById("btnNext2").disabled = !state.misi[2].selesai;
  document.getElementById("btnNext3").disabled = !state.misi[3].selesai;
  document.getElementById("btnNext4").disabled = !state.misi[4].selesai;

  if (!CONFIG.ENABLE_HINTS) {
    document.querySelectorAll(".btn-hint").forEach(function (b) { b.style.display = "none"; });
  }

  showScreen(0);
}

document.addEventListener("DOMContentLoaded", inisialisasi);
