package com.binary.sritha.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.binary.sritha.model.Address;
import com.binary.sritha.repository.AddressRepository;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestParam;



@RestController
public class AddressController {
 
    @Autowired
    private AddressRepository ar;
    @PostMapping("/add")
    public ResponseEntity<?> post1(@RequestBody Address a) {
        try {
            return new ResponseEntity<>(ar.save(a), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Something went wrong", HttpStatus.EXPECTATION_FAILED);
        }
    }

    // @GetMapping("/getAll")
    // public ResponseEntity<?> getAllUser() {
    //     try {
    //         return new ResponseEntity<>(ar.findAll(), HttpStatus.ACCEPTED);
    //     } catch (Exception e) {
    //         return new ResponseEntity<>("NOT_FOUND", HttpStatus.EXPECTATION_FAILED);
    //     }
    // }


    

}
