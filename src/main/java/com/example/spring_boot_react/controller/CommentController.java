package com.example.spring_boot_react.controller;

import com.example.spring_boot_react.model.Comment;
import com.example.spring_boot_react.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")  // React app URL
@RestController
@RequestMapping("/api/comments")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @GetMapping
    public List<Comment> getAllComments() {
        return commentService.getAllComments();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Comment> getCommentById(@PathVariable Long id) {
        Optional<Comment> comment = commentService.getCommentById(id);
        return comment.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Comment createComment(@RequestBody Comment comment) {
        return commentService.saveComment(comment);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Comment> updateComment(@PathVariable Long id, @RequestBody Comment commentDetails) {
        Optional<Comment> commentOptional = commentService.getCommentById(id);
        if (commentOptional.isPresent()) {
            Comment comment = commentOptional.get();
            comment.setName(commentDetails.getName());
            comment.setDescription(commentDetails.getDescription());
            comment.setPrice(commentDetails.getPrice());
            return ResponseEntity.ok(commentService.updateComment(comment));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteComment(@PathVariable Long id) {
        Optional<Comment> comment = commentService.getCommentById(id);
        if (comment.isPresent()) {
            commentService.deleteComment(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
