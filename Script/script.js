function  capitalizeLetters(string) {

    var oldArray = string.split(' '),

        newArray =[];
    
    for(var i=0 ; i < oldArray.length ; i++ ){

        newArray.push(oldArray[i].charAt(0).toUpperCase() + oldArray[i].slice(1));
    }
    return newArray.join(" ");
};

document.getElementById('message').innerHTML = capitalizeLetters("welcome to m3aty challenge please smile");