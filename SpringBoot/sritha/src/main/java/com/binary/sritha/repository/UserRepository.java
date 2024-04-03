package com.binary.sritha.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.binary.sritha.model.User;

public interface UserRepository extends JpaRepository<User, String> {

    // Optional<User> existsByEmail(String email);
    boolean existsByEmail(String email);

    Optional<User> findByEmail(String email);

    void deleteByEmail(String email);

}