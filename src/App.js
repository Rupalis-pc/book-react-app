import Books from "./Components/Books";
import BookByTitle from "./Components/BookByTitle";
import BookByAuthor from "./Components/BookByAuthor";
import AddBookForm from "./Components/AddBookForm";

export default function App() {
  return (
    <main>
      <AddBookForm />
      <Books />
      <BookByTitle title="Shoe Dog" />
      <BookByAuthor author="Harper Lee" />
    </main>
  );
}
