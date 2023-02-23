package ru.mirea.study.springbootbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.mirea.study.springbootbackend.model.Note;

@Repository
public interface NoteRepository extends JpaRepository<Note, Long> {

}
