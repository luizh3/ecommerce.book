
window.onload = function() {

    const params = new URLSearchParams(window.location.search);

    const idProduct = params.get("id");

    if( !idProduct && !( idProduct > 0 ) ){
        // TODO redirecionar...
        return;
    }


    this.item = ItemMock.findById( idProduct );
    
    setPrice( this.item.unit_price - item.discount );
    setNormalPrice( this.item.unit_price );
    setAuthor( this.item.author );
    setPublishingCompany( this.item.publishing_company );
    setLanguage( this.item.language );
    setDatePublication( this.item.publication_date );
    setNumberPages( `${this.item.page_number} páginas` );
    setDescription( this.item.description );
    setImage( this.item.images_url[0] );
    setImages( this.item.images_url );
    setNameProduct( this.item.name );
    setScore( this.item.score );
    setPathProductName( this.item.name );

    document.getElementById( "add-button" ).addEventListener( "click", () => {
        let itemAdd = ItemMock.findById( this.item.id );
        itemAdd.quantity = getQuantity();
        ItemManagerLocalStorage.addItem( itemAdd );
    } )

    document.getElementById("quantity").quantity = 1;
    document.getElementById("quantity").item = item;

}

function setPathProductName( dsName ) {
    document.getElementById("path-product-name").textContent = dsName;
}

function setScore( value ) {

    console.log( value );

    let content = document.getElementById( 'score-product' );

    let scoreStarsElement = document.createElement( 'score-stars' );


    scoreStarsElement.value = value;

    content.insertBefore( scoreStarsElement, content.firstChild );
}

function setImages( urls ) {

    let content = document.querySelector( ".select-image-product" );

    urls.forEach( ( url ) => {

        console.log( url );

        let element = document.createElement( "button-image" );

        element.addEventListener( 'image-changed', function( event ) {
            setImage( event.detail.url )
        } )

        element.source = url;
        content.appendChild( element );

    })

}
function getQuantity() {
    return document.getElementById("quantity").getAttribute("quantity");
}

function setNameProduct( dsName ) {
    document.getElementById( "name-product" ).textContent = dsName;
}

function setImage( url ) {
    document.getElementById("image-item").src = url;
}

function setPrice( price ) {
    document.getElementById("price").textContent = `$${price}`;
}

function setNormalPrice( price ) {
    document.getElementById("normal-price").textContent = `$${price}`;
}

function setAuthor( dsAuthor ) {
    document.getElementById( "author" ).textContent = dsAuthor;
}

function setPublishingCompany( dsCompany ) {
    document.getElementById("publishing-company").textContent = dsCompany;
}

function setLanguage( dsLanguage ) {
    document.getElementById("language").textContent = dsLanguage;
}

function setDatePublication( dtPublication ) {
    document.getElementById("publication-data").textContent = dtPublication;
}

function setNumberPages( nrPages ){
    document.getElementById("number-pages").textContent = nrPages;
}

function setDescription( description ) {
    document.getElementById("description").textContent = description;
}
