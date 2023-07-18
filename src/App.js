import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import GlobalStyles from './globalStyles'
import { Navbar, Footer } from "./components";
import Home from './pages/HomePage/Home';
import ScrollToTop from './components/ScrollToTop';
import InstructionBlog from './pages/BlogPages/InstructionBlog/instructionBlog';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog/instructions" component={InstructionBlog} />
      </Switch>
    </Router>
  );
}
export default App;
