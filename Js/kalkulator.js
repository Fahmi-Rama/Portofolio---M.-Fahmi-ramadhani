// mengambil elemen html
const inputTugas = document.querySelector("#tugas");
const inputUts = document.querySelector("#uts");
const inputUas = document.querySelector("#uas");

const tombol = document.querySelector("#hitung");
const hasil = document.querySelector("#hasil");

// fungsi menghitung rata-rata 
const hitungRataRata = (tugas, uts, uas) => {
    return (tugas + uts + uas) / 3;
};

// fungsi menentukan predikat

function Predikat(nilai) {
     if (nilai >= 90) {
    return "A";
  } else if (nilai >= 80) {
    return "B";
  } else if (nilai >= 70) {
    return "C";
  } else {
    return "D";
  }
}

//tombol hitung
tombol.addEventListener("click",() => {

    const tugas = Number(inputTugas.value);
    const uts = Number(inputUts.value);
    const uas = Number(inputUas.value);

    const rataRata = hitungRataRata(tugas, uts, uas);
    const niaiPredikat = Predikat(rataRata);

    hasil.textContent = `Rata-rata ${rataRata.toFixed(1)}, predikat ${niaiPredikat}`;

});