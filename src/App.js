import BooksList from "./components/BooksList";

function App() {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center">Ran's Bookstore</h1>
      <div className="mt-10">
        <BooksList />
      </div>
    </div>
  );
}

export default App;
