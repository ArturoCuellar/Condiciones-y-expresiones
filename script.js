//#Exercise 1 part 1

var names =["Maria", "Antony", "Joy","Juan"];

function agregaAlFinal(){
    names.push("Arturo");
}

agregaAlFinal();

console.log(names);

//#Exercise 1 part 2
function checknames(){
let check = names.includes("Maria");

console.log(check);
}

checknames();
//#Exercise 1 part 3
let names2 =["Jose","Jesus","Linda","Elizabeth"];
function listnames(names,names2){
  

   var names3 =names.concat(names2);
    console.log(names3);
}

listnames(names,names2);

//#Exercise 1 part 4

function backNumberList(){
   

    names.forEach(element => {
        element += element.length;
        console.log(  "\n"+element);
    });
 
}


backNumberList();
//Exercise 2

false || (true && false);   //si es falso o es verdado y falso se cumple
true || (11 + 12);          // si es verdadero o la suma da 23
(31 + 22) || true;          //si la suma da 53 o es verdadero se cumple
true && (1 + 7);            //si es verdadero y la suma da 8 se cumple
false && (3 + 4);           // si es falso y la suma da 7 se cumple
(1 + 2) && true;            // si la suma da 3 y verdadero se cumple
(32 * 4) >= 129;            // la multiplicacion debe dar mas de 129 si no se va a else
false !== !true;            // si falso no es falso se cumple
true === 4;                 // si verdadero estrictamente tiene que ser igual a 4
false === (847 === '847');  // debe ser falso estrictamente que 847 es igual a 847
false === (887 == '887');   //debe ser falso estrictamente que 887 es igual a 887
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; //no es verdad o no es verdad que 100/5 es igual a 20 o 328/4 es igual a 82

//Exercise 3
function numberRange(number){
    if(number>=0 && number<=25){
        console.log("el numero esta entre 0 y 25");
    }else if(number >=26 && number <=75){
        console.log("El numero esta entre 26 y 75");
    }else if(number>=100){
        console.log("El numero es mayor a 100");
    }else if(number<0){
        console.log("El numero es menor que 0");
    }
}
numberRange(101);