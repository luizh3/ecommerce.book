const ButtonImageTemplate = document.createElement('template');
ButtonImageTemplate.innerHTML = `
    <style>
        .button-image {
            width: 60px;
            height: 60px;
            border: none;
            padding: 5px;
            background-color: var(--gray-weak-color);
        }

        .button-image:hover {
            background-color: var(--blue-weak-color);
        }
        
        .button-image img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        @media screen and ( max-width: 1175px ) {
            .button-image {
                width: 45px;
                height: 45px;
            }
        }
    </style>
    <button class="button-image">
        <img>
    </button>
`;

class ButtonImage extends HTMLElement {
    constructor(){
        super();

        this.attachShadow( { mode:"open" } );
        this.shadowRoot.appendChild( ButtonImageTemplate.content.cloneNode( true ) );
    }

    static get observedAttributes() {
        return [ "source" ];
    }

    get source() {
        return this.getAttribute( 'source' );
    }

    set source( value ) {
        return this.setAttribute( 'source', value );
    }
    
    setSource( url ) {
        this.shadowRoot.querySelector( 'img' ).src = url;
    }

    connectedCallback() {

        const button = this.shadowRoot.querySelector( "button" );

        button.addEventListener( "click", () => {

            const eventObject = {
                detail: {
                    url: this.source,
                }
            }

            console.log( '123' )

            this.dispatchEvent( new CustomEvent( "image-changed", eventObject ))
        } )

    }

    attributeChangedCallback( name, oldValue, newValue ){

        switch( name.toLowerCase() ){
            case 'source':
                this.setSource( newValue );
                break;
            default:
                break;
        }

    }

}

window.customElements.define( 'button-image', ButtonImage )