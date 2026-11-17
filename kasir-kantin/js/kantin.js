let menu = [];

const daftarMenuEl = document.getElementById("daftar-menu");
const infoJumlahEl = document.getElementById("info-jumlah");
const btnModeGelap = document.getElementById("btn-mode-gelap");
const tombolFilter = document.querySelectorAll(".filter-group button");

// Menampilkan daftar menu ke dalam <ul> menggunakan createElement & appendChild
function renderMenu(daftar) {
  daftarMenuEl.innerHTML = "";

  daftar.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.nama} - Rp${item.harga}`;
    daftarMenuEl.appendChild(li);
  });

  infoJumlahEl.textContent = `${daftar.length} menu tersedia`;
}

// Mengambil data dari data/menu.json menggunakan fetch
async function muatMenu() {
  infoJumlahEl.textContent = "Memuat menu...";

  try {
    const response = await fetch("data/menu.json");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    menu = await response.json();
    renderMenu(menu);
  } catch (error) {
    console.error("Gagal memuat menu:", error);
    infoJumlahEl.textContent = "Gagal memuat daftar menu. Pastikan file data/menu.json tersedia.";
  }
}

// Event untuk tombol filter Semua, Makanan, dan Minuman
tombolFilter.forEach((tombol) => {
  tombol.addEventListener("click", () => {
    const kategori = tombol.dataset.kategori;

    if (kategori === "Semua") {
      renderMenu(menu);
    } else {
      const hasilFilter = menu.filter((item) => item.kategori === kategori);
      renderMenu(hasilFilter);
    }
  });
});

// Event untuk tombol mode gelap dengan classList.toggle
btnModeGelap.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const aktif = document.body.classList.contains("dark-mode");
  btnModeGelap.textContent = aktif ? "Mode Terang" : "Mode Gelap";
});

// Jalankan saat halaman dimuat
muatMenu();