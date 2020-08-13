

function addThis(item){
    console.log('function working')
    const output = document.getElementById("item").value  //get item to link to DOM
    console.log(output)
    const list_item = output.value
    console.log(list_item)
    document.getElementById("item").value = "" // making it empty

    const parent = document.getElementById("output_list") // creating a link
    const add_to_list = document.createElement("li") //create
    add_to_list.innerText = list_item
    parent.appendChild(add_to_list) 

  }

  module.exports = addThis(item) //whoever wants it can have it

//node JS tells html which functions to run
//bundle tells html which js files to run

