class ItemManagerLocalStorage {

    static getSequence() {
        var sequence = 0;
        sequence = sequence + 1;
        return sequence;
    }

    static updateQuantityItem( item ) {

        let items = this.getItems();

        // TODO ver alguma forma de fazer um break, não faz sentido ter que percorrer a lista inteira...
        items.forEach( ( current ) =>  {
            if( current.sequence === item.sequence ){
                current.quantity = item.quantity;
            }
        })

        this.setItems( items )

    }

    static setItems( items ) {
        localStorage.setItem( "items", JSON.stringify( items ) );
    }

    static removeItem( sequence ) {

        let items = this.getItems();

        let itemFounded = items.find( ( item ) => {
            return item.sequence === sequence;
        } );

        const indexRemove = items.indexOf( itemFounded );

        if( indexRemove === -1 ){
            return;
        }
    
        items.splice( indexRemove, 1 );

        this.setItems( items );

    }

    static addItem( item ) {

        item.quantity = 1;
        item.sequence = this.getSequence();

        console.log( item );

        let items = this.getItems();

        items.push( item );

        this.setItems( items );
    }

    static getItems() {
        return JSON.parse( localStorage.getItem( "items" ) );
    }
}
