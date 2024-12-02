

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
