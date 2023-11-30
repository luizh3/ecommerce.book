var objectItems = {
    value_delivery_shipping: 16.00,
    items: [
        {
            id: 1,
            name: "Ataque dos Titãs Vol. 34",
            image_url: "./resources/image/attack-on-titan.png",
            unit_price: 20.00,
            discount: 10.00,
            quantity: 3,
            sequence: 1,
        },
        {
            id: 2,
            name: "O estrangeiro",
            image_url: "./resources/image/camus-o-estrangeiro.png",
            unit_price: 30.00,
            discount: 10.00,
            quantity: 2,
            sequence: 2,
        },
        {
            id: 3,
            name: "O Mito de Sísifo",
            image_url: "./resources/image/mito-de-sisifo.png",
            unit_price: 50.00,
            discount: 10.00,
            quantity: 3,
            sequence: 3,
        }
    ]
}

function removeItem( event ) {

    let items = this.objectItems.items;
    let sequence = event.detail.sequence;

    console.log( sequence );

    const itemFounded = items.find( ( item ) => {
        return item.sequence == sequence;
    });

    const indexRemove = items.indexOf( itemFounded );

    if( indexRemove === -1 ){
        return;
    }

    items.splice( indexRemove, 1 );

    this.updateResumeOperation();

    if( this.objectItems.items.length == 0 ) {
        this.onCartEmpty();
    }

}

function onCartEmpty() {
    const cartEmptyElement = document.createElement('cart-empty');
    document.querySelector( ".content-items" ).appendChild( cartEmptyElement )

    let paymentResumeElement = document.querySelector("payment-resume");
    paymentResumeElement.setDisabledButton( true );
}

function addItems() {

    let containerItems = document.querySelector( ".content-items" );

    objectItems.items.forEach( function( item ) {

        let element = document.createElement('item-cart');

        element.addEventListener( EventItem.nameQuantityChanged(), this.updateResumeOperation.bind( this ) ); 
        element.addEventListener( EventItem.nameRemoveItem(), this.removeItem.bind( this ) ); 

        element.setValuesByItem( item );

        containerItems.appendChild( element );
    } );

}

function getSubtotal() {

    if( !objectItems || !objectItems.items ){
        return 0.00;
    }

    return objectItems.items.reduce( ( acumulador, item ) => {
        return acumulador + ( item.quantity * item.unit_price )
    } , 0 );

}

function getTotalDiscount() {

    if( !objectItems || !objectItems.items ){
        return 0.00;
    }

    return objectItems.items.reduce( ( acumulador, item ) => {
        return acumulador + ( item.quantity > 0 ? item.discount : 0.00 );
    } , 0 );

}

function getDeliveryShipping() {

    if( !objectItems ){
        return 0.00;
    }

    const itemFounded = objectItems.items.find( ( item ) => {
        return item.quantity > 0;
    });

    if( !itemFounded ) {
        return 0.00;
    }

    return objectItems.value_delivery_shipping;

}

function getTotal() {
    return ( this.getSubtotal() - this.getTotalDiscount()  ) + this.getDeliveryShipping();
}

function updateResumeOperation() {

    let paymentResumeComponent = document.querySelector( 'payment-resume' );

    const vlTotal = this.getTotal();

    paymentResumeComponent.deliveryShipping = this.getDeliveryShipping();
    paymentResumeComponent.cashPayment = vlTotal;
    paymentResumeComponent.discount = this.getTotalDiscount();
    paymentResumeComponent.subtotal = this.getSubtotal();
    paymentResumeComponent.total = vlTotal;

}

function onQuantityChanged() {
    this.updateResumeOperation();
}

window.onload = function() {

    this.addItems();
    this.updateResumeOperation();

}
