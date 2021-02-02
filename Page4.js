function ClimateTest(){//In a function so the button can call this when it is pressed
    var x = 0;
    var a = prompt("What is the layer of gases surrounding Earth called?");
    a = a.charAt(0).toUpperCase() + a.slice(1);
    if (a == "Atmosphere"){
        alert("Correct!");
        x = x+1;//Counter to check if person got it right or wrong
    }
    else{
        alert("It was Atmosphere.");
    }

    var a = prompt("Seasons are created by Earth's orbit and it's ----.");
    a = a.charAt(0).toUpperCase() + a.slice(1);
    if (a == "Tilt"){
        alert("Correct!");
        x = x+1;
    }
    else{
        alert("It was Tilt.");
    }

    var a = prompt("Which classification system divides the world based on biotic and abiotic conditions?");
    a = a.charAt(0).toUpperCase() + a.slice(1);
    if (a == "Biome"){
        alert("Correct!");
        x = x+1;
    }
    else{
        alert("It was Biome.");
    }

    var a = prompt("What is most of the atmosphere made of?");
    a = a.charAt(0).toUpperCase() + a.slice(1);
    if (a == "Nitrogen gas"){
        alert("Correct!");
        x = x+1;
    }
    else{
        alert("It was Nitrogen gas.");
    }
    var y = (x/4)*100;//Math operators to check if the user passes or fails
    if(y>=50){
    alert("Good Job. You got " + y + "%");
    }
    else{
        alert("Try again. you got " + y + "%");
    }
}