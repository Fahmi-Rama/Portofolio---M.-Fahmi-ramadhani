// Soal 1: ganjil atau genap
function ganjilGenap(angka) {
  if (angka % 2 === 0) {
    return "Genap";
  } else {
    return "ganjil";
  }
}
console.log("Soal 1: ganjil atau genap");
console.log(`ganjilGenap(7) = ${ganjilGenap(7)}`); // ganji
console.log(`ganjilGenap(12) = ${ganjilGenap(12)}`); // genap
console.log(`ganjilGenap(0) = ${ganjilGenap(0)}`);// genap

// Soal 2 mengubah suhu celcius ke fahrenheit
const celciuskeFahrenheit = (celcius) => {
    return celcius * 9 / 5 + 32;
}
console.log("Soal 2: mengubah suhu celcius ke fahrenheit");
console.log(`celciuskeFahrenheit(0) = ${celciuskeFahrenheit(0)}`);
console.log(`celciuskeFahrenheit(0) = ${celciuskeFahrenheit(100)}`);
console.log(`celciuskeFahrenheit(0) = ${celciuskeFahrenheit(-40)}`);

//Soal 3 Mengembalikan angka terbesar dari tiga angka
function nilaiTerbesar(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
console.log("Soal 3: Mengembalikan angka terbesar dari tiga angka");
console.log(`nilaiTerbesar(5, 9, 2) = ${nilaiTerbesar(5, 9, 2)}`);
console.log(`nilaiTerbesar(5, 9, 2) = ${nilaiTerbesar(80, 75, 80)}`);
console.log(`nilaiTerbesar(5, 9, 2) = ${nilaiTerbesar(-3, -7, -1)}`);

// Soal 4: Tahun kabisat
function tahunKabisat(tahun) {
    if (
        (tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0
    ) {
        return true;
    } else {
        return false;
    }
}
console.log("Soal 4: Tahun kabisat");
console.log(`Tahun kabisat (2024) = ${tahunKabisat(2024)}`);
console.log(`Tahun kabisat (2024) = ${tahunKabisat(2026)}`);
console.log(`Tahun kabisat (2024) = ${tahunKabisat(1900)}`);
console.log(`Tahun kabisat (2024) = ${tahunKabisat(2000 )}`);

// soal 5: harga Setelah Diskon
function hargaSetelahDiskon(total) {
    if (total >= 200000) {
        return total - (total * 20 / 100);
    } else if (total >= 100000) {
        return total - (total * 10 / 100);
    } else {
        return total;
    }
}
console.log("Soal 5: harga Setelah Diskon");
console.log(`hargaSetelahDiskon(250000) = ${hargaSetelahDiskon(250000)}`);
console.log(`hargaSetelahDiskon(250000) = ${hargaSetelahDiskon(100000)}`);
console.log(`hargaSetelahDiskon(250000) = ${hargaSetelahDiskon(75000)}`);