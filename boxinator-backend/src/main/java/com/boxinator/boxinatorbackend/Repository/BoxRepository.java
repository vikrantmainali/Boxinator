package com.boxinator.boxinatorbackend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.boxinator.boxinatorbackend.Model.Box;

public interface BoxRepository extends JpaRepository<Box, Integer>
{

}