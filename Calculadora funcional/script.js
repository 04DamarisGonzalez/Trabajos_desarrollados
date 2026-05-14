const pantalla = document.getElementById("pantalla");

const botones = document.querySelectorAll("button");

let operacion = "";

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        let valor = boton.textContent;

        // LIMPIAR
        if(valor === "C"){

            operacion = "";
            pantalla.value = "";

        }

        // BORRAR UNO
        else if(valor === "⌫"){

            operacion = operacion.slice(0, -1);

            pantalla.value = operacion;

        }

        // CALCULAR
        else if(valor === "="){

            try{

                operacion = operacion
                    .replace("×", "*")
                    .replace("÷", "/")
                    .replace("−", "-")
                    .replace(",", ".");

                operacion = eval(operacion);

                pantalla.value = operacion;

            }catch{

                pantalla.value = "Error";

            }

        }

        // AGREGAR VALORES
        else{

            operacion += valor;

            pantalla.value = operacion;

        }

    });

});