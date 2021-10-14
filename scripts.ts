class App {
    public holaMundo(){
        document.write("¡Hola Mundo!");
    }
    public Hola() {
        let mensaje : string = "¡Hola Mundo!";
        console.log(mensaje);
    }
    public nombresaludo(nombre : any) : string {
        nombre = prompt("ingrese tu nombre");
        nombre = alert("Hola " + nombre)
        return nombre;
    }
    public nombrenumero(nombre : any, numero : any) :any {
        nombre = prompt("Ingresa tu nombre")
        numero = prompt("Ingresa un numero")
        numero = parseFloat(numero);
        for (let i = 0; i < numero; i++) {
            document.write(nombre + "<br>")
        }
    }
    public nombreCompleto(nombre : any ) : any{
        nombre = prompt("Ingresa tu nombre completo")
        document.write(nombre.toLowerCase())
        document.write(nombre.toUpperCase())
        document.write(nombre.replace(/\b[a-z]/g, (c: string)=>c.toUpperCase()));
        
    }
    public saberedad(edad : any) : any{
        edad = prompt("ingrese tu edad")
        if (edad >= 18) {
            alert("Eres mayor de edad")
        } else {
            alert("Eres menor de edad")
        }
    }
    public contrasenia(pass : any, contrasenia : any) : any{
        contrasenia = "contraseña";
        pass = prompt("Ingresa la contraseña")
        pass = pass.toLowerCase()
        if (contrasenia == pass) {
            alert("La contraseña es correcta")
        } else {
            alert("La contraseña es incorrecta")
        }
    }
    public palabra(numero : any) : any{
        numero = prompt("ingrese una palabra")
        for (let i = 0; i < 10; i++) {
            document.write(numero + "<br>")
            
        }
    }
    public anios(anio : any) : any{
        anio = prompt("Ingresa tu cuantos años tienes")
        for (let i = 0; i < anio; i++) {
            document.write((i + 1) + " Años " + "<br>")
            
        }
    }
    
    public ejecutar() : void {
        let nombre: any;
        let numero: any;
        let edad: any;
        let pass: any;
        let anio: any;
        let contrasenia: any;
        let opcion : any = prompt(`Selecciona la operacion que quieres hacer: 
                        1.- Ejercio #1
                        2.- Ejercio #2
                        3.- Ejercio #3
                        4.- Ejercio #4
                        5.- Ejercio #5
                        6.- Ejercio #6
                        7.- Ejercio #7
                        8.- Ejercio #8
                        9.- Ejercio #9
                        10.- Ejercio #10`);
        opcion = parseInt(opcion);
        switch(opcion) {
            case 1:
                this.holaMundo()
                break;
            case 2:
                this.Hola()
                break;
            case 3:
                this.nombresaludo(nombre)
                break;
            case 4:
                this.nombrenumero(nombre,numero)
                break;
            case 5:
                this.nombreCompleto(nombre)
                break;
            case 6:
                this.saberedad(edad)
                break;
            case 7:
                this.contrasenia(pass,contrasenia)
                break;
            case 8:
                this.palabra(numero)
                break;
            case 9:
                this.anios(anio)
                break;
            
        }
        
    }
}
const Examen = new App();
Examen.ejecutar();