window.onload = function() {

    let items = {};

    localStorage.setItem( "items", JSON.stringify(items) )

    const allItems = ItemManagerLocalStorage.getAllItems();

    this.addBestSellerItems(  allItems );
    this.addInterestingitems( allItems )

}

function addInterestingitems( allItems ) {

    const rowLimit = 4;

    const itemsInteresting = allItems.filter( item => !item.best_seller ).slice( 0, rowLimit );

    let content = document.getElementById('content-interesting');
    
    itemsInteresting.forEach( ( item, index ) => {
        content.appendChild( createItemCard( item, index ) );
    });

}

function addBestSellerItems( allItems ){

    const rowLimit = 4;

    const itemsBestSellerRow = allItems.filter( item => item.best_seller ).slice( 0, rowLimit );

    let content = document.getElementById('content-best-seller');
    
    itemsBestSellerRow.forEach( ( item, index ) => {
        content.appendChild( createItemCard( item, index ) );
    });

}

function createItemCard( item, index ) {

    let itemCard = document.createElement( 'item-card');

    itemCard.setAttribute('slot', `item-${index}`);
    itemCard.setValuesByItem( item );

    return itemCard;

}

class ItemManagerLocalStorage {

    static addItem( item ) {
        let items = JSON.parse( localStorage.getItem( "items" ) );
        item.push( item );
        localStorage.setItem( "items", items );
    }

