//Esto quiere decir que para id se antepone numeral(#) y para clase se antepone punto (.).
window.addEventListener('DOMContentLoaded', function () { //esto hace que lea este código antes que el HTML, más moderno que 'load'

    //Selecciones: 

    let boton = document.createElement('button');
    let cuadroTexto = document.createElement('input');
    let boton2 = document.createElement('button');
    let butaca = document.querySelectorAll("td");
    let contador = 0;
    let contenedor = document.querySelector('#contenedor');
//Posicionamos los botones y el cuadro texto

    contenedor.after(boton);
    contenedor.after(boton2);
    contenedor.after(cuadroTexto);
    contenedor.after("Plazas reservadas: ")
    

//acciones botones
    boton.textContent = "reseteo";
    boton2.textContent = "guardar";
    boton.addEventListener('click', resetear );
    boton2.addEventListener('click', guardar);

    function resetear(){
        for (let x = 0; x <= butaca.length - 1; x++) {
            //ojo, si no pongo -1, me da error, ya que empieza de 0 IMPORTANTE
            butaca[x].className = 'verde';
            console.log("Reseteado, el contador vuelve a 0");
            contador = 0;
            cuadroTexto.value=0;
        }
    }
    function guardar(){

        let evento = new MouseEvent('click', function(){





        });

    }   
    for (let y = 0; y <= butaca.length - 1; y++) {
        //ojo, si no pongo -1, me da error, ya que empieza de 0 IMPORTANTE
        butaca[y].className='verde';
        butaca[y].addEventListener('click', function () {
            
            if (butaca[y].className == 'verde') {
                    butaca[y].classList.remove('verde');
                    butaca[y].classList.add('rojo');
                    contador = contador + 1;
                   // console.log(contador);
                    cuadroTexto.value = contador; //usamos value para inputs
                    
            } else {
                butaca[y].className = 'rojo';
                butaca[y].classList.remove('rojo');
                    butaca[y].classList.add('verde');
                    contador = contador - 1;
                   // console.log(contador);
                    cuadroTexto.value = contador;
                    
            }
        }
        )
    }
})


