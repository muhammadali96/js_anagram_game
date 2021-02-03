const prompt = require("readline-sync").question;

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
    
    for(let key of categories_keys){
        console.log(key)
    }
    let category_name = prompt("Category Choice: ").toUpperCase()
    let chosen_category = categories[category_name]
    return chosen_category
};

// def pick_random_question(category):
//     answer = random.choice(category)
//     remove_answer_from_category(answer, category)

//     jumbled_letters = list(answer)
//     random.shuffle(jumbled_letters)
//     jumble = "".join(jumbled_letters)
//     return answer, jumble

function pick_random_word(chosen_category) {
    let categories_values = Object.values(chosen_category) //category values in an array
    let random_word_index = Math.floor(Math.random() * categories_values.length)
    let random_word = categories_values[random_word_index]
    console.log(random_word)
    return random_word
};

function jumbling_up_words(){
    random_word = pick_random_word(chosen_category)
    console.log(random_word)
    let jumbled_letters = Object.values(random_word)
    console.log(jumbled_letters)
};
    // let jumbled_letters = list(random_word) //break random word into separate strings (each letter as a string)
    // random.shuffle(jumbled_letters)  //jumbling up the letters ramdomly
    // jumbled_word = "".join(jumbled_letters) //joining single letters back up
    // return jumbled_word, random_word




//randomly generate value from chosen category,
// jumble up the word
//print to screen
//ask user to input answer
//store answer/check?






let chosen_category = get_category_choice()
pick_random_word(chosen_category)
jumbling_up_words() 