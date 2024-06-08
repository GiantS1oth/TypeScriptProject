
import GlobalStyles from 'styles/GlobalStyles';
import BlinkingText from './components/BlinkingText/BlinkingText';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import About from 'Pages/About/About';
import Home from 'Pages/Home/Home';
import User from 'Pages/User/User';

// import Lesson09 from 'lessons/Lesson09/Lesson09';
// import Lesson10 from 'lessons/Lesson10/Lesson10';
// import Lesson11 from 'lessons/Lesson11/Lesson11';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      
      {/* <Lesson09 /> */}
      {/* <Lesson10 /> */}
      {/* <Lesson11/> */}
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/user' element={<User />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={'Page not found 404'} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;