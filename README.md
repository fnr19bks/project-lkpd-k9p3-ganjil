# LKPD Interaktif — Struktur Tree dan Hierarki

**Informatika Kelas IX / Fase D · Berpikir Komputasional · SMP Negeri 19 Kota Bekasi**

Aplikasi web statis berbentuk Lembar Kerja Peserta Didik (LKPD) digital bergaya game sederhana.
Topik yang dibahas: **Struktur Tree (Pohon) dan Hierarki**, termasuk konsep *root* (akar),
*node* (simpul), *parent* (induk), *child* (anak), *sibling* (saudara), *leaf* (daun),
*path* (jalur), dan *level* (tingkat), serta struktur folder digital.

Aplikasi berjalan **tanpa login**, **tanpa backend**, dan **tanpa internet** (setelah diunduh).
Semua progres disimpan di `localStorage` (penyimpanan lokal) browser murid.

---

## 1. Fitur Utama

| Fitur | Keterangan |
|---|---|
| 4 Mini-game | Susun Pohon Sekolah, Rapikan Folder Rani, Jejak Path, Tantangan Cepat |
| Seret dan lepas | Mendukung mouse, layar sentuh (touch), dan keyboard (Tab + Enter) |
| Umpan balik langsung | Benar: "Tepat! (Correct!)" · Salah: "Belum tepat. (Not quite.)" |
| Sistem bintang | 1–3 bintang per misi, total maksimal 12 bintang |
| Simpan progres | Otomatis ke `localStorage` dengan kunci `lkpd_tree_progress_v1` |
| Laporan akhir | Cetak (`window.print()`), unduh `.txt`, dan reset data |
| Efek suara | Dibuat dengan Web Audio API — **tidak ada berkas audio eksternal** |
| Mode Guru | Tombol **Guru** berisi kunci jawaban, cara menilai, dan tips pembelajaran |
| Dwi bahasa | Bahasa Indonesia sebagai bahasa utama, istilah Inggris selalu disertai padanan Indonesia |
| Responsif | Diuji pada lebar 360px (ponsel) sampai 1920px (desktop) |
| Aksesibel | `aria-label` pada semua tombol, kontras WCAG AA, fokus keyboard terlihat |

---

## 2. Struktur Folder

```text
lkpd-tree-k9/
├── index.html      # Struktur halaman + 7 layar (screen)
├── style.css       # Seluruh aturan gaya, termasuk @media print
├── script.js       # Seluruh logika permainan + data soal
├── favicon.svg     # Ikon tab browser (SVG, tema pohon)
├── README.md       # Dokumentasi ini
└── assets/
    └── logo.png    # Logo sekolah (HARUS diunggah sendiri oleh guru)