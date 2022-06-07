//Nivell 1 Exercici 1
/*
function n1e1() {
    const fs = require('fs');

    const content = 'Some content!1234567';

    fs.writeFile('message.txt', content, err => {
    if (err) {
        console.error(err);
    }
    //console.log('file written successfully')
    });

}

n1e1()

//Nivell 1 Exercici 2

function n1e2(){
    const fs = require('fs');

    fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
    });

}

n1e2()


//Nivell 1 Exercici 3

function n1e3(){
    var zlib = require('zlib');
    var fs = require('fs');

    var gzip = zlib.createGzip();
    var r = fs.createReadStream('message.txt');
    var w = fs.createWriteStream('message.txt.zip');
    r.pipe(gzip).pipe(w);
}

n1e3()*/

//Nivell 2 Exercici 1

/*function n2e1(num) {
    console.log(num);

    let nextNumber = num - 1;

    if (nextNumber > 0) {
        setTimeout(() => {
            n2e1(nextNumber);
          }, 1000)        
    }
}
n2e1(10);*/


//Nivell 2 Exercici 2

const ShowFiles = () => {
    const { exec } = require('child_process');
    const fs = require('fs');
    exec ('ls', () => {
      const homedir = require('os').homedir();
      let file = fs.readdirSync(homedir);
      console.log("Arxius Directori Usuari:", '\n', file);
    })
  
  }

  ShowFiles()