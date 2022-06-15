const userNumKm = parseInt(prompt('Inserire il numero di chilometri da percorrere'));
const userAge = parseInt(prompt('Inserire l\' età'));
let ticketPrice;

// Otteniamo il prezzo del biglietto senza sconti poi verificheremo se è da scontare
ticketPrice = userNumKm * 0.21;


// Ipotizziamo che non esistano stazioni distanti meno di 5 KM l'una dall'altra
if (isNaN(userNumKm) == true || userNumKm < 5) 
{
  alert('ATTENZIONE : NUMERO KM NON VALIDO, RICARICARE LA PAGINA');
  console.warn('ATTENZIONE : NUMERO KM NON VALIDO, RICARICARE LA PAGINA');
} 
//Ipotizziamo che non esistano persone con piu di 120 anni
else if(isNaN(userAge) == true || (userAge < 0 || userAge > 120))
{
    alert('ATTENZIONE : ETA\' NON VALIDA, RICARICARE LA PAGINA');
    console.warn('ATTENZIONE : ETA\' NON VALIDA, RICARICARE LA PAGINA');
} 
else{
    if(userAge < 18)
    {
        ticketPrice=ticketPrice-((ticketPrice * 20)/100);    
    }
    else if(userAge > 65)
    {
        ticketPrice=ticketPrice-((ticketPrice * 40)/100);
    }
}

ticketPrice = ticketPrice.toFixed(2);
document.getElementById('ticket-price').innerHTML = 'Il prezzo del biglietto è : €'+ ticketPrice;
console.log('Il prezzo del biglietto è : €'+ ticketPrice)
