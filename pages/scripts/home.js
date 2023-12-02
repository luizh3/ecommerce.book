window.onload = function() {

    let items = [];

    if( !localStorage.getItem("items") ){
        localStorage.setItem( "items", JSON.stringify(items) )
    }

    const allItems = ItemMock.getAllItems();

    this.addBestSellerItems(  allItems );
    this.addInterestingitems( allItems )

}

function addInterestingitems( allItems ) {

    const rowLimit = 4;

    const itemsInteresting = allItems.filter( item => !item.best_seller ).slice( 0, rowLimit );

    let content = document.getElementById('content-interesting');
    
    itemsInteresting.forEach( ( item, index ) => {
        content.appendChild( createItemCard( item, index ) );
    });

}

function addBestSellerItems( allItems ){

    const rowLimit = 4;

    const itemsBestSellerRow = allItems.filter( item => item.best_seller ).slice( 0, rowLimit );

    let content = document.getElementById('content-best-seller');
    
    itemsBestSellerRow.forEach( ( item, index ) => {
        content.appendChild( createItemCard( item, index ) );
    });

}

function createItemCard( item, index ) {

    let itemCard = document.createElement( 'item-card');

    itemCard.addEventListener( EventItem.nameAddItem(), ( event ) => {
        ItemManagerLocalStorage.addItem( ItemMock.findById( event.detail.item.id ) );
    } )

    itemCard.setAttribute('slot', `item-${index}`);
    itemCard.setValuesByItem( item );

    return itemCard;

}

