package ru.mirea.study.springbootbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.mirea.study.springbootbackend.exception.ResourceNotFoundException;
import ru.mirea.study.springbootbackend.model.Folder;
import ru.mirea.study.springbootbackend.repository.FolderRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class FolderController {

    @Autowired
    private FolderRepository folderRepository;

    // get all folders
    @GetMapping("/folders")
    public List<Folder> getAllFolders() {
        return folderRepository.findAll();
    }

    // get folder by id
    @GetMapping("/folders/{id}")
    public ResponseEntity<Folder> getFolderById(@PathVariable(value = "id") Long id)
            throws ResourceNotFoundException {
        Folder folder = folderRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Folder not exist with id: " + id));
        return ResponseEntity.ok().body(folder);
    }

    // create folder rest api
    @PostMapping("/folders")
    public Folder createFolder(@RequestBody Folder folder) {
        return folderRepository.save(folder);
    }

    @PutMapping("/folders/{id}")
    public ResponseEntity<Folder> updateFolder(@PathVariable Long id, @RequestBody Folder folderDetails) throws ResourceNotFoundException {
        Folder folder = folderRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Folder not exist with id: " + id));

        folder.setTitle(folderDetails.getTitle());

        Folder updatedFolder = folderRepository.save(folder);
        return ResponseEntity.ok(updatedFolder);
    }

    // delete folder rest api
    @DeleteMapping("/folders/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteFolder(@PathVariable Long id) throws ResourceNotFoundException {
        Folder folder = folderRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Folder not exist with id: " + id));

        folderRepository.delete(folder);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
