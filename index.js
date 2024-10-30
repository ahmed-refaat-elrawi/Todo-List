/* - 
View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page ✅
- Add new todos to the list ✅
- Mark todos as complete ✅
- Delete todos from the list ✅
- Filter by all/active/complete todos ✅
- Clear all completed todos ✅  
- Toggle light and dark mode ✅
- **Bonus**: Drag and drop to reorder items on the list
*/

import {
  addButtonElement,
  clearCompletedElement,
  getCompletedTaskIcons,
  getDeleteIcons,
  getTodoListTasks,
  inputElement,
  optionsElement,
  tasksFilterElements,
  todoListElement,
  toggleThemeIcon,
} from "./scripts/elements";
import { addButtonListener, clearCompletedListener, toggleDarkThemeListener } from "./scripts/listeners";
import {
  addTask,
  clearElement,
  deleteTask,
  fetchData,
  filterTasks,
  initPage,
  initTaskListeners,
  renderTaskList,
  saveDataToDB,
  toggleCompletedTasks,
  toggleDarkTheme,
} from "./scripts/utils";
initTaskListeners();
addButtonListener();
clearCompletedListener();
initPage();
toggleDarkThemeListener();
renderTaskList(fetchData("tasks"));







