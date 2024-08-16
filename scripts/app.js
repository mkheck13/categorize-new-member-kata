// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
// They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. 
// In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. 
// Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member 
// is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]





// should be able to do this in an if else statement
// scratch that, the more I think about it I should just be able to do it in the return
// with a switch case
function openOrSenior(data){
    return data.map(([age, handi]) => (age > 54 && handi > 7) ? 'Senior' : 'Open');
}

// now lets do the if else one
function openOrSenior(data){
    let array = [];
    data.forEach(function(member){
        if(member[0] > 54 && member[1] > 7){
            array.push('Senior');
        }else{
            array.push('Open');
        }
    })
    return array;
}