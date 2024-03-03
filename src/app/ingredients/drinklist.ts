import { drinkdb } from "./drinkdb"

interface Ingredient {
    id: string;
    title: string;
}

interface Drink {
    id: string;
    title: string;
    ingredients: string[];
    desc: string[];
    diff: string;
}


function findDrinksFromIngredients(ingredients: Ingredient[]) {
    let compatibleDrinks : Drink[] = []
    // console.log(drinkdb)
    for (let i = 0; i < drinkdb.length; i++) { // For each drink in database
        let drinkFits: boolean = false;
        for (let j = 0; j < drinkdb[i].ingredients.length; j++) { // For each ingredient in drink
            // console.log(drinkdb[i].ingredients.length)
            // console.log("J:", j)
            let ingredientFits: boolean = false
            for (let k = 0; k < ingredients.length; k++) { // For each input ingredient
                // console.log("ING",ingredients[k].title)
                // console.log("DB", drinkdb[i].ingredients[j])
                if (drinkdb[i].ingredients[j] == ingredients[k].title) { // Check if 
                    // console.log("MATCH")
                    ingredientFits = true
                }
            }
            if (ingredientFits) {
                // console.log("ingredient fits")
                drinkFits = true
            }
            else if (!ingredientFits) {
                drinkFits = false; // Ingredient not in, pass by
                // console.log("broke")
                break
            }
        }
        if (drinkFits) {
            compatibleDrinks.push(drinkdb[i]);
        }
    }
    return compatibleDrinks;
}

