var menuMakanan = {
    "nasi goreng": 25000,
    "mie goreng": 20000,
    "ayam goreng": 30000,
    "sate ayam": 15000,
  };
  
  
  var menuText = "Daftar Menu Makanan:\n";
  for (var menu in menuMakanan) {
    menuText += menu + " - Rp" + menuMakanan[menu] + "\n";
  }
  alert(menuText);
  
  
  var pilihanMenu = prompt("Masukkan menu yang ingin dipesan:");
  var jumlahMakanan = parseInt(prompt("Masukkan jumlah " + pilihanMenu + " yang ingin dipesan:"));
  
  
  if (menuMakanan.hasOwnProperty(pilihanMenu) && jumlahMakanan > 0) {
  
    var totalBiaya = menuMakanan[pilihanMenu] * jumlahMakanan;
  
  
    alert(
      "Pesanan Anda " + jumlahMakanan + " " + pilihanMenu +
      " Total Yang Harus di Bayar Rp" + totalBiaya
    );
  } else {
  
    alert("Pilihan Tidak ada di Menu");
  }
  
  
  alert("Terima kasih");