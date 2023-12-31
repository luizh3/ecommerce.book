const sliderOffersTemplate = document.createElement('template');
sliderOffersTemplate.innerHTML = `
    <style>
        .content {
            width: 100%;
            height: 50vh;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            position: relative;
            background-image: linear-gradient(to left, rgba(192, 192, 192, 0.5), rgba(0, 0, 0, 0.5)), url('./resources/image/1315629.png');
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .title {
            color: #FFFFFF;
            font-weight: var( --font-weight-bold );
            font-size: 45px;
        }

        .description {
            color: var( --color-text-focus );
            font-size: 18px;
            width: 700px;
        }

        .content-button {
            width: 300px;
        }

        .content-center {
            width: 80%;
            display: flex;
            flex-direction: column;
            gap: var( --gap-default );
        }

        
        @media ( max-width: 900px ) {

            .content-center {
                justify-content: center;
                align-items: center;
            }

            .title {
                font-size: var( --font-size-title );
            }

            .description {
                font-size: 15px;
                width: 70%;
                min-width: 300px;
            }
        }

    </style>
    <div class="content">
        <div class="content-center">
            <div class="title">
                Já disponivel <br> Ataque Dos Titãs - 34
            </div>
            <div class="description">
                O Estrondo esmagou as terras além da Ilha Paradis e tomou inúmeras vidas. Por um lado Armin, 
                Mikasa e os outros descobrem em qual ponto devem atacar Eren.
                Inimigos, aliados, companheiros e tantas vidas perdidas depois, eles finalmente conseguem chegar até Eren.
            </div>
            <div class="content-button">
                <button-primary text="Ver agora" id="button"></button-primary>
            </div>
        </div>
    </div>
`;

class SliderOffers extends HTMLElement {
    constructor(){
        super();

        this.attachShadow( { mode:"open" } );
        this.shadowRoot.appendChild( sliderOffersTemplate.content.cloneNode( true ) );
    }

    redirectPage( destity ) {
        window.location.href = destity;
    }

    connectedCallback() {
        this.shadowRoot.querySelector( "#button" ).addEventListener( 'click', this.redirectPage.bind( this, './produto.html?id=1' ) );
    }

}

window.customElements.define( 'slider-offers', SliderOffers )