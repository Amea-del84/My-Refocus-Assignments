
/*Task 1. Dish in a menu

    Create an array named “dishes” with 3 objects. Each object should represent a dish
    and have the following fields:
    “dishID”, which is a unique identifier of the dish
    “dishName”
    “dishPrice”
    “ingredients”, which is an array with ingredients to create that dish
*/


const dishes = {
    "dishId": ["Yum1", "Yum2", "Yum3"], 
    "dishName": ["Sushi-Tuna", "Pancakes", "Hot coffee"],
    "dishPrice": ["70-86", "45", "35"],
    "ingredients": function() {
        const ingredients_list = ["plain or with shrimp", "egg or blueberry",
            "choco and milk"];
                console.log(ingredients_list[1]);
    }
};