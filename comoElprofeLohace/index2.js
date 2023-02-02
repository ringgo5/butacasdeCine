window.addEventListener('DOMContentLoaded', iniciar)

    function iniciar() {

        let tabla = document.querySelector('#tabla');
        let total = document.querySelector('#numeroReservas');
        let guardar = document.querySelector('#guardar');
        let limpiar = document.querySelector('#limpiar');
        let totalButacas = document.querySelectorAll('img');


        //asignación eventos

        cargarAsientos();



    }

        //funciones:

        function cargarAsientos(){

            for(let x=0; x<10;x++){
                let fila = document.createElement('tr');
                tabla.append(fila);
                    for(let i = 0;i<=20;i++){
                        let td = document.createElement('td');
                        let butacas = document.createElement('img')
                            butacas.src="../butacaVerde.jpg";
                            td.addEventListener('click', reservar)

                            td.append(butacas);                            
                        
                        
                        fila.append(td);
                        
                    }
            }
        }

        function reservar(){

            
            console.log(totalButacas)
            for(let x = 0; x<= totalButacas.length -1;x++){
                if(totalButacas[x].src="../butacaVerde.jpg")
                {
                    totalButacas[x].src="../butacaRoja.jpg";
                    console.log(totalButacas[x].src)
                }
            }

        }









/*window.addEventListener('DOMContentLoaded', iniciar)


    function iniciar(){

            //variables:

        let tabla = document.querySelector('#tabla');
        let texto = document.querySelector('#numeroReservas');
        let guardar = document.querySelector('#guardar')
        let limpiar = document.querySelector('#limpiar')
            

            //eventos:


        añadirImagenes();
        
        //-------------
        
        
    }
    limpiar.addEventListener('click',limpiar)

//funciones : 

function limpiar(){
    let texto = document.querySelector('#numeroReservas');
   console.log(texto.value)
   texto.value=0;


}
function añadirImagenes() {
    let texto = document.querySelector('#numeroReservas');
    
    //console.log(texto.value)
    for (let x = 0; x < 10; x++) {

        let columna = document.createElement('tr');

        for (let y = 0; y < 20; y++) {
            let butaca = document.createElement('td');
            let imagen = document.createElement('img');
                    butaca.append(imagen);
                imagen.src="../butacaVerde.jpg";
                imagen.className='imagen';
            let imagenes = document.querySelectorAll('img');
            let contador = 0;
                
                
           // console.log(typeof(imagenes))
                    for(let x = 0;x<imagenes.length -1;x++){
                        //console.log(imagenes[x].src)
                            imagenes[x].addEventListener('click', function(){

                            
                        if(imagenes[x].src='../butacaVerde.jpg'){
                            imagenes[x].src='../butacaRoja.jpg';
                            contador= contador +1;
                           // console.log(contador)
                            texto.value=contador;
                        }
                    })
                    }

                       
           
            columna.append(butaca);   
           
  
        }
        tabla.append(columna);
        
}
}




//como el evento es lo que necesitamos, podemos usar this: (this representa cada celda que hacemos click)
    

*/


