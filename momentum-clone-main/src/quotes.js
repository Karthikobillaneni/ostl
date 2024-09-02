const quotes = [
  {
    quote:
      "It's lack of faith that makes people afraid of meeting challenges, and I believe in myself.",
    author: 'Muhammad Ali',
  },
  {
    quote: 'Nothing great in the world has been accomplished without passion.',
    author: 'Georg Wilhelm',
  },
  {
    quote:
      'The person who makes a success of living is the one who see his goal steadily and aims for it unswervingly. That is dedication.',
    author: 'Cecil B. DeMille',
  },
  {
    quote:
      'I’ve failed over and over and over again in my life and that is why I succeed.',
    author: 'Michael Jordan',
  },
  {
    quote:
      'But I know, somehow, that only when it is dark enough can you see the stars.',
    author: 'Martin Luther King, Jr',
  },
  {
    quote:
      'I didn’t get there by wishing for it or hoping for it, but by working for it.',
    author: 'Estée Lauder',
  },
  {
    quote:
      'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: 'Nelson Mandela',
  },
  {
    quote:
      'Life is from the inside out. When you shift on the inside, life shifts on the outside.',
    author: 'Kamal Ravikant',
  },
  {
    quote: "Don't be afraid to give up the good to go for the great.",
    author: 'John D. Rockefeller',
  },
  {
    quote: 'True life is lived when tiny changes occur.',
    author: 'Leo Tolstoy',
  },
  {
    quote: 'All progress takes place outside the comfort zone.',
    author: 'Michael John Bobak',
  },
  {
    quote:
      'If you are not willing to risk the usual, you will have to settle for the ordinary.',
    author: 'Jim Rohn',
  },
];

const quote = document.querySelector('.quote__text');
const author = document.querySelector('.quote__author');

const random = Math.floor(Math.random() * quotes.length);
const todayQuote = quotes[random];

quote.innerHTML = `<i>${todayQuote.quote}</i>`;
author.innerHTML = `<i>${todayQuote.author}</i>`;
