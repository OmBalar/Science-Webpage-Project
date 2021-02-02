function BioTest(){//In a function so the button can call this when it is pressed
    var x = 0;
    var a = prompt("What microscope has the highest magnification?(HINT: It's 3 words.)");//The variable stores the answer
    a = a.charAt(0).toUpperCase() + a.slice(1);
    if (a == "Transmission electron microscope"){//If statements check if the answer is right
        alert("Correct!");
        x = x+1;//Counter to check if person got it right or wrong
    }
    else{
        alert("It was Transmission electron microscope");
    }

    var a = prompt("Do all cells come from pre-existing cells?(True or False)");
    a = a.charAt(0).toUpperCase() + a.slice(1);
    if (a == "True"){
        alert("Correct!");
        x = x+1;
    }
    else{
        alert("It was True.");
    }

    var a = prompt("What is the first stage of cell division?(HINT: There are 6 stages)");
    a = a.charAt(0).toUpperCase() + a.slice(1);
    if (a == "Interphase"){
        alert("Correct!");
        x = x+1;
    }
    else{
        alert("It was Interphase.");
    }

    var a = prompt("During what stage of cell division does the nucleolus dissapear?");
    a = a.charAt(0).toUpperCase() + a.slice(1);
    if (a == "Prophase"){
        alert("Correct!");
        x = x+1;
    }
    else{
        alert("It was Prophase.");
    }
    var y = (x/4)*100;//Math operators to check if the user passes or fails
    if(y>=50){
    alert("Good Job. You got " + y + "%");
    }
    else{
        alert("Try again. you got " + y + "%");
    }
}