let nome = "Julia"
let XP = 6500
let nivel = ""

if (XP<=1000) {
  nivel = "Ferro"
}

else if (XP<=2000){
  nivel = "Bronze"
}

else if (XP<=6000){
  nivel = "Prata"
}
else if (XP<=7000){
  nivel = "Ouro"
}

else if (XP<=8000){
  nivel = "Platina"
}

else if (XP<=9000){
  nivel = "Ascendente"
}

else if (XP<=10000){
  nivel = "Imortal"
}

else (XP>=10001){
  nivel = "Radiante"
}

console.log("O heroi de nome" + nome + "está no nível de" + nivel)
