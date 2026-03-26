
var lists = JSON.parse(localStorage.getItem('lists'))  || [];

// console.log(lists)

writingHtml();

function submit() {

    var inputValue = document.getElementById('list_input')
    var valueOfInput = inputValue.value.trim()

    if (valueOfInput === '') {
        alert('Please enter any tasks.');
        return;
    }
    lists.push(valueOfInput)
localStorage.setItem('lists', JSON.stringify(lists))
    writingHtml()

    inputValue.value = ''
}

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

function editTask(index) {

    var newValue = prompt("Edit your task.", lists[index])

    if (newValue === null) {
        return;
    }
    if (newValue.trim() === '') {
        alert("Task Can't be empty.")
    }

    lists[index] = newValue;

    localStorage.setItem('lists',JSON.stringify(lists));

    writingHtml()
}