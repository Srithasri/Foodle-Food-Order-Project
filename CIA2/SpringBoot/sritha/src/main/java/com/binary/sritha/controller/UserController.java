package com.binary.sritha.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.binary.sritha.model.User;
import com.binary.sritha.service.UserService;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/save")
    public ResponseEntity<?> saveUser(@RequestBody User user) {
        try {
            userService.saveUser(user);
            return new ResponseEntity<>("User registered successfully!", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Something went wrong!", HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping("/get")
    public ResponseEntity<?> getUserByEmail(@RequestParam String email) {
        try {
            return new ResponseEntity<>(userService.getUserByEmail(email), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Something went wrong", HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<?> getAllUser() {
        try {
            return new ResponseEntity<>(userService.getAllUser(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Something went wrong", HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PutMapping("/update/{email}")
    public ResponseEntity<?> updateUser(@PathVariable String email, @RequestBody User user) {
        try {
            return new ResponseEntity<>(userService.updateUser(email, user), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Something went wrong", HttpStatus.EXPECTATION_FAILED);
        }
    }

    @DeleteMapping("/delete/{email}")
    public ResponseEntity<?> deleteUser(@PathVariable String email) {
        try {
            return new ResponseEntity<>(userService.deleteUser(email), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Something went wrong", HttpStatus.EXPECTATION_FAILED);
        }
    }
    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers(
        @RequestParam(defaultValue = "0") Integer pageNo,
        @RequestParam(defaultValue = "2") Integer pageSize,
        @RequestParam(defaultValue = "id") String sortBy,
        @RequestParam(defaultValue = "asc") String sortOrder) {

        try {
            Pageable pageable = PageRequest.of(pageNo, pageSize, Sort.by(Sort.Direction.fromString(sortOrder), sortBy));
            Page<User> usersPage = userService.getAllUsers(pageable);
            List<User> users = usersPage.getContent();

            if (users.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(users, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    
}