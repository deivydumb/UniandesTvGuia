import Plataforma from './Plataforma'

class TvGuia extends Plataforma{

    public nombre_plataforma: String;
    private URL: String;

    
    
    constructor(Nombre_Plataforma: String,url_plat:String, sus:String){
        super(sus);
        this.nombre_plataforma =Nombre_Plataforma;
        this.URL = url_plat;

        this.suscripcion = sus

    }
}

export default TvGuia;
