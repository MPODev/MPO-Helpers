var data = require('./s267.json');
//console.log(data.seite.artikel);
var str = "";
for(var i = 0; i < data.seite.artikel.length;i++){
    art = data.seite.artikel[i];
    var nr = art.textPlatzieren.artikelNr.replace("Art-Nr\.\ ","");
    str+= nr.replace(/ +?/g, '') + ", ";
//    console.log(art.textPlatzieren.artikelNr.replace("Art-Nr\.\ ",""));
}
//for(var i = 0; i < data.videos.length;i++){
//console.log(data.videos[i].title);
//console.log(data.videos[i].id);
//console.log("");    
//}
console.log(str);