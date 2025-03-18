$(document).ready(function () {
    console.log(Hooray!");
   });

  // Define an array of objects, where each object represents a person
const people = [
  {
      name: "John Doe",
      description: "A passionate developer who loves to code."
  },
  {
      name: "Jane Smith",
      description: "A creative designer who brings ideas to life."
  },
  {
      name: "Michael Brown",
      description: "A data scientist exploring the world of AI."
  }
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
generateCards(people);
