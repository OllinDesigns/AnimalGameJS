var animal = document.getElementById("animal"); 
var myAnimal = prompt("Choose an animal, your options are vulture, walrus, toad, crocodile, hippopotamus and tapir.");

    

        if(myAnimal == "hippopotamus"){

           // document.getElementById("imagensapo");
            
            animal.style.backgroundColor = "#b62601";
            animal.style.color = "#813772";
            animal.style.border = "#813772 10px solid"
            
        }else if(myAnimal == "walrus"){            
            walrus.style.backgroundColor = "#b62601";
            walrus.style.color = "#813772";
            walrus.style.border = "#813772 10px solid"
            // esto funciona llamando al div, debe ser POO, tengo que llamar al div que contiene el animal indicado
            // mas facil seria si llamo al div por el nombre del animal
        }else if(myAnimal == "vulture"){      
            
            vulture.style.backgroundColor = "#b62601";
            vulture.style.color = "#813772";
            vulture.style.border = "#813772 10px solid"
            
        }else if(myAnimal == "crocodile"){
            
            crocodile.style.backgroundColor = "#b62601";
            crocodile.style.color = "#813772";
            crocodile.style.border = "#813772 10px solid"
            
        }else if(myAnimal == "toad"){
            
            toad.style.backgroundColor = "#b62601";
            toad.style.color = "#813772";
            toad.style.border = "#813772 10px solid";
        }else if(myAnimal == "tapir"){
            
            tapir.style.backgroundColor = "#b62601";
            tapir.style.color = "#813772";
            tapir.style.border = "#813772 10px solid"
            
        }else{
                alert("This animal is not in the game, please enter one from the list.");
            }