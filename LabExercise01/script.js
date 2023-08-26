

function addListItem() {
  var li = document.createElement('li');
  var inputValue = document.getElementById('item').value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById('todo-list').appendChild(li);
  }
  document.getElementById('item').value = "";
}
