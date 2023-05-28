class Persona {

    public nombre: String;
    public imagen: String;
    public resumen: String;
    public rol : String;



    constructor(nombreActor: String, imagen: String, resumen:String, rol: String){
        this.nombre =nombreActor;
        this.imagen =imagen;
        this.resumen =resumen;
        this.rol = rol;
    }
}
export default Persona;