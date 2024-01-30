//object
var siswa = new Object();
siswa.namaDepan = "asep";
siswa.namaBelakang = "gerung";
siswa.alamat = "bandung";
siswa.namaLengkap = function () {
  return this.namaDepan + " " + this.namaBelakang;
};

//object JSON
var siswa2 = {
  namaDepan: "Raka",
  namaBelakang: "adiputrea              ",
  alamat: "bandung",
  namaLengkap: function () {
    return this.namaDepan + " " + this.namaBelakang;
  },
};

alert("Nama :" + siswa.namaLengkap());
alert("Nama : " + siswa2.namaLengkap());

// function namaLengkap() {

// // }