import Sidebar from './features/Sidebar/Sidebar';
import './App.sass';
import { Route, Routes } from 'react-router-dom';
import { Counter } from './features/counter/Counter';
import Gallery from './features/Gallery/Gallery';
import AllCategories from './features/ImagesComponent/AllCategories';

function App() {
  return (
    <>
      <div className='components'>
        <Routes>
          <Route path="/" element={<Sidebar />}>
            <Route index element={<Counter />} />
            <Route path="category" element={<AllCategories />} />
            <Route path="category/:id" element={<Gallery />} />
            {/* <Route path="users" element={<Users />} />
            <Route path="users/:id" element={<UserProfileContainer />} /> */}
            {/* <Route path="counter" element={<Counter />} /> */}

          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
