// Select the elements for emoji and realemoji containers
let a = document.querySelector('.emoji');
let b = document.querySelector('.realemoji');

// Array of emojis to choose from
const emojiArray = [
    "😀", "🐶", "🍕", "🚀", "🎉",
    "🌟", "❤️", "🌈", "😇", "🌍",
    "🐱", "🍣", "🏖️", "🎈", "🎶",
    "💻", "📚", "🦄", "🍎", "🐢",
    "🍦", "🌼", "🏆", "⚽", "🎮",
    "🚗", "🏠", "🌺", "🧩", "🛶",
    "🥗", "🍰", "🥳", "💡", "🎭",
    "🌌", "🐠", "🍉", "🏞️", "🚴",
    "🍪", "🥂", "🎨", "⚓", "⏳",
    "🔑", "📷", "💌", "🚦", "📅",
    "🧸", "🍭", "🍄", "🔮", "📦"
];

// Event listener for mouseover on element `b` to change the emoji to a random one
b.addEventListener('mouseover', () => {
    let rand = Math.floor(Math.random() * emojiArray.length); // Get a random index
    b.innerHTML = emojiArray[rand]; // Set the emoji to the random emoji
});

// Event listener for click on element `a` to also set a random emoji on `b`
a.addEventListener('click', () => {
    let rand = Math.floor(Math.random() * emojiArray.length); // Get a random index
    b.innerHTML = emojiArray[rand]; // Set the emoji to the random emoji
});
