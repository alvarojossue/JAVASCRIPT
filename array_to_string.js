function prepare(arrayOfNames){
    var finalNames = "";
    for (var i = 0; i < arrayOfNames.length; i++){
        if (i === arrayOfNames.length - 2){
            finalNames = finalNames + arrayOfNames[i] + " and ";
        } else if(i === arrayOfNames.length - 1){
            finalNames = finalNames + arrayOfNames[i];
        } else {
            finalNames = finalNames + arrayOfNames[i] + ", "; 
        }
       
    }
    console.log(finalNames);
}

names = [ "Canada", "Mexico", "Turkey", "Japan" ];
prepare(names);