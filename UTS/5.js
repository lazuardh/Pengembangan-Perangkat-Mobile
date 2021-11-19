let activities = [
    ['P','| |', 'P', '| |', 'P', '| |'],
    ['P','| |', 'P', '| |', 'P', '| |'],
    ['P','| |', 'P', '| |', 'P', '| |'],
    ['P','| |', 'P', '| |', 'P', '| |'],
    ['P','| |', 'P', '| |', 'P', '| |'],
    ['P','| |', 'P', '| |', 'P', '| |'],
    ['P','| |', 'P', '| |', 'P', '| |'],
    
];

console.log(`Note: || adalah saluran air dan ('P') adalah buah pisang yang ada diladang`)
console.log(activities);

activities.forEach(activity => {
    
    let buah = activity.filter(function(ladang){
        return ladang == 'P';
    });

    let test = 0
    test += buah.length
    
    console.log(`Jumlah Buah pisang Diladang yaitu ${test}`);
    
});
