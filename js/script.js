const listaNumeri = document.getElementById('lista-numeri')
const numeriIdovinare = []
const numeriUtente= []
const message = ''
  for(let i = 0; i < 5; i++){

    let numbRandom = Math.floor(Math.random() * 100)
    console.log(numbRandom)
    numeriIdovinare.push(numbRandom)
    listaNumeri.innerHTML += ' ' + numbRandom
  }
  
  setTimeout(function(){
    listaNumeri.innerHTML = ' '
  }, 5000);
  
  console.log(numeriIdovinare)


  setTimeout(function(){
    const promptNumb1 = parseInt(prompt('inserisci il primo numero comparso'))
    const promptNumb2 = parseInt(prompt('inserisci il secondo numero comparso'))
    const promptNumb3 = parseInt(prompt('inserisci il terzo numero comparso'))
    const promptNumb4 = parseInt(prompt('inserisci il quarto numero comparso'))
    const promptNumb5 = parseInt(prompt('inserisci il quinto numero comparso'))

    numeriUtente.push(promptNumb1, promptNumb2, promptNumb3 , promptNumb4, promptNumb5)

    console.log(numeriUtente)
  }, 7000);

  















  //////////////////////////////FUNZIONI//////////////////////////////////////




