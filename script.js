const ingredients = [
    {
        name: "Salt",
        worth: "$4.33",
        info: "One of the most useful seasonings.",
        image: "Images/Salt.png",
        recipeImage: "Images/Recipes/Salt.png"
    },
    {
        name: "Flour",
        worth: "$6.30",
        info: "A Grainy powder used to make bread!",
        image: "Images/Flour.png",
        recipeImage: "Images/Recipes/Flour.png"
    },
    {
        name: "Butter",
        worth: "$11.37",
        info: "Smooth and golden...",
        image: "Images/Butter.png",
        recipeImage: "Images/Recipes/Butter.png"
    },
    {
        name: "Cheese",
        worth: "$10.37",
        info: "Smelly, but incredible in a toastie!",
        image: "Images/Cheese.png",
        recipeImage: "Images/Recipes/Cheese.png"
    },
    {
        name: "Dough",
        worth: "$8.30",
        info: "The infant stages of bread~",
        image: "Images/Dough.png",
        recipeImage: "Images/Recipes/Dough.png"
    },
    {
        name: "Toast",
        worth: "$11.70",
        info: "Very dull on it's own, but still very useful!",
        image: "Images/Toast.png",
        recipeImage: "Images/Recipes/Toast.png"
    },
    {
        name: "Raw Fries",
        worth: "$3.55",
        info: "I wouldn't eat these raw...",
        image: "Images/Raw Fries.png",
        recipeImage: "Images/Recipes/Raw Fries.png"
    },
    {
        name: "Breadcrumbs",
        worth: "$12.70",
        info: "What was once a hearty loaf.",
        image: "Images/Breadcrumbs.png",
        recipeImage: "Images/Recipes/Breadcrumbs.png"
    },
    {
        name: "Vinegar",
        worth: "$9.48",
        info: "Eye-water smell but amazingly useful!",
        image: "Images/Vinegar.png",
        recipeImage: "Images/Recipes/Vinegar.png"
    },
    {
        name: "Lettuce",
        worth: "$12.00",
        info: "Fresh and full of flavour!",
        image: "Images/Lettuce.png",
        recipeImage: "Images/Recipes/Lettuce.png"
    },
    {
        name: "Tomato",
        worth: "$12.00",
        info: "Apparently a fruit, but I'm not sure...",
        image: "Images/Tomato.png",
        recipeImage: "Images/Recipes/Tomato.png"
    },
    {
        name: "Mustard Seeds",
        worth: "$12.00",
        info: "Insanely strong smell!",
        image: "Images/Mustard Seeds.png",
        recipeImage: "Images/Recipes/Mustard Seeds.png"
    },
    {
        name: "Sunflower Oil",
        worth: "$12.00",
        info: "",
        image: "Images/Sunflower Oil.png",
        recipeImage: "Images/Recipes/Sunflower Oil.png"
    },
];
const meals = [
    {
        name: "Grilled Cheese",
        worth: "$33.77",
        info: "Warm, melty comfort between two slices of love.",
        image: "Images/Grilled Cheese.png",
        recipeImage: "Images/Recipes/Grilled Cheese.png"
    },
    {
        name: "Fries",
        worth: "$5.55",
        info: "Crispy golden joy, best shared with friends on rainy days.",
        image: "Images/Fries.png",
        recipeImage: "Images/Recipes/Fries.png"
    }
];

const grid = document.getElementById("recipeGrid");
const searchBar = document.getElementById("searchBar");

function displayRecipes(filter = "") {
    document.getElementById("ingredientGrid").innerHTML = "";
    document.getElementById("mealGrid").innerHTML = "";

    ingredients
        .filter(r => r.name.toLowerCase().includes(filter.toLowerCase()))
        .forEach(recipe => {
        const card = document.createElement("div");
        card.className = "recipe-card";
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}" />
            <h3>${recipe.name}</h3>
        `;
        card.onclick = () => openPopup(recipe);
        document.getElementById("ingredientGrid").appendChild(card);
        });
    meals
        .filter(r => r.name.toLowerCase().includes(filter.toLowerCase()))
        .forEach(recipe => {
        const card = document.createElement("div");
        card.className = "recipe-card";
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}" />
            <h3>${recipe.name}</h3>
        `;
        card.onclick = () => openPopup(recipe);
        document.getElementById("mealGrid").appendChild(card);
        });
}


function openPopup(recipe) {
    document.getElementById("popupTitle").innerText = recipe.name;
    document.getElementById("popupImage").src = recipe.recipeImage;
    document.getElementById("popupWorth").innerText = `Worth: ${recipe.worth}`;
    document.getElementById("popupInfo").innerText = recipe.info;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

searchBar.addEventListener("input", e => displayRecipes(e.target.value));

// Initial display
displayRecipes();