const results = document.getElementById("rolled")


const roll = () => {
    let input = document.getElementById("nd").value;
    let sides = document.getElementById("numberDice").value;
    let myarray= [];
    let number=0; 
    
    for (let i=0; i <input; i++){
    number = Math.floor((Math.random() * sides) + 1
        
        ); 
        myarray.push(number);
    }

    results.innerHTML= myarray;
    console.log(myarray);
}


document.getElementById("dice").addEventListener('click',() =>roll())

    
