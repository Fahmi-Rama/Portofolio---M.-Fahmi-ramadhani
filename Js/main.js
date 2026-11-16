// JavaScript portofolio Fahmi ramadhani
// Dipasang di ketiga halaman dengan defer
// 1. Daftar keahlian (halaman Beranda),data dari data/keahlian.json
const daftarSkill = document.querySelector("#daftar-skill");
const jumlahSkill = document.querySelector("#jumlah-skill");

async function muatKeahlian() {
  try {
    const response = await fetch ("data/keahlian.json");
    if (!response.ok) {
      throw new Error(`Status ${response.status}`);
    }
    const skills = await response.json();

    skills.forEach((skills) => {
      const item = document.createElement("li");
      item.textContent = `${skills.nama} (${skills.level})`;
      daftarSkill.appendChild(item);
    });
    jumlahSkill.textContent = `Ada ${skills.length} keahlian yang sedang saya kembangkan.`;
  } catch (error) {
    jumlahSkill.textContent = "Daftar keahlian gagal dimuat.";
    console.error(error);
  }
}
if (daftarSkill) {
  muatKeahlian();
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

let proyek = [];

const daftarProyek = document.querySelector("#daftar-proyek");
const jumlahProyek = document.querySelector("#jumlah-proyek");

async function muatProyek() {
  jumlahProyek.textContent = "Memuat proyek...";
  try {
    const response = await fetch("data/proyek.json");
    if (!response.ok) {
      throw new Error(`Status ${response.status}`);
    }
    proyek = await response.json();
    tampilkanProyek(proyek);
  } catch (error) {
    jumlahProyek.textContent = "Data proyek gagal dimuat.";
    console.error(error);
  }
}

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
  muatProyek(proyek);
  pasangFilter("#filter-semua", "Semua");
  pasangFilter("#filter-html", "Html");
  pasangFilter("#filter-css", "Css");
  pasangFilter("#filter-javascript", "Javascript");
}
// 5. Repositori GitHub terbaru (halaman Proyek)
const username = "Fahmi-Rama";
const alamatRepo = `https://api.github.com/users/${username}/repos`;
const pilihan = "?sort=updated&per_page=6";

const daftarRepo = document.querySelector("#daftar-repo");
const statusRepo = document.querySelector("#status-repo");

async function ambilRepo() {
  statusRepo.textContent = "Memuat..."
  try {
   const response = await fetch(alamatRepo + pilihan);
   if (!response.ok) {
    throw new Error (`Status ${response.status}`);
   }
   const repos = await response.json();

  repos.forEach((repo) => {
    const item = document.createElement("li");
    const tautan = document.createElement("a");
    tautan.href = repo.html_url;
    tautan.target = "_blank";
    tautan.textContent = repo.name;
    item.appendChild(tautan);
    daftarRepo.appendChild(item);
  });
  statusRepo.textContent = `${repos.length} repositori yang terakhir 
diperbarui:`;
} catch (error) {
  statusRepo.textContent = "Maaf, daftar repoisitori gagal dimuat. periksa username atau coba lagi nanti.";
  console.error(error);
}
}
if (daftarRepo) {
  ambilRepo();
}
