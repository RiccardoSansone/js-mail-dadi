const bottone = document.getElementById('but');
bottone.addEventListener('click',
function(){
    let utNumber = Math.floor(Math.random() * 6) + 1;
    let pcNumber = Math.floor(Math.random() * 6) + 1;
    document.getElementById('dadoUt').innerHTML = utNumber;
    document.getElementById('dadoPc').innerHTML = pcNumber;
    if(utNumber > pcNumber){
        document.getElementById('result').innerHTML = 'congratulazioni, hai vinto!';
    } else if(utNumber < pcNumber){
        document.getElementById('result').innerHTML = 'hai perso!';
    } else {
        document.getElementById('result').innerHTML = 'pareggio';
    }
})



const sendBut = document.getElementById('send');
sendBut.addEventListener('click',
function(){
   const lista = ['sicuramentenontu@gmail.com', 'ovviamentenonhoemail@libero.it']
   let utEmail = document.getElementById('emailUtente').value; 
   let risultato = false;
    for (let i  = 0; i < lista.length; i++) {
        const elementList = lista[i];
        if(utEmail === elementList){
            risultato = true;
        }
    }
    if(risultato === true){
        document.getElementById('access').innerHTML = 'Benvenuto'
    } else {
        document.getElementById('access').innerHTML = 'Mi dispiace, email non valida.'
    }
})
