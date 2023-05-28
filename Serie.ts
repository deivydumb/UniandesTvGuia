import Categoria from './Categoria'

class Serie extends Categoria {

    public nombre: String;
    public imagen: String;


    constructor(nombreSerie: String, imagenSerie: String, categoria: String){
        super(categoria)
        this.nombre = nombreSerie;
        this.imagen = imagenSerie;
        this.Categoria = categoria

    }


}
export default Serie;