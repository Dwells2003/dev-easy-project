// Define objects representing each card
const cardsData = [
  {
      title: "Student A",
      description: "My random fact is that I have two brothers.",
      imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"

  },
  {
      title: "Student B",
      description: "My fav color is purple.",
      imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
      
  },
  {
      title: "Student C",
      description: "I like to swim.",
      imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    title: "Student D",
    description: "I broke my finger.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    title: "Student E",
    description: "My name is Victor, and I'm ambidextrous.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    title: "Student F",
    description: "I can say my alphabet backwards.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    title: "Student G",
  description: "I am not famous.",
  imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    title: "Student H",
    description: "I was born in Louisiana.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    title: "Student I",
    description: "I have never had a Peanut Butter and Jelly Sandwich!",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    title: "Student J",
    description: "I am allergic to cats.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    title: "Student K",
    description: "I like trains.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    title: "Student L",
    description: "I know the secret identity of beastcarp1.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    title: "Student M",
    description: "I have a dog.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    title: "Student N",
    description: "I hate UNA parking.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    title: "Student O",
    description: "I have 3 dogs.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    title: "Student P",
    description: "I'm adopted from China :D.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    title: "Student Q",
    description: "I used to have an orange Hummer H3.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    title: "Student R",
    description: "I play on the rugby team.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    title: "Student S",
    description: "UNA basketball sold the bag.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    title: "Student T",
    description: "The Great Wall of China is 13,000 miles long",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    title: "Student U",
    description: "I hate javascript.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    title: "Student V",
    description: "I love the Bible verse Romans 5:8!",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    title: "Student W",
    description: "I love running.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    title: "Student X",
    description: "🦭🦭",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    title: "Student Y",
    description: "I have eaten 1 pound of ground beef every day for the last 6 months.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    title: "Student Z",
    description: "Still very less parking space in UNA",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    title: "Student AA",
    description: "I enjoy kickboxing",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    title: "Student BB",
    description: "I did not give a fact :[",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },

];

// Function to create and display cards
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

      // Create card content element
      const cardContent = document.createElement('div');
      cardContent.classList.add('card-content');

      // Create title element
      const cardTitle = document.createElement('div');
      cardTitle.classList.add('card-title');
      cardTitle.textContent = card.title;

      // Create description element
      const cardDescription = document.createElement('div');
      cardDescription.classList.add('card-description');
      cardDescription.textContent = card.description;

      // Create checkbox for liking
      const likeCheckbox = document.createElement('input');
      likeCheckbox.type = 'checkbox';
      likeCheckbox.textContent = 'Favorite';
      likeCheckbox.classList.add('like-checkbox');
      likeCheckbox.addEventListener('change', (event) => handleLike(event, card));
      

      // Create "View Details" button
      const viewDetailsButton = document.createElement('button');
      viewDetailsButton.classList.add('view-details-btn');
      viewDetailsButton.textContent = 'View Details';

      // Add event listener for button click to show details
      viewDetailsButton.addEventListener('click', (event) => {
          event.stopPropagation(); // Prevent card click event
          toggleCardDetails(card);
      });

      // Append the content to the card
      cardContent.appendChild(cardTitle);
      cardContent.appendChild(cardDescription);
      cardContent.appendChild(likeCheckbox);
      cardContent.appendChild(viewDetailsButton);
      cardElement.appendChild(cardImage);
      cardElement.appendChild(cardContent);

      // Append the card to the container
      container.appendChild(cardElement);
  });
}

// Function to handle like action (move to top)
function handleLike(event, card) {

  const cardElement = event.target.closest('.card');


  if (event.target.checked) {
      // Move the liked card to the top
      cardElement.style.backgroundColor = '#ffcccb';
      const index = cardsData.indexOf(card);
      cardsData.splice(index, 1);  // Remove the card from its current position
      cardsData.unshift(card);     // Add the card to the top
      const likedCardsContainer = document.getElementById('liked-cards-container');
      likedCardsContainer.appendChild(cardElement);

  } else {
      // Uncheck removes the card from the top, restore original position
      cardElement.style.backgroundColor = '';
      const index = cardsData.indexOf(card);
      cardsData.splice(index, 1);  // Remove the card
      cardsData.push(card);        // Add the card to the bottom
      const container = document.getElementById('cards-container');
      container.appendChild(cardElement);

  }
  createCards(cardsData);  // Re-render the cards
}

// Function to toggle showing card details
function toggleCardDetails(card) {
  // Create a div for the detailed information (if not already present)
  let detailsDiv = document.getElementById(`modal`);
  
  if (!detailsDiv) {
      detailsDiv = document.createElement('div');
      detailsDiv.id = 'modal';
      detailsDiv.classList.add('card-details');
      detailsDiv.innerHTML = `
          <h3>Information!</h3>
          <p>"${card.description}"</p>
          <p>This was submitted by an anonymous user for</p>
          <p>CIS-376 Web Development Course. </p>
          <br>
          <br>
          <p>All user data is anonymous, the seals aint no snitch 🦭.</p>
      `;
      
      // Insert the details div below the card element
      const cardElement = document.querySelector(`.card img[src="${card.imageUrl}"]`).closest('.card');
      cardElement.insertAdjacentElement('afterend', detailsDiv);
      
  } else {
      // If already showing, hide the details
      detailsDiv.remove();
  }
}

// Sort by Title
function sortByTitle() {
  const sortedCards = [...cardsData].sort((a, b) => a.title.localeCompare(b.title));
  createCards(sortedCards);
}

// Sort by Description
function sortByDescription() {
  const sortedCards = [...cardsData].sort((a, b) => a.description.localeCompare(b.description));
  createCards(sortedCards);
}

// Random Sort (Shuffle)
function randomSort() {
  const shuffledCards = [...cardsData];
  // Fisher-Yates Shuffle algorithm
  for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]]; // Swap elements
  }
  createCards(shuffledCards);
}

// Add event listeners to sort buttons
document.getElementById('sort-title').addEventListener('click', sortByTitle);
document.getElementById('sort-description').addEventListener('click', sortByDescription);
document.getElementById('sort-random').addEventListener('click', randomSort);

// Initial card rendering
createCards(cardsData);
