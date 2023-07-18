import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import GlobalStyles from './globalStyles'
import Home from './pages/HomePage/Home';
import ScrollToTop from './components/ScrollToTop';
import InstructionBlog from './pages/BlogPages/InstructionBlog/instructionBlog';
import ReasonBlogPage from './pages/BlogPages/Reasons/ReasonBlog';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog/instructions" component={InstructionBlog} />
        <Route path="/blog/reason" component={ReasonBlogPage} />
      </Switch>
    </Router>
  );
}
export default App;
