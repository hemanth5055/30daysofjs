let a = document.querySelector('.emoji');
let b = document.querySelector('.realemoji')
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
b.addEventListener('mouseover',()=>{
    let rand = Math.floor(Math.random()*((emojiArray.length)));
    b.innerHTML = emojiArray[rand];
})
a.addEventListener('click',()=>{
    let rand = Math.floor(Math.random()*((emojiArray.length)));
    b.innerHTML = emojiArray[rand];
})