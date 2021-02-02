function OpticsTest(){//In a function so the button can call this when it is pressed
    var x = 0;
    var a = prompt("What is released by the mercury atoms inside a fluorescent light bulb?");
    a = a.charAt(0).toUpperCase() + a.slice(1);
    if (a == "UV light"){
        alert("Correct!");
        x = x+1;//Counter to check if person got it right or wrong
    }
    else{
        alert("It was UV light");
    }

    var a = prompt("What ray is perpendicular to the surface?");
    a = a.charAt(0).toUpperCase() + a.slice(1);
    if (a == "Normal"){
        alert("Correct!");
        x = x+1;
    }
    else{
        alert("It was the Normal.");
    }

    var a = prompt("Does the angle of incidence have to equal the angle of reflection?");
    a = a.charAt(0).toUpperCase() + a.slice(1);
    if (a == "Yes"){
        alert("Correct!");
        x = x+1;
    }
    else{
        alert("It was Yes.");
    }

    var a = prompt("What mirror has the reflective surface curved inwards?");
    a = a.charAt(0).toUpperCase() + a.slice(1);
    if (a == "Concave mirror"){
        alert("Correct!");
        x = x+1;
    }
    else{
        alert("It was Concave mirror.");
    }
    var a = prompt("There are formulas to calculate the focal length, magnification, distance to the image/object, height of the image/object.(True/False)");
    a = a.charAt(0).toUpperCase() + a.slice(1);
    if (a == "True"){
        alert("Correct!");
        x = x+1;
    }
    else{
        alert("It was True.");
    }
    var y = (x/5)*100;//Math operators to check if the user passes or fails
    if(y>=50){
    alert("Good Job. You got " + x/5 + "%");
    }
    else{
        alert("Try again. you got " + y + "%");
    }
}