import { ToDoModel } from './todo.schema';

export const createTodo = async (title: string) => {
  const todo = new ToDoModel({ title });
  return await todo.save();
};

export const getAllTodos = async () => {
  return await ToDoModel.find();
};

export const updateTodo = async (id: string, title: string) => {
  return await ToDoModel.findByIdAndUpdate(id, { title }, { new: true });
};

export const deleteTodo = async (id: string) => {
  return await ToDoModel.findByIdAndDelete(id);
};

