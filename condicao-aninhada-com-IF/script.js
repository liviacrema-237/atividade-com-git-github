let renda = NUmber(prompt("Digite sua renda"));
// ! simbolo de negação
// isNaN: is not number (verifica se NÃO é um número)
if(!isNaN(renda)){
    if (renda >= 3000){
        let nomeLimpo = prompt ("nome limpo? (sim ou não");
        if (nomeLimpo === "sim"){
            alert ("Financiamento aprovado");
        }else {
            alert ("Nome negativado");
        }
    }else {
        alert ("Renda Insuficiente")
    }
}