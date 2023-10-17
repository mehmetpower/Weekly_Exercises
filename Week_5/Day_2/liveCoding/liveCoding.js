const food = {
  calories: 250,
  vitamins: ['B12', 'C', 'A'],
  name: 'banana',
  contains: ['nuts', 'gluten'],
  vegetarian: true,
  halal: true,
  expirary_date: '2023-10-18',
  category: 'fruit',
  price: 5.90,
  edible: function (){
    let today = new Date();
    if (today.toISOString().split('T')[0] < this.expirary_date) {
      console.log(today.toISOString().split('T')[0]);
      console.log(today.toString().split(' ')[3]);
      console.log(today.toString());
      return true;
    } else {
      return false;
    }
  }
}

console.table(food);

console.log(food.name);
console.log(food['price']);
console.log(food['expirary_date']);

console.log(`is my ${food.name} edible? `);
console.log(food.edible());

function Food(calories, vitamins = [], name, contains = [], vegetarian = true, halal, expirary_date, category, price){
  this.calories = calories,
  this.vitamins = vitamins,
  this.name = name,
  this.contains = contains,
  this.vegetarian = vegetarian,
  this.halal = halal,
  this.expirary_date = expirary_date,
  this.category = category,
  this.price= price,
  this.isEdible= function (){
    let today = new Date();
    if (today.toISOString().split('T')[0] < this.expirary_date) {
      return true;
    } else {
      return false;
    }
  }
}
''

let banana = new Food(600, ['B12', 'C', 'A'], 'Banana', ['nuts', 'gluten'], undefined, true, '2023-10-18', 'fruit', 5.90);
console.log(banana.name + ': ' + banana.isEdible());

let apple = new Food(600,['B12', 'C', 'A'], 'Apple', ['nuts', 'gluten'], true, undefined, '2023-10-20', 'fruit', 5.90);
console.log(apple.name + ': ' + apple.isEdible());

