import 'antd/dist/reset.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import RBNavbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Comienzo from './components/Comienzo';

import Registro from './paginas/Registro';
import Cursos from './paginas/Cursos';
import Inicio from './paginas/Inicio';
import Login from './paginas/Login';
import { Provider } from 'react-redux';
import { store } from './app/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <RBNavbar />
        <Header />

        <Routes>
          <Route path="/registro" element={<Registro />} />
          <Route path="/catalogo" element={<Cursos />} />
          <Route path="/acerca" element={<Inicio />} />
          <Route path="/" element={<Comienzo />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
