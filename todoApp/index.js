
// add an item

//attach a submit or a click event listner

//capture user's input from this input field

//append text and delete button in list item
//append list item into unordered list or ordered list

//variables
var form = document.getElementById('addForm')

var todoList = document.getElementById('items')

var filter = document.getElementById('filter')





//event listener
form.addEventListener('submit', addTodo)

todoList.addEventListener('click', removeItem)

filter.addEventListener('keyup', filterTodos)
//functions
function addTodo(e){
    e.preventDefault()

    //get the input value from the user

    var newTodo = document.getElementById('item').value

    //create a new li element

    var li = document.createElement('li')

    //add all the classes to the new todo

    li.className = 'list-group-item'

    // add new todo to li

    li.textContent = newTodo

    //Create a new delete button

    var deleteBtn = document.createElement('button')

    // add classes to the button

    deleteBtn.className = 'btn btn-danger btn-sm float-end delete'

    //add the text to delete btn

    deleteBtn.textContent = 'Delete'

    //append the button into the list
    li.appendChild(deleteBtn)

    //append that list into the unordered list
    
    todoList.append(li)

    document.getElementById('item').value = ''


}

function removeItem(e){

   if(e.target.classList.contains("delete")){
    if(confirm('Are you sure, that you want to delete this todo?')){
        var li = e.target.parentElement
        todoList.removeChild(li)
    }

   }


}

function filterTodos(e){

    var text = e.target.value.toLowerCase()

    var todos = todoList.getElementsByTagName('li')

    //convert todos to array

   Array.from(todos).forEach(function (todo){
       var todoName = todo.firstChild.textContent

       console.log(todoName.toLowerCase().indexOf(text) != -1)

       if(todoName.toLowerCase().indexOf(text) != -1 ){

        todo.style.display = 'block'

       }else{
           todo.style.display = 'none'
       }
   })

    
}