package com.hospital.backend.model; // ඔයාගේ හරියටම තියෙන package නම මෙතන තියෙන්න ඕනේ

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Document(collection = "users")
public abstract class User {

    @Id
    private String id;

    private String name;
    private String email;
    private String phone;
    private String role; // මෙතනට එන්නේ "PATIENT", "DOCTOR", හෝ "ADMIN" කියන එක

    // MongoDB එකට දත්ත කියවන්න ඕන කරන හිස් Constructor එක
    public User() {}

    // අපිට කෝඩ් එකෙන් දත්ත දාන්න ඕන කරන Constructor එක
    public User(String name, String email, String phone, String role) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.role = role;
    }
}