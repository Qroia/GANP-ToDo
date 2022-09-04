export interface ICategoriesDialog {
  title: string[];
}

export interface ICategory {
  title: string;
}

export interface ICategories {
  id: number;
  title: string;
  todos: ITodo[];
}

export interface ITodo {
  id: number;
  text: string;
  isCompleted: boolean;
}

export interface ITodoComplete {
  isCompleted: boolean;
}

export interface ITodoAdd {
  title: string;
  categoryId: string;
}
