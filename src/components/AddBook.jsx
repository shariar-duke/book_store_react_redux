import { useState } from "react";
export default function AddBook() {
  const [state, setState] = useState({
    bookName: "",
    author: "",
    imgUrl: "",
    price: "",
    rating: 0,
    featured: false,
  });

  const { bookName, author, imgUrl, price, rating, featured } = state;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = name === "featured" ? e.target.checked : e.target.value;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="max-w-[360px] rounded-md p-[20px] shadow-xl">
      <form onSubmit={handleSubmit}>
        <p className="text-center font-bold text-[20px]"> Add New Book </p>
        <div className="mt-[20px]">
          <label
            htmlFor="bookName"
            className="block text-gray-600 font-bold mb-2"
          >
            Book Name
          </label>
          <input
            required
            onChange={handleChange}
            type="text"
            name="bookName"
            value={bookName}
            id="bookName"
            className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:border-black-500 w-full"
          />
        </div>

        <div>
          <label
            htmlFor="author"
            className="block text-gray-600  font-bold my-2"
          >
            Author
          </label>
          <input
            required
            onChange={handleChange}
            type="text"
            name="author"
            value={author}
            id="author"
            className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:border-black-500 w-full"
          />
        </div>

        <div>
          <label
            className="block text-gray-600  font-bold my-2"
            htmlFor="imgUrl"
          >
            Image Url
          </label>
          <input
            required
            onChange={handleChange}
            type="text"
            name="imgUrl"
            id="imgUrl"
            value={imgUrl}
            className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:border-black-500 w-full"
          />
        </div>

        <div className="flex  my-2 gap-[10px]">
          <div>
            <label
              className="block text-gray-600  font-bold my-2"
              htmlFor="price"
            >
              Price{" "}
            </label>
            <input
              required
              onChange={handleChange}
              type="number"
              name="price"
              id="price"
              value={price}
              className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:border-black-500 w-full"
            />
          </div>
          <div>
            <label
              className="block text-gray-600  font-bold my-2"
              htmlFor="rating"
            >
              Rating
            </label>
            <input
              required
              onChange={handleChange}
              type="number"
              name="rating"
              max={5}
              value={rating}
              id="rating"
              className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:border-black-500 w-full"
            />
          </div>
        </div>

        <div>
          <input
            className=""
            type="checkbox"
            id="featured"
            name="featured"
            checked={featured}
            onChange={handleChange}
          />
          <label
            className="text-[14px] text-gray-500 ml-[6px]"
            htmlFor="featured"
          >
            {" "}
            This is a featured book
          </label>
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            disabled={false}
            className=" w-full text-white text-[14px] font-bold text-lg mt-[8px] bg-orange-400 hover:bg-orange-500 active:bg-black px-[30px] py-[4px] rounded-md shadow-md cursor-pointer transition-all duration-200"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}
