const form = document.getElementById('libform');
const storySpan = document.getElementById('story');
const shuffleBtn = document.getElementById('shuffle-button');

const inputs = {
  noun: document.getElementById('noun'),
  adjective: document.getElementById('adjective'),
  person: document.getElementById('person'),
  verb: document.getElementById('verb'),
  place: document.getElementById('place')
};

const stories = [
  (noun, adjective, person, verb, place) => 
    `${person} decided to ${verb} the ${adjective} ${noun} in ${place}. It was a day to remember!`,

  (noun, adjective, person, verb, place) => 
    `Once upon a time, a ${adjective} ${noun} took ${person} on an adventure to ${place} where they loved to ${verb}.`,

  (noun, adjective, person, verb, place) => 
    `${person} always wanted a ${adjective} ${noun}. One day, they found one while they were at ${place} trying to ${verb}.`
];

let currentStoryIndex = 0;

function getValues() {
  return Object.values(inputs).map(input => input.value.trim());
}

function areInputsValid(values) {
  return values.every(val => val !== "");
}

function generateStory(index, values) {
  return stories[index](...values);
}

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const values = getValues();

  if (!areInputsValid(values)) {
    alert("Please fill all the fields!");
    return;
  }

  currentStoryIndex = 0;
  storySpan.textContent = generateStory(currentStoryIndex, values);
});

shuffleBtn.addEventListener('click', () => {
  const values = getValues();

  if (!areInputsValid(values)) {
    alert("Please fill all the fields before shuffling the story!");
    return;
  }

  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * stories.length);
  } while(newIndex === currentStoryIndex);

  currentStoryIndex = newIndex;
  storySpan.textContent = generateStory(currentStoryIndex, values);
});
