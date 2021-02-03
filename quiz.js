

//define categories dictionary
const categories = {
    "CONTINENT": ["EUROPE", "ASIA", "AFRICA", "NORTH AMERICA", "SOUTH AMERICA", "ANTARTICA", "OCEANIA"],
    "COLOUR": ["RED", "BLUE", "GREEN", "PINK", "PURPLE"],
    "SPORT": ["TENNIS", "BASKETBALL", "FOOTBALL", "VOLLEYBALL", "HOCKEY"],
    "UK CITY": ["LONDON", "BIRMINGHAM", "MANCHESTER", "LIVERPOOL", "YORK"],
    "CODING LANGUAGE": ["PYTHON", "JAVASCRIPT", "JAVA", "TYPESCRIPT", "RUBY", "C"]
};

//function; prompt user to choose category from 'categories'
//by printing categories on page and allowing user to input,
//store input in an array called category

function get_category_choice() {
    console.log("Select a category out of:")
    let categories_keys = Object.keys(categories)
    //for (const [key, values] of Object.entries(categories)) {
      //  console.log(`${key}: ${value}`);

    //}
    for(let counter = 0; counter < categories_keys.length; counter++){
        console.log(categories_keys[counter])
    }

    //let category_name = prompt("Category Choice: ").toUpperCase();
    //let category = categories[category_name]

    //return category, category_name



}

//randomly generate value from chosen category,
// jumble up the word
//print to screen
//ask user to input answer
//store answer/check?
get_category_choice()