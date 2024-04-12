package com.binary.sritha.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "addressfinal")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
   
    private Long id;

    private Long phone;
    private int doorno;
    private String street;
    private String city;
    
    // @JsonIgnore
    @OneToOne
    @JsonBackReference
    private User user;

    public Address() {
    }

    public Address(Long id,Long phone, int doorno, String street, String city,User user) {
        this.id=id;
        this.phone = phone;
        this.doorno = doorno;
        this.street = street;
        this.city = city;
        this.user=user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getPhone() {
        return phone;
    }

    public void setPhone(Long phone) {
        this.phone = phone;
    }

    public int getDoorno() {
        return doorno;
    }

    public void setDoorno(int doorno) {
        this.doorno = doorno;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
