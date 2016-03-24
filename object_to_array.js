var country;

country = {
    name: "Uruguay",
    continent: "South America",
    capital: "Montevideo"
}

function process(object){
    var array_countries = [];
    for (var key in object) {
        array_countries.push(object[key]);
    }
    return array_countries
} 

process(country)