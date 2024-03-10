const messageList = [{
    image: './images/cards/scientist.jpg',
    text: 'Support of scientists',
    description: 'A scientist with a screen'
  },
  {
    image: './images/cards/girl.jpg',
    text: 'School programs',
    description: 'The girl and the board'
  },
  {
    image: './images/cards/globe.jpg',
    text: 'International cooperation',
    description: 'The globe'
  },
  {
    image: './images/cards/support.jpg',
    text: 'Student support',
    description: 'Handshake'
  },
];


class Card {
    // The constructor will receive dynamic data,
    // each instance will have its own data
    constructor(text, image, description) {
        // text and image are private fields,
        // they are needed only inside the class
        this._text = text;
        this._image = image;
        this._description = description;
    }

    _getTemplate() {
          // Retrieve markup from HTML and clone the element
          const cardElement = document
          .querySelector('.template-cards')
          .content
          .querySelector('.cards__item')
          .cloneNode(true);
          
        // Return the card DOM element
          return cardElement;
    } 
    generateCard() {
    // Write the markup to the private field _element.
    // This will allow other elements to access it.
    this._element = this._getTemplate();
    this._img  = this._element.querySelector('.cards__image');
    
    // Add data
    this._img.alt = this._description
    this._img.src = this._image;
    this._element.querySelector('.cards__description').textContent = this._text;
    
    // Return the element outside
    return this._element;
    } 
}


messageList.forEach((item) => {
     // Create a card instance
    const card = new Card(item.text, item.image, item.description);
    // Generate the card and return it
    const cardElement = card.generateCard();
  
    // Append to the DOM
    document.querySelector('.cards').append(cardElement);
  }); 

  const getValue = string => Number(string.substring(0, string.length-2));

  const container = document.querySelector('.cards');
  const scrollLeftButton = document.querySelector('.collection__arrow-left');
  const scrollRightButton = document.querySelector('.collection__arrow-right');
  const cardItem = document.querySelector('.cards__item')
  const cardWidth = getComputedStyle(cardItem);
  const containerGap = getComputedStyle(container);
  const scrollStep = content => {
    const cardItem = document.querySelector('.cards__item')
    const cardWidth = getComputedStyle(cardItem);
    const containerGap = getComputedStyle(content);
    return window.matchMedia("(max-width: 554px)").matches ?
          getValue(cardWidth.width) + getValue(containerGap.rowGap) : 2 * getValue(cardWidth.minWidth) + getValue(containerGap.rowGap);
};
  

  
  scrollLeftButton.addEventListener('click', () => {
    container.scrollLeft -= scrollStep(container); // scroll scrollStep pixels to the left
  });
  
  scrollRightButton.addEventListener('click', () => {
    container.scrollLeft += scrollStep(container); // scroll scrollStep pixels to the right
  });