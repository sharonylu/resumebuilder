package com.sharonlu.projects.resumebuilder;

import javax.persistence.Embeddable;

@Embeddable
public class Project {
    private String name;
    private String date;
    private String description;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Project [name=" + name + ", date=" + date
                + "description=" + description + "]";
    }
}
