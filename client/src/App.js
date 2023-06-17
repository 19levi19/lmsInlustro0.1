
import Home from "./pages/home/Home";
import List from "./pages/List/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<login/>}/>
          <Route path="users">
            <Route index element={<List/>}/>
            <Route path=":userId" element={<single/>}/>
            <Route path="new" element={<new/>}/>  
          </Route>
          <Route path="Products">
            <Route index element={<List/>}/>
            <Route path=":productId" element={<single/>}/>
            <Route path="new" element={<new/>}/>  
          </Route>
        </Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
