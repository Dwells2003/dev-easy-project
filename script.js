$(document).ready(function () {
    console.log("WHATEVER YOU DO, DO NOT HOLD YOUR MOUSE OVER THE BIG SEAL IN THE ABOUT PAGE FOR 10 SECONDS!!!!!");
   });

  // Define an array of objects, where each object represents a person
const people = [
  {
      name: "Student1",
      description: "My random fact is that I have two brothers."
  },
  {
      name: "Student2",
      description: "My fav color is purple."
  },
  {
      name: "Student3",
      description: "I like to swim."
  },
  {
    name: "Student4",
    description: "I broke my finger."
  },
  {
    name: "Student5",
    description: "My name is Victor, and I'm ambidextrous."
  },
  {
    name: "Student6",
    description: "I can say my alphabet backwards."
  },
  {
  name: "Student7",
  description: "I am not famous."
  },
  {
    name: "Student8",
    description: "I was born in Louisiana."
  },
  {
    name: "Student9",
    description: "I have never had a Peanut Butter and Jelly Sandwich!"
  },
  {
    name: "Student10",
    description: "I am allergic to cats."
  },
  {
    name: "Student11",
    description: "I like trains."
  },
  {
    name: "Student12",
    description: "I know the secret identity of beastcarp1."
  },
  {
    name: "Student13",
    description: "I have a dog."
  },
  {
    name: "Student14",
    description: "I hate UNA parking."
  },
  {
    name: "Student15",
    description: "I have 3 dogs."
  },
  {
    name: "Student16",
    description: "I'm adopted from China :D."
  },
  {
    name: "Student17",
    description: "I used to have an orange Hummer H3."
  },
  {
    name: "Student18",
    description: "I play on the rugby team."
  },
  {
    name: "Student19",
    description: "UNA basketball sold the bag."
  },
  {
    name: "Student20",
    description: "The Great Wall of China is 13,000 miles long"
  },
  {
    name: "Student21",
    description: "I hate javascript."
  },
  {
    name: "Student22",
    description: "I love the Bible verse Romans 5:8!"
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
generateCards(people);
