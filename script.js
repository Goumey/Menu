const item = document.querySelector('.item');
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const List = document.querySelector('li');
const clear = document.getElementById('clear');
let items = [];
let childs = document.createElement("li");
let keys = localStorage.length;

// localStorage.clear();
addItems.addEventListener("submit", function plats(event) {
    localStorage.setItem(keys, item.value);
    keys++;
    itemsList.innerHTML = tab.map((index) => `<li>${index}</li>`);
    document.location.reload();
})


for (let i = 0; i < localStorage.length; i++) {

    items.push(JSON.parse(JSON.stringify(localStorage.getItem(i))))

}

for (let i = 0; i < items.length; i++) {
    let child = document.createElement("li")
    child.textContent = items[i]
    itemsList.appendChild(child)
    // itemsList.innerHTML=child;

}

clear.addEventListener('click', (e) => {
    localStorage.clear();
    document.location.reload();
})

//   console.log( localStorage.key( i );
