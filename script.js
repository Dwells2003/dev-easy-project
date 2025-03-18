$(document).ready(function () {
    console.log("WHATEVER YOU DO, DO NOT HOLD YOUR MOUSE OVER THE BIG SEAL IN THE ABOUT PAGE FOR 10 SECONDS!!!!!");
   });

  // Define an array of objects, where each object represents a person
const cardsData = [
  {
      name: "Student1",
      description: "My random fact is that I have two brothers.",
      imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"

  },
  {
      name: "Student2",
      description: "My fav color is purple.",
      imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
      
  },
  {
      name: "Student3",
      description: "I like to swim.",
      imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    name: "Student4",
    description: "I broke my finger.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    name: "Student5",
    description: "My name is Victor, and I'm ambidextrous.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    name: "Student6",
    description: "I can say my alphabet backwards.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
  name: "Student7",
  description: "I am not famous.",
  imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    name: "Student8",
    description: "I was born in Louisiana.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    name: "Student9",
    description: "I have never had a Peanut Butter and Jelly Sandwich!",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    name: "Student10",
    description: "I am allergic to cats.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    name: "Student11",
    description: "I like trains.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    name: "Student12",
    description: "I know the secret identity of beastcarp1.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    name: "Student13",
    description: "I have a dog.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    name: "Student14",
    description: "I hate UNA parking.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    name: "Student15",
    description: "I have 3 dogs.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    name: "Student16",
    description: "I'm adopted from China :D.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    name: "Student17",
    description: "I used to have an orange Hummer H3.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    name: "Student18",
    description: "I play on the rugby team.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    name: "Student19",
    description: "UNA basketball sold the bag.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    name: "Student20",
    description: "The Great Wall of China is 13,000 miles long",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    name: "Student21",
    description: "I hate javascript.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    name: "Student22",
    description: "I love the Bible verse Romans 5:8!",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    name: "Student23",
    description: "I love running.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    name: "Student24",
    description: "🦭🦭",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    name: "Student25",
    description: "I have eaten 1 pound of ground beef every day for the last 6 months.",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    name: "Student26",
    description: "Still very less parking space in UNA",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },
  {
    name: "Student27",
    description: "I enjoy kickboxing",
    imageUrl: "https://preview.redd.it/matching-seal-pfps-varying-quality-v0-iod5jfqrw75d1.jpg?width=452&format=pjpg&auto=webp&s=3821ca983d628ccacbb3015ec5b247ee022f5125"
  },

];

// Function to generate and display the cards
function generateCards(data) {
  const container = document.getElementById('card-container');
  
  // Clear the container before adding new cards
  container.innerHTML = '';
  
  data.forEach(person => {
      const card = document.createElement('div');
      card.classList.add('card');
      
      // Create card content
      
      
      const name = document.createElement('h3');
      name.textContent = person.name;
      
      const description = document.createElement('p');
      description.textContent = person.description;
      
      // Append the content to the card
      card.appendChild(name);
      card.appendChild(description);
      
      // Append the card to the container
      container.appendChild(card);
  });
}

// Generate the cards when the page loads
generateCards(cardData);

// Define objects representing each card



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
  if (event.target.checked) {
      // Move the liked card to the top
      const index = cardsData.indexOf(card);
      cardsData.splice(index, 1);  // Remove the card from its current position
      cardsData.unshift(card);     // Add the card to the top
  } else {
      // Uncheck removes the card from the top, restore original position
      const index = cardsData.indexOf(card);
      cardsData.splice(index, 1);  // Remove the card
      cardsData.push(card);        // Add the card to the bottom
  }
  createCards(cardsData);  // Re-render the cards
}

// Function to toggle showing card details
function toggleCardDetails(card) {
  // Create a div for the detailed information (if not already present)
  let detailsDiv = document.getElementById(`details-${card.title}`);
  
  if (!detailsDiv) {
      detailsDiv = document.createElement('div');
      detailsDiv.id = `details-${card.title}`;
      detailsDiv.classList.add('card-details');
      detailsDiv.innerHTML = `
          <h3>Details for ${card.title}</h3>
          <p>${card.description}</p>
          <img src="${card.imageUrl}" alt="${card.title}" style="width: 100%; height: auto;">
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
