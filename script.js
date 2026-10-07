let nama = "Haya Lintang Cahyawi";
let semester = 3;
const jurusan = "Teknologi Informasi";
const universitas = "UIN Salatiga";

let jam = new Date().getHours();
let waktu;

if (jam < 10) {
  waktu = "pagi";
} else if (jam < 15) {
  waktu = "siang";
} else if (jam < 18) {
  waktu = "sore";
} else {
  waktu = "malam";
}

document.querySelector("#sapaan").textContent =
  "Selamat " +
  waktu +
  " gaisss, aku " +
  nama +
  ", mahasiswa semester " +
  semester +
  " " +
  " jurusan " +
  jurusan +
  " di " +
  universitas +
  ".";

let tahunMasuk = 2025;
let tahunLulus = tahunMasuk + 4;
let sisaSemester = 8 - semester;

document.querySelector("#info-tambahan").textContent =
  "Perkiraan lulus tahun " +
  tahunLulus +
  " (" +
  sisaSemester +
  " semester lagi).";

let keahlianTambahan = [
  "Git & GitHub",
  "Responsive Design",
  "Debugging Dasar",
  "Framework CSS (Bootstrap & Tailwind)",
  "Framework Laravel",
];

for (let i = 0; i < keahlianTambahan.length; i++) {
  let li = document.createElement("li");
  li.textContent = keahlianTambahan[i];
  document.querySelector("#keahlian-tambahan").appendChild(li);
}

function cekInfoDiri() {
  if (sisaSemester <= 4) {
    document.querySelector("#hasil-cek").textContent =
      "Sebentar lagi lulus! Tinggal " +
      sisaSemester +
      " semester lagi, semangat " +
      nama +
      "!";
  } else {
    document.querySelector("#hasil-cek").textContent =
      nama +
      " masih semester " +
      semester +
      ", perkiraan lulus " +
      tahunLulus +
      ".";
  }
}
document.querySelector("#btn-cek").addEventListener("click", cekInfoDiri);

function validasiForm(event) {
  let namaInput = document.querySelector("#nama").value;
  if (namaInput === "") {
    event.preventDefault();
    document.querySelector("#hasil-form").textContent =
      "Nama wajib diisi sebelum pesan dikirim.";
  } else {
    document.querySelector("#hasil-form").textContent = "";
  }
}
document.querySelector("#form-kontak").addEventListener("submit", validasiForm);
