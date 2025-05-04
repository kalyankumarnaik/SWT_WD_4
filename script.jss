function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskDateTime = document.getElementById('task-datetime');

  const taskText = taskInput.value.trim();
  const taskDate = taskDateTime.value;

  if (!taskText || !taskDate) {
    alert("Please enter a task and date/time.");
    return;
  }

  const taskList = document.getElementById('task-list');

  const li = document.createElement('li');
  li.className = 'task-item';

  const infoDiv = document.createElement('div');
  infoDiv.className = 'task-info';
  infoDiv.innerHTML = `<strong>${taskText}</strong><br><small>${new Date(taskDate).toLocaleString()}</small>`;

  const actionsDiv = document.createElement('div');
  actionsDiv.className = 'task-actions';

  const completeBtn = document.createElement('button');
  completeBtn.innerText = '✓';
  completeBtn.className = 'complete';
  completeBtn.onclick = () => {
    li.classList.toggle('completed');
  };

  const editBtn = document.createElement('button');
  editBtn.innerText = '✎';
  editBtn.onclick = () => {
    const newTask = prompt("Edit task:", taskText);
    if (newTask) {
      infoDiv.innerHTML = `<strong>${newTask}</strong><br><small>${new Date(taskDate).toLocaleString()}</small>`;
    }
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = '🗑';
  deleteBtn.className = 'delete';
  deleteBtn.onclick = () => {
    li.remove();
  };

  actionsDiv.appendChild(completeBtn);
  actionsDiv.appendChild(editBtn);
  actionsDiv.appendChild(deleteBtn);

  li.appendChild(infoDiv);
  li.appendChild(actionsDiv);

  taskList.appendChild(li);

  taskInput.value = '';
  taskDateTime.value = '';
}
