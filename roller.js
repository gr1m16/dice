const results = document.getElementById("rolled")


const roll = () => {
    let input = document.getElementById("nd").value;
    let myarray= [];
    let number=0; 
    
    for (let i=0; i <input; i++){
    number = Math.floor((Math.random() * 6) + 1
        
        ); 
        myarray.push(number);
    }

    results.innerHTML= myarray;
    console.log(myarray);
}


document.getElementById("dice").addEventListener('click',() =>roll())

    
