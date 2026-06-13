function resposta(tipo){

    const resultado = document.getElementById("resultado");

    if(tipo === "correto"){
        resultado.innerHTML = "✅ Parabéns! O plantio direto ajuda a conservar o solo.";
        resultado.style.color = "green";
    }else{
        resultado.innerHTML = "❌ Não. O desmatamento prejudica o meio ambiente.";
        resultado.style.color = "red";
    }
}

function scrollToSection(){
    document.getElementById("sobre")
    .scrollIntoView({behavior:"smooth"});
}
