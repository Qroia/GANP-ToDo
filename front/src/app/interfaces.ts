export interface ITodo {
  id: number;
  text: string;
  isCompleted: boolean;
}

export interface ICategories {
  id: number;
  title: string;
  todos: ITodo[];
}
