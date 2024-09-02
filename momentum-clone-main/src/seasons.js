const seasons = document.querySelector('.seasons');

const springImages = ['spring1.jpg', 'spring2.jpg', 'spring3.jpg'];
const summerImages = ['summer1.jpg', 'summer2.jpg', 'summer3.jpg'];
const autumnImages = [
  'autumn1.jpg',
  'autumn2.jpg',
  'autumn3.jpg',
  'autumn4.jpg',
];
const winterImages = ['winter1.jpg', 'winter2.jpg', 'winter3.jpg'];

seasons.addEventListener('click', (event) => {
  const season = event.target.dataset.season;
  switch (season) {
    case 'spring':
      changeBackgound(season, springImages);
      break;
    case 'summer':
      changeBackgound(season, summerImages);
      break;
    case 'autumn':
      changeBackgound(season, autumnImages);
      break;
    case 'winter':
      changeBackgound(season, winterImages);
      break;
  }
});

function changeBackgound(season, images) {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  const imageURL = `./images/seasons/${season}/${chosenImage}`;
  document.body.style.backgroundImage = `url(${imageURL})`;
}
