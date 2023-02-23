package ru.mirea.study.springbootbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.mirea.study.springbootbackend.model.Note;
import ru.mirea.study.springbootbackend.repository.NoteRepository;

import java.util.List;

@RestController
public class NoteController {

    @Autowired
    private NoteRepository noteRepository;

    // get all notes
    @GetMapping("/notes")
    public List<Note> getAllNotes() {
        return noteRepository.findAll();
    }
}
