const results = document.getElementById("rolled")


const roll = () => {
    let input = document.getElementById("nd").value;
    let number =Math.floor((Math.random() * 6) + 1); 
    let numbers = input*number;
    results.innerHTML= numbers;
    console.log(input);
}




document.getElementById("dice").addEventListener('click',() =>roll())

    
