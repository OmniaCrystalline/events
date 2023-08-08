/** @format */

import {
  Route,
  Routes,
  //Navigate
} from "react-router-dom";
import Layout from "../src/components/Layout";
import CreatePage from "./pages/Create";
import EventsPage from "./pages/EventsPage";
import CurrentPage from "./pages/Current";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index path='/' element={<EventsPage />}/>
        <Route path='/create' element={<CreatePage />} />
        <Route path='/:id' element={<CurrentPage />} />
        <Route path="/edit" element={<EditPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
