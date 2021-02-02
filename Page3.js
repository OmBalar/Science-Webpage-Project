function ChemTest(){//In a function so the button can call this when it is pressed
    var x= 0;
    var a = prompt("What are the substances which react in a chemical reaction called?");
    a = a.charAt(0).toUpperCase() + a.slice(1);
    if (a == "Reactants"){
        alert("Correct!");
        x = x+1;//Counter to check if person got it right or wrong
    }
    else{
        alert("It was Reactants.");
    }

    var a = prompt("What type of bond occurs when a metal bonds to a non-metal?");
    a = a.charAt(0).toUpperCase() + a.slice(1);
    if (a == "Ionic"){
        alert("Correct!");
        x = x+1;
    }
    else{
        alert("It was Ionic.");
    }

    var a = prompt("How would you name a bond between Sodium and Chlorine?");
    a = a.charAt(0).toUpperCase() + a.slice(1);
    if (a == "Sodium chloride"){
        alert("Correct!");
        x = x+1;
    }
    else{
        alert("It was Sodium chloride");
    }

    var a = prompt("When an acid and base is mixed, it makes salt and -----.");
    a = a.charAt(0).toUpperCase() + a.slice(1);
    if (a == "Water"){
        alert("Correct!");
        x = x+1;
    }
    else{
        alert("It was Water.");
    }
    var y = (x/4)*100;//Math operators to check if the user passes or fails
    if(y>=50){
    alert("Good Job. You got " + y + "%");
    }
    else{
        alert("Try again. you got " + y + "%");
    }
}