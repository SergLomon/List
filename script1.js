var list = document.querySelector('.todo-list');
var items = list.children;
var newItemForm = document.querySelector('.add-form-button');
var newItemTitle = document.querySelector('.add-form-input');
var taskTemplate = document.querySelector('#task-template').content;
var newItemTemplate = taskTemplate.querySelector('.todo-list-item');

//дело зачеркнуто/удалено
var addCheckHandler = function (item) {
  var checkboxDele = item.querySelector('.todo-list-input-dele');
  checkboxDele.addEventListener('change', function () {
    item.remove();
  });
  var checkbox = item.querySelector('.todo-list-input');
  checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
      item.classList.add('mystyle');
    } else {
      item.classList.remove('mystyle');
      }
    });
  };

for (var i = 0; i < items.length; i++) {
  addCheckHandler(items[i]);
};

// добавление дел
newItemForm.addEventListener('click', function () {
  var taskText = newItemTitle.value;
  if (taskText !== '') {
    var task = newItemTemplate.cloneNode(true);
    var taskDescription = task.querySelector('span');
    taskDescription.textContent = taskText;
    addCheckHandler(task);
    list.appendChild(task);
    newItemTitle.value = '';
    };
  });
