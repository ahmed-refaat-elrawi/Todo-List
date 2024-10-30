export const inputElement = document.querySelector(".addTask__input");
export const addButtonElement = document.querySelector(".addTask__button");
export const todoListElement = document.querySelector(".todo__list");
export const optionsElement = document.querySelector(".todo__options");
export const tasksLeftElement = document.querySelector(
  ".todo__options__tasksLeft"
);
export const clearCompletedElement = document.querySelector(
  ".todo__options__clearCompleted"
);
export const tasksFilterElements = document.querySelectorAll(
  ".todo__options__filter"
);
export const toggleThemeIcon = document.querySelector(
  ".header__themeToggle__icon"
);
export const getTodoListTasks = () => {
  return document.querySelectorAll(".todo__list__task");
};
export const getDeleteIcons = () => {
  return document.querySelectorAll(".todo__list__task__deleteButton");
};
export const getCompletedTaskIcons = () => {
  return document.querySelectorAll(".todo__list__task__button");
};
