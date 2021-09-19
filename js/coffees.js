/* eslint-disable prettier/prettier */
let coffees = [
  {
    name: "espresso",
    description:
      "strong coffee with a good crema forms the base of many other drinks",
    photo: "images/coffees/espresso.png",
    type: 'hot'
  },
  {
    name: "ristretto",
    description:
      "Ristretto means restricted or concentrated in Italian so this drink is a short shot of espresso made with half the amount of water compared to an espresso. It is seen as the perfect espresso by some.",
    photo: "images/coffees/ristretto.png",
    type: 'hot'
  },
  {
    name: "latte",
    description:
      "A drink made with espresso and steamed milk. Can be made with different types of milk e.g. soya, almond or coconut.",
    photo: "images/coffees/latte.png",
    type: 'hot'
  },
  {
    name: "cappuccino",
    description:
      "An espresso based drink with steamed milk foam it originates from Italy. The name is thought to come from the Capuchin friars referring to the colour of their habitats. Also available as an iced option.",
    photo: "images/coffees/cappuccino.png",
    type: 'hot'
  },
  {
    name: "mocha",
    description:
      "made with espresso and milk like a latte but with added chocolate flavouring usually cocoa powder. Often available as an iced option and in some cases there is a sweeter white chocolate mocha available.",
    photo: "images/coffees/mocha.png",
    type: 'hot'
  },
  {
    name: "cortado",
    description:
      "espresso with equal amount of steamed warm milk reducing the acidity. It originates from Spain.",
    photo: "images/coffees/cortado.png",
    type: 'hot'
  },
  {
    name: "americano",
    description:
      "Drink prepared by diluting an espresso with hot water resulting in a different flavour to traditionally brewed coffee.",
    photo: "images/coffees/americano.png",
    type: 'hot'
  },
  {
    name: "macchiato",
    description:
      "In Italian macchiato means stained or spotted referring to the small amount of frothed milk used. Espresso coffee topped with a small amount of frothed milk.",
    photo: "images/coffees/espresso-macchiato.png",
    type: 'hot'
  },
  {
    name: "espresso con panna",
    description:
      "means espresso with cream in Italian a single or double espresso topped with whipped cream",
    photo: "images/coffees/con-panna.png",
    type: 'hot'
  },
  {
    name: "piccolo",
    description:
      "Australian in origin it is a ristretto shot (20ml) topped with warm milk in a small latte glass (demitasse)",
    photo: "images/coffees/piccolo.png",
    type: 'hot'
  },
  {
    name: "flat white",
    description: "Originally from New Zealand it has become increasingly popular in recent years and led to inreased amount of latte art",
    photo: "images/coffees/flat-white.png",
    type: 'hot'
  },
  {
    name: "lungo",
    description:
      "Lungo means long in Italian made with an espresso machine but with twice as much water. Less strong but more bitter than an espresso",
    photo: "images/coffees/lungo.png",
    type: 'hot'
  },
  {
    name: "affogato",
    description:
      "Italian for drowned this is a coffee-based dessert with vanilla ice-cream topped or drowned with a shot of hot espresso",
    photo: "images/coffees/affogato.jpg",
    type: 'cold'
  },
  {
    name: "Moretta fanese",
    description:
      "It is strong and sweet, and usually drunk after meals as a digestive, or used as a hot drink on cold afternoons. The hot cocktail is a blend of anise, rum and brandy in roughly equal parts.",
    photo: "images/coffees/moretta.png",
    type: 'alcoholic'
  },
  {
    name: "espresso martini",
    description:
      "a cold coffee-flavoured cocktail made with vodka, espresso, coffee liquer and sugar syrup garnished with coffee beans. It is not a true martini which traditionally includes Tia Maria or Kahlua.",
    photo: "images/coffees/espresso-martini.png",
    type: 'alcoholic'
  },
  {
    name: "cold brew",
    description:
      "coarse grind coffee is soaked overnight (sometimes longer) in cold water. It produces a drink with less acidity and therefore a sweeter taste.",
    photo: "images/coffees/cold-brew.jpg",
    type: 'cold'
  },
  {
    name: "iced coffee",
    description:
      "this differs from cold brew as the coffee is brewed hot and poured over ice. It is brewed stronger to make up for dilution caused by the ice.",
    photo: "images/coffees/iced-coffee.png",
    type: 'cold'
  },
];

const coffeesList = document.querySelector('#coffee-list')

function getCoffees(){
  for (let i = 0; i < coffees.length; i++) {
    let coffee = coffees[i]
    let row = document.createElement('tr')
    row.classList.add('row')
    row.innerHTML = `
    <td><strong>${coffee.name}</strong></td>
    <td>${coffee.description}</td>
    <td>${coffee.type}</td>
    <td><img src="${coffee.photo}" width="300" /></td>
    `
    coffeesList.appendChild(row)
  }
}

getCoffees()