// const taskArray = require("./index").taskArray;
const ToDo = require("./index").ToDo;

describe("NodeJS_ToDo", () => {
  beforeEach(ToDo.clearList);
  describe("clearList", () => {
    it("should return 0", () => {
      ToDo.addNewTask("Do the NodeJS ToDo list assignment");
      const result = ToDo.clearList();
      expect(result).toBe(0);
    });
  });
  describe("addNewTask", () => {
    it("should return there is no content in the new task", () => {
      const result = ToDo.addNewTask("");
      expect(result).toMatch("The task has no content");
    });
    it("should add a new task to the array", () => {
      const result = ToDo.addNewTask("Do the NodeJS ToDo list assignment");
      expect(result).toBe(1);
    });
  });

  describe("displayList", () => {
    it("should return the list is empty", () => {
      const result = ToDo.displayList();
      expect(result).toMatch("No tasks in your list.");
    });
    it("should log the list of tasks", () => {
      ToDo.addNewTask("Do the NodeJS ToDo list assignment");
      const result = ToDo.displayList();
      expect(result).toBe(1);
    });
  });

  describe("deleteTask", () => {
    it("should return the index is non existent", () => {
      const result = ToDo.deleteTask(1);
      expect(result).toMatch("there is no such task number");
    });
    it("should delete a task by it's index", () => {
      ToDo.addNewTask("Do the NodeJS ToDo list assignment");
      const result = ToDo.deleteTask(1);
      expect(result).toBe(1);
    });
  });

  describe("markDone", () => {
    it("should return the index is non existent", () => {
      const result = ToDo.markDone(1);
      expect(result).toMatch("there is no such task number");
    });
    it("should return the task is already marked done", () => {
      ToDo.addNewTask("Do the NodeJS ToDo list assignment");
      ToDo.markDone(1);
      const result = ToDo.markDone(1);
      expect(result).toMatch("The task is already marked done");
    });
    it("should mark a task done by it's index", () => {
      ToDo.addNewTask("Do the NodeJS ToDo list assignment");
      const result = ToDo.markDone(1);
      expect(result).toBe(1);
    });
  });

  describe("unMarkDone", () => {
    it("should return the index is non existent", () => {
      const result = ToDo.unMarkDone(1);
      expect(result).toMatch("there is no such task number");
    });
    it("should return the task is not marked done", () => {
      ToDo.addNewTask("Do the NodeJS ToDo list assignment");
      const result = ToDo.unMarkDone(1);
      expect(result).toMatch("The task was not marked done yet");
    });
    it("should mark a task done by it's index", () => {
      ToDo.addNewTask("Do the NodeJS ToDo list assignment");
      ToDo.markDone(1);
      const result = ToDo.unMarkDone(1);
      expect(result).toBeTruthy();
    });
  });
});
