// 1 pesan pertama ke console
console.log("Halo saya Fahmi!");
console.log("Ini latihan javascript pertamaku");

// 2. Data siswa
const nama = "M. Fahmi ramadhani";
const kelas = "X RPL 1";
const kkm = 75;

let nilaiTugas = 85;
let nilaiUts = 78;
let nilaiUas = 89;
let Kehadiran = 90;

console.log(`Nama: ${nama}, Kelas ${kelas}`);
console.log(`Nilai tugas ${nilaiTugas}, UTS ${nilaiUts}, UAS ${nilaiUas}`);

//3. Fungsi
const hitungRataRata = (tugas, uts, uas) => (tugas + uts + uas) / 3;

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

function rapor(namaSiswa, tugas, uts, uas) {
    const rata = hitungRataRata(tugas, uts, uas);
    return `${namaSiswa} rata-rata ${rata}, predikat ${Predikat(rata)}`;
}

// 4. Hasil nilai andi 
const rataRata = hitungRataRata(nilaiTugas + nilaiUas + nilaiUts);
const lulus = rataRata >= kkm;
const dapatSertifikat = lulus && Kehadiran >= 80;

console.log(`Rata-rata niali: ${rataRata}`);
console.log(`predikat: ${Predikat(rataRata)}`);
console.log(`Lulus KKM: ${lulus}`);
console.log(`Dapat sertifikat: ${dapatSertifikat}`);

// pesan kelulusan
if (lulus) {
  console.log("Selamat, kamu lulus KKM!");
} else {
  console.log("Tetap semangat, ikuti remedial ya.");
}

// 5.Menguji fungsi predikat dengan beberapa nilai
console.log(`predikat(95) = ${Predikat(95)}`); // A
console.log(`predikat(90) = ${Predikat(90)}`); // A, tepat di batas
console.log(`predikat(84) = ${Predikat(84)}`); // B
console.log(`predikat(70) = ${Predikat(70)}`); // C
console.log(`predikat(69) = ${Predikat(69)}`); // D

// 6. Rapor beberapa siswa
console.log(rapor("Andi", 85, 78, 89));
console.log(rapor("Sinta", 92, 88, 96));
console.log(rapor("Budi", 70, 65, 72));
