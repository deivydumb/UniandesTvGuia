class Episodio {

    public nombre: String;
    public imagen: String;
    public resumen: String;
    public duracion: number;




    constructor(nombreEpisodio: String, imagen: String, resumen:String,duracion: number){
        this.nombre =nombreEpisodio;
        this.imagen =imagen;
        this.resumen =resumen;
        this.duracion = duracion;

    }
}
export default Episodio;