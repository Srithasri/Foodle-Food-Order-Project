package com.binary.sritha.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.binary.sritha.model.Address;

public interface AddressRepository extends JpaRepository<Address
,Long> {

}
