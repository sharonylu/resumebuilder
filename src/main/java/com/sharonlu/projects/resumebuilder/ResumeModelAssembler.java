package com.sharonlu.projects.resumebuilder;

import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Component
public class ResumeModelAssembler implements RepresentationModelAssembler<Resume, EntityModel<Resume>> {

    @Override
    public EntityModel<Resume> toModel(Resume resume) {
        return EntityModel.of(resume,
                linkTo(methodOn(ResumeController.class).one(resume.getId())).withSelfRel(),
                linkTo(methodOn(ResumeController.class).all()).withRel("resumes"));
    }
}
