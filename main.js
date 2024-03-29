var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
//Filter Event
filter.addEventListener('keyup', filterItems)

// Add Item
function addItem(e) {
    e.preventDefault();

    //   console.log(1);

    //Get input Value
    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');
    // Add Class
    li.className = 'list-group-item';
    // console.log(li);

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create del button
    var deleteBtn = document.createElement('button');

    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);
}


// Remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);

        }
    }
}


//Filter Items 
function filterItems(e) {
    // convert text to loweCase
    var text = e.target.value.toLowerCase();
    //Get List 
    var items = itemList.getElementsByTagName('li');
    // console.log(items);
    // Convert to an array
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        // console.log(itemName);
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}