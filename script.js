var list = document.querySelector('.todo-list'); /* позволяет удалять елементы из списка*/
var items = list.children; /*переменая  хранящая колекцию елементов*/
var emptyListMessage = document.querySelector('.empty-tasks'); /*добавляет класс после  выполнения задач*/
var newItemForm = document.querySelector('.add-form');/*создает связь с сервером обработки html-academy */
var newItemTitle = newItemForm.querySelector('.add-form-input')/*возможность добавления задачи*/;
var taskTemplate = document.querySelector('#task-template').content;/*удаление при нажтии (выделение)*/
var newItemTemplate = taskTemplate.querySelector('.todo-list-item');

var toggleEmptyListMessage = function () {
  if (items.length === 0) {
    emptyListMessage.classList.remove('hidden');
  }
  else
  {
    emptyListMessage.classList.add('hidden');
  }
};

var addCheckHandler = function (item) {
  var checkbox = item.querySelector('.todo-list-input');
  checkbox.addEventListener('change', function () {
    item.remove();
    toggleEmptyListMessage();
  });
};

for (var i = 0; i < items.length; i++) {
  addCheckHandler(items[i]);
}

newItemForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var taskText = newItemTitle.value;
  var task = newItemTemplate.cloneNode(true);
  var taskDescription = task.querySelector('span');
  taskDescription.textContent = taskText;
  addCheckHandler(task);

  list.appendChild(task);
  toggleEmptyListMessage();
  newItemTitle.value = '';
});
