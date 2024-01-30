var nilai = prompt("Masukkan nilai: ");

// Menggunakan fungsi isNaN untuk memeriksa apakah nilai bukan angka
if (isNaN(nilai)) {
    alert("Input yang dimasukkan bukan angka. Silakan masukkan nilai numerik.");
} else {
    nilai = Number(nilai);

    var grade;
    if (nilai < 40) {
        grade = "E";
    } else if (nilai < 65) {
        grade = "D";
    } else if (nilai < 75) {
        grade = "C";
    } else if (nilai < 85) {
        grade = "B";
    } else {
        grade = "A";
    }

    alert("Nilai: " + nilai + "\nGrade Anda Adalah: " + grade);
}
