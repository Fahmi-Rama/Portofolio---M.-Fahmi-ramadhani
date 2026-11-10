// JavaScript portofolio Fahmi ramadhani
// Dipasang di ketiga halaman dengan defer
// 1. Daftar keahlian (halaman Beranda)
const skills = [
    { nama: "HTML", level: "Menengah"},
    { nama: "CSS", level: "Menengah"},
    { nama: "Git dan Github", level: "Dasar"},
    { nama:"Desain podter dengan canva", level: "Mahir"},
];
skills.push ({ nama: "javascript", level: "Dasar"});

const daftarSkill = document.querySelector("#daftar-skill");
const jumlahSkill = document.querySelector("#jumlah-skill");


if (daftarSkill) {
skills.forEach( (skill) => {
    const item = document.createElement("li");
    item.textContent = `${skill.nama} (${skill.level})`;
    daftarSkill.appendChild(item);
});
jumlahSkill.textContent = `Ada ${skills.length} keahlian yang saya kembangkan.`;
}
// 2. Tema gelap (semua halaman)
const tombolTema = document.querySelector("#tombol-tema");
if (tombolTema) {
  if (localStorage.getItem("tema") === "gelap") {
    document.body.classList.add("gelap");
    tombolTema.textContent = "Mode Terang";
  } else {
    tombolTema.textContent = "Mode Gelap";
  }
  tombolTema.addEventListener("click", () => {
    document.body.classList.toggle("gelap");
    if (document.body.classList.contains("gelap")) {
      localStorage.setItem("tema", "gelap");
      tombolTema.textContent = "Mode Terang";
    } else {
      localStorage.setItem("tema", "terang");
      tombolTema.textContent = "Mode Gelap";
    }
  });
}
//penghitung karakter pesan (halaman kontak)
const kotakPesan = document.querySelector("#pesan");
const hitungKarakter = document.querySelector("#hitung-karakter");

if (kotakPesan) {
  kotakPesan.addEventListener("input", () => {
    hitungKarakter.textContent = `${kotakPesan.value.length}/300 
    karakter`;
  });
}
// 4. Daftar proyek dan filter (halaman Proyek)
const proyek = [
  {
    judul: "Halaman Profil Pertama",
    kategori: "Html",
    gambar: "img/proyek-profil.png",
    alt: "Tangkapan layar halaman profil Fahmi ramadhani",
    deskripsi: "Halaman web pertama saya, dibuat dengan html dasar.",
  },
  {
    judul: "Form Kontak",
    kategori: "Html",
    gambar: "img/proyek-kontak.png",
    alt: "Tangkapan layar form kontak berisi lima isian",
    deskripsi: "Form dengan label dan validasi bawaan browser.",
  },
  {
    judul: "Tabel jadwal belajar",
    kategori: "Html",
    gambar: "img/proyek-jadwal.png",
    alt: "Tangkapan layar tabel jadwal mandiri",
    deskripsi: "Jadwal belajar mingguan dengan thead dan tbody.",
  },
  {
    judul: "Portofolio responsif",
    kategori: "Css",
    gambar: "img/proyek responsif.png",
    alt: "Tangkapan layar portofolio di ponsel dan laptop",
    deskripsi: "Rapi di ponsel, tablet, dan laptop dengan flexbox",
  },
  {
    judul: "Kalkulator nilai rapor",
    kategori: "Javascript",
    gambar: "img/proyek-kalkulator.png",
    alt: "Tangkapan layar hasil kalkulator nilai di console",
    deskripsi: "Rata-rata dan predikat nilai dengan fungsi Javascript",
  },
  {
    judul: "Lima soal logika",
    kategori: "Javascript",
    gambar: "img/proyek-logika.png",
    alt: "Tangkapan layar hasil lima soal logika",
    deskripsi: "Lima fungsi soal logika yang masing-masing diuji 3 masukan.",
  },
];
const daftarProyek = document.querySelector("#daftar-proyek");
const jumlahProyek = document.querySelector("#jumlah-proyek");

function buatKartu(item) {
  return `
  <article class="kartu">
   <span class="label">${item.kategori}</span>
   <h3>${item.judul}</h3>
   <img src="${item.gambar}" alt= "${item.alt}" width="280">
   <p>${item.deskripsi}</p>
  </article> `;
}

function tampilkanProyek(daftar) {
  const semuaKartu = daftar.map ((item) => buatKartu(item));
  daftarProyek.innerHTML = semuaKartu.join("");
  jumlahProyek.textContent = `Menampilkan ${daftar.length} dari ${proyek.length} proyek`;
}

function pasangFilter(idTombol, kategori) {
  const tombol = document.querySelector(idTombol);
  if (!tombol) return;

  tombol.addEventListener("click", () => {
    const tombolLama = document.querySelector(".tombol-filter.aktif");
    if (tombolLama) {
      tombolLama.classList.remove("aktif");
    }
    tombol.classList.add("aktif");

    if (kategori === "Semua") {
      tampilkanProyek(proyek);
    } else {
      tampilkanProyek(proyek.filter((item) => item.kategori === 
kategori));
    }
  });
}
if (daftarProyek) {
  tampilkanProyek(proyek);
  pasangFilter("#filter-semua", "Semua");
  pasangFilter("#filter-html", "Html");
  pasangFilter("#filter-css", "Css");
  pasangFilter("#filter-javascript", "Javascript");
}
