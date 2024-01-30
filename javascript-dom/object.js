var siswa =  new Object();
siswa.namaDepan = "asep"
siswa.namaBelakang = "gerung"
siswa.alamat = "bandung"
siswa.namaLengkap = function() {
    return this.namaDepan + " " + this.namaBelakang;
};

alert ("Nama :" + siswa.namaLengkap());

//functiom nama lengkap