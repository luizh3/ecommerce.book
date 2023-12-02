
class ItemMock {

    static findById( id ) {
        return this.getAllItems().find( ( item ) => { 
            return item.id == id;
        })
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
                    quantity: 0,
                    sequence: 0,
                    delivery_shipping: 12.00,
                    reviews: [
                        {
                            "title": "Poderia ter sido melhor",
                            "name": "ZekeLover",
                            "description": "O arco final foi uma decepção. As motivações dos personagens não foram totalmente exploradas, deixando muitos pontos soltos. Não atendeu às expectativas.",
                            "date": "26/11/2022",
                            "score": 3
                        },
                        {
                            "title": "Bom, mas não perfeito",
                            "name": "CriticoConstrutivo",
                            "description": "O final foi bom, mas alguns arcos poderiam ter recebido mais atenção. Algumas decisões de personagens foram questionáveis. Ainda assim, uma conclusão sólida.",
                            "date": "29/11/2022",
                            "score": 4
                        },
                        {
                          "title": "Attack on Titan - Volume Final Thoughts",
                          "name": "Eren4Ever",
                          "description": "Eren Yeager, meu herói! Este volume final foi a conclusão perfeita para uma série incrível. As reviravoltas, a filosofia e as lutas épicas - tudo foi fenomenal.",
                          "date": "22/11/2022",
                          "score": 5
                        },
                        {
                          "title": "Attack on Titan - Volume 34 Review",
                          "name": "ArminTheStrategist",
                          "description": "A inteligência de Armin realmente brilhou neste volume. As estratégias elaboradas e as revelações impactantes fizeram deste um final memorável.",
                          "date": "23/11/2022",
                          "score": 5
                        },
                        {
                          "title": "Fim de uma Era",
                          "name": "CriticalReviewer",
                          "description": "Infelizmente, o final de Attack on Titan não atendeu às minhas expectativas. Algumas escolhas de personagens foram questionáveis, e certas tramas mereciam mais desenvolvimento.",
                          "date": "24/11/2022",
                          "score": 2
                        }
                      ]
                },
                {
                    id: 2,
                    name: "O estrangeiro",
                    images_url: [
                        "./resources/image/camus-o-estrangeiro.png",
                        "./resources/image/camus-o-estrangeiro-verso.png",
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
                    quantity: 0,
                    sequence: 0,
                    delivery_shipping: 5.00,
                    reviews: [
                        {
                          "title": "O Estrangeiro - Uma Jornada Filosófica",
                          "name": "FilosofoLiterario",
                          "description": "Uma narrativa intensa que explora a alienação e a falta de sentido na vida. A escrita de Albert Camus é penetrante, e Meursault é um protagonista intrigante. O final deixa espaço para reflexão profunda.",
                          "date": "15/02/2023",
                          "score": 5
                        },
                        {
                          "title": "O Estrangeiro - Desafiador e Controverso",
                          "name": "LeitorQuestionador",
                          "description": "A abordagem existencialista de Camus neste romance é desafiadora. Meursault é um protagonista peculiar, e a falta de emoção dele é desconcertante. A história levanta questões profundas sobre a sociedade e a natureza humana.",
                          "date": "16/02/2023",
                          "score": 4
                        }
                      ]
                },
                {
                    id: 3,
                    name: "O Mito de Sísifo",
                    images_url: [
                        "./resources/image/mito-de-sisifo.png",
                        "./resources/image/mito-de-sisifo-verso.png",
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
                    quantity: 0,
                    sequence: 0,
                    delivery_shipping: 0.00,
                    reviews: [
                        {
                          "title": "O Mito de Sísifo - Reflexões Existenciais",
                          "name": "ReflexivoPorNatureza",
                          "description": "Uma obra filosófica profunda que explora a questão fundamental da existência humana. Camus aborda o absurdo da vida de maneira envolvente, desafiando o leitor a confrontar o significado em um mundo aparentemente sem propósito.",
                          "date": "15/03/2023",
                          "score": 5
                        },
                        {
                          "title": "O Mito de Sísifo - Desvendando o Absurdo",
                          "name": "CuriosoSobreoAbsurdo",
                          "description": "Camus oferece uma visão perspicaz sobre a condição humana, destacando o absurdo inerente à existência. A análise do mito de Sísifo proporciona uma experiência de leitura desafiadora, convidando o leitor a refletir sobre a busca por sentido na vida.",
                          "date": "16/03/2023",
                          "score": 4
                        }
                      ]
                },
                {
                    id: 4,
                    name: "O Pequeno Príncipe",
                    images_url: [
                        "./resources/image/o-pequeno-principe.png",
                        "./resources/image/o-pequeno-principe-verso.png",
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
                    quantity: 0,
                    sequence: 0,
                    delivery_shipping: 23.00,
                    reviews: [
                        {
                          "title": "O Pequeno Príncipe - Uma Jornada Encantadora",
                          "name": "SonhadorEstelar",
                          "description": "Uma obra atemporal que cativa leitores de todas as idades. A história delicada do Pequeno Príncipe e suas aventuras pelos planetas é repleta de sabedoria e poesia. Uma leitura encantadora que ressoa com a criança interior de cada um.",
                          "date": "10/04/2023",
                          "score": 5
                        },
                        {
                          "title": "O Pequeno Príncipe - Lições Profundas em Simplicidade",
                          "name": "ApreciadorDeAlmas",
                          "description": "A simplicidade desta narrativa esconde lições profundas sobre amor, amizade e a busca por significado na vida. As ilustrações encantadoras complementam a jornada do Pequeno Príncipe, tornando este livro uma experiência verdadeiramente especial.",
                          "date": "11/04/2023",
                          "score": 5
                        }
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
                    quantity: 0,
                    sequence: 0,
                    delivery_shipping: 0.00,
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
                    quantity: 0,
                    sequence: 0,
                    delivery_shipping: 0.00,
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
                    quantity: 0,
                    sequence: 0,
                    delivery_shipping: 9.00,
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
                    quantity: 0,
                    sequence: 0,
                    delivery_shipping: 0.00,
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