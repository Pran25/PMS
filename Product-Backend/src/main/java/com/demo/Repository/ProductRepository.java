package com.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.Model.Product;
@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{

}
