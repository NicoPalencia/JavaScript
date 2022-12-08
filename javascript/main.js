let PINcorrecto = "1717";

function login() {
    let ingresar = false;

    for (let i = 2; i >= 0; i--) {
        let PINusuario = prompt("Ingrese su PIN");
        if (PINusuario == PINcorrecto) {
            alert("Bienvenido/a. Ingreso Exitoso!");
            ingresar = true;
            break;
        }else {
            alert("PIN incorrecto. Le quedan " + i + " intentos");
        }
    }
    return ingresar;
}

let exito = login();
if (exito) {
    let saldo = 100000;

    let opcion = prompt("Elija la opcion deseada: \n1 - Saldo. \n2 - Retiro de dinero. \n3 - Depósito de dinero. \nPresione X para finalizar.");

    while (opcion != "X") {
        switch (opcion) {
            case "1":
            alert("Su saldo es $" + saldo);                
                break;
            case "2":
                let retiro = parseInt(prompt("Ingrese el monto a retirar"));
                if (retiro <= saldo) {
                    saldo = saldo - retiro;
                    alert("Retiraste $" + retiro + ", su nuevo saldo es $" + saldo);
                } else {
                    alert("Su saldo es insuficiente");
                }
                break;
            case "3":
                let deposito = parseInt(prompt("Ingrese el monto a depositar"));
                saldo = saldo + deposito;
                alert("Su nuevo saldo es $" + saldo);
                break;

            default:
                alert("Opcion seleccionada no válida");
                break;
        }
        opcion = prompt("Elija la opcion deseada: \n1 - Saldo. \n2 - Retiro de dinero. \n3 - Depósito de dinero. \nPresione X para finalizar.");           
        }
    }else{
        alert("Retuvimos su tarjeta. Por favor acerquese a una sucursal para solucionar el problema.");
    }
    alert("Gracias por utilizar nuestros servicios!")
