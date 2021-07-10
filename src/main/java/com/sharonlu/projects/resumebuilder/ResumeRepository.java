package com.sharonlu.projects.resumebuilder;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
interface ResumeRepository extends JpaRepository<Resume, Long> {
}