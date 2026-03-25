let idade = Number(prompt("Digite sua idade:"));
let estudante = Number(prompt("É estudante? (sim ou nao"));
let professor = prompt(prompt("É professor? (sim ou nao"));
//condição com ou
if (idade >= 60 || estudante === "sim" || professor === "sim") {
    alert("Tem direito ao desconto")
} else {
    alert("Não tem desconto");
}