import useFetch from "../useFetch";

const BookByAuthor = ({ author }) => {
  const { data, loading, error } = useFetch(
    `https://be-4-assignment1-blush.vercel.app/books/author/${author}`
  );

  // console.log(data);

  return data ? (
    <div>
      <h1>Books by Harper Lee</h1>
      <ul>
        {data.map((book) => (
          <li key={book._id}>{book.title}</li>
        ))}
      </ul>
    </div>
  ) : (
    loading && <p>Loading...</p>
  );
};

export default BookByAuthor;
