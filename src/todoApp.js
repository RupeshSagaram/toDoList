// todoApp class manages evertything, the tasks and projects.

import { Todo } from "./newToDos";
import { Project } from "./projects";

export class TodoApp{
    constructor(){
        this.projects = {"Default": new Project("Default")};
        this.currentProject = "Default";
    }

    addProject(name){
        if(!this.projects[name]){
            this.projects[name] = new Project(name);
        }
    }

    addTodo(title, description, dueDate, priority){
        const task = new Todo(title, description, dueDate, priority);
        this.projects[this.currentProject].addTodo(task); 
    }

    deleteTodo(index){
        this.projects[this.currentProject].removeTodo(index);
    }

    switchProject(name){
        if(this.projects[name]){
            this.currentProject = name;
        }
    }

    getTodos(){
        return this.projects[this.currentProject].todos;
    }

} 
