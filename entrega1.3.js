//Nivell 1 Execici 1 (CORREGIT)
function n1e1(){ 
    const min = 90;

    const partit = new Promise ((resolve, reject) => {
        if( min > 80 ){
            const tempsPartit = `El partit està a punt d'acabar`
            resolve (tempsPartit)
        } else {
            reject( new Error(`Encara poden passar moltes coses abans d'acabar el partit`))
        }
    })

    partit 
    .then( res => {
        console.log(res)
    } )
    .catch( err => {
        console.log(err)
    });
}

n1e1()

//Nivell 1 Exercici 2

const dameArgo = ( num1, callback) => {
    if(num1 > 8 ){
        callback(`Es compleix el requisit`)
    } else {
        callback(`No es compleix el requisit`)
    }    
}
 dameArgo(9, x => {
    console.log(x)
 })

 //Nivell 2 Exercici 1

 let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];

let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

const getEmplyee = (numId) => {
    return new Promise ((resolve, reject) => {
        const buscarIndex = (employees.findIndex( worker => worker.id === numId )) ; 
        console.log(buscarIndex);
        //console.log(employees[buscarIndex]);
        //console.log(employees[buscarIndex].id);
        //console.log(employees[buscarIndex].name);
        if (buscarIndex >= 0 && buscarIndex <= 3){
            resolve(employees[buscarIndex].name)
            
        } else if (buscarIndex < 0 ){
            reject(/*new Error*/("no s'ha trobat l'id que busques"));
        }
    })
}

getEmplyee(1) 
.then( resolve => {
    console.log(resolve)
})
.catch( err => {
    console.log(err)
}); 


//Nivell 2 Exercici 2


const getSalary = (numId) => {
    return new Promise ((resolve, reject) => {
        const buscarIndex = (employees.findIndex( worker => worker.id === numId )) ; 
        //const buscarSalari = (salaries.findIndex(x => x[buscarIndex] === salaries[buscarIndex].id))
        console.log(buscarIndex);
        //console.log(buscarSalari);
        if (buscarIndex >= 0 && buscarIndex <= 3){
            resolve(salaries[buscarIndex].salary)
            
        } else if (buscarIndex < 0 ){
            reject(/*new Error*/("no s'ha trobat l'id que busques"));
        }
    })
}

getSalary(1) 
.then( resolve => {
    console.log(resolve)
})
.catch( err => {
    console.log(err)
});


//Nivell 2 Exercici 3


let id = 1

getEmplyee(id)
.then( resolve => {
    getSalary(id)
    .then (resolve1 => {
        console.log(resolve, resolve1)
    } )
} )


//Nivell 3 Exercici 3

let id2 = 6

getEmplyee(id2)
.then( resolve => {
    getSalary(id2)
    .then (resolve1 => {
        console.log(resolve, resolve1)
    } )
} )
.catch ( err => {
    console.log(err)
});

