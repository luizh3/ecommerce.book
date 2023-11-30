const itemCartTemplate = document.createElement('template');
itemCartTemplate.innerHTML = `
    <style>
        @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css");

        .content {
            width: 250px;
            height: 350px;
            border: var( --border-default );
            display: flex;
            flex-direction: column;
            gap: 15px;
            align-items:center;
            justify-content:center;
            box-shadow: 0 16px 15px rgba(0, 0, 0, 0.2);
            cursor: pointer;
            position: relative;
            text-decoration: none;
            color: inherit;
            overflow: hidden;
        }

        .img-card {
            width: 170px;
            height: 170px;
        }

        .img-container{
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .title, .price  {
            font-weight: var( --font-weight-bold );
        }

        .description {
            font-size: 13px;
        }

        .reviews-number {
            font-size: var( --font-size-15 );
            color: var( --yellow-color );
        }

        .labels {
            display: flex;
            gap: 4px;
            width: 82%;
        }

        .content-informations {
            display: flex;
            flex-direction: column;
            gap: 3px;
            width: 82%;
        }

        #img-card {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .score{
            display:flex;
            gap: 5px;
        }

        .content:hover .card-actions {
            visibility: visible;
            transform: translateY(-85px);
        }

        .card-actions {
            position: absolute;
            transition: 0.20s ease;
        }

    </style>
    <a class="content" href="./produto-01.html">
       <div class="labels" id="labels"></div>
       <div class="content-informations">
            <div class="img-container">
                <div class="img-card">
                    <img id="img-card"></img>
                </div>
            </div>
            <div class="title" id="title">
                Blue Lock Vol. 35
            </div>
            <div class="description" id="description">
                Acompanha o protagonista que so...
            </div>
            <div class="score">
                <div id="stars-score"></div>
                <span class="reviews-number" id="reviews-number">(9)</span>
            </div>
            <div class="price" id="price">
                $40.00
            </div>
        </div>
        <item-card-actions class="card-actions"></item-card-actions>
    </a>
`;

class ItemCard extends HTMLElement {
    constructor(){
        super();

        this.attachShadow( { mode:"open" } );
        this.shadowRoot.appendChild( itemCartTemplate.content.cloneNode( true ) );

        this.limits = {
            size : {
                description: 50,
                title: 20,
            }
        }

    }

    static get observedAttributes() { 
        return ['imageurl','title','description','price','reviewsnumber', 'score', 'labels' ]; 
    }

    get labels() { 
        return this.getAttribute( 'labels' );
    }

    set labels( value ) {
        this.setAttribute( 'labels', value );
    }

    get score() { 
        return this.getAttribute( 'score' );
    }

    set score( value ) {
        this.setAttribute( 'score', value );
    }

    get reviewsNumber() { 
        return this.getAttribute( 'reviewsnumber' );
    }

    set reviewsNumber( value ) {
        this.setAttribute( 'reviewsnumber', value );
    }

    get price() { 
        return this.getAttribute( 'price' );
    }

    set price( value ) {
        this.setAttribute( 'price', value );
    }

    get description() { 
        return this.getAttribute(' description' );
    }

    set description( value ) {
        this.setAttribute( 'description', value );
    }

    get imageURL() { 
        return this.getAttribute(' imageurl' );
    }

    set imageURL( value ) {
        this.setAttribute( 'imageurl', value );
    }

    get title() { 
        return this.getAttribute(' title' );
    }

    set title( value ) {
        this.setAttribute( 'title', value );
    }

    attributeChangedCallback( name, oldValue, newValue ) {
        
        switch( name.toLowerCase() ){
            case 'imageurl':
                this.setSrcImageElement( newValue );
                break;
            case 'title':
                this.setTitleElement( newValue );
                break;
            case 'description':
                this.setDescriptionElement( newValue );
                break;
            case 'price':
                this.setPriceElement( newValue );
                break;
            case 'reviewsnumber':
                this.setReviewsNumberElement( newValue );
                break;
            case 'score':
                this.setScoreElement( newValue );
                break;
            case 'labels':
                this.setLabelsElement( newValue );
                break;
            default:
                break;
        }
    }

    setSrcImageElement( url ){
        this.shadowRoot.getElementById('img-card').src = url;
    }

    setTitleElement( title ){
        const dsFormatedText = title.length > this.limits.size.title ? title.substring( 0, this.limits.size.title ) + "..." : title;
        this.shadowRoot.getElementById('title').textContent = dsFormatedText;
    }

    setDescriptionElement( description ) {
        const dsFormatedText = description.length > this.limits.size.description ? description.substring( 0, this.limits.size.description ) + "..." : description;
        this.shadowRoot.getElementById('description').textContent = dsFormatedText;
    }

    setPriceElement( price ){
        let floatValue = parseFloat( price );
        this.shadowRoot.getElementById('price').textContent = `R$ ${floatValue.toFixed(2)}`;
    }

    setReviewsNumberElement( reviewsNumber ){
        this.shadowRoot.getElementById('reviews-number').textContent = `(${reviewsNumber})`;
    }

    setValuesByItem( item ) {

        console.log( item.reviews.length )

        this.imageURL = item.images_url[0];
        this.title = item.name;
        this.description = item.description;
        this.price = item.unit_price;
        this.reviewsNumber = item.reviews.length;
        this.score = item.score;
        this.labels = JSON.stringify( [...item.labels] );
    }

    setLabelsElement( jsonObject ){

        const labels = JSON.parse( jsonObject );

        let labelsContainer = this.shadowRoot.getElementById('labels');

        labels.forEach( ( label ) => {

            let name;

            switch( label ){
                case 'AVAIABLE':
                    name = 'Disponivel';
                    break;
                case 'EBOOK':
                    name = 'E-Book';
                    break;
                case 'PHYSICAL':
                    name = 'Fisico';
                    break;
                case 'UNAVAIABLE':
                    name = 'Indisp...';
                    break;
                default:
                    break;
            }

            let labelComponent = document.createElement('label-information');
            labelComponent.setName( name );

            labelsContainer.appendChild( labelComponent );

        } )
    }

    setScoreElement( score ) {

        const nrScore = parseInt( score );

        let nrMaxScore = 5;

        let starsScoreContainer = this.shadowRoot.getElementById('stars-score');

        let nrStarsNegative = nrScore === 0 ? 5 : nrMaxScore - nrScore;

        console.log( nrStarsNegative )

        for( let i = 0; i < nrScore; i++ ){
            let filledStar = document.createElement('i');
            filledStar.className = 'bi bi-star-fill';
            filledStar.style.color = 'var( --yellow-color )';
            starsScoreContainer.appendChild( filledStar )
        }

        for( let i = 0; i < nrStarsNegative; i++ ){
            let emptyStar = document.createElement('i');
            emptyStar.className = 'bi bi-star-fill';
            emptyStar.style.color = '#d3d3d3';
            starsScoreContainer.appendChild( emptyStar )
        }
    }
}

window.customElements.define( 'item-card', ItemCard )