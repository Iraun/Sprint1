// let employees = [{
//     id: 1,
//     name: 'Linux Torvalds'
// }, {
//     id: 2,
//     name: 'Bill Gates'
// },{
//     id: 3,
//     name: 'Jeff Bezos'
// }];

// let salaries = [{
//     id: 1,
//     salary: 4000
// }, {
//     id: 2,
//     salary: 1000
// }, {
//     id: 3,
//     salary: 2000
// }];


// const getEmplyee = (numId) => {
//     return new Promise ((resolve, reject) => {
//         const buscarIndex = (employees.findIndex( worker => worker.id === numId )) ; 
        
//         if (buscarIndex >= 0 && buscarIndex <= 3){
//             resolve(employees[buscarIndex].name)
            
//         } else if (buscarIndex < 0 ){
//             reject(("no s'ha trobat l'id que busques"));
//         }
//     })
// }

// const getSalary = (numId) => {
//     return new Promise ((resolve, reject) => {
//         const buscarIndex = (employees.findIndex( worker => worker.id === numId )) ; 
        
//         if (buscarIndex >= 0 && buscarIndex <= 3){
//             resolve(salaries[buscarIndex].salary)
            
//         } else if (buscarIndex < 0 ){
//             reject(("no s'ha trobat l'id que busques"));
//         }
//     })
// }

//Nivell 1 Exercici 1

// async function f(x) {
//     let treballador = await getEmplyee(x);
//     let salari = await getSalary(x);

//     console.log(treballador, salari)
// }

// f(2);

// //Nivell 1 Exercici 2

// function f2() {

//     return new Promise((resolve) => {
//       setTimeout(() => resolve("done!"), 2000)
//     });
  
//   }

//   async function f3() {
//       let result = await f2();
//       console.log(result);
//   }
  
//   f3();

  //Nivell 2 Exercici 1

  function f4(num) {

    let promise = /*new Promise((resolve) => {*/
      setTimeout(() => /*resolve*/{num * 2}, 2000)
    /*});*/    
    console.log(promise);
    
  }
  
  f4(2);


// function f5(num1, num2, num3) {
//     let resultat = f4(num1)
//     console.log(f4(num2), f4(num3))
//     console.log(resultat)
// }

f5(1,2,3)

