var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.holaMundo = function () {
        document.write("¡Hola Mundo!");
    };
    App.prototype.Hola = function () {
        var mensaje = "¡Hola Mundo!";
        console.log(mensaje);
    };
    App.prototype.nombresaludo = function (nombre) {
        nombre = prompt("ingrese tu nombre");
        nombre = alert("Hola " + nombre);
        return nombre;
    };
    App.prototype.nombrenumero = function (nombre, numero) {
        nombre = prompt("Ingresa tu nombre");
        numero = prompt("Ingresa un numero");
        numero = parseFloat(numero);
        for (var i = 0; i < numero; i++) {
            document.write(nombre + "<br>");
        }
    };
    App.prototype.nombreCompleto = function (nombre) {
        nombre = prompt("Ingresa tu nombre completo");
        document.write(nombre.toLowerCase());
        document.write(nombre.toUpperCase());
        document.write(nombre.replace(/\b[a-z]/g, function (c) { return c.toUpperCase(); }));
    };
    App.prototype.saberedad = function (edad) {
        edad = prompt("ingrese tu edad");
        if (edad >= 18) {
            alert("Eres mayor de edad");
        }
        else {
            alert("Eres menor de edad");
        }
    };
    App.prototype.contrasenia = function (pass, contrasenia) {
        contrasenia = "contraseña";
        pass = prompt("Ingresa la contraseña");
        pass = pass.toLowerCase();
        if (contrasenia == pass) {
            alert("La contraseña es correcta");
        }
        else {
            alert("La contraseña es incorrecta");
        }
    };
    App.prototype.palabra = function (numero) {
        numero = prompt("ingrese una palabra");
        for (var i = 0; i < 10; i++) {
            document.write(numero + "<br>");
        }
    };
    App.prototype.anios = function (anio) {
        anio = prompt("Ingresa tu cuantos años tienes");
        for (var i = 0; i < anio; i++) {
            document.write((i + 1) + " Años " + "<br>");
        }
    };
    App.prototype.ejecutar = function () {
        var nombre;
        var numero;
        var edad;
        var pass;
        var anio;
        var contrasenia;
        var opcion = prompt("Selecciona la operacion que quieres hacer: \n                        1.- Ejercio #1\n                        2.- Ejercio #2\n                        3.- Ejercio #3\n                        4.- Ejercio #4\n                        5.- Ejercio #5\n                        6.- Ejercio #6\n                        7.- Ejercio #7\n                        8.- Ejercio #8\n                        9.- Ejercio #9\n                        10.- Ejercio #10");
        opcion = parseInt(opcion);
        switch (opcion) {
            case 1:
                this.holaMundo();
                break;
            case 2:
                this.Hola();
                break;
            case 3:
                this.nombresaludo(nombre);
                break;
            case 4:
                this.nombrenumero(nombre, numero);
                break;
            case 5:
                this.nombreCompleto(nombre);
                break;
            case 6:
                this.saberedad(edad);
                break;
            case 7:
                this.contrasenia(pass, contrasenia);
                break;
            case 8:
                this.palabra(numero);
                break;
            case 9:
                this.anios(anio);
                break;
        }
    };
    return App;
}());
var Examen = new App();
Examen.ejecutar();
