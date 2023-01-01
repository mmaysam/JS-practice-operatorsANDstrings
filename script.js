'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  // method
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}  `
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your order with ${ing1} and ${ing2} and ${ing3}`);
  },
  orderPizza: function (mainIngrediant, ...otherIngrediants) {
    console.log(mainIngrediant);
    console.log(otherIngrediants);
  },
};

// 109
const rest1 = {
  name: 'ss',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'ss',
  owner: 'me',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//,ake the owner name unknown

// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner = rest1.owner && '<ANONYMOUS>';

/// this is better
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

/*
// 108
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// noledge value are null and undefined (NOT 0 or '')

const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
*/
/*
///107

console.log('---OR---');

//use any data type , return any data type , short-circuiting

console.log(3 || 'jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----AND---');

console.log(0 && 'may');
console.log(6 && 'may');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');
*/

////////////////////////////////////////

// const arr = [1, 2, ...[3, 4]];

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);
// const [pizza, risotto, ...other] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, other);

// //object
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 2);
// add(5, 6, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);
// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'other', 'other');
// restaurant.orderPizza('mushrooms');
//////////////////////////////////////////////////////////////////////////// lecture 105
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr); //===

// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'gnocci'];
// console.log(newMenu);

// // NOTE : =>>> spread operator is a little similar to destucturing but the big defferance is that the spread operator takes all the elements from the array and does not create new variables

// // COPY ARRAY
// const mainMenuCopy = [...restaurant.mainMenu];
// //join new arrays or more
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // iterables in JS // they are all arrays , strings , maps or sets but NOT objects

// const str = 'maysam';
// const letters = [...str, '', 's.'];
// console.log(letters);

// // const ingredients = [
// //   prompt("let's make pasta! ingredient 1 ?"),
// //   prompt('ingredient 2 ?'),
// //   prompt(' ingredient 3 ?'),
// // ];
// // console.log(ingredients);

// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// // restaurant.orderPasta(...ingredients);

// //it works with objects even if objects are not iterables

// const newRestaurant = { foundedIn: 1990, ...restaurant, founder: 'someone' };

// console.log(newRestaurant);

// const restaurantCopy = {
//   ...restaurant,
// };
// restaurantCopy.name = 'restauranto Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////new lec

// const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(tags, hours, restaurantName);

// const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu, starters);

//mutating variables

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // useing destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // console.log(restaurant.order(2, 0));

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
