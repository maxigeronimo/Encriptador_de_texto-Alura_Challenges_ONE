function encriptar(){
    var texto= document.getElementById("inputText").value.toLowerCase();

    var txtCifrado= texto.replace(/e/igm,"enter")
    var txtCifrado= txtCifrado.replace(/o/igm,"ober")
    var txtCifrado= txtCifrado.replace(/i/igm,"imes")
    var txtCifrado= txtCifrado.replace(/a/igm,"ai")
    var txtCifrado= txtCifrado.replace(/u/igm,"ufat")
    var txtCifrado= txtCifrado.replace(/[^a-z]+/g,'');


       // desapracecen de la pantalla
       document.getElementById("imgDer").style.display="none";
       document.getElementById("texto").style.display="none";
       document.getElementById("subtexto").style.display="none";
    //    document.getElementById("titulos").style.display="none"
        document.getElementById("inputText").value=""
       
       // aparece el texto
       document.getElementById("segundoPanel").style.display="show";
       document.getElementById("segundoPanel").style.display="inherit" 
       document.getElementById("texto2").style.display="show";
       document.getElementById("texto2").style.display="inherit" 
       document.getElementById("texto2").innerHTML= txtCifrado;
       // aparece el botton copiar
       document.getElementById("copiar").style.display="show";
       document.getElementById("copiar").style.display="inherit";
       
}

function desencriptar(){
    var texto= document.getElementById("inputText").value.toLowerCase();

    var txtCifrado= texto.replace(/enter/igm,"e")
    var txtCifrado= txtCifrado.replace(/ober/igm,"o")
    var txtCifrado= txtCifrado.replace(/imes/igm,"i")
    var txtCifrado= txtCifrado.replace(/ai/igm,"a")
    var txtCifrado= txtCifrado.replace(/ufat/igm,"u");
    var txtCifrado= txtCifrado.replace(/[^a-z]+/g,' ');

    // desapracecen de la pantalla
    document.getElementById("imgDer").style.display="none";
    document.getElementById("texto").style.display="none";
    document.getElementById("subtexto").style.display="none";
    document.getElementById("inputText").value=""
    
    // aparece el texto
    document.getElementById("segundoPanel").style.display="show";
    document.getElementById("segundoPanel").style.display="inherit" 
    document.getElementById("texto2").style.display="show";
    document.getElementById("texto2").style.display="inherit" 
    document.getElementById("texto2").innerHTML= txtCifrado;
    // aparece el botton copiar
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";
    
}

function copiar(){
    var contenido=document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    
    alert("Se guardo en CortaPapeles!");
}

