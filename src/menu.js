// "use strict";

const menu = [

  {
    menuTitle: "Pequeno almoço",
    content: [
      {
        name: "Pão unidade",
        auxiliaryText: "",
        price: 0.90,
      },
    
      {
        name: "Sandes de manteiga",
        auxiliaryText: "",
        price: 1.40,
      },
    
      {
        name: "Pão com ovo",
        auxiliaryText: "Pão com ovo estrelado",
        price: 1.70,
      },
    
      {
        name: "Sandes de queijo ou fiambre",
        auxiliaryText: "Pão com fatia de queijo ou fiambre",
        price: 2.10,
      },
    
      {
        name: "Sandes mista",
        auxiliaryText: "Pão com fatia de queijo e fiambre",
        price: 2.40,
      },
    
      {
        name: "Sandes de presunto",
        auxiliaryText: "Pão com fatia de presunto",
        price: 3.20,
      },
    
      {
        name: "Sandes mista de presunto",
        auxiliaryText: "Pão com fatia de presunto e queijo",
        price: 3.40,
      },
  
      {
        name: "Bolo simples",
        auxiliaryText: "",
        price: 1.20,
      },
    
      {
        name: "Bolo com creme",
        auxiliaryText: "",
        price: 1.50,
      },
    ],
  },

  {
    menuTitle: "Salgados e acompanhamentos",
    content: [
      {
        name: "Batata pacote",
        auxiliaryText: "Tamanho pequeno",
        price: 1.20,
      },
    
      {
        name: "Batata pacote",
        auxiliaryText: "Tamanho grande",
        price: 1.70,
      },
    
      {
        name: "Amendoim pacote",
        auxiliaryText: "150 gramas",
        price: 1.50,
      },

      {
        name: "Sopa do dia",
        auxiliaryText: "",
        price: 1.80,
      },
    
      {
        name: "Salgado frito",
        auxiliaryText: "Chamuça de carne, rissol de camarão/carne, enrolado de fiambre e queijo ou salsicha",
        price: 1.50,
      },
    ],
  },

  {
    menuTitle: "Lanches",
    content: [
      {
        name: "Sandes de delícias do mar",
        auxiliaryText: "Pão com delícias do mar e alface",
        price: 3.40,
      },

      {
        name: "Sandes de frango",
        auxiliaryText: "Pão com frango e alface",
        price: 3.40,
      },

      {
        name: "Sandes de atum",
        auxiliaryText: "Pão com atum e alface",
        price: 3.40,
      },

      {
        name: "Omelete",
        auxiliaryText: "Omelete de fiambre e queijo",
        price: 3.40,
      },

      {
        name: "Bifana simples",
        auxiliaryText: "Pão com bifana na chapa",
        price: 3.40,
      },

      {
        name: "Bifana do tacho",
        auxiliaryText: "Bifana guizada no pão",
        price: 3.40,
      },

      {
        name: "Bifana especial",
        auxiliaryText: "Bifana no pão com queijo, bacon, ovo, alface, tomate e cebola",
        price: 5.40,
      },

      {
        name: "Entremeada simples",
        auxiliaryText: "Entremeada no pão com queijo, bacon, ovo, alface, tomate e cebola",
        price: 3.40,
      },

      {
        name: "Entremeada especial",
        auxiliaryText: "Entremeada no pão com queijo, bacon, ovo, alface, tomate e cebola",
        price: 3.40,
      },

      {
        name: "Hambúrguer simples",
        auxiliaryText: "Hambúrguer no pão com alface, tomate e cebola",
        price: 3.40,
      },

      {
        name: "X-Burguer",
        auxiliaryText: "Hambúrguer no pão com queijo, alface, tomate e cebola",
        price: 4.10,
      },

      {
        name: "Egg X-Burguer",
        auxiliaryText: "Hambúrguer no pão com queijo, ovo, alface, tomate e cebola",
        price: 4.90,
      },

      {
        name: "Hambúrger especial",
        auxiliaryText: "Hambúrguer no pão com queijo, bacon, ovo, alface, tomate e cebola",
        price: 5.70,
      },

      {
        name: "Cachorro simples",
        auxiliaryText: "Salsicha no pão com batata palha, alface e cebola",
        price: 3.90,
      },

      {
        name: "Cachorro especial",
        auxiliaryText: "Salsicha no pão com ovo, queijo, bacon, batata palha, alface, tomate e cebola",
        price: 5.40,
      },

      {
        name: "X-Frango simples",
        auxiliaryText: "Filé de frango no pão com queijo, alface, cebola",
        price: 3.90,
      },
      
      {
        name: "X-Frango especial",
        auxiliaryText: "Filé de frango no pão com queijo, bacon, ovo, alface, tomate, cebola",
        price: 3.90,
      },
    ],
  },

  {
    menuTitle: "Sumos e águas",
    content: [
      { 
        name: "Água",
        auxiliaryText: "50cl",
        price: 1.00,
      },
    
      {
        name: "Água",
        auxiliaryText: "1.5L",
        price: 1.50,
      },

      {
        name: "Ice tea",
        auxiliaryText: "Pêssego/limão/manga",
        price: 1.50,
      },

      {
        name: "Refrigerantes",
        auxiliaryText: "Coca-Cola/Fanta/Guaraná/Seven-up",
        price: 1.50,
      },

      {
        name: "Sumol",
        auxiliaryText: "Laranja/ananás",
        price: 1.50,
      },

      {
        name: "Energético",
        auxiliaryText: "Red bull",
        price: 2.50,
      },
    
      {
        name: "Água das pedras",
        auxiliaryText: "25cl",
        price: 1.60,
      },
    
      {
        name: "Frize",
        auxiliaryText: "Limão",
        price: 1.60,
      },
    ],
  },

  {
    menuTitle: "Cervejas",
    content: [
      {
        name: "Mini",
        auxiliaryText: "Sagres, Superbock ou Heineken",
        price: 1.00,
      },
    
      {
        name: "Cerveja média",
        auxiliaryText: "Sagres ou Superbock",
        price: 1.20,
      },
    
      {
        name: "Cerveja sem álcool",
        auxiliaryText: "Sagres",
        price: 1.50,
      },
    
      {
        name: "Cerveja preta",
        auxiliaryText: "Superbock",
        price: 1.50,
      },
    
      {
        name: "Cerveja Somersby mini",
        auxiliaryText: "Vários sabores",
        price: 1.30,
      },
    
      {
        name: "Cerveja Somersby",
        auxiliaryText: "Vários sabores",
        price: 1.70,
      },
    ],
  },

  {
    menuTitle: "Vinhos e digestivos",
    content: [
      {
        name: "Vinho tinto ou branco",
        auxiliaryText: "Copo",
        price: 1.20,
      },
    
      {
        name: "Sangria",
        auxiliaryText: "Copo",
        price: 1.20,
      },

      {
        name: "Whisky",
        auxiliaryText: "Dose",
        price: 2.50,
      },
    
      {
        name: "Vodka",
        auxiliaryText: "Dose",
        price: 2.50,
      },
    
      {
        name: "Bagaço",
        auxiliaryText: "Dose",
        price: 1.20,
      },
    
      {
        name: "Licor beirão",
        auxiliaryText: "Dose",
        price: 1.50,
      },
    
      {
        name: "Amêndoa amarga",
        auxiliaryText: "Dose",
        price: 1.20,
      },
    
      {
        name: "Ginja",
        auxiliaryText: "Dose",
        price: 1.20,
      },
    
      {
        name: "Croft",
        auxiliaryText: "Dose",
        price: 1.20,
      },

      {
        name: "Martini",
        auxiliaryText: "0.6Cl",
        price: 1.50,
      },
    ],
  },

  {
    menuTitle: "Cafetaria",
    content: [
      {
        name: "Café",
        auxiliaryText: "",
        price: 0.80,
      },

      {
        name: "Carioca",
        auxiliaryText: "",
        price: 0.80,
      },
    
      {
        name: "Café abatanado",
        auxiliaryText: "",
        price: 0.90,
      },
    
      {
        name: "Café descafeinado",
        auxiliaryText: "",
        price: 0.90,
      },
    
      {
        name: "Galão",
        auxiliaryText: "",
        price: 1.60,
      },
    
      {
        name: "Chá",
        auxiliaryText: "Vários sabores",
        price: 0.80,
      },
    
      {
        name: "Meia de leite",
        auxiliaryText: "",
        price: 1.00,
      },
      
      {
        name: "Leite",
        auxiliaryText: "Copo",
        price: 0.80,
      },
      
      {
        name: "Leite achocolatado",
        auxiliaryText: "200ml",
        price: 1.50,
      },

    ],
  },

  {
    menuTitle: "Extras",
    content: [
      {
        name: "Pastilha/rebuçado",
        auxiliaryText: "",
        price: 0.10,
      },

      {
        name: "Kinder delice",
        auxiliaryText: "",
        price: 1.20,
      },

      {
        name: "Isqueiro",
        auxiliaryText: "",
        price: 1.50,
      },
    ],
  },
  
];

export default menu;