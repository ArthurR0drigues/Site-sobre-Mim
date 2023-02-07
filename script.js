let instaEl = document.querySelector('#instlg');
let gitEl = document.querySelector('#gitlg');
let gmailEl = document.querySelector('#gmaillg');

let tituloEl = document.querySelector('#titulo');
let textoEl = document.querySelector('#texto');

let nav1El = document.querySelector('#nav1');
let nav2El = document.querySelector('#nav2');
let nav3El = document.querySelector('#nav3');


let vet = [nav1El, nav2El, nav3El];
let vet2 = ["Olá, meu nome é Arthur Rodrigues, sou estudante do CEFET-MG e estou cursando o técnico integrado de Informática. Estou no 2° ano do Ensino médio (16 anos). Entrei a pouco tempo nesse mundo da programação e sinto cada vez mais inspirado a descobrir e aprender cada vez mais novas linguagens e aprofundar nelas. Sempre curti as novas tecnologias e quero estar por dentro do que se pode fazer com elas. Já participei de alguns pequenos projetos em programação para Web e tenho um pouco de esperiência com HTML, CSS e JavaScript, além de conhecimento em C++", "Estou querendo me candidatar para poder aprender mais sobre programação, utilizar de novas linguagens e aplicá-las, estudar e poder praticar um pouco mais, pois assim quero desenvolver essa habilidade de programar. Além disso, tenho gostado de utilizar a programação para Web e sinto mais dedicado para se envolver mais e conseguir melhorar como programador para o futuro.", "Minhas espectativas para esse projeto são que eu consiga ampliar meu conhecimento, desenvolver meu estudo na programação, aprender novas linguagens e como usá-las, aprofundar nas que eu já conheço, práticar e me tornar um programador melhor."];

for (let nav of vet) {
    nav.addEventListener('click', function () {
        tituloEl.innerHTML = nav.innerHTML;
    })
}

nav1El.addEventListener('click', function () {
    textoEl.innerHTML = vet2[0];
})
nav2El.addEventListener('click', function () {
    textoEl.innerHTML = vet2[1];
})
nav3El.addEventListener('click', function () {
    textoEl.innerHTML = vet2[2];
})

nav1El.click();
textoEl.innerHTML = vet2[0];