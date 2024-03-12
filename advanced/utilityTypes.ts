// Partial<T> = Opcional

interface Task {
  id: number;
  name: string;
  description: string;
}

function updateTask(id: string, task: Partial<Task>) {}

const newTask = { name: "Jimbo" };
updateTask("1", newTask);

// Required<T> = Obligatorio

interface Todo {
  id?: number;
  name?: string;
}

const myTodo: Required<Todo> = {};

// Records<Keys, Types> Para la creación de objetos
// { key: value }

interface CatInfo {
  age: number;
  name: string;
}

type CatName = "elmer" | "omero" | "dantesito";
const cats: Record<CatName, CatInfo> = {
  dantesito: { age: 1, name: "elmer" },
  elmer: { age: 2, name: "elmer" },
  omero: { age: 3, name: "omero" },
};

// Pick<T, Properties> toma propiedades de una interface
interface ToDo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<ToDo, "title" | "completed">;
const otherTodo: TodoPreview = { title: "programar", completed: true };

// Omit<T, Properties>
type TodoOmitted = Omit<Todo, "description">;
const TodoOmitted: TodoOmitted = { id: 1, name: "Elmer" };
