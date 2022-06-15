let userNumKm;
let userAge;
let ticketPrice;

// Nel momento in cui si clicca il bottone,vengono presi gli input dell'utente
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click',function(){
    userNumKm = parseInt(document.getElementById('user-km').value);
    userAge = parseInt(document.getElementById('user-age').value);
    ticketPrice = userNumKm * 0.26;
    // Ipotizziamo che non esistano stazioni distanti meno di 5 KM l'una dall'altra
    if (isNaN(userNumKm) == true || userNumKm < 5) 
    {
    alert('ATTENZIONE : NUMERO KM NON VALIDO, RICARICARE LA PAGINA');
    console.warn('ATTENZIONE : NUMERO KM NON VALIDO, RICARICARE LA PAGINA');
    return;
    } 
    //Ipotizziamo che non esistano persone con piu di 120 anni
    else if(isNaN(userAge) == true || (userAge < 0 || userAge > 120))
    {
        alert('ATTENZIONE : ETA\' NON VALIDA, RICARICARE LA PAGINA');
        console.warn('ATTENZIONE : ETA\' NON VALIDA, RICARICARE LA PAGINA');
        return;
    } 
    else{
        if(userAge < 18)
        {
            ticketPrice=ticketPrice-((ticketPrice * 15)/100);    
        }
        else if(userAge >= 65)
        {
            ticketPrice=ticketPrice-((ticketPrice * 35)/100);
        }
    }

    ticketPrice = ticketPrice.toFixed(2);
    console.clear();
    console.log('Il prezzo del biglietto è : €'+ ticketPrice)

})

// Diamo valore "" ovvero vuoto alle input text,così da cancellare cosa aveva inserito l'utente
const deleteBtn = document.getElementById('delete-btn');
deleteBtn.addEventListener('click',function(){
    document.getElementById("user-km").value = "";
    document.getElementById("user-age").value = "";
})