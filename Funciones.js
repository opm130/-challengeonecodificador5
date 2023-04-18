let imagen=document.getElementById("mi1");
const cambio={
    "a" :"ai",
    "e" :"enter",
    "i" :"imes",
    "o" :"ober",
    "u" :"ufat"
}
var texto ;
function encriptar(){
    texto =document.getElementById("palabra").value.toLowerCase();
    if(texto==""){
        alert("Por favor escriba un texto");
    }
    else{
        function convertir(texto){
            return texto.replace(/[aeiou]/g, function(match) { //usando expresiones regulares con el modificador global
                return cambio[match];
              });            
        };

            document.getElementById("result").innerHTML=convertir(texto);
          
       }
    }
    
function desencriptar(){
    texto =document.getElementById("palabra").value.toLowerCase();
    if(texto==""){
        alert("Por favor escriba un texto");
    }
    else{
     var resp=texto.replace(/enter/g, "e")
     .replace(/imes/g, "i")
     .replace(/ai/g, "a")
     .replace(/ober/g, "o")
     .replace(/ufat/g, "u");
     document.getElementById("result").innerHTML=resp;
    };
}
function copiar(){
    var textoc=document.querySelector("#result");
    textoc.select();
    document.execCommand("copy");
}
