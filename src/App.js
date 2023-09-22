//import logo from './logo.svg';
//import './App.css';
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Nav from './commponent/Nav/Nav';
import Home from './commponent/Home';
import About from './commponent/About';
import Skills from './commponent/Skills';
import Education from './commponent/Education';
import Projects from './commponent/Projects';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },{
        path: 'skills',
        element: <Skills />
      },{
        path: 'eduction',
        element: <Education />
      },{
        path: 'project',
        element: <Projects />
      }
    ]

  }

])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
