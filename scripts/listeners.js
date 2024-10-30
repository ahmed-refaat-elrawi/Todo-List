import {
  addButtonElement,
  clearCompletedElement,
  inputElement,
  toggleThemeIcon,
} from "./elements";
import {
  addTask,
  clearCompletedTasks,
  clearElement,
  filterTasks,
  resetFilter,
  toggleDarkTheme,
} from "./utils";

export const addButtonListener = () => {
  addButtonElement.addEventListener("click", (e) => {
    e.preventDefault();
    addTask(inputElement.value);
    resetFilter();
    clearElement(inputElement);
  });
};

export const clearCompletedListener = () => {
  clearCompletedElement.addEventListener("click", (e) => {
    e.preventDefault();
    clearCompletedTasks();
    resetFilter();
  });
};

export const toggleDarkThemeListener = () => {
  toggleThemeIcon.addEventListener("click", toggleDarkTheme);
};

export const filterTasksListener = (filter) => {
  filter.addEventListener("click", (e) => {
    e.preventDefault();
    filterTasks(filter);
  });
};