function cleanUpIngredients(ingredients: Ingredient[]) {
    var punctuation = /[\.,-?! ']/g;
    for (let i = 0; i < ingredients.length; i++) {
        let ing = ingredients[i].title.toLowerCase().trim().replace(punctuation,"");
        // console.log(ing)
        if (ing == "coke" || ing == "cocacola" || ing == "pepsi" || ing == "cola") {
            ingredients[i].title = "Coke"
        }
        else if (ing == "rum" || ing == "captain" || ing == "captainmorgan" 
        || ing == "spicedrum" || ing == "darkrum" || ing == "lightrum") {
            ingredients[i].title = "Rum"
        }
        else if (ing == "tonic" || ing == "tonicwater") {
            ingredients[i].title = "Tonic";
        }
        else if (ing == "gin") {
            ingredients[i].title = "Gin";
        }
        else if (ing == "vodka" || ing == "svedka" || ing == "smirnoff") {
            ingredients[i].title = "Vodka"
        }
        else if (ing == "baileys" || ing == "irishcream" || ing == "irishcreame") {
            ingredients[i].title = "Irish Cream"
        }
        else if (ing == "sprite" || ing == "7up" || ing == "lemonlime" || ing == "sierramist" || ing == "starry") {
            ingredients[i].title = "Sprite";
        }
        else if (ing == "triplesec" || ing == 'orangeliqueur' || ing == 'orangeliquer' || ing == "orangecuracao" || ing == "cointreau") {
            ingredients[i].title = "Orange Liqueur"
        }
        else if (ing == 'lemonjuice') {
            ingredients[i].title = "Lemon Juice"
        }
        else if (ing == "limejuice") {
            ingredients[i].title = "Lime Juice"
        }
        else if (ing == "tequila" || ing == 'tequilla' || ing == "josecuervo" || ing == "patron") {
            ingredients[i].title = "Tequila"
        }
        else if (ing == "simplesyrup") {
            ingredients[i].title = 'Simple Syrup'
        }
        else if (ing == "sweetvermouth") {
            ingredients[i].title = "Sweet Vermouth";
        }
        else if (ing == "vermouth" || ing == "dryvermouth") {
            ingredients[i].title = "Dry Vermouth"
        }
        else if (ing == "campari" || ing == "camperi") {
            ingredients[i].title = "Campari";
        }
        else if (ing == "sour" || ing == "sourmix") {
            ingredients[i].title = "Sour";
        }
        else if (ing == "whiskey" || ing == "scotch" || ing == "whisky") {
            ingredients[i].title = "Whiskey"
        }
        else if (ing == "orangejuice") {
            ingredients[i].title = "Orange Juice"
        }
        else if (ing == "soda" || ing == "sodawater" || ing == "charge" || ing == "chargewater" || ing == "sparklingwater" || ing == "clubsoda") {
            ingredients[i].title = "Club Soda"
        }
        else if (ing == "kahlua" || ing == "khalua" || ing == 'mrblack' || ing == "coffeeliquer" || ing == "coffeeliqueur") {
            ingredients[i].title = "Coffee Liqueur"
        }
        else if (ing == "espresso" || ing == "espressoshot" ||ing == "espressoshots" || ing == "coffee" || ing == "espressocoffee" || ing == "expresso" || ing == "expressoshot") {
            ingredients[i].title = "Espresso Coffee"
        }
        else if (ing == "bitters" || ing == "orangebitters" || ing == "citrusbitters" || ing == "aromaticbitters" || ing == "fruitbitters" || ing == "spicedbitters" || ing == "floralbitters" || ing == "cocoabitters" || ing == "chocolatebitters" || ing == "amarodiangostura" || ing == "angostura") {
            ingredients[i].title = "Bitters"
        }
        else if (ing == "bourbon" || ing == "buorbon" || ing == "jack" || ing == "jackdaniels" || ing == "jimbeam" ||ing == "jim" || ing == "beam" || ing == "makersmark" || ing == "makers") {
            ingredients[i].title = "Bourbon"
        }
        else if (ing == "amaretto" || ing == "ameretto" || ing == "italianliqueur" || ing == "disaronno" || ing == "diseronno") {
            ingredients[i].title = "Amaretto"
        }
        else if (ing == "mint" || ing == "mintleaves") {
            ingredients[i].title = "Mint Leaves"
        }
        else if (ing == "brandy" || ing == "calvados" || ing == "korbel") {
            ingredients[i].title = "Brandy"
        }
        else if (ing == "cranberryjuice" || ing == "cranberry") {
            ingredients[i].title = "Cranberry Juice"
        }
        else if (ing == "champagne") {
            ingredients[i].title = "Champagne"
        }
        else if (ing == "coconutcream" || ing == "coconutmilk") {
            ingredients[i].title = "Coconut Milk"
        }
        else if (ing == "grenadine" || ing == "grenedine") {
            ingredients[i].title = "Grenadine"
        }
        else if (ing == "absinthe") {
            ingredients[i].title = "Absinthe"
        }
        else if (ing == "cherryliqueur" || ing == "cherryliquer" || ing == "cheryydrmcgillicuddys" || ing == "drmcgillicuddyscherry" || ing == "maraschino" || ing == "maraschinoliqueur") {
            ingredients[i].title = "Cherry Liqueur"
        }
        else if (ing == "benedictine") {
            ingredients[i].title = "Benedictine"
        }
        else if (ing == 'pineapplejuice' || ing == 'pineapple') {
            ingredients[i].title = "Pineapple Juice"
        }
        else if (ing == "cachaça" || ing == "cachaca") {
            ingredients[i].title = "Cachaça"
        }
        else if (ing == "gingerbeer") {
            ingredients[i].title = "Ginger Beer"
        }
        else if (ing == "bluecuracao" || ing == "curacao") {
            ingredients[i].title = "Blue Curacao";
        }
        else if (ing == "lemonade" || ing == "lemonaid") {
            ingredients[i].title = "Lemonade";
        }
        else if (ing == "peachschnapps" || ing == "peachschnaps") {
            ingredients[i].title = "Peach Schnapps";
        }
        else if (ing == "egg" || ing == "eggwhite" || ing == "eggwhites" || ing == "eggs") {
            ingredients[i].title = "Egg White"
        }
        else if (ing == "pisco") {
            ingredients[i].title = "Pisco"
        }
        else if (ing == "aperol") {
            ingredients[i].title = "Aperol";
        }
        else if (ing == "prosecco") {
            ingredients[i].title = "Prosecco"
        }
        else if (ing == "grapefruitjuice") {
            ing = "Grapefruit Juice";
        }
        else if (ing == "chambord" || ing == "raspberryliqueur" || ing == "raspberryliquer") {
            ingredients[i].title = "Raspberry Liqueur"
        }
        else if (ing == "lilletblanc") {
            ingredients[i].title = "Lillet Blanc"
        }
        else if (ing == "orgeatsyrup") {
            ingredients[i].title = "Orgeat Syrup";
        }
        else if (ing == "darkcreamdecacao" || ing == "cremedecacao" || ing == "chocolateliqueur") {
            ingredients[i].title = "Chocolate Liqueur"
        }
        else if (ing == "cream" || ing == "halfandhalf") {
            ingredients[i].title = "Cream"
        }
        else if (ing == "sourappleliqueur" || ing == "appleliqueur" || ing == "greenappleliqueur") {
            ingredients[i].title = "Apple Liqueur"
        }
        else if (ing == "coconutrum" || ing == "malibu") {
            ingredients[i].title = "Coconut Rum"
        }
        else if (ing == "milk") {
            ingredients[i].title = "Milk";
        }
        else if (ing == "applebrandy" || ing == "calvados") {
            ingredients[i].title = "Apple Brandy"
        }
        else if (ing == "greenchartreuse") {
            ingredients[i].title = "Green Chartreuse"
        }
        else if (ing == "crèmedeviolette" || ing == "violetteliqueur" || ing == "crèmedeviolette") {
            ingredients[i].title = "Violette Liqueur"
        }
        else {
            ingredients[i].title += " (Not found in database)"
        }
    }
}

export function drinkList(ingredients: Ingredient[]) {
    // console.log(ingredients);
    cleanUpIngredients(ingredients);
    return findDrinksFromIngredients(ingredients)
}