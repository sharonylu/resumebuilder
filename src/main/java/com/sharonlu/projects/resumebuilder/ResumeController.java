package com.sharonlu.projects.resumebuilder;

import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@RestController
public class ResumeController {
    private final ResumeRepository repository;

    private final ResumeModelAssembler assembler;

    ResumeController(ResumeRepository repository, ResumeModelAssembler assembler) {
        this.repository = repository;
        this.assembler = assembler;
    }

    @GetMapping("/resumes")
    CollectionModel<EntityModel<Resume>> all() {
        List<EntityModel<Resume>> resumes = repository.findAll().stream()
                .map(assembler::toModel)
                .collect(Collectors.toList());
        return CollectionModel.of(resumes, linkTo(methodOn(ResumeController.class).all()).withSelfRel());
    }

    @PostMapping("/resumes")
    Resume newResume(@RequestBody Resume newResume) {
        return repository.save(newResume);
    }

    @GetMapping("/resumes/{id}")
    EntityModel<Resume> one(@PathVariable Long id) {
        Resume resume = repository.findById(id)
                .orElseThrow(() -> new ResumeNotFoundException(id));
        return assembler.toModel(resume);
    }

    @PutMapping("/resumes/{id}")
    Resume replaceResume(@RequestBody Resume newResume, @PathVariable Long id) {
        return repository.findById(id)
                .map(resume -> {
                    resume.setName(newResume.getName());
                    resume.setContactInfo(newResume.getContactInfo());
                    resume.setEducation(newResume.getEducation());
                    resume.setSkills(newResume.getSkills());
                    resume.setExperiences(newResume.getExperiences());
                    resume.setProjects(newResume.getProjects());
                    return repository.save(resume);
                })
                .orElseGet(() -> {
                    newResume.setId(id);
                    return repository.save(newResume);
                });
    }

    @DeleteMapping("/resumes/{id}")
    void deleteResume(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
