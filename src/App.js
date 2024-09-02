// import React, { useState } from "react";
// import {Routes, Route } from "react-router-dom";
// // import Search from "./components/Search";
// // import Form1 from "./components/Form1"
// // import Form2 from "./components/Form2";
// // import Formnew from "./components/Formnew";
// // import Slider from "./components/Slider";
// // import Childimage from "./components/Childimage";
// // import Parentimage from "./components/Parentimage";
// // import Homework from "./components/Homework";
// import Signup from "./components/Signup";
// import Sign from "./components/Sign";
// import Home from "./components/Home";
// import Navbar from "./components/Navbar";
// import Cart from "./components/Cart";
// import Payment from "./components/Payment";
// import Sellersignup from "./Seller/Sellercomponents/Sellersignup";
// import Sellerlogin from "./Seller/Sellercomponents/Sellerlogin";
// import Sellerform from "./Seller/Sellercomponents/Sellerform";
// import Adminpanel from "./Seller/Sellercomponents/Adminpanel";
// import Mainpage from "./components/Mainpage";
// // import NewDropdown from "./components/Newdropdown";
// function App() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(false);
//   const [showcartdata, setshowcart] = useState([]);
//   const [theme, settheme] = useState();
//   // const [items, setItems] = useState([]);

//   return (
//     <>
//     <div className={theme?`bg-dark`:""}>
//     {isLoggedIn && <Navbar setSearchQuery={setSearchQuery} setIsLoggedIn={setIsLoggedIn} showcartdata={showcartdata} settheme={settheme}/>}
//     <Routes>
//     <Route path = "/Mainpage" element = {<Mainpage/>} />
//     <Route path = "/adminpanel" element = {<Adminpanel/>} />
//     <Route path = "/sellerform" element = {<Sellerform />}/>
//     <Route path = "/sellerlogin" element = {<Sellerlogin/>}/>
//     <Route path = "/sellersignup" element = {<Sellersignup/>}/>
//     <Route path = "/Signup" element = {<Signup/>}/>
//     <Route path = "/" element = {<Sign setUser={setUser} setIsLoggedIn = {setIsLoggedIn}/>}/>
//     <Route path = "/Home" element = {<Home searchQuery = {searchQuery} setIsLoggedIn={setIsLoggedIn} user = {user} />}/>
//     <Route path="/cart" element={<Cart showcartdata = {showcartdata} setshowcart={setshowcart} />} />
//     <Route path="/payment" element={<Payment/>}/>
//     </Routes>
//     </div>
//     </>
//   );
// }

// export default App;









import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Sign from "./components/Sign";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Payment from "./components/Payment";
import Sellersignup from "./Seller/Sellercomponents/Sellersignup";
import Sellerlogin from "./Seller/Sellercomponents/Sellerlogin";
import Sellerform from "./Seller/Sellercomponents/Sellerform";
import Adminpanel from "./Seller/Sellercomponents/Adminpanel";
import Mainpage from "./components/Mainpage";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(false);
  const [showcartdata, setshowcart] = useState([]);
  const [theme, settheme] = useState();

  return (
    <>
    <div className={theme?`bg-dark`:""}>
    {isLoggedIn && <Navbar setSearchQuery={setSearchQuery} setIsLoggedIn={setIsLoggedIn} showcartdata={showcartdata} settheme={settheme}/>}
    <Routes>
    <Route path = "/Mainpage" element = {<Mainpage/>} />
    <Route path = "/adminpanel" element = {<Adminpanel/>} />
    <Route path = "/sellerform" element = {<Sellerform />}/>
    <Route path = "/sellerlogin" element = {<Sellerlogin/>}/>
    <Route path = "/sellersignup" element = {<Sellersignup/>}/>
    <Route path = "/Signup" element = {<Signup/>}/>
    <Route path = "/" element = {<Sign setUser={setUser} setIsLoggedIn = {setIsLoggedIn}/>}/>
    <Route path = "/Home" element = {<Home searchQuery = {searchQuery} setIsLoggedIn={setIsLoggedIn} user = {user} />}/>
    <Route path="/cart" element={<Cart showcartdata = {showcartdata} setshowcart={setshowcart} />} />
    <Route path="/payment" element={<Payment/>}/>
    </Routes>
    </div>
    </>
  );
}

export default App;
