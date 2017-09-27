package com.example.poligon.poligon.entity;

import javax.persistence.*;

@Entity(name = "teacher_tbl")
public class Teacher {
    @Id
    @Column(name = "teacher_id")
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long id;
    @Embedded
    private Standart standart;


    public Teacher(Standart standart) {
        this.standart = standart;
    }

    public Standart getStandart() {
        return standart;
    }

    public void setStandart(Standart standart) {
        this.standart = standart;
    }

    public Teacher() {
    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


}
