

## Code Credit and Authors:

Footer: mdboostrap.com
Basic code structure: https://github.com/barrycumbie
Kaden Trousdale
https://github.com/Kaden-Trousdale
Daniel Wells
https://github.com/Dwells2003
Jacob Fielder
https://github.com/jacobfielder
Samuel Senecal
https://github.com/SSenecal01

## Link to the original code:
https://github.com/Kaden-Trousdale/dev-easy-project

## Code Snippet 
``` JavaScript
function createCards(cards) {
  const container = document.getElementById('cards-container');
  container.innerHTML = ''; // Clear previous cards
  

  cards.forEach(card => {
      // Create card element
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');

      // Create image element
      const cardImage = document.createElement('img');
      cardImage.src = card.imageUrl;
      cardImage.alt = card.imageAlt;

      // Create card content element
      const cardContent = document.createElement('div');
      cardContent.classList.add('card-content');
```


<details> 
dev_easy was a fun project we had a group collab on to finish for Web Dev
<summary>
  Seal 🦭
</summary>
</details>
