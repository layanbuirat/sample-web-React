import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './assets/component/navbar.jsx'; // Import the Navbar component
import Login from './assets/component/login.jsx'; // Import the Navbar component
import Footer from './assets/component/footer.jsx'; // Import the Navbar component
import welcom from './assets/HI.png'
import Portfolio from './assets/Portfolio.png'
import start from './assets/start.png'


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar /> {/* Correctly render the Navbar component */}
      <div className="container">
      </div>
      <div className="welcom" style={{ backgroundColor: 'rgb(89, 158, 135)' }}>
        <img src={welcom} />
        <h1>Start Bootstrap</h1>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
      <div className="Portfolio" style={{ backgroundColor: 'rgb(236, 242, 240)' }}>
        <h2>Portfolio</h2>
        <img src={Portfolio} />
      </div>
      <div className='about' style={{ backgroundColor: 'rgb(89, 158, 135)' }}>
        <h3>About</h3>
        <img src={start} />
        <p>Freelancer is a free bootstrap theme created by .</p>
        <p>Start Bootstrap. The download includes the complete source files including HTML</p>
        <p>, CSS, and JavaScript as well as optional SASS stylesheets for easy customization</p>
        <p>You can create your own custom avatar for the masthead,</p>
        <p> change the icon in the dividers, and add your email </p>
        <p>address to the contact form to make it fully functional!</p>
        <a href="/path/to/your/download/file.zip" download>
          <button className="btn btn-success">Free Download</button>
        </a>
      </div>
      <div className='App'>
        <Login />
      </div>
      <div className='footer' style={{ backgroundColor: 'rgb(68, 73, 106)' }}>
        <Footer />
      </div>
    </>
  );
}

export default App;
