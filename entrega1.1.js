//NIVELL 1 EXERCICI 1

function diguesnom(nom){
    console.log(nom) 
    
 } 
 diguesnom("Pere")

 //NIVELL 2 EXERCICI 1

    let nom2 = "Pere";
    let cognom = "Serra";

    console.log(`${nom2} ${cognom}`)

//NIVELL 2 EXERCICI 2

function valor() {
    let hello = 'Hello World';
    return `${hello}`;
}

console.log(valor());

//NIVELL 3 EXERCICI 1

let arrFuncions = [];

function counter(){
    let num = 0
    for(j=1; j<10; j++){
        num += [j]
    }
    //console.log(num)
    return num;
}

for(i=0; i<10; i++ ){
    arrFuncions.push(counter()) 
}  
    
console.log(arrFuncions);


//NIVELL 3 EXERCICI 2

const nom = (function( param1 ){
    console.log( param1 ); //Pere
})( 'Pere' );

