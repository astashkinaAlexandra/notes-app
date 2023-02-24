package ru.mirea.study.springbootbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
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
}
