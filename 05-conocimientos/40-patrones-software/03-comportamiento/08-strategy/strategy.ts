export type TState = "NEW" | "GOOD" | "REGULAR";

export type TBook = {
  id: number;
  title: string;
  state: TState;
  isAvailable: boolean;
};

export class Books {
  private list: TBook[] = [
    { id: 1, title: "NodeJS", state: "NEW", isAvailable: true },
    { id: 2, title: "NodeJS", state: "NEW", isAvailable: true },
    { id: 3, title: "NodeJS", state: "GOOD", isAvailable: true },
    { id: 4, title: "NodeJS", state: "REGULAR", isAvailable: true },

    { id: 5, title: "Angular", state: "NEW", isAvailable: true },
    { id: 6, title: "Angular", state: "NEW", isAvailable: true },
    { id: 7, title: "Angular", state: "NEW", isAvailable: true },
    { id: 8, title: "Angular", state: "REGULAR", isAvailable: true },

    { id: 9, title: "Typescript", state: "NEW", isAvailable: true },
    { id: 10, title: "Typescript", state: "GOOD", isAvailable: true },
    { id: 11, title: "Typescript", state: "GOOD", isAvailable: true },
    { id: 12, title: "Typescript", state: "GOOD", isAvailable: true },
  ];

  getBooks(): TBook[] {
    return [...this.list];
  }

  updateAvailability(id: number) {
    const book = this.list.find((el) => el.id === id);

    if (book) book.isAvailable = false;
  }
}

export abstract class SearchBook {
  booksList!: TBook[];
  books = new Books();

  constructor() {
    this.loadBooks();
  }

  loadBooks() {
    this.booksList = this.books.getBooks();
  }

  findByType(title: string, ...states: TState[]): TBook | undefined {
    let position = 0;
    let book: TBook | undefined;

    while (position < states.length) {
      book = this.booksList.find(
        (el) =>
          el.state === states[position] && el.title === title && el.isAvailable
      );

      position++;
      if (book) break;
    }

    if (book) this.books.updateAvailability(book.id);

    this.loadBooks();

    return book;
  }

  abstract findBook(title: string): TBook | undefined;
}

export class Student extends SearchBook {
  findBook(title: string): TBook | undefined {
    return this.findByType(title, "REGULAR", "GOOD", "NEW");
  }
}

export class Teacher extends SearchBook {
  findBook(title: string): TBook | undefined {
    return this.findByType(title, "GOOD", "NEW", "REGULAR");
  }
}

export class Researcher extends SearchBook {
  findBook(title: string): TBook | undefined {
    return this.findByType(title, "NEW", "GOOD", "REGULAR");
  }
}

export class Strategy {
  findBookByRole(entity: SearchBook, title: string) {
    return entity.findBook(title);
  }
}
