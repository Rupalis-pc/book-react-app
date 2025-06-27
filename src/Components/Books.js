import useFetch from "../useFetch";

const Books = () => {
  const { data, loading, error } = useFetch(
    `https://be-4-assignment1-blush.vercel.app/books`
  );

  // console.log(data);

  const handleDelete = async (bookId) => {
    try {
      const response = await fetch(
        `https://be-4-assignment1-blush.vercel.app/books/${bookId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        console.log("Failed to delete Book.");
      }

      const deleteData = response.json();
      window.location.reload();

      if (deleteData) {
        console.log("Book deleted successfully.");
      }
    } catch (error) {
      console.log("Error deleting Data.");
    }
  };

  return (
    <div>
      <h1>All Books</h1>
      <ul>
        {data?.map((book) => (
          <li key={book._id}>
            {book.title}{" "}
            <button onClick={() => handleDelete(book._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
