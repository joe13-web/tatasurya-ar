const soalKuis = [
  {
    pertanyaan: "Planet terbesar dalam tata surya adalah?",
    pilihan: ["Saturnus", "Jupiter", "Uranus", "Neptunus"],
    jawaban: 1
  },
  {
    pertanyaan: "Planet yang dikenal sebagai planet merah adalah?",
    pilihan: ["Venus", "Jupiter", "Mars", "Merkurius"],
    jawaban: 2
  },
  {
    pertanyaan: "Planet terdekat dari Matahari adalah?",
    pilihan: ["Venus", "Bumi", "Mars", "Merkurius"],
    jawaban: 3
  },
  {
    pertanyaan: "Planet yang memiliki cincin indah adalah?",
    pilihan: ["Uranus", "Neptunus", "Saturnus", "Jupiter"],
    jawaban: 2
  },
  {
    pertanyaan: "Berapa jumlah planet dalam tata surya?",
    pilihan: ["7", "8", "9", "10"],
    jawaban: 1
  },
  {
    pertanyaan: "Planet yang dihuni manusia adalah?",
    pilihan: ["Mars", "Venus", "Bumi", "Merkurius"],
    jawaban: 2
  },
  {
    pertanyaan: "Planet terjauh dari Matahari adalah?",
    pilihan: ["Uranus", "Saturnus", "Jupiter", "Neptunus"],
    jawaban: 3
  },
  {
    pertanyaan: "Planet terpanas di tata surya adalah?",
    pilihan: ["Merkurius", "Venus", "Mars", "Jupiter"],
    jawaban: 1
  }
];

let soalIndex = 0;
let skor = 0;
let sudahJawab = false;

function tampilSoal() {
  if (soalIndex >= soalKuis.length) {
    tampilHasilAkhir();
    return;
  }

  sudahJawab = false;
  const soal = soalKuis[soalIndex];

  document.getElementById("nomor-soal").innerText =
    `Soal ${soalIndex + 1} dari ${soalKuis.length}`;
  document.getElementById("pertanyaan").innerText = soal.pertanyaan;

  const container = document.getElementById("pilihan-container");
  container.innerHTML = "";

  soal.pilihan.forEach((pilihan, i) => {
    const btn = document.createElement("button");
    btn.className = "btn-pilihan";
    btn.innerText = pilihan;
    btn.onclick = () => cekJawaban(i, btn);
    container.appendChild(btn);
  });
}

function cekJawaban(index, btnDipilih) {
  if (sudahJawab) return;
  sudahJawab = true;

  const soal = soalKuis[soalIndex];
  const semuaTombol = document.querySelectorAll(".btn-pilihan");

  if (index === soal.jawaban) {
    btnDipilih.classList.add("benar");
    skor++;
  } else {
    btnDipilih.classList.add("salah");
    semuaTombol[soal.jawaban].classList.add("benar");
  }

  // Lanjut ke soal berikutnya setelah 1.5 detik
  setTimeout(() => {
    soalIndex++;
    tampilSoal();
  }, 1500);
}

function tampilHasilAkhir() {
  const container = document.getElementById("kuis-container");
  const nilai = Math.round((skor / soalKuis.length) * 100);
  let pesan = "";

  if (nilai >= 80) pesan = "🌟 Luar Biasa! Kamu sangat menguasai materi!";
  else if (nilai >= 60) pesan = "👍 Bagus! Terus belajar ya!";
  else pesan = "📚 Jangan menyerah! Coba lagi setelah belajar lebih!";

  container.innerHTML = `
    <div class="skor-container">
      <h2>Hasil Kuis</h2>
      <p style="font-size:48px; margin:20px 0">${nilai}</p>
      <p style="color:#aaa">Skor kamu: ${skor} / ${soalKuis.length} benar</p>
      <p style="margin-top:15px; font-size:14px">${pesan}</p>
      <button class="btn-menu" style="margin-top:25px"
        onclick="location.reload()">🔄 Ulangi Kuis</button>
      <button class="btn-menu" style="margin-top:10px"
        onclick="location.href='index.html'">🏠 Menu Utama</button>
    </div>
  `;
}