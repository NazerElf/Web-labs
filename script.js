

class Helicopter {
    constructor(name, description, passengers, maxSpeed, expense, type, imageUrl) {
        this.name = name;
        this.description = description;
        this.passengers = passengers;
        this.maxSpeed = maxSpeed;
        this.expense = expense;
        this.type = type;
        this.imageUrl = imageUrl;
        this.updated = 'Just now';
    }
}

// Приклади вертольотів
let helicopters = [
    new Helicopter('Apache', 'Military helicopter known for its speed and agility.', 2, 365, 300, 'Military', 'images/apache.jpg'),
    new Helicopter('Bell 206', 'Popular commercial helicopter.', 4, 250, 150, 'Commercial', 'images/bell206.jpg'),
    new Helicopter('Black Hawk', 'Versatile military helicopter.', 12, 290, 500, 'Military', 'images/blackhawk.jpg'),
    new Helicopter('Mi-8', 'Russian-made multipurpose helicopter.', 24, 260, 400, 'Commercial', 'images/mi8.jpg'),
    new Helicopter('EC135', 'European rescue helicopter.', 5, 275, 200, 'Rescue', 'images/ec135.jpg')
];
let filteredHelicopters = helicopters;

function renderHelicopters(filteredHelicopters = helicopters) {
    const container = document.getElementById('helicopters-container');
    container.innerHTML = '';
    filteredHelicopters.forEach((helicopter, index) => {
        container.innerHTML += `
            <div class="helicopter-card">
                <img src="${helicopter.imageUrl}" alt="Image of ${helicopter.name}">
                <h3>${helicopter.name}</h3>
                <p>${helicopter.description}</p>
                <p>Passengers: ${helicopter.passengers}</p>
                <p>Max Speed: ${helicopter.maxSpeed} km/h</p>
                <p>Daily Expense: $${helicopter.expense}</p>
                <p>Last updated: ${helicopter.updated}</p>
                <button onclick="editHelicopter(${index})">Edit</button>
                <button onclick="removeHelicopter(${index})">Remove</button>
            </div>
        `;
    });
}

function handleSortChange() {
    const sortOption = document.getElementById('sort-options').value;
    if (sortOption === 'name') {
        filteredHelicopters.sort((a, b) => a.name.localeCompare(b.name));
    } else {
        filteredHelicopters.sort((a, b) => b[sortOption] - a[sortOption]);
    }
    renderHelicopters(filteredHelicopters);
}

function sortHelicoptersBy(field) {
    helicopters.sort((a, b) => b[field] - a[field]);
    renderHelicopters();
}

function handleSearch() {
    const query = document.getElementById('search-input').value.toLowerCase().trim();
    filteredHelicopters = helicopters.filter(helicopter => 
        helicopter.name.toLowerCase().includes(query) || 
        helicopter.description.toLowerCase().includes(query)
    );
    renderHelicopters(filteredHelicopters);
}

function clearSearch() {
    document.getElementById('search-input').value = '';
    filteredHelicopters = helicopters; // Повертаємо до початкового масиву
    renderHelicopters();
}

function countTotalExpenses() {
    const totalExpenses = filteredHelicopters.reduce((total, helicopter) => total + helicopter.expense, 0);
    document.getElementById('total-expenses').textContent = `$${totalExpenses.toFixed(2)}`;
}

document.getElementById('helicopter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('helicopter-name').value;
    const description = document.getElementById('helicopter-description').value;
    const passengers = parseInt(document.getElementById('helicopter-passengers').value);
    const maxSpeed = parseInt(document.getElementById('helicopter-max-speed').value);
    const expense = parseFloat(document.getElementById('helicopter-expense').value);
    const type = document.getElementById('helicopter-type').value;

    helicopters.push(new Helicopter(name, description, passengers, maxSpeed, expense, type));
    renderHelicopters();
    document.getElementById('helicopter-form').reset();
});

// Initial render
renderHelicopters();

//--------------------Редагування----------------------------------//
function editHelicopter(index) {
    // Отримуємо дані обраного вертольота
    const helicopter = helicopters[index];

    // Створюємо HTML для меню редагування
    const editFormHtml = `
        <div id="edit-form">
            <h2>Edit Helicopter: ${helicopter.name}</h2>
            <label>Name: <input type="text" id="edit-name" value="${helicopter.name}"></label><br>
            <label>Description: <textarea id="edit-description">${helicopter.description}</textarea></label><br>
            <label>Passengers: <input type="number" id="edit-passengers" value="${helicopter.passengers}"></label><br>
            <label>Max Speed: <input type="number" id="edit-max-speed" value="${helicopter.maxSpeed}"></label><br>
            <label>Daily Expense: <input type="number" id="edit-expense" value="${helicopter.expense}"></label><br>
            <label>Type: <input type="text" id="edit-type" value="${helicopter.type}"></label><br>
            <button onclick="confirmEdit(${index})">Підтвердити</button>
            <button onclick="cancelEdit()">Відмінити</button>
        </div>
    `;

    // Відображаємо форму редагування замість списку вертольотів
    document.getElementById('helicopters-container').innerHTML = editFormHtml;
}

// Функція підтвердження редагування
function confirmEdit(index) {
    // Отримуємо оновлені дані з форми
    helicopters[index].name = document.getElementById('edit-name').value;
    helicopters[index].description = document.getElementById('edit-description').value;
    helicopters[index].passengers = parseInt(document.getElementById('edit-passengers').value);
    helicopters[index].maxSpeed = parseInt(document.getElementById('edit-max-speed').value);
    helicopters[index].expense = parseFloat(document.getElementById('edit-expense').value);
    helicopters[index].type = document.getElementById('edit-type').value;

    // Оновлюємо список вертольотів
    renderHelicopters();
}

// Функція для скасування редагування
function cancelEdit() {
    renderHelicopters(); // Повертаємося до списку вертольотів без змін
}


//------------------Видалення-------------------------//


function removeHelicopter(index) {
    // Підтвердження видалення
    const confirmDeletion = confirm("Are you sure you want to remove this helicopter?");
    if (confirmDeletion) {
        // Видаляємо елемент із масиву helicopters за індексом
        helicopters.splice(index, 1);
        // Оновлюємо список після видалення
        renderHelicopters();
    }
}


//-----------------Додавання--------------------------//


function showCreateHelicopterForm() {
    const formHtml = `
        <div id="create-form">
            <h2>Add New Helicopter</h2>
            <label>Name: <input type="text" id="new-name" required></label><br>
            <label>Description: <textarea id="new-description" required></textarea></label><br>
            <label>Passengers: <input type="number" id="new-passengers" min="0" required></label><br>
            <label>Max Speed: <input type="number" id="new-max-speed" min="0" required></label><br>
            <label>Daily Expense: <input type="number" id="new-expense" min="0" required></label><br>
            <label>Type: <input type="text" id="new-type" required></label><br>
            <label>Image: <input type="file" id="new-image" accept="image/*" required></label><br>
            <button onclick="addNewHelicopter()">Confirm</button>
            <button onclick="cancelCreate()">Cancel</button>
        </div>
    `;
    document.getElementById('helicopters-container').innerHTML = formHtml;
}

function addNewHelicopter() {
    const name = document.getElementById('new-name').value;
    const description = document.getElementById('new-description').value;
    const passengers = Math.max(0, parseInt(document.getElementById('new-passengers').value));
    const maxSpeed = Math.max(0, parseInt(document.getElementById('new-max-speed').value));
    const expense = Math.max(0, parseFloat(document.getElementById('new-expense').value));
    const type = document.getElementById('new-type').value;
    const imageInput = document.getElementById('new-image');
    const imageUrl = URL.createObjectURL(imageInput.files[0]); // Створюємо тимчасовий шлях до зображення

    // Додаємо новий вертоліт до масиву helicopters
    helicopters.push(new Helicopter(name, description, passengers, maxSpeed, expense, type, imageUrl));
    renderHelicopters(); // Оновлюємо список

    // Повертаємося до списку вертольотів
    document.getElementById('helicopters-container').innerHTML = '';
}
