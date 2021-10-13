
let nilai = 90
let interview = 'A'

let penerimaan = (nilai, interview) => {
    if (nilai > 80) {
        console.log("LULUS");
    }else if (nilai >= 60 && nilai <=80) {
        console.log("DIPERTIMBANGKAN");
    }else{
        console.log("GAGAL");
    }


    if (interview == 'A' || interview == 'B') {
        console.log("LULUS INTERVIEW");
    }else{
        console.log("GAGAL TES INTERVIEW");
    }

    if (nilai > 80 || nilai >= 60 && nilai <= 80) {
        if (interview == 'A' || interview == 'B') {
            console.log("SELAMAT ANDA BERHASIL MENJADI CALON PROGRAMMER");
        }else{
            console.log("Maaf Kamu Belum Berhasil Menjadi Calon Programmer");
        }
    }else{
        console.log("Maaf Kamu Belum Berhasil Menjadi Calon Programmer");
    }
}

let result = penerimaan(90,'A')
console.log(result);
