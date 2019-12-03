export default class Componente{
    constructor(dato){
        this._dato = dato;
        this._izquierda = null;
        this._derecha = null;
    }
    get dato(){
        return this._dato;
    }
    get izquierda(){
        return this._izquierda;
    }
    get derecha(){
        return this._derecha;
    }

    set dato(dato){
        this._dato = dato;
    }
    set izquierda(izquirda){
        this._izquierda = izquirda;
    }
    set derecha(derecha){
        this._derecha = derecha;
    }

}