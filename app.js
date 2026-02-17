
var lists = [];

function submit() {

    var inputValue = document.getElementById('list_input')
    var valueOfInput = inputValue.value.trim()

    if (valueOfInput === '') {
        alert('Please enter any tasks.');
        return;
    }
    lists.push(valueOfInput)

    writingHtml(inputValue)

    inputValue.value = ''
}

function writingHtml(inputValue) {

    var ul_list = document.getElementById('unorder_list')

    ul_list.innerHTML = '';

    for (var i = 0; i < lists.length; i++) {

        ul_list.innerHTML += `<li>

        ${lists[i]}
        <button id="dlt_button" onclick="deleteTask()">DLT</button>
        
        </li>`

    }
}

function deleteTask(index){

    lists.splice(index,1)

    writingHtml();

}