package ru.mirea.study.springbootbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.mirea.study.springbootbackend.exception.ResourceNotFoundException;
import ru.mirea.study.springbootbackend.model.Note;
import ru.mirea.study.springbootbackend.repository.NoteRepository;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class NoteController {

    @Autowired
    private NoteRepository noteRepository;

    // get all notes
    @GetMapping("/notes")
    public List<Note> getAllNotes() {
        return noteRepository.findAll();
    }

    // create note rest api
    @PostMapping("/notes")
    public Note createNote(@RequestBody Note note) {
        return noteRepository.save(note);
    }

    // get note by id rest api
    @GetMapping("/notes/{id}")
    public ResponseEntity<Note> getNoteById(@PathVariable Long id) {
        Note note = noteRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Note not exist with id: " + id));
        return ResponseEntity.ok(note);
    }
}
