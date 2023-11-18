const labelInformationTemplate = document.createElement('template');
labelInformationTemplate.innerHTML = `
    <style>
        .label {
            width: 75px;
            font-size: 13px;
            background-color: var( --gray-color );
            height: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight:700;
            color: #FFFFFF;
        }
    </style>
    <div class="label">
        <span id="name"></span>
    </div>
`;

class LabelInformation extends HTMLElement {
    constructor(){
        super();

        this.attachShadow( { mode:"open" } );
        this.shadowRoot.appendChild( labelInformationTemplate.content.cloneNode( true ) );
    }

    setName( name ) {
        this.shadowRoot.getElementById('name').textContent = name;
    }
}

window.customElements.define( 'label-information', LabelInformation )