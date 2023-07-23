import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import Category from "./Pages/Category";
import DetailsPage from "./Pages/DetailsPage";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}  />
        <Route path="/about" element={<AboutPage></AboutPage>} />
        <Route path="/byCatgory/:categoryID" element={<Category></Category>} />
        <Route path="/details/:postID" element={<DetailsPage></DetailsPage>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;