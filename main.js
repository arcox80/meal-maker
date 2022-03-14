let menu = {
  courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  addDishToCourse: function (courseName, dishName, dishPrice) {
    let dish = {
      name: dishName,
      price: dishPrice
    }
    this.courses[courseName].push(dish);
  },
  getRandomDishFromCourse: function (courseName) {
    let random = Math.floor(Math.random() * this.courses[courseName].length);
    return this.courses[courseName][random];
  },
  generateRandomMeal: function () {
    let appetizer = this.getRandomDishFromCourse('appetizers').name;
    
    let main = this.getRandomDishFromCourse('mains').name;
    
    let dessert = this.getRandomDishFromCourse('desserts').name;
    
    let appPrice = this.courses.appetizers.find(function (obj) {
      return obj.name === appetizer;
    }).price;
    
    let mainPrice =this.courses.mains.find(function (obj) {
      return obj.name === main;
    }).price;
    
    let dessertPrice = this.courses.desserts.find(function (obj) {
      return obj.name === dessert;
    }).price;
    
    let total = appPrice + mainPrice + dessertPrice;
    
    return console.log(`Your appetizer will be ${appetizer}, your main course will be ${main}, and your dessert will be ${dessert}. Your total price will be $${total}.`);
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
menu.generateRandomMeal();
