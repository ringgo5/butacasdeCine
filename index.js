//Esto quiere decir que para id se antepone numeral(#) y para clase se antepone punto (.).
window.addEventListener('DOMContentLoaded', function () { //esto hace que lea este código antes que el HTML, más moderno que 'load'


    if (localStorage.getItem("tabla") === null) {
        //creamos: 

        let boton = document.createElement('button');
        let cuadroTexto = document.createElement('input');
        let boton2 = document.createElement('button');
        //selecciones
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
        boton.addEventListener('click', resetear);
        boton2.addEventListener('click', guardar);

            //funciones: 

        function guardar() { //cuando volvamos a ver la tabla y grises,el boton no debe funcionar(cambiar color)


            /*   if (butaca[x].className == 'rojo') {
   
                  // butaca[x].classList.remove('rojo');
                  // butaca[x].classList.add('gris');
                   cuadradosGrises[x].classList.remove('rojo');
                   cuadradosGrises[x].classList.add('gris');
                   cuadradosGrises[x].classList.add('cuadrado');
                   localStorage.setItem("cuadradosGrises", JSON.stringify(cuadradosGrises));
*/
            let tabla2 = document.createElement("table");
            let tblBody2 = document.createElement("tbody");
            // let butaca2 = document.querySelectorAll("td");
            // Crea las celdas
            for (var i = 0; i < 10; i++) {
                // Crea las hileras de la tabla
                var hilera2 = document.createElement("tr");
                for (var j = 0; j < 20; j++) {
                    // Crea un elemento <td> y un elemento div, haz que el div 
                    //sea el contenido de <td>, ubica el elemento <td> al final
                    // de la hilera de la tabla
                    var celda2 = document.createElement("td");
                    var cuadrado2 = document.createElement("div");
                    cuadrado2.classList.add('cuadrado')
                    cuadrado2.classList.add('verde');
                    celda2.append(cuadrado2);
                    hilera2.append(celda2);
                }
                // agrega la hilera al final de la tabla (al final del elemento tblbody)
                tblBody2.append(hilera2);
            }

            // posiciona el <tbody> debajo del elemento <table>
            tabla2.append(tblBody2);
            // appends <table> into <body>

            // modifica el atributo "border" de la tabla y lo fija a "2";
            tabla2.setAttribute("border", "2");

            for (let x = 0; x <= butaca.length - 1; x++) {

                for (let y = 0; y <= tabla2.length - 1; y++) {

                    if (butaca[x].classList.add('verde')) {
                        tabla2[y].classList.add ('verde');
                    } else{
                        tabla2[y].classList.add('gris');
                    }
                }
            }
            localStorage.setItem("tabla2", JSON.stringify(tabla2));
        }

        function resetear() {
            for (let x = 0; x <= butaca.length - 1; x++) {
                //ojo, si no pongo -1, me da error, ya que empieza de 0 IMPORTANTE
                butaca[x].className = 'verde';
                console.log("Reseteado, el contador vuelve a 0");
                contador = 0;
                cuadroTexto.value = 0;
            }
        }

        for (let y = 0; y <= butaca.length - 1; y++) { //podemos ir añadiendo la funcion de click conforme creamos la tabla
            //ojo, si no pongo -1, me da error, ya que empieza de 0 IMPORTANTE
            butaca[y].className = 'verde';
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

    } else {

        let tablaGrises = JSON.parse(localStorage.getItem("tabla2"));

        contenedor.append("tablaGrises");


    }

})


//añadir arriba a la izquierda poner un select en el que pudiera seleecionar el numero de filas y columnas que voy a tener
//intentar poner dibujo de sillon en el cine