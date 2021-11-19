let tokoMotor = [
    {
        idBarang: 001,
        namaBarang: "Ban",
        harga: {
            "Harga Awal": 200000,
            "Harga Jual": 250000,
            "Harga Paket": 230000
        }
    },
    {
        idBarang: 002,
        namaBarang: "Spion",
        harga: {
            "Harga Awal": 50000,
            "Harga Jual": 100000,
            "Harga Paket": 75000
        }
    }
];

const hargaAtas = []
const hargaBawah = []
for (let i = 0; i < tokoMotor.length; i++) {
    const barang = tokoMotor[i].harga["Harga Awal"];
    
    if (barang >= 100000) {
        hargaAtas.push(tokoMotor[i].namaBarang +' : '+ tokoMotor[i].harga["Harga Awal"]);
    }else{
       
    }

    if (barang < 100000) {
        hargaBawah.push(tokoMotor[i].namaBarang +' : '+ tokoMotor[i].harga["Harga Awal"]);
    }
}

let hasil = {
    "Harga awal barang di atas 100000": hargaAtas,
    "Harga awal Barang Di bawah 100000": hargaBawah
}

console.log(hasil);