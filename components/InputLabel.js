const inputLabelTemplate = document.createElement('template');
inputLabelTemplate.innerHTML = `
    <style>
        .content {
            width: 100%;
            height: 85px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .content-button {
            width: 100%;
            height: inherit;
            background-color: white;
            display: flex;
            border: var( --border-default );
            border-radius: var( --radius-default );
        }
        
        .content-button input {
            width: 100%;
            height: 100%;
            object-fit: contain;
            border: none;
            margin-left: 10px;
            background-color: transparent;
        }
        
        .content-button input:focus {
            border: 0 none;
            outline: 0;
        }
    </style>
    <div class="content">
        <label>None</label>
        <div class="content-button">
            <input type="text"></input>
        </div>
    </div>
`;

class InputLabel extends HTMLElement {
    constructor(){
        super();

        this.attachShadow( { mode:"open" } );
        this.shadowRoot.appendChild( inputLabelTemplate.content.cloneNode( true ) );
    }

    setType( type ) {
        this.shadowRoot.querySelector('input').type = type;
    }

    setLabelText( text ){
        this.shadowRoot.querySelector('label').textContent = text;
    }

    setPlaceHolder( placeholer ) {
        this.shadowRoot.querySelector('input').placeholder = placeholer;
    }

    connectedCallback() {

        const placeholder = this.getAttribute('placeholder');
        this.setPlaceHolder( placeholder ? placeholder : "" );

        if ( this.attributes.type ) {
            this.setType( this.attributes.type.value );
        }
        
        this.setLabelText( this.attributes.text.value );
    }

}

window.customElements.define( 'input-label', InputLabel )