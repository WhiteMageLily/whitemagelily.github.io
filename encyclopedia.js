const TidebornMobs = [
    {
        name: "Slime Sprout (Lvl 1 - 2)", 
        description: "A Slime Sprout is a passive, small slime that can be found roaming the port area. With a playful, vibrant green visual and a sprout-like feature growing from it's top, it has a magical, nature-infused look. These slimes are harmless and not hostile, often found hopping about in grassy patches.", 
        image: "https://imgur.com/Z0vqffM.png" 
    },
    {
        name: "Small Chicken (Lvl 2 - 4)", 
        description: "A Small Chicken is a tiny, adorable variation of the classic chicken found waddling around the port. With its miniature size and soft, fluffy feathers, it's a great source of meat! These chickens are completely passive, never posing a threat to players or other mobs.", 
        image: "https://imgur.com/6glxSMO.png" 
    },
    {
        name: "Wild Boar (Lvl 3 - 5)", 
        description: "A Wild Boar is a sturdy, untamed creature, found near the Village entrance. With its bristly fur, and determined demeanor, it navigates the wild in search of food, occasionally rooting through the ground for mushrooms. Though generally passive, Wild Boars will become aggressive if provoked.", 
        image: "https://imgur.com/KQG0BKf.png" 
    }
];

function loadItems() {
    const TidebornGallery = document.getElementById("TidebornGallery");
    TidebornGallery.innerHTML = "";
    TidebornMobs.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("item");
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        `;
        TidebornGallery.appendChild(itemElement);
    });
}

window.onload = loadItems;