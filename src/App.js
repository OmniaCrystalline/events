/** @format */

import {
  Route,
  Routes,
} from "react-router-dom";
import Layout from "../src/components/Layout";
import CreatePage from "./pages/Create";
import EventsPage from "./pages/EventsPage";
import CurrentPage from "./pages/Current";
import EditPage from "./pages/EditPage";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Events Planner";
  }, []);
  
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
