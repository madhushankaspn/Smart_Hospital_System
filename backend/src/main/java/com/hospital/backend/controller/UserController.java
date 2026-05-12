package com.hospital.backend.controller;

import com.hospital.backend.model.Patient;
import com.hospital.backend.model.User;
import com.hospital.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*") // ඉස්සරහට React එකෙන් එන Request වලට ඉඩ දෙන්න
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // 1. GET Request - සිස්ටම් එකේ ඉන්න ඔක්කොම පරිශීලකයින් (Patients/Doctors) බලාගන්න
    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // 2. POST Request - අලුත් රෝගියෙක් (Patient) සිස්ටම් එකට ඇතුළත් කරන්න
    @PostMapping("/patient")
    public User addPatient(@RequestBody Patient patient) {
        return userRepository.save(patient);
    }
}