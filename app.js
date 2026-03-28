
var lists = JSON.parse(localStorage.getItem('lists'))  || [];

// console.log(lists)

writingHtml();


function writingHtml() {

    var ul_list = document.getElementById('unorder_list')

    ul_list.innerHTML = '';

    for (var i = 0; i < lists.length; i++) {

        ul_list.innerHTML += `<li class="mypin">

        ${lists[i]}
        <div class="set-size">
        <button id="dlt_button" onclick="deleteTask(${i})">DLT</button>
        <button id="edit_button" onclick="editTask(${i})">EDIT</button>
        </div>
        </li>`

    }
}

function deleteTask(index) {



    lists.splice(index, 1)

    localStorage.setItem('lists',JSON.stringify(lists))



    writingHtml();

}

var editFunction = false;
var editIndex = null;

function editTask(index) {

    
    var input =  document.getElementById('list_input')

   input.value = lists[index];

   editIndex = index;

editFunction = true ;

document.getElementById('add_button').innerHTML = 'Update'




}

function update(){

    var input = document.getElementById('list_input')

    var value = input.value.trim();

    if (value === '') {
       alert("Task Can't be empty.")
       return;
    }

    if(editFunction === false) {
        lists.push(value)
      
    }
    else{
        lists[editIndex] = value;
        
    }

    localStorage.setItem('lists',JSON.stringify(lists));

    editFunction = false;
    editIndex = null;
    input.value = "";

    document.getElementById('add_button').innerHTML = 'Add';
    
    writingHtml()
}

