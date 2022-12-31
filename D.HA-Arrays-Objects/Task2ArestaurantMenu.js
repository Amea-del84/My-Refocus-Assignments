
/*Task 2. A restaurant menu

    Create an object which represents a menu. It should have the following fields:

    “restaurantName”
    “dishes”, which is an array from task 1
    “displayRestaurantName”, an object method that displays the restaurant name
    “displayMenu”, an object method that displays information about each dish
    
    After running the code, you should get a result that looks like the following:
    
    Name of the restaurant
    Dish, ₱500
    Contains ingredient, ingredient, ingredient.
    Dish, ₱500
    Contains ingredient, ingredient, ingredient
    Dish, ₱500
    Contains ingredient, ingredient, ingredient
*/

const restaurantMenu = {
    "restaurantName": "Yummy ' Tummy",
    "menu": [
        {
            "dishName": "Sushi-Tuna",
            "dishPrice": "70-86", // I will make a string for the price of sushi-Tuna (70-86), so it will print-out "as it is".
            "ingredients": "Plain or with Shrimp"
        },

        {
            "dishName": "Pancakes",
            "dishPrice": 45,
            "ingredients": "Egg or Blueberry"
        },
        
        {            
            "dishName": "Hot coffee",
            "dishPrice": 35,
            "ingredients": "Choco and Milk"
        },                                    
    ],                                         
    "displayRestaurantName": function(){
        console.log(this.restaurantName);
    },
    "displayMenu": function(){
        for(dishes of this.menu){
            console.log(dishes.dishName + ", ₱" + dishes.dishPrice),
            console.log("Contains " + dishes.ingredients)                                                
        }
    }  
};

restaurantMenu.displayRestaurantName();

restaurantMenu.displayMenu();



//TASK 2-ANOTHER APPROACH
const restaurantMenu = {
    "restaurantName": "Yummy ' Tummy",
    "menu": [
        {"dishName": "Sushi-Tuna", "dishPrice": "70-86", "ingredients": "Plain, with Shrimp"}, // I will make a string for the price of sushi-Tuna (70-86), so it will print-out "as it is".
        {"dishName": "Pancakes",  "dishPrice": 45,  "ingredients": "Egg, Blueberry"},
        {"dishName": "Hot coffee", "dishPrice": 35, "ingredients": "Choco, Milk"}
    ],
    "displayRestaurantName": function(){
        console.log(this.restaurantName);
    },
    "displayMenu": function(){
        for(dishes of this.menu){
            console.log(dishes.dishName + ", ₱" + dishes.dishPrice),
            console.log("Contains " + dishes.ingredients)          
        }
    } 
};

restaurantMenu.displayRestaurantName();

restaurantMenu.displayMenu();