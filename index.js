document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('item');
    const addBtn = document.getElementById('addBtn');
    const clearBtn = document.getElementById('clearBtn');
    const itemList = document.getElementById('itemList');
    let list = [];

    // Add items
    addBtn.addEventListener('click', () => {
        const item = itemInput.value;
        if(item) {
            list.push(item);
            addItemToList(item);
            itemInput.value = '';
        }
    });

    // Add item to list 
    function addItemToList(item) {
        const li = document.createElement('li');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');
        
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                li.classList.add('done');
            } else {
                li.classList.remove('done');
            }
        });
        
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(item));
        itemList.appendChild(li);
    }

    // Clear list
    clearBtn.addEventListener('click', () => {
        list = [];
        const items = itemList.querySelectorAll('li');
        items.forEach(item => item.remove());
    });
});


