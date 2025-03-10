const items = [
    {
        name: "Boar Skin", 
        description: "The surprisingly tough hide from a Wild Boar.", 
        image: "https://imgur.com/HiOHtnF.png" 
    },
    {
        name: "Gloopy Chunk", 
        description: "A sticky, gooey substance that oozes Slime Sprouts.", 
        image: "https://imgur.com/ETbihgh.png" 
    },
    {
        name: "Raw Chicken", 
        description: "Freshly cut from Small Chickens.", 
        image: "https://imgur.com/h4LEJM2.png" 
    },
    {
        name: "Honeycomb", 
        description: "Intensly sweet and sticky, harvested from Angry Bees.", 
        image: "https://imgur.com/73iLtuZ.png" 
    }
];

function loadItems() {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";
    items.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("item");
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        `;
        gallery.appendChild(itemElement);
    });
}

function filterItems() {
    const searchQuery = document.getElementById("search").value.toLowerCase();
    const filteredItems = items.filter(item => 
        item.name.toLowerCase().includes(searchQuery) || 
        item.description.toLowerCase().includes(searchQuery)
    );
    
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";
    filteredItems.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("item");
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        `;
        gallery.appendChild(itemElement);
    });
}

window.onload = loadItems;