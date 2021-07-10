package com.sharonlu.projects.resumebuilder;

import javax.persistence.Embeddable;

@Embeddable
public class Education {
    private String school;
    private String degree;
    private String major;
    private String minor;
    private String gpa;

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school;
    }

    public String getDegree() {
        return degree;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public String getMinor() {
        return minor;
    }

    public void setMinor(String minor) {
        this.minor = minor;
    }

    public String getGpa() {
        return gpa;
    }

    public void setGpa(String gpa) {
        this.gpa = gpa;
    }

    @Override
    public String toString() {
        return "Education [school=" + school + ", degree=" + degree + ", major=" + major
                + "minor=" + minor + ", GPA=" + gpa + "]";
    }
}
