let waktuLari = 5
let waktuPushup = 30
let waktuPlank = 1

const lari = 60/5
const pushup = 200/30
const plank = 5

let aktivitas1 = 'lari'
let aktivitas2 = 'pushup'
let aktivitas3 = ''

let kaloriAwal = 600
let kaloriAkhir
let kaloriYangDibakar = 0

if(aktivitas1 == 'lari'){
    kaloriYangDibakar = kaloriYangDibakar + waktuLari * lari
}

if (aktivitas2 == 'pushup'){
    kaloriYangDibakar = kaloriYangDibakar + waktuPushup * pushup
}

if (aktivitas3 =='plank'){
    kaloriYangDibakar = kaloriYangDibakar + waktuPlank * plank
}else{
    
}


if(aktivitas1 == 'lari' && aktivitas2 == 'pushup'){
    kaloriYangDibakar = (waktuLari * lari) + ( waktuPushup * pushup)
}else if(aktivitas2 == 'pushup' && aktivitas3 =='plank' ){
    kaloriYangDibakar = (waktuPushup * pushup) + (waktuPlank * plank)
}else if(aktivitas1 == 'lari' && aktivitas3 =='plank'){
    kaloriYangDibakar = (waktuLari * lari) + (waktuPlank * plank)
}else if(aktivitas1=='lari' && aktivitas2 =='pushup' && aktivitas3 =='plank'){
    kaloriYangDibakar = (waktuLari * lari) +  (waktuPushup * pushup) + (waktuPlank * plank)
}else{
    console.log("Tidak diketahui")
}

console.log(`Kalori Awal : ${kaloriAwal}`)
console.log(`Kalori yang dibakar : ${kaloriYangDibakar}`)
console.log(`Kalori Akhir : ${kaloriAwal-kaloriYangDibakar}`);
