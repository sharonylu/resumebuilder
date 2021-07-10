package com.sharonlu.projects.resumebuilder;

public class ResumeNotFoundException extends RuntimeException {
    ResumeNotFoundException(Long id) {
        super("Could not find resume " + id);
    }
}
