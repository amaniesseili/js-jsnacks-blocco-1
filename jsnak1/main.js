const nomi = ["Amani","Karina","Sara","Claudia","Danila","Chiara","Tea","Naya" ]
const cognomi = ["Esseili","Perez","Accardi","Pino","Santoro","Bernardini","Vecchioni","Colzani" ]

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
}



function generaInvitati() {
    var listaInvitati = document.getElementById("invitati-lista");
    listaInvitati.innerHTML = ""; // Resetta la lista ad ogni generazione

    // Genera 10 nomi casuali
    for (var i = 0; i < 10; i++) {
        var nomeCasuale = nomi[Math.floor(Math.random() * nomi.length)];
        var cognomeCasuale = cognomi[Math.floor(Math.random() * cognomi.length)];
        var nomeCompleto = nomeCasuale + " " + cognomeCasuale;

        // Aggiungi il nome alla lista
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(nomeCompleto));
        listaInvitati.appendChild(li);
    }
}


// controllare il vincitore 
btnGenera.addEventListener ("click", function() {

    var userRandomNumber =
    Math.floor(Math.random() * 6) + 1; 
   
   document.getElementById("user-rand-num").innerHTML =  userRandomNumber;
   
   
    // numero random per il computer
   var computerRandomNumber =
    Math.floor(Math.random() * 6) + 1; 
   
   document.getElementById("com-rand-num").innerHTML = computerRandomNumber;
   

    if (userRandomNumber > computerRandomNumber ){
        document.getElementById("final.mess").innerHTML = ( "Il giocatore ha vinto ");
    
    }else if (userRandomNumber < computerRandomNumber){
        document.getElementById("final.mess").innerHTML = ( "Il computer ha vinto ");

    }else{
        document.getElementById("final.mess").innerHTML = ( " E UN PAREGGIO  ");
    }

    // per nasconder il numeri random
    // document.getElementById("com-rand-num").classList.add("d-none")
    // document.getElementById("user-rand-num").classList.add("d-none")

})

