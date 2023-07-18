import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import GlobalStyles from './globalStyles'
import Home from './pages/HomePage/Home';
import ScrollToTop from './components/ScrollToTop';
import InstructionBlog from './pages/BlogPages/InstructionBlog/instructionBlog';
import ReasonBlogPage from './pages/BlogPages/Reasons/ReasonBlog';



const InstallPage =()=>  {
  window.location = "/blog/instructions"
  return <></>
}


function App() {
  return (
    <Router>
      <GlobalStyles />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/install" component={InstallPage} />
        <Route path="/blog/instructions" component={InstructionBlog} />
        <Route path="/blog/reasons" component={ReasonBlogPage} />
      </Switch>
    </Router>
  );
}
export default App;
