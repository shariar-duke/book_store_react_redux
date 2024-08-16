import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import Header from "./components/Header";
export default function App() {
  return (
    <div className="h-[100vh] bg-[#F8F8F8] px-[20px]">
      <Header/>
      <div className="grid grid-cols-4 gap-[50px] pt-[20px]">
        <div className="col-span-3">
          <BookList />
        </div>
        <div className="flex justify-center ">
          <div>
          <AddBook  />
          </div>
   
        </div>
      </div>
    </div>
  );
}
