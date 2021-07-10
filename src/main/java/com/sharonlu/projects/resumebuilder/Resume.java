package com.sharonlu.projects.resumebuilder;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
public class Resume {
    private @Id @GeneratedValue Long id;
    private String name;
    private ContactInfo contactInfo;

    @ElementCollection
    private List<Education> education;

    @ElementCollection
    private List<String> skills;

    @ElementCollection
    private List<Experience> experiences;

    @ElementCollection
    private List<Project> projects;

    public Resume() {}

    public Resume(String name, ContactInfo contactInfo, List<Education> education,
                  List<String> skills, List<Experience> experiences, List<Project> projects) {
        this.name = name;
        this.contactInfo = contactInfo;
        this.education = education;
        this.skills = skills;
        this.experiences = experiences;
        this.projects = projects;
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

    public ContactInfo getContactInfo() {
        return contactInfo;
    }

    public void setContactInfo(ContactInfo contactInfo) {
        this.contactInfo = contactInfo;
    }

    public List<Education> getEducation() {
        return education;
    }

    public void setEducation(List<Education> education) {
        this.education = education;
    }

    public List<String> getSkills() {
        return skills;
    }

    public void setSkills(List<String> skills) {
        this.skills = skills;
    }

    public List<Experience> getExperiences() {
        return experiences;
    }

    public void setExperiences(List<Experience> experiences) {
        this.experiences = experiences;
    }

    public List<Project> getProjects() { return projects; }

    public void setProjects(List<Project> projects) { this.projects = projects; }

    @Override
    public boolean equals (Object o) {
        if (this == o)
            return true;
        if (!(o instanceof Resume))
            return false;
        Resume resume = (Resume) o;
        return Objects.equals(this.id, resume.id) && Objects.equals(this.name, resume.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id, this.name);
    }

    @Override
    public String toString() {
        return "Resume{" + "id=" + this.id + ", name='" + this.name + '\'' + '}';
    }
}
