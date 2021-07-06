package com.boxinator.boxinatorbackend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.boxinator.boxinatorbackend.Model.Box;
import com.boxinator.boxinatorbackend.Repository.BoxRepository;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
public class BoxController
{
    @Autowired
    BoxRepository boxRepository; // Dependancy injection

    @GetMapping(path = "/listboxes") // HTTP GET request handler
    public List<Box> getAllItems()  // Listing all the boxes

    {
        List<Box> boxes = new ArrayList<>(); // ArrayList to hold all boxes that we find
        boxRepository.findAll().forEach(boxes :: add); // Adding found boxes to ArrayList
        return boxes;
    }

    @PostMapping("/addbox") // HTTP POST request handler
    public Box addBox(@RequestBody Box box) // Adding a box
    {
        boxRepository.save(box);
        return box;
    }
}