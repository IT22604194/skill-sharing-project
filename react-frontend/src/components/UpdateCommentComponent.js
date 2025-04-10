import React, { useState, useEffect } from 'react';
import CommentService from '../CommentService';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateCommentComponent = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
       CommentService.getCommentById(id).then((res) => {
            const comment = res.data;
            setName(comment.name);
            setDescription(comment.description);
            setPrice(comment.price);
        });
    }, [id]);

    const updateComment = (e) => {
        e.preventDefault();
        const comment = { name, description, price };
        CommentService.updateComment(comment, id).then(() => {
            navigate('/comments');
        });
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Update Comment</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> Comment Name: </label>
                                    <input placeholder="Name" name="name" className="form-control"
                                        value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> Comment Description: </label>
                                    <input placeholder="Description" name="description" className="form-control"
                                        value={description} onChange={(e) => setDescription(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> Product Price: </label>
                                    <input placeholder="Price" name="price" className="form-control"
                                        value={price} onChange={(e) => setPrice(e.target.value)} />
                                </div>
                                <button className="btn btn-success" onClick={updateComment}>Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateCommentComponent;