
class EventItem {
     static quantityChanged( item ) {

        const objectEvent = { 
            detail: { 
                item: item
            } 
        }
    
        return new CustomEvent( EventItem.nameQuantityChanged(), objectEvent )
    }

    static removeItem( sequence ) {

        const objectEvent = { 
            detail: { 
                sequence: sequence
            } 
        }
    
        return new CustomEvent( EventItem.nameRemoveItem(), objectEvent )
    }

    static addItem( idItem ) {

        const objectEvent = {
            detail: {
                item : {
                    id: idItem
                }
            }
        }

        return new CustomEvent( EventItem.nameAddItem(), objectEvent )

    }

    static nameQuantityChanged() {
        return 'quantity-item-changed';
    }

    static nameRemoveItem() {
        return 'remove-item';
    }

    static nameAddItem() {
        return "add-item";
    }
}