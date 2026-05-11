package com.hospital.backend.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Patient extends User {

    // User කෙනෙක්ට නැති, රෝගියෙක්ට විතරක් තියෙන විශේෂ දේවල්
    private String bloodGroup;
    private String address;

    public Patient() {
        super(); // පියාගේ (User ගේ) හිස් Constructor එකට කතා කිරීම
    }

    public Patient(String name, String email, String phone, String bloodGroup, String address) {
        // super() එකෙන් කරන්නේ name, email වගේ පොදු දේවල් ටික අර Parent (User) Class එකට යවන එක
        super(name, email, phone, "PATIENT");

        // රෝගියාට විතරක් අදාළ දේවල් මෙතන සේව් කරනවා
        this.bloodGroup = bloodGroup;
        this.address = address;
    }
}