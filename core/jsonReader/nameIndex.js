class nameindex {
     
    static get index(){
        if(!nameindex._index) nameindex._index=0;
        return nameindex._index++;
    }
}
module.exports = nameindex;