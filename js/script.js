let userNumKm;
let userAge;
let ticketPrice;
let userCompleteName;
let ticket;
let carriageTicket;
let cpCodeTicket;

// Nel momento in cui si clicca il bottone,vengono presi gli input dell'utente
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click',function(){
    userCompleteName = document.getElementById('user-complete-name').value;
    userNumKm = parseInt(document.getElementById('user-km').value);
    userAge = document.getElementById('user-age').value;
    let typeOfTicket = "Biglietto Standard";
    ticketPrice = userNumKm * 0.26;
    // Ipotizziamo che non esistano stazioni distanti meno di 5 KM l'una dall'altra
    if (isNaN(userNumKm) == true || userNumKm < 5) 
    {
    alert('ATTENZIONE : NUMERO KM NON VALIDO, RICARICARE LA PAGINA');
    console.warn('ATTENZIONE : NUMERO KM NON VALIDO, RICARICARE LA PAGINA');
    return;
    } 
    //Ipotizziamo che non esistano persone con piu di 120 anni
    else{
        if(userAge == 'Minorenne')
        {
            ticketPrice=ticketPrice-((ticketPrice * 15)/100); 
            typeOfTicket = "Biglietto scontato( < 18 )"   
        }
        else if(userAge == 'over')
        {
            ticketPrice=ticketPrice-((ticketPrice * 35)/100);
            typeOfTicket = "Biglietto scontanto( > 65 )"
        }
    }


    ticketPrice = ticketPrice.toFixed(2);
    console.clear();
    console.log('Signor/a '+userCompleteName+' il prezzo del biglietto è : €'+ ticketPrice)

    //Creiamo il ticket
   
    document.getElementById('user-name-ticket').innerHTML = userCompleteName;
    document.getElementById('type-of-ticket').innerHTML = typeOfTicket;
    
    // Ipotizziamo ci siano massimo 10 carrozze in un treno
    carriageTicket = Math.floor(Math.random() * 10 + 1);
    document.getElementById('carriage-ticket'). innerHTML = carriageTicket;
   
    cpCodeTicket = Math.floor(Math.random() * 999999 + 1);
    document.getElementById('cp-code-ticket').innerHTML = cpCodeTicket;
    
    document.getElementById('ticket-price-ticket').innerHTML = "€ : "+ticketPrice;
    ticket = document.getElementById('user-ticket');
    ticket.classList.add("d-block")
    
})

// Diamo valore "" ovvero vuoto alle input text,così da cancellare cosa aveva inserito l'utente
const deleteBtn = document.getElementById('delete-btn');
deleteBtn.addEventListener('click',function(){
    document.getElementById('user-complete-name').value = "";
    document.getElementById("user-km").value = "";
})

