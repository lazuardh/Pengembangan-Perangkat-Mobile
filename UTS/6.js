let dataDosen = [
    {
        nama: "Syahid Abdullah",
        NIP: 12020036,
        jabatan: "Sekertaris Prodi",
        Pengampu: {
            matakuliah: "Aljabar Linear",
            matakuliah: "Dasar Pemrograman",
            matakuliah: "Basis Data"
        }
    },
    {
        nama: "Alun Sujada",
        NIP: 12020037,
        jabatan: "Dosen",
        Pengampu: {
            matakuliah: "Dasar Pemrograman",
            matakuliah: "Pemrograman Mobile",
            matakuliah: "PBO"
        }
    },
    {
        nama: "Anggun Fergina",
        NIP: 12020038,
        jabatan: "Ketua Prodi",
        Pengampu: {
                 matakuliah: "Basis Data",
                 matakuliah: "RPL",
                 matakuliah: "Dasar Pemrograman"
        }
    },
   
];

const pemrograman = []
const basis = []
const PBO = []
for (var i=0; i<dataDosen.length; i++){
    var matkul = dataDosen[i].Pengampu.matakuliah
    
    if (matkul === "Dasar Pemrograman") {
        pemrograman.push(dataDosen[i].nama)
    }
    else{
        
    } 

    if (matkul === "Basis Data") {
        basis.push(dataDosen[i].nama)
    
    }
    else{
    } 
    if (matkul === "PBO") {
        PBO.push(dataDosen[i].nama)
    }
    else{
    }
}

let hasil = {
    "Pengampu Dasar Pemrograman" : pemrograman,
    "Pengampu Basis Data" : basis,
    "Pengampu PBO" : PBO
}
console.log(hasil);