// You could do the same things with the type and interface
// These practices helps us to write clean data

// interface todo {
//   id: string
//   text: string
// }


export class Todo {
  id: string
  text: string

  constructor(todoText: string) {
    this.id = new Date().toISOString();
    this.text = todoText;
  }
}
