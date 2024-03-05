let btn = document.getElementById('add_btn');

btn.addEventListener('click', addFood);
function addFood(e){
    let currentBtn = e.currentTarget
    console.log(currentBtn);
    let currentInput = currentBtn.previousElementSibling
    console.log(currentInput.value);
    let currentFoodName = currentInput.value

    let newLi = document.createElement('li');

    newLi.className = 'list-group-item d-flex justify-content-between'
    newLi.innerHTML = `<h3 class="flex-grow-1">${currentFoodName}🍹</h3>
    <button class="btn btn-dark mx-2">Read</button>
    <button class="btn btn-danger" onclick="removeFood(this)">Delete</button>`

    let parentList = document.getElementById('parentList')

    parentList.appendChild(newLi)

    if(btn.click){
        currentInput.value = ""
    }
}

function removeFood(currElement){
    currElement.parentElement.remove()
}

// Promise

let promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name: "John", age: 15, car: "Aston Martin", color: "Yellow"})
    },2000)
})
promiseOne.then(function(data){
    console.log(data);
})

// Second Promise

let promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name: "John", age: 15, car: "Aston Martin", color: "Yellow"})
    },3000)
})
promiseTwo.then(function(myData){
    return myData.name;
})
.then(function(getData){
    console.log(getData)
})

promiseTwo.then(function(car){
    return car.car;
})
.then(function(carData){
    console.log(carData);
})


// Third Promise

let promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name: "John", age: 15, car: "Aston Martin", color: "Yellow"})
    },3000)
})
promiseThree.then(function(myData){
    return myData.color;
})
.then(function(getData){
    console.log(getData)
})


// Fourth Promise

async function datafetch(){
    try{
        let Data = await fetch('https://jsonplaceholder.typicode.com/users');
        let myData = await Data.json();
        console.log(JSON.stringify(myData))
    }
    catch(error){
        console.log("Error")
    }
}
datafetch()
