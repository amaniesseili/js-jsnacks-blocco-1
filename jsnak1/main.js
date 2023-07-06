const nomi = ["Amani","Karina","Sara","Claudia","Danila","Chiara","Tea","Naya","Federica","sofia" ]
const cognomi = ["Esseili","Perez","Accardi","Pino","Santoro","Bernardini","Vecchioni","Colzani","Tardosi","Castaldo" ]

const btnGenera = document.querySelector(".btn-genera");

let listaInvitati= document.getElementById("invitati-lista");
listaInvitati.innerHTML= " ";

// generare 10 nomi casuali
for (let i=0; i<10; i++){
    let nomeRandom =
    nomi[Math.floor(Math.random() * nomi.length)];

    let cognomeRandom =
    cognomi[Math.floor(Math.random() * cognomi.length)];

    let nomeCompleto = nomeRandom + " " + cognomeRandom


// ---------------------------------------
    console.log( nomeCompleto);
// -------------------------------------------------


    // //---- Creo li virtuale da inserire nell html -----------
    // // STEP1: porto la ul in js
    // let ul = getElementById("invitati-lista")

    // // step2: creo l'elemento  li virtualmente in js
    // let li = document.createElement ("li");

    // // step3: aggiungo il contenuto all'elemento li
    // li.classList.add("nomeCompleto")

    // // step4:aggiungo l'elemento li all'elemento ul 
    // ul.append(li);

    // nomeCompleto.append(li);
// ----------------------------------------------------

}
