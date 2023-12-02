const scoreStarsTemplate = document.createElement('template');
scoreStarsTemplate.innerHTML = `
    <style>
        @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css");
    </style>
    <div id="stars-score"></div>
`;

class ScoreStars extends HTMLElement {
    constructor(){
        super();

        this.attachShadow( { mode:"open" } );
        this.shadowRoot.appendChild( scoreStarsTemplate.content.cloneNode( true ) );
    }

    get value() {
        this.getAttribute( 'value' )
    }

    set value( value ) {
        this.setAttribute( 'value', value );
    }

    static get observedAttributes() {
        return [ 'value' ]
    }

    attributeChangedCallback( name, oldValue, newValue ) {

        switch( name.toLowerCase() ) {
            case 'value':
                this.setScoreElement( newValue );
                break;
            default:
                break;
        }

    }

    setScoreElement( score ) {

        console.log( score )

        const nrScore = parseInt( score );

        let nrMaxScore = 5;

        let starsScoreContainer = this.shadowRoot.getElementById('stars-score');

        starsScoreContainer.innerHTML = '';

        let nrStarsNegative = nrScore === 0 ? 5 : nrMaxScore - nrScore;

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

window.customElements.define( 'score-stars', ScoreStars )