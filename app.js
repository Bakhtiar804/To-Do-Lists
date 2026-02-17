
var lists = [];

function submit() {

    var inputValue = document.getElementById('list_input')
    var valueOfInput = inputValue.value.trim()

    if (valueOfInput === '') {
        alert('Please enter any tasks.');
        return;
    }
    lists.push(valueOfInput)

    writingHtml()

    inputValue.value = ''
}

function writingHtml() {

    var ul_list = document.getElementById('unorder_list')

    ul_list.innerHTML = '';

    for (var i = 0; i < lists.length; i++) {

        ul_list.innerHTML += `<li>

        ${lists[i]}
        <div>
        <button id="dlt_button" onclick="deleteTask(${i})">DLT</button>
        <button id="edit_button" onclick="editTask(${i})">EDIT</button>
        </div>
        </li>`

    }
}

function deleteTask(index){

    lists.splice(index,1)

    writingHtml();

}

function editTask(index){

    var newValue = prompt("Edit your task." , lists[index])

    if(newValue === null){
        return;
    }
    if(newValue.trim() === '') {
        alert("Task Can't be empty.")
    }

    lists[index] = newValue;

    writingHtml()
}