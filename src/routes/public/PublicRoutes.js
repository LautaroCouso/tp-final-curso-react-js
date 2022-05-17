import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignUp from '../../pages/sign-up/signUp';
import SignIn from '../../pages/sign-in/SignIn';

export default function PublicRoutes() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign-in</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign-up</Link>
          </li>
        </ul>
        <hr />

        <Routes>
          <Route exact path="/">
            {/*<Home/>*/}
          </Route>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

//
