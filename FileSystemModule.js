 const url =require ('url');

const adres = 'https://www.linkedin.com/in/hale-tosun-29b766180/'

let result = url.parse(adres,true);
console.log(result);
console.log(result.path);  
const newLocal = require('console');



const fs = require('fs');
const files = fs.readdir('./', function () {
    if(error){
        console.log(error);
    }
    else{ 
        console.log(data); 
    }
}); 

console.log("hale");
//okuma
const data = fs.readFile('redux.html' , 'utf8' , function(error,data) {
    if(error){
        console.log(error);
    }
    else{ 
        console.log(data); 
    }
})  

fs = require('fs');
//oluşturma
fs.writeFile('deneme.txt' , 'hellooooo', function(error) {
    if (error){
        console.log(error);
    } else {
        console.log('dosya olusturuldu');
    }
})
//ekleme
fs.appendFile('deneme.txt', 'append file mevcut dosyanın davamına içerik ekler' , function(error) {
    if(error){
        console.log(error);
    } else {
        console.log('metin eklendi');
    }
})

// unlink metodu dosyayı siler
 fs.unlinlk('deneme.txt', function(error) {
    console.log('dosya silindi');
}); 
//dosya isim degisilkiği
fs.rename('deneme.txt', 'moduleSample', function(error) {
    console.log('dosya ismi degistirildi');
})