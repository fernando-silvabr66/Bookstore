import { Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import Categories from './pages/Categories';
import Header from './components/Header';

const App = () => (
  <>
    <Header />
    <main className="container">
      <Routes>
        <Route path="/Bookstore/books" element={<Books />} />
        <Route path="/Bookstore/categories" element={<Categories />} />
      </Routes>
    </main>
  </>
);

export default App;
