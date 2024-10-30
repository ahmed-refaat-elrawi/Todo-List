import {
  getCompletedTaskIcons,
  getDeleteIcons,
  optionsElement,
  tasksFilterElements,
  tasksLeftElement,
  todoListElement,
  toggleThemeIcon,
} from "./elements";
import { filterTasksListener } from "./listeners";

export const fetchData = (key) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
};

export const saveDataToDB = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
export const resetFilter = () => {
  tasksFilterElements.forEach((filter) => {
    filter.classList.remove("todo__options__filter-isActive");
    filter.id === "allTasks" &&
      filter.classList.add("todo__options__filter-isActive");
  });
};
export const addTask = (taskValue) => {
  let tasks = fetchData("tasks");
  const task = {
    value: taskValue,
    isCompleted: false,
  };
  task.value.trim() && tasks.push(task);

  saveDataToDB("tasks", tasks);
  renderTaskList(tasks);
};

export const deleteTask = (index) => {
  const tasks = fetchData("tasks");
  tasks.splice(index, 1);
  saveDataToDB("tasks", tasks);

  renderTaskList(tasks);
};

export const toggleCompletedTasks = (index) => {
  const tasks = fetchData("tasks");
  tasks[index].isCompleted = !tasks[index].isCompleted;
  saveDataToDB("tasks", tasks);
  renderTaskList(tasks);
  ``;
  // Update the list after toggling completion
};
export const clearCompletedTasks = () => {
  let tasks = fetchData("tasks");
  tasks = tasks.filter((task) => !task.isCompleted);
  saveDataToDB("tasks", tasks);
  renderTaskList(tasks);
  initTaskListeners();
};

export const renderActiveTasks = () => {
  const tasks = fetchData("tasks");
  const activeTasks = tasks.filter((task) => !task.isCompleted);
  saveDataToDB("activeTasks", activeTasks);
  renderTaskList(activeTasks);
};

export const renderCompletedTasks = () => {
  const tasks = fetchData("tasks");
  const completedTasks = tasks.filter((task) => task.isCompleted);
  saveDataToDB("completedTasks", completedTasks);
  renderTaskList(completedTasks);
};

export const filterTasks = (filter) => {
  filter.parentElement
    .querySelectorAll(".todo__options__filter")
    .forEach((child) => {
      child.classList.remove("todo__options__filter-isActive");
    });

  // Add 'todo__options__filter-isActive' class to the clicked filter
  filter.classList.add("todo__options__filter-isActive");

  if (filter.id === "activeTasks") {
    renderActiveTasks();
  } else if (filter.id === "completedTasks") {
    renderCompletedTasks();
  } else {
    renderTaskList(fetchData("tasks"));
  }
};

export const initPage = () => {
  if (fetchData("toggleDarkTheme")) {
    document.body.classList.add("app-isDark");
    toggleThemeIcon.src = "images/icon-sun.svg";
  } else {
    toggleThemeIcon.src = "images/icon-moon.svg";
    document.body.classList.remove("app-isDark");
  }
};

export const toggleDarkTheme = () => {
  document.body.classList.toggle("app-isDark");
  saveDataToDB(
    "toggleDarkTheme",
    document.body.classList.contains("app-isDark")
  );
  if (fetchData("toggleDarkTheme")) {
    toggleThemeIcon.src = "images/icon-sun.svg";
  } else {
    toggleThemeIcon.src = "images/icon-moon.svg";
  }
};

export const initTaskListeners = () => {
  getCompletedTaskIcons().forEach((icon, index) => {
    icon.addEventListener("click", () => {
      toggleCompletedTasks(index);
      resetFilter();
    });
  });

  tasksFilterElements.forEach((filter) => {
    filterTasksListener(filter);
  });

  getDeleteIcons().forEach((deleteIcon, index) => {
    deleteIcon.addEventListener("click", () => {
      deleteTask(index);
      resetFilter();
    });
  });
};

export const renderTasksLeft = (numberOfTasks) => {
  tasksLeftElement.textContent =
    numberOfTasks > 0 ? `${numberOfTasks} items left` : `No Tasks`;
};

export const renderTaskList = (tasks) => {
  todoListElement.innerHTML = "";

  tasks.forEach((task) => {
    const taskListItem = document.createElement("li");
    taskListItem.classList.add("textBox", "todo__list__task");
    if (task.isCompleted) {
      taskListItem.classList.add("todo__list__task-isCompleted");
    } else {
      taskListItem.classList.remove("todo__list__task-isCompleted");
    }

    const isCompletedButton = document.createElement("button");
    isCompletedButton.classList.add(
      "textBox__button",
      "todo__list__task__button"
    );

    const todoListTask = document.createElement("div");
    todoListTask.classList.add("textBox__task", "todo__list__task__content");
    todoListTask.textContent = task.value;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("todo__list__task__deleteButton");
    deleteButton.innerHTML =
      '<img src="images/icon-cross.svg" alt="delete icon" />';

    taskListItem.appendChild(todoListTask);
    taskListItem.appendChild(isCompletedButton);
    taskListItem.appendChild(deleteButton);

    todoListElement.appendChild(taskListItem);
  });
  renderTasksLeft(tasks.length);
  initTaskListeners();
};

export const clearElement = (element) => {
  element.value = "";
};
