const menu = {
  courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  addDishToCourse: function (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    }
    this.courses[courseName].push(dish);
  },
  getRandomDishFromCourse: function (courseName) {
    const random = Math.floor(Math.random() * this.courses[courseName].length);
    return this.courses[courseName][random];
  },
  generateRandomMeal: function () {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');      
    const total = appetizer.price + main.price + dessert.price;
    
    return `Your appetizer will be ${appetizer.name}, your main course will be ${main.name}, and your dessert will be ${dessert.name}. Your total price will be $${total}.`;
  }
};

menu.addDishToCourse('appetizers', 'spinach dip', 9);
menu.addDishToCourse('appetizers', 'mozzarella sticks', 8);
menu.addDishToCourse('appetizers', 'soup', 7);
menu.addDishToCourse('mains', 'steak', 25);
menu.addDishToCourse('mains', 'fish', 20);
menu.addDishToCourse('mains', 'chicken', 18);
menu.addDishToCourse('desserts', 'pecan pie', 6);
menu.addDishToCourse('desserts', 'cheese cake', 7);
menu.addDishToCourse('desserts', 'ice cream', 5);

const meal = menu.generateRandomMeal();
console.log(meal);
