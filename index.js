const projects = [];
const tasks = [];

function functionProjects() {
  const projectsList = document.getElementById('projects');
  projectsList.innerHTML = '';

  projects.forEach((project) => {
    const li = document.createElement('li');
    li.textContent = project.name;
    projectsList.appendChild(li);
  });
}

function functionTasks() {
  const tasksList = document.getElementById('tasks');
  tasksList.innerHTML = '';

  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.textContent = task.title;
    tasksList.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  functionProjects();
  functionTasks();

  const addProjectButton = document.getElementById('add-project');
  addProjectButton.addEventListener('click', () => {
    const projectName = prompt('Enter project name:');
    if (projectName) {
      projects.push({ name: projectName });
      functionProjects();
    }
  });

  const addTaskButton = document.getElementById('add-task');
  addTaskButton.addEventListener('click', () => {
    const taskTitle = prompt('Enter task title:');
    if (taskTitle) {
      tasks.push({ title: taskTitle });
      functionTasks();
    }
  });
});
