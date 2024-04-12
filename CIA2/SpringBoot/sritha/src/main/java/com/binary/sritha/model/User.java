package com.binary.sritha.model;


// import java.util.ArrayList;
// import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="userfinal")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
  
    private Long id;
    private String name;
    private String email;
    private String password;
    
    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    // @JoinColumn(name = "id", referencedColumnName = "id")
    @JsonManagedReference
    private Address address;
   

    public User() {
    }

    public User(Long id,String name, String email, String password) {
        this.id=id;
        this.name = name;
        this.email = email;
        this.password = password;
      
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    } 
    // @OneToMany(mappedBy="user",cascade=CascadeType.ALL)
    // @JsonManagedReference
    
    // private List<Food> fd=new ArrayList<>();


    // public List<Food> getFd() {
    //     return fd;
    // }

    // public void setFd(List<Food> fd) {
    //     this.fd = fd;
    // }
    
}
