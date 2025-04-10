package com.example.spring_boot_react.service;

import com.example.spring_boot_react.model.Comment;

import java.util.List;
import java.util.Optional;

public interface CommentService {
    List<Comment> getAllComments();
    Optional<Comment> getCommentById(Long id);
    Comment saveComment(Comment comment);
    Comment updateComment(Comment comment);
    void deleteComment(Long id);
}
