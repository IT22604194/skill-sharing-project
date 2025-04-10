import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CommentListComponent from './components/CommentListComponent';
import AddCommentComponent from './components/AddCommentComponent';
import UpdateCommentComponent from './components/UpdateCommentComponent';

import './App.css';

function App() {
  return (
    <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<CommentListComponent />} />
                    <Route path="/comments" element={<CommentListComponent />} />
                    <Route path="/add-comment" element={<AddCommentComponent />} />
                    <Route path="/update-comment/:id" element={<UpdateCommentComponent />} />
                </Routes>
            </div>
        </Router>
  );
}

export default App;
