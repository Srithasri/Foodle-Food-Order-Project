package com.binary.sritha.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.binary.sritha.model.Food;

public interface FoodRepository extends JpaRepository<Food,Long> {

}
