// const buah = ["Mangga", "Jeruk", "Sirsak"];
// buah = ["Pisang", "Apel","Duku"]

// console.log(buah);


//conto var
function Var(){
    var num = 1;
    if(num == 1){
      var num2 = ++num;
    }
    return num2;
  }

  console.log("dengan var hasilnya : "+ Var());

 // conto let
  function Let(){
    let num = 1;
    if(num == 1){
      let num2 = ++num;
      return num2;
    }
    
  }
  
  console.log("dengan let hasilnya : "+ Let());