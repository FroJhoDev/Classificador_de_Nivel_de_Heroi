let heroi = { nome: 'FroJho', xp: Math.floor(Math.random() * (15000 - 500 + 1) + 500) };

let mensagemSaida = (nivel) => `O Herói de nome **${heroi.nome}** está no nível de **${nivel}**`;

if (heroi.xp < 1000) {

    console.log(mensagemSaida('Ferro'));

} else if (heroi.xp >= 1000 && heroi.xp < 2000) {

    console.log(mensagemSaida('Bronze'));

} else if (heroi.xp >= 2000 && heroi.xp < 6000) {

    console.log(mensagemSaida('Prata'));

} else if (heroi.xp >= 6000 && heroi.xp < 7000) {

    console.log(mensagemSaida('Ouro'));

} else if (heroi.xp >= 7000 && heroi.xp < 8000) {

    console.log(mensagemSaida('Platina'));

} else if (heroi.xp >= 8000 && heroi.xp < 9000) {

    console.log(mensagemSaida('Ascendente'));

} else if (heroi.xp >= 9000 && heroi.xp < 10000) {

    console.log(mensagemSaida('Imortal'));

} else {
    console.log(mensagemSaida('Radiante'));
}

