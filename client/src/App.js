import Header from './components/Header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import About from './screens/About'
import Blog from './screens/Blog'
import AuthScreen from './screens/AuthScreen'


function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen/>} exact></Route>
            <Route path="/blog" element={<Blog/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/signin" element={<AuthScreen/>}></Route>
          </Routes>
        </Container>
      </main>
    </Router>



  );
}

export default App;
