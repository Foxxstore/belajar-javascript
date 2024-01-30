// Daftar menu dan harga
var menu = {
  "nasi goreng": 15000,
  "mie moreng": 10000,
  "es teh": 25000,
  "es jeruk": 20000
};

// Memilih menu
var pesanan = prompt("Silakan pilih menu yang ingin dipesan:\n" + Object.keys(menu).join("\n"));
var jumlah = prompt("Masukkan jumlah " + pesanan + " yang ingin dipesan:");

// Menghitung total biaya
var totalBiaya;
if (menu.hasOwnProperty(pesanan)) {
  totalBiaya = menu[pesanan] * parseInt(jumlah);
  alert("Anda telah memesan " + jumlah + " " + pesanan + ". Total biaya: Rp" + totalBiaya);
  alert("Terima kasih")
} else {
  alert("pilihan tidak ada di menu.");
}