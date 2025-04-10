import React, { useState, useEffect } from 'react';
import CommentService from '../CommentService';
import { Link } from 'react-router-dom';

const CommentListComponent = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        CommentService.getComments().then((res) => {
            setComments(res.data);
        });
    }, []);

    return (
        <div>
            <h2 className="text-center">Comments List</h2>
            <div className="row">
                <Link to="/add-comment" className="btn btn-primary">Add Comment</Link>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Comment Name</th>
                            <th>Comment Description</th>
                            <th>Product Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comments.map(comment => (
                            <tr key={comment.id}>
                                <td>{comment.name}</td>
                                <td>{comment.description}</td>
                                <td>{comment.price}</td>
                                <td>
                                    <Link to={`/update-comment/${comment.id}`} className="btn btn-info">Update</Link>
                                    <button className="btn btn-danger" onClick={() => CommentService.deleteComment(comment.id).then(() => setComments(comments.filter(p => p.id !== comment.id)))}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CommentListComponent;