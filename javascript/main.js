console.log("inicio")
console.log(compraDeBaldosas());

while (opcion != 0){
    opcion = baldosas(prompt("Ingrese Producto " + "Baldosas"))

    switch (opcion){
        case "Baldosas Lisas":
            cantidad = parseInt(prompt("Cuantas Baldosas Lisas desea comprar?"))
            if (resultado <= cantidad){
            total += (cantidad = BaldosasLisas.precio);
            alert("El valor de la Baldosa Lisa es de $" + total)
            }
            break;

        case "Baldosas Tramadas":
            cantidad = parseInt(prompt("Cuantas Baldosas Tramadas desea comprar?"))
            if (resultado <= cantidad){
            total += (cantidad = BaldosasTramadas.precio);
            alert ("El valor de la Baldosa Tramada es de $" + total)
            }
            break;

        case "Baldosas Rombos":
            cantidad = parseInt(prompt("Cuantas Baldosas Rombos desea comprar?"))
            if (resultado <= cantidad){
            total += (cantidad = BaldosasRombos.precio);
            alert ("El valor de la Baldosas Rombos es de $" + total)
            }
            break;

            default:
                (prompt("Opcion no valida presione boton Salir"))
                break;
    }

        console.log("Gracias por su visita!")
}

// Array
function compraDeBaldosas(array , opcion){
array.push(opcion)
}

// Array Suma
function sumar(){
    let Totalcompra = total;
    alert("El total de la compra es de: $" + Totalcompra)
}

// Objetos
function Producto(nombre, modelo, precio, stock){
    this.nombre = nombre;
    this.modelo = incolora;
    this.precio = parseFloat (precio);
    this.stock = parseInt (stock);
}

const BaldosasLisas = new Producto ("Baldosas Lisas", "Incolora", 5000, 100);
const BaldosasTramadas = new Producto ("Baldosas Tramadas", "Incolora", 6000, 80);
const BaldosasRombos = new Producto ("Baldosas Rombos", "Incolora", 6200, 75);

console.log("Gracias por su visita")
