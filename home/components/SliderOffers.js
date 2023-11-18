const sliderOffersTemplate = document.createElement('template');
sliderOffersTemplate.innerHTML = `
    <style>
        .content {
            width: 100%;
            height: 50vh;
            background-color: black;
        }
    </style>
    <div class="content">
        
    </div>
`;

class SliderOffers extends HTMLElement {
    constructor(){
        super();

        this.attachShadow( { mode:"open" } );
        this.shadowRoot.appendChild( sliderOffersTemplate.content.cloneNode( true ) );
    }


}

window.customElements.define( 'slider-offers', SliderOffers )