
window.onload = function() {

    const params = new URLSearchParams(window.location.search);

    const idProduct = params.get("id");

    if( !idProduct && !( idProduct > 0 ) ){
        // TODO redirecionar...
        return;
    }


    const item = ItemMock.findById( idProduct );
    
    setPrice( item.unit_price - item.discount );
    setNormalPrice( item.unit_price );
    setAuthor( item.author );
    setPublishingCompany( item.publishing_company );
    setLanguage( item.language );
    setDatePublication( item.publication_date );
    setNumberPages( `${item.page_number} páginas` );
    setDescription( item.description );
    setImage( item.images_url[0] );
    setImages( item.images_url );
    setNameProduct( item.name );

}

function setImages( urls ) {

    let content = document.querySelector( ".select-image-product" );

    urls.forEach( ( url ) => {

        console.log( url );

        let element = document.createElement( "button-image" );

        element.addEventListener( 'image-changed', function( event ) {
            console.log( '123' )
            setImage( event.detail.url )
        } )

        element.source = url;
        content.appendChild( element );

    })

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