    static getAllItems() {

        return [
                {
                    id: 1,
                    name: "Ataque dos Titãs Vol. 34",
                    images_url: [
                        "./resources/image/attack-on-titan.png",
                        "./resources/image/attack-on-titan-2.png"
                    ],
                    unit_price: 20.00,
                    discount: 10.00,
                    description: "O Estrondo esmagou as terras além da Ilha Paradis e tomou inúmeras vidas. Por um lado Armin, Mikasa e os outros descobrem em qual ponto devem atacar Eren. Inimigos, aliados, companheiros e tantas vidas perdidas depois, eles finalmente conseguem chegar até Eren.",
                    author: "Hajime Isayama",
                    publishing_company: "Kodansha Comics",
                    language: "Inglês",
                    publication_date: "29 novembro 2022",
                    page_number: 832,
                    labels: [ "PHYSICAL", "UNAVAIABLE" ],
                    favorite: false,
                    best_seller : true,
                    score: 5,
                    reviews: [
                        {
                            title: "Os Barões da Pisadinha - Cabeça Voando",
                            name: "Omar ta pra onda",
                            description: "Muito bom em, legal...",
                            date: "17/02/1990",
                            score: 5,
                        },
                    ]
                },
                {
                    id: 2,
                    name: "O estrangeiro",
                    images_url: [
                        "./resources/image/mito-de-sisifo.png",
                        "./resources/image/mito-de-sisifo.png",
                    ],
                    unit_price: 30.00,
                    discount: 10.00,
                    description: "Mais conhecida e importante obra de ficção de Albert Camus, vencedor do Prêmio Nobel de Literatura. Com a emoção de um thriller perfeitamente executado e a força de uma parábola, O Estrangeiro é a obra de destaque deum dos escritores mais engajados e respeitados do século.",
                    author: "Albert Camus",
                    publishing_company: "Record",
                    language: "Português",
                    publication_date: "1 junho 1979",
                    page_number: 128,
                    labels: [ "EBOOK","PHYSICAL"],
                    favorite: false,
                    best_seller : true,
                    score: 4,
                    reviews: [
                        {
                            title: "",
                            name: "",
                            description: "",
                            date: "",
                            score: 0,
                        },
                    ]
                },
                {
                    id: 3,
                    name: "O Mito de Sísifo",
                    images_url: [
                        "./resources/image/mito-de-sisifo.png",
                        "./resources/image/mito-de-sisifo.png",
                    ],
                    unit_price: 50.00,
                    discount: 10.00,
                    description: "De um dos mais importantes e representativos autores do século XX e Prêmio Nobel de Literatura, O mito de sísifo traz ensaios sobre o absurdo e o irracional, tornando-se uma importante contribuição filosófico-existencial que exerce influência profunda sobre toda uma geração.",
                    author: "Albert Camus",
                    publishing_company: "Record",
                    language: "Português",
                    publication_date: "11 janeiro 2018",
                    page_number: 160,
                    labels: [ "EBOOK","PHYSICAL"],
                    favorite: false,
                    best_seller : true,
                    score: 5,
                    reviews: [
                        {
                            title: "",
                            name: "",
                            description: "",
                            date: "",
                            score: 0,
                        },
                    ]
                },
                {
                    id: 4,
                    name: "O Pequeno Príncipe",
                    images_url: [
                        "./resources/image/mito-de-sisifo.png",
                        "./resources/image/mito-de-sisifo.png",
                    ],
                    unit_price: 50.00,
                    discount: 10.00,
                    description: "Conheça um piloto perdido no deserto, uma rosa vaidosa habitando um planeta frio e um pequeno príncipe que parte em uma viagem estranha e extraordinária por diversos planetas até encontrar a Terra, onde finalmente conhece a verdadeira natureza do amor.",
                    author: "Louise Greig",
                    publishing_company: "HarperKids",
                    language: "Português",
                    publication_date: "15 junho 2023",
                    page_number: 96,
                    labels: [ "EBOOK","PHYSICAL"],
                    favorite: false,
                    best_seller : true,
                    score: 3,
                    reviews: [
                        {
                            title: "",
                            name: "",
                            description: "",
                            date: "",
                            score: 0,
                        },
                    ]
                },
                {
                    id: 5,
                    name: "5 Centímetros por segundo",
                    images_url: [
                        "./resources/image/mito-de-sisifo.png",
                        "./resources/image/mito-de-sisifo.png",
                    ],
                    unit_price: 50.00,
                    discount: 10.00,
                    description: "A história se passa no começo dos anos 90, onde a internet ainda não era uma alternativa viável para comunicação a distância.",
                    author: "Makoto Shinkai",
                    publishing_company: "NewPOP",
                    language: "Português",
                    publication_date: "1 dezembro 2015",
                    page_number: 240,
                    labels: [ "EBOOK","PHYSICAL"],
                    favorite: false,
                    best_seller : false,
                    score: 5,
                    reviews: [
                        {
                            title: "",
                            name: "",
                            description: "",
                            date: "",
                            score: 0,
                        },
                    ]
                },
                {
                    id: 6,
                    name: "A morte de ivan ilitch",
                    images_url: [
                        "./resources/image/mito-de-sisifo.png",
                        "./resources/image/mito-de-sisifo.png",
                    ],
                    unit_price: 50.00,
                    discount: 10.00,
                    description: "Nesta novela - considerada uma das mais perfeitas já escritas, Tolstói narra a história de Ivan Ilitch, um juiz de instrução que, depois de alcançar uma vida confortável, descobre que tem uma grave doença",
                    author: "Boris Schnaiderman",
                    publishing_company: "Editora 34",
                    language: "Português",
                    publication_date: "1 janeiro 2009",
                    page_number: 96,
                    labels: [ "EBOOK","PHYSICAL"],
                    favorite: false,
                    best_seller : false,
                    score: 0,
                    reviews: [
                        {
                            title: "",
                            name: "",
                            description: "",
                            date: "",
                            score: 0,
                        },
                    ]
                },
                {
                    id: 7,
                    name: "As Dores do mundo",
                    images_url: [
                        "./resources/image/mito-de-sisifo.png",
                        "./resources/image/mito-de-sisifo.png",
                    ],
                    unit_price: 50.00,
                    discount: 10.00,
                    description: "Considerada uma das obras clássicas da filosofia alemã, esta obra apresenta uma série de reflexões sobre a existência, propondo uma nova forma de se pensar a dor e a felicidade.",
                    author: "Arthur Schopenhauer",
                    publishing_company: "Edipro",
                    language: "Português",
                    publication_date: "1 fevereiro 2018",
                    page_number: 136,
                    labels: [ "EBOOK","PHYSICAL"],
                    favorite: false,
                    best_seller : false,
                    score: 4,
                    reviews: [
                        {
                            title: "",
                            name: "",
                            description: "",
                            date: "",
                            score: 0,
                        },
                    ]
                },
                {
                    id: 8,
                    name: "Memórias do subsolo",
                    images_url: [
                        "./resources/image/mito-de-sisifo.png",
                        "./resources/image/mito-de-sisifo.png",
                    ],
                    unit_price: 50.00,
                    discount: 10.00,
                    description: "Obra-prima da literatura mundial, esta pequena novela traz, em embrião, vários temas da fase madura de Dostoiévski. Seu protagonista, um funcionário que vive no subsolo de um edifício em São Petersburgo, expõe a sua visão de mundo num discurso explosivo, labiríntico, vertido impecavelmente para o português por Boris Schnaiderman. Tradução primorosa.",
                    author: "Fiódor Dostoiévski",
                    publishing_company: "Editora 34",
                    language: "Português",
                    publication_date: "1 janeiro 2009",
                    page_number: 152,
                    labels: [ "EBOOK","PHYSICAL"],
                    favorite: false,
                    best_seller : false,
                    score: 5,
                    reviews: [
                        {
                            title: "",
                            name: "",
                            description: "",
                            date: "",
                            score: 0,
                        },
                    ]
                }
            ]
    }
}
