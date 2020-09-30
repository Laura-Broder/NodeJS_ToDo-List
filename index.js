// refactoring needed:
// 1. change the return values to be same type from each function.
// 2. take in consideration return values need to be used by an outside  user. (no strings of msgs!)
// 3. in errors throw new error("msg")

// define Task class
class ToDoItem {
  constructor(content = "Empty task", index = 0, done = false) {
    this.content = content;
    this.index = index;
    this.done = done;
  }
}

// define Task list class
class ToDoList {
  constructor(taskArray = []) {
    this.taskArray = taskArray;
  }
  addNewTask = (content, done = false) => {
    // if content is empty
    if (!content) {
      return "The task has no content";
    }
    const index = this.taskArray.length;
    return this.taskArray.push(new ToDoItem(content, index, done));
  };
  displayList = () => {
    // if list is empty
    if (this.taskArray.length === 0) {
      return "No tasks in your list.";
    }
    const tasksDisplayArray = this.taskArray.map((task, index) => {
      const taskStatus = task.done ? "Done" : "Open";
      return index + 1, ",", task.content, ",", taskStatus;
    });
    return tasksDisplayArray;
  };
  deleteTask = (index) => {
    // check index is in the array
    if (!this.taskArray[index - 1]) {
      return "there is no such task number";
    }
    return this.taskArray.splice(index - 1, 1).length;
  };
  clearList = () => {
    this.taskArray = [];
    return this.taskArray.length;
  };
  markDone = (index) => {
    // check index is in the array
    if (!this.taskArray[index - 1]) {
      return "there is no such task number";
    }
    if (this.taskArray[index - 1].done) {
      return "The task is already marked done";
    }
    this.taskArray[index - 1].done = true;
    this.taskArray.push(this.taskArray[index - 1]);
    return this.deleteTask(index);
  };
  getLength = () => {
    return this.taskArray.length;
  };
  unMarkDone = (index) => {
    // check index is in the array
    if (!this.taskArray[index - 1]) {
      return "there is no such task number";
    }
    if (!this.taskArray[index - 1].done) {
      return "The task was not marked done yet";
    }
    this.taskArray[index - 1].done = false;
    return !this.taskArray[index - 1].done;
  };
}

module.exports = {
  ToDoList,
  ToDoItem,
};
