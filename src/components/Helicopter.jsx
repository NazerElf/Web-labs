import apache from '../images/apache.jpg';
import bell206 from '../images/bell206.jpg';
import blackhawk from '../images/blackhawk.jpg';
import mi8 from '../images/mi8.jpg';
import ec135 from '../images/ec135.jpg';

class Helicopter {
  constructor(name, description, passengers, maxSpeed, expense, type, imageUrl) {
    this.name = name;
    this.description = description;
    this.passengers = passengers;
    this.maxSpeed = maxSpeed;
    this.expense = expense;
    this.type = type;
    this.imageUrl = imageUrl;
  }
}

// Масив вертольотів
const helicopters = [
  new Helicopter('Apache', 'Military helicopter known for its speed and agility.', 2, 365, 300, 'Military', apache),
  new Helicopter('Bell 206', 'Popular commercial helicopter.', 4, 250, 150, 'Commercial', bell206),
  new Helicopter('Black Hawk', 'Versatile military helicopter.', 12, 290, 500, 'Military', blackhawk),
  new Helicopter('Mi-8', 'Russian-made multipurpose helicopter.', 24, 260, 400, 'Commercial', mi8),
  new Helicopter('EC135', 'European rescue helicopter.', 5, 275, 200, 'Rescue', ec135),
];

export default helicopters;
