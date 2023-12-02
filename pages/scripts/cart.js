function removeItem( event ) {

    ItemManagerLocalStorage.removeItem( event.detail.sequence );

    let items = ItemManagerLocalStorage.getItems();

    this.updateResumeOperation( items );

    if( items.length == 0 ) {
        this.onCartEmpty();
    }

}

function onCartEmpty() {
    const cartEmptyElement = document.createElement('cart-empty');
    document.querySelector( ".content-items" ).appendChild( cartEmptyElement )

    let paymentResumeElement = document.querySelector("payment-resume");
    paymentResumeElement.setDisabledButton( true );
}

function addItems( items ) {

    let containerItems = document.querySelector( ".content-items" );

    items.forEach( function( item ) {

        let element = document.createElement('item-cart');

        element.addEventListener( EventItem.nameQuantityChanged(), ( event ) => {
            ItemManagerLocalStorage.updateQuantityItem( event.detail.item );
            this.updateResumeOperation( ItemManagerLocalStorage.getItems() )
        } ); 

        element.addEventListener( EventItem.nameRemoveItem(), this.removeItem.bind( this ) ); 

        element.setValuesByItem( item );

        containerItems.appendChild( element );
    } );

}

function getSubtotal( items ) {

    if( !items ){
        return 0.00;
    }

    return items.reduce( ( acumulador, item ) => {
        return acumulador + ( item.quantity * item.unit_price )
    } , 0 );

}

function getTotalDiscount( items ) {

    if( !items ){
        return 0.00;
    }

    return items.reduce( ( acumulador, item ) => {
        return acumulador + ( item.quantity > 0 ? item.discount : 0.00 );
    } , 0 );

}

function getDeliveryShipping( items ) {

    return 0.00;

    // if( !objectItems ){
    //     return 0.00;
    // }

    // const itemFounded = objectItems.items.find( ( item ) => {
    //     return item.quantity > 0;
    // });

    // if( !itemFounded ) {
    //     return 0.00;
    // }

    // return objectItems.value_delivery_shipping;

}

function getTotal( items ) {
    return ( this.getSubtotal( items ) - this.getTotalDiscount( items )  ) + this.getDeliveryShipping( items );
}

function updateResumeOperation( items ) {

    let paymentResumeComponent = document.querySelector( 'payment-resume' );

    const vlTotal = this.getTotal( items );

    paymentResumeComponent.deliveryShipping = this.getDeliveryShipping( items );
    paymentResumeComponent.cashPayment = vlTotal;
    paymentResumeComponent.discount = this.getTotalDiscount( items );
    paymentResumeComponent.subtotal = this.getSubtotal( items );
    paymentResumeComponent.total = vlTotal;

}

window.onload = function() {

    let items = ItemManagerLocalStorage.getItems();

    if( items.length == 0 ) {
        this.onCartEmpty();
        return;
    }

    this.addItems( items );
    this.updateResumeOperation( items );

}
