

function addThis(){
    console.log('function working')
    const item =  document.getElementById("item")
    let newItem = item.value
    console.log(newItem)
    item.value = '' // refers to html string elem that we got
    const item_list = document.getElementById("item_list") // creating a link
    btn.onclick = function(){

      const li = document.createElement("li") //create
      li.innerText = newItem
      item_list.appendChild(li) 
      
    }

  }

  module.exports = addThis //whoever wants it can have it

//node JS tells html which functions to run
//bundle tells html which js files to run

