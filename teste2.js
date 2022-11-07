

var div = document.getElementById('div');
div.innerHTML = '<ul id="lista" class="flex  justify-center  items-center text-stone-900 w-full h-full gap gap-10 flex-wrap"></ul>';
var ul = document.getElementById('lista');
var label = document.getElementById('label');

async function sorteia() {
    ul.innerHTML = ''
    var contador = 0
    var lista_dezenas = Array()

    while (contador<15) {

        var numero = Math.floor(Math.random(25)*25+1);
        if (numero < 10) {
            numero = '0' + numero.toString()
        } 
        console.log(numero)
        if (lista_dezenas.includes(numero) == false){
            
            lista_dezenas.push(numero);
            contador = contador + 1;
    
        }              
    }
    for(var i=0; i < lista_dezenas.length; i++){
        
      
        appendNumber(i, lista_dezenas)
        await time(0.7)
    }
        
}    

function appendNumber(index, lista){

    
    console.log('inserido a dezena '+(index+1))
    var li = document.createElement('li');
    li.classList.add('rounded-full', 'bg-yellow-500', 'py-3', 'px-4')
    li.innerText = `${lista[index]}`;
    ul.append(li)
}




function time(seconds){
    let mili = seconds*1000;
    return new Promise(res => 
        setTimeout(res, mili)
    )
}