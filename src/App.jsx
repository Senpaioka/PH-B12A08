import { Outlet } from "react-router";
import { ToastContainer } from 'react-toastify';
import Nav from './components/Nav';
import Footer from "./components/Footer";

//  const notify = () => toast('Wow so easy !');

function App() {
  
  return(
    <>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App;