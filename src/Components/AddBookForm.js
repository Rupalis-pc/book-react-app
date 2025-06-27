import { useState } from "react";

const GENRE_OPTIONS = [
  "Fiction",
  "Non-Fiction",
  "Mystery",
  "Thriller",
  "Science Fiction",
  "Fantasy",
  "Romance",
  "Historical",
  "Biography",
  "Self-help",
  "Business",
  "Autobiography",
  "Other",
];

const AddBookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishedYear: "",
    genre: [],
    language: "",
    country: "",
    rating: "",
    summary: "",
    coverImageUrl: "",
  });

  // console.log(formData.genre);

  const handleChange = (event) => {
    // console.log(event.target);
    const { name, value } = event.target;

    setFormData((prevState) => {
      return {
        ...prevState,
        [name]:
          name === "publishedYear" || name === "rating"
            ? parseInt(value)
            : value,
      };
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://be-4-assignment1-blush.vercel.app/books",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        console.log("Failed to add Book");
      }

      const data = await response.json();

      console.log("Added Book", data);
    } catch (error) {
      console.log("Error adding book:", error.message || error);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Add a Book</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Title: </label> <br />
        <input
          id="title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="author">Author: </label> <br />
        <input
          id="author"
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="publishedYear">Published Year: </label> <br />
        <input
          id="publishedYear"
          type="number"
          name="publishedYear"
          value={formData.publishedYear}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Genre: </label> <br />
        {GENRE_OPTIONS.map((genre) => (
          <label
            key={genre}
            id={genre}
            style={{ display: "block", marginBottom: "4px" }}
          >
            <input
              type="checkbox"
              id={genre}
              value={genre}
              checked={formData.genre.includes(genre)}
              onChange={(event) => {
                const checked = event.target.checked;
                const value = event.target.value;
                setFormData((prev) => ({
                  ...prev,
                  genre: checked
                    ? [...prev.genre, value] //add genre
                    : prev.genre.filter((g) => g !== value), //remove genre
                }));
              }}
            />
            {genre}
          </label>
        ))}
        <br />
        <br />
        <label htmlFor="language">Language: </label> <br />
        <input
          id="language"
          type="text"
          name="language"
          value={formData.language}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="country">Country: </label> <br />
        <input
          id="country"
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="rating">Rating: </label> <br />
        <input
          id="rating"
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="summary">Summary: </label> <br />
        <input
          id="summary"
          type="text"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="coverImageUrl">Cover Image Url: </label> <br />
        <input
          id="coverImageUrl"
          type="text"
          name="coverImageUrl"
          value={formData.coverImageUrl}
          onChange={handleChange}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddBookForm;
