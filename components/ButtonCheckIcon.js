const buttonCheckIconTemplate = document.createElement('template');
buttonCheckIconTemplate.innerHTML = `
    <style>
        .content {
            width: 250px;
            height: 100px;
            border: var( --border-default );
            border-radius: var( --radius-default );
            cursor: pointer;
            background-color:#FFFFFF;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            flex-direction: column;
            font-weight:700;
        }

        .content-image {
            width: 100px;
            height: 40px;
        }

        .content.selected {
            background-color: var(--blue-strong-color);
            color: #FFFFFF;
            border-color: var(--blue-strong-color);
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        @media ( max-width: 936px ) {

           .content {
             width: 125px;
             font-size: 13px;
           }
        
        }

    </style>
    <div class="content">
        <div class="content-image">
            <img></img>
        </div>
        <label></label>
    </div>
`;

class ButtonCheckIcon extends HTMLElement {
    constructor(){
        super();

        this.attachShadow( { mode:"open" } );
        this.shadowRoot.appendChild( buttonCheckIconTemplate.content.cloneNode( true ) );
    }

    setImage( url ) {
        this.shadowRoot.querySelector('img').src = url;
    }

    setText( text ) {
        this.shadowRoot.querySelector('label').textContent = text;
    }

    connectedCallback() {
        this.setImage( this.getAttribute('url') )
        this.setText( this.getAttribute('text') )

        if( this.getAttribute('selected') && !!this.getAttribute('selected') ){
            this.shadowRoot.querySelector('.content').classList.add('selected')
        }

    }
}

window.customElements.define( 'button-check-icon', ButtonCheckIcon )