import apache from '../images/apache.jpg';
import bell206 from '../images/bell206.jpg';
import blackhawk from '../images/blackhawk.jpg';
import mi8 from '../images/mi8.jpg';
import ec135 from '../images/ec135.jpg';

class Helicopter {
  constructor(name, description, passengers, maxSpeed, expense, type, size, imageUrl) {
    this.name = name;
    this.description = description;
    this.passengers = passengers;
    this.maxSpeed = maxSpeed;
    this.expense = expense;
    this.type = type;
    this.size = size;
    this.imageUrl = imageUrl;
  }
}

// Функція для визначення розміру вертольота
const determineSize = (passengers) => {
  if (passengers <= 5) return 'small';
  if (passengers <= 15) return 'medium';
  return 'large';
};

// Масив вертольотів
const helicopters = [
  new Helicopter(
    'Apache',
    'Military helicopter known for its speed and agility.',
    2,
    365,
    700,
    'Military',
    determineSize(2),
    apache
  ),
  new Helicopter(
    'Bell 206',
    'Popular commercial helicopter.',
    4,
    250,
    150,
    'Commercial',
    determineSize(4),
    bell206
  ),
  new Helicopter(
    'Black Hawk',
    'Versatile military helicopter.',
    12,
    290,
    500,
    'Military',
    determineSize(12),
    blackhawk
  ),
  new Helicopter(
    'Mi-8',
    'Russian-made multipurpose helicopter.',
    24,
    260,
    400,
    'Commercial',
    determineSize(24),
    mi8
  ),
  new Helicopter(
    'EC135',
    'European rescue helicopter.',
    5,
    275,
    200,
    'Rescue',
    determineSize(5),
    ec135
  ),
];

export default helicopters;
