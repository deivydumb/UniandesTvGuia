import Plataforma from './Plataforma'
import TvGuia from './TvGuia'
import Serie from './Serie'
import Categoria from './Categoria'
import Persona from './Persona'
import Episodio from './Episodios'


let tvGuia = new TvGuia('Netflix','netflix.com','Activo')

const listaSeries: Serie[] = [];
const listaCategorias: Categoria[] = [];
const listaPlataformas : Plataforma[] = [];
const listaPersonas :Persona[] = [];
const listaEpisodios :Episodio[] = [];

function agregarCategoria(categoria: String) {
    const nuevaCategoria = new Categoria(categoria);
    listaCategorias.push(nuevaCategoria);
  }
  
  function agregarPersona(nombreActor: String, imagen: String, resumen:String, rol: String) {
    const nuevaPersona = new Persona(nombreActor,imagen,resumen,rol);
    listaPersonas.push(nuevaPersona);
  }  

  function agregarEpisodio(nombreEpisodio: String, imagen: String, resumen:String,duracion: number) {
    const nuevoEpisodio = new Episodio(nombreEpisodio,imagen,resumen,duracion);
    listaEpisodios.push(nuevoEpisodio);
  }  
  
  function agregarPlataforma(plataforma: String) {
    const nuevaPlataforma = new Plataforma(plataforma);
    listaPlataformas.push(nuevaPlataforma);
  }


function agregarSerie(nombre: string, imagen: String,categoria: String) {
  const nuevaSerie = new Serie(nombre,imagen,categoria);
  listaSeries.push(nuevaSerie);
}

function eliminarSerie(listaSeries: Serie[],indice: number) {
    var size = listaSeries.length
    if (size == 0){
        return ('No hay ninguna Serie en la lista')
    }
    else {
        if (indice -1 <= size) {
            listaSeries.splice(indice-1)
            return ('Se elimino la serie '+indice)
        }
        else{
            return ('Escoje un numero menor que este entre 1 y '+size)
        }
        
    }
    
  }

  function eliminarEpisodio(listaEpisodios: Episodio[],indice: number) {
    var size = listaEpisodios.length
    if (size == 0){
        return ('No hay ningun Episodio en la lista')
    }
    else {
        if (indice -1 <= size) {
            listaSeries.splice(indice-1)
            return ('Se elimino el episodio '+indice)
        }
        else{
            return ('Escoje un numero menor que este entre 1 y '+size)
        }
        
    }
    
  } 
  
  function eliminarPersona(listaPersonas: Persona[],indice: number) {
    var size = listaPersonas.length
    if (size == 0){
        return ('No hay ninguna Persona en la lista')
    }
    else {
        if (indice -1 <= size) {
            listaPersonas.splice(indice-1)
            return ('Se elimino la Persona '+listaPersonas[indice].nombre)
        }
        else{
            return ('Escoje un numero menor que este entre 1 y '+size)
        }
        
    }
    
  }


agregarEpisodio('Final','Imagen Episodio','El final de la temporada de la serie', 122.23)  
agregarEpisodio('Inicio','Imagen Episodio','El inicio de la temporada de la serie', 90.12)  



agregarPersona('Juan','ImagenReferencia','Actor de muchas peliculas','Actor')
agregarPersona('Pablo','ImagenReferencia','Actor de muchas peliculas','Actor')
agregarPersona('Maria','ImagenReferencia','Directora de muchas puliculas','Director')
agregarPlataforma('Netflix')
agregarPlataforma('HBO max')

agregarCategoria('Drama')
agregarCategoria('Accion')

agregarSerie('HYMF','Image3','Drama');
agregarSerie('HYM2','Imagen2','Accion');
agregarSerie('HYMM','Imagen','Terror');

eliminarPersona(listaPersonas,2)

eliminarEpisodio(listaEpisodios,2)

eliminarSerie(listaSeries,3)


//console.log(listaSeries)

//console.log(tvGuia)