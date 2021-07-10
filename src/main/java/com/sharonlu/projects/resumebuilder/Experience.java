package com.sharonlu.projects.resumebuilder;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class Experience {
    private String title;
    private String company;
    private String date;

    @Column(length = 500)
    private String description;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
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
        return "Experience [title=" + title + ", company=" + company + ", date=" + date
                + "description=" + description + "]";
    }
}
