package com.sharonlu.projects.resumebuilder;

import javax.persistence.Embeddable;

@Embeddable
public class ContactInfo {
    private String email;
    private String phoneNumber;
    private String linkedIn;
    private String github;
    private String website;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getLinkedIn() {
        return linkedIn;
    }

    public void setLinkedIn(String linkedIn) {
        this.linkedIn = linkedIn;
    }

    public String getGithub() {
        return github;
    }

    public void setGithub(String github) {
        this.github = github;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    @Override
    public String toString() {
        return "Contact info [email=" + email + ", phone number=" + phoneNumber
                + ", LinkedIn=" + linkedIn + ", Github=" + github + ", website=" + website + "]";
    }
}
