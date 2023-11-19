const sliderOffersTemplate = document.createElement('template');
sliderOffersTemplate.innerHTML = `
    <style>
        .content {
            width: 100%;
            height: 50vh;
            background-size: cover; /* ajusta o tamanho da imagem para cobrir todo o elemento */
            background-position: center; /* centraliza a imagem */
            background-repeat: no-repeat; /* evita repetição da imagem */
            background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../resources/image/1315629.png');

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