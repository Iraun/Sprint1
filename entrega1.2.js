//Nivell 1 Exercici 1

//const sumaNum = 
((num1, num2) => {console.log(num1 + num2)})(2,3)
//console.log(sumaNum(2,3));


//Nivell 2 Exercici 1

const universitat = (name) => {
    return {
        name,
        matricula: 1600
    }
}
//console.log(universitat("UPF"));
const uniPublica = universitat("UPF")
console.log(uniPublica.name);

//Nivell 2 Exercici 2

class Persona {
    constructor(nom){
        this._nom = nom;
    }

    dirNom(parametre){
        return this._nom = parametre
    }
}

const elNom = new Persona("Pere")
console.log(elNom._nom)
//console.log(elNom.dirNom)
console.log(elNom.dirNom("Marc"))



//Nivell 3 Exercici 1


