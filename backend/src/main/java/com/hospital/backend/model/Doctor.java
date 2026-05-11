package com.hospital.backend.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Doctor extends User {

    // වෛද්‍යවරයෙක්ට විතරක් තියෙන විශේෂ දේවල්
    private String specialization; // උදා: "Cardiologist", "Neurologist"
    private double consultationFee; // චැනලින් ගාස්තුව

    public Doctor() {
        super();
    }

    public Doctor(String name, String email, String phone, String specialization, double consultationFee) {
        // මෙතනදී අපි Role එක "DOCTOR" කියලා ඉබේම User Class එකට යවනවා
        super(name, email, phone, "DOCTOR");

        this.specialization = specialization;
        this.consultationFee = consultationFee;
    }
}