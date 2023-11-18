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

        .title {
            font-weight: 700;
        }

        .price {
            font-weight: 700;
        }

        .description {
            font-size: 13px;
        }

        .reviews-number {
            font-size: 15px;
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
        

    </style>
    <div class="content">
       <div class="labels" id="labels"></div>
        <div class="content-informations">
            <div class="img-container">
                <div class="img-card">
                    <img id="img-card" width="125"></img>
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
    </div>
`;

class ItemCard extends HTMLElement {
    constructor(){
        super();

        this.attachShadow( { mode:"open" } );
        this.shadowRoot.appendChild( itemCartTemplate.content.cloneNode( true ) );

    }

    setSrcImage( url ){
        this.shadowRoot.getElementById('img-card').src = url;
    }

    setTitle( title ){
        this.shadowRoot.getElementById('title').textContent = title;
    }

    setDescription( description ) {
        this.shadowRoot.getElementById('description').textContent = description;
    }

    setPrice( price ){
        this.shadowRoot.getElementById('price').textContent = `R$ ${price}`;
    }

    setReviewsNumber( reviewsNumber ){
        this.shadowRoot.getElementById('reviews-number').textContent = `(${reviewsNumber})`;
    }

    setLabels( typesJson ){

        const json = JSON.parse(typesJson)

        let labelsContainer = this.shadowRoot.getElementById('labels');

        json.types.forEach( ( label ) => {

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

    setScore( score ) {

        const nrScore = parseInt( score );

        let nrMaxScore = 5;

        let starsScoreContainer = this.shadowRoot.getElementById('stars-score');

        let nrStarsNegative = nrScore === 0 ? 5 : nrScore - nrMaxScore;

        console.log( nrStarsNegative )

        for( let i = 0; i < nrScore; i++ ){
            let filledStar = document.createElement('i');
            filledStar.className = 'bi bi-star-fill';
            filledStar.style.color = '#f5be19';
            starsScoreContainer.appendChild( filledStar )
        }

        for( let i = 0; i < nrStarsNegative; i++ ){
            let emptyStar = document.createElement('i');
            emptyStar.className = 'bi bi-star-fill';
            emptyStar.style.color = '#d3d3d3';
            starsScoreContainer.appendChild( emptyStar )
        }
    }

    connectedCallback() {
        this.setSrcImage( this.attributes.imageurl.value );
        this.setTitle( this.attributes.title.value );
        this.setDescription( this.attributes.description.value );
        this.setPrice( this.attributes.price.value );
        this.setReviewsNumber( this.attributes.reviewsnumber.value );

        this.setScore( this.attributes.score ? this.attributes.score.value : "0" );

        if( this.attributes.labels ){
            this.setLabels( this.attributes.labels.value )
        };
    }


}

window.customElements.define( 'item-card', ItemCard )