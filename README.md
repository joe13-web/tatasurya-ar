# Tata Surya AR — Panduan Setup

## Struktur Folder yang Diperlukan

```
tata-surya-ar/
├── index.html        ← Menu Utama
├── ar.html           ← Kamera AR
├── kuis.html         ← Kuis
├── petunjuk.html     ← Petunjuk
├── tentang.html      ← Tentang
├── targets/
│   └── targets.mind  ← !! WAJIB DIBUAT SENDIRI (lihat langkah 2)
├── textures/         ← !! WAJIB DIISI (lihat langkah 1)
│   ├── mercury.jpg
│   ├── venus.jpg
│   ├── earth.jpg
│   ├── mars.jpg
│   ├── jupiter.jpg
│   ├── saturn.jpg
│   ├── uranus.jpg
│   └── neptune.jpg
└── images/           ← Gambar marker planet (untuk dicetak)
```

---

## LANGKAH 1 — Download Tekstur Planet

Download gambar tekstur planet dari:
https://planetpixelemporium.com/planets.html

Simpan ke folder `textures/` dengan nama:
- mercury.jpg
- venus.jpg
- earth.jpg
- mars.jpg
- jupiter.jpg
- saturn.jpg
- uranus.jpg
- neptune.jpg

---

## LANGKAH 2 — Buat File targets.mind

1. Buka: https://hiukim.github.io/mind-ar-js-doc/tools/compile
2. Upload 8 gambar marker planet (dari folder images/ atau buat sendiri di Canva)
   - PENTING: Urutan upload harus sesuai: Merkurius (0), Venus (1), Bumi (2),
     Mars (3), Jupiter (4), Saturnus (5), Uranus (6), Neptunus (7)
3. Klik Export → download file targets.mind
4. Taruh di folder targets/

---

## LANGKAH 3 — Jalankan Aplikasi

### Opsi A: VS Code + Live Server
1. Buka folder project di VS Code
2. Klik kanan index.html → Open with Live Server
3. Buka di browser Chrome

### Opsi B: XAMPP
1. Taruh folder project di htdocs/
2. Jalankan Apache di XAMPP
3. Buka http://localhost/tata-surya-ar/

---

## LANGKAH 4 — Test di Smartphone

1. Pastikan laptop dan HP terhubung ke WiFi yang sama
2. Cari IP laptop: buka CMD → ketik ipconfig
3. Akses di HP: http://[IP_LAPTOP]:5500 (Live Server) atau http://[IP_LAPTOP]/tata-surya-ar/
4. Izinkan akses kamera di browser Chrome

---

## LANGKAH 5 — Deploy ke GitHub Pages (Opsional)

1. Daftar di github.com
2. Buat repository baru bernama "tata-surya-ar"
3. Upload semua file
4. Settings → Pages → Source: main branch → Save
5. Akses di: https://[username].github.io/tata-surya-ar/

---

## Catatan Penting

- Halaman AR HANYA berfungsi jika dibuka via HTTPS atau localhost
- Gunakan browser Chrome terbaru
- File targets.mind WAJIB ada sebelum fitur AR bisa digunakan
- Pastikan tekstur planet sudah didownload ke folder textures/
