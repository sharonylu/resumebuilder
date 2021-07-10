package com.sharonlu.projects.resumebuilder;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;

@Configuration
public class LoadDatabase {

    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

    @Bean
    CommandLineRunner initDatabase(ResumeRepository repository) {
        ContactInfo contactInfo = new ContactInfo();
        contactInfo.setEmail("sharon@gmail.com");
        contactInfo.setPhoneNumber("123-456-7890");
        contactInfo.setLinkedIn("linkedin.com/in/sharon");
        contactInfo.setGithub("github.com/sharon");
        contactInfo.setWebsite("sharon.com");

        Education education1 = new Education();
        education1.setSchool("University of California, Los Angeles");
        education1.setDegree("B.A.");
        education1.setMajor("Linguistics & Computer Science");
        education1.setMinor("Digital Humanities");
        education1.setGpa("4.0");

        ArrayList<Education> education = new ArrayList<>();
        education.add(education1);

        ArrayList<String> skills = new ArrayList<>();
        skills.add("Python");
        skills.add("Java");
        skills.add("C / C++ / C+");
        skills.add("R");
        skills.add("Javascript");
        skills.add("Linux");
        skills.add("Git");
        skills.add("React.JS");
        skills.add("Spring");

        Experience experience1 = new Experience();
        experience1.setTitle("API/Backend Software Engineering Intern");
        experience1.setCompany("LinkedIn");
        experience1.setDate("June-September 2020");
        experience1.setDescription(
                "Defined data models and implemented service code using Rest.li and Java for Premium Subscription endpoint, which provides data to render page where users can purchase a Premium subscription.\n" +
                "Redesigned and refactored API to improve latency and reusability.\n" +
                "Wrote unit tests to ensure code quality and maintainability.\n" +
                "Collaborated with client-side engineers to orient API design around the client experience.");

        Experience experience2 = new Experience();
        experience2.setTitle("Frontend Developer");
        experience2.setCompany("UCLA Linguistics Department");
        experience2.setDate("Jan-June 2020");
        experience2.setDescription(
                "Redesigned and implemented UI for website used by linguistic researchers to collaborate and share research about the properties of languages.\n" +
                "Added new “completeness indicator” feature to offer a user-friendly, visual representation of how much information has been provided about a particular language.\n" +
                "Worked with Ruby on Rails, HAML, CSS.");

        Experience experience3 = new Experience();
        experience3.setTitle("Game Design Intern");
        experience3.setCompany("X9 Games");
        experience3.setDate("June-September 2018");
        experience3.setDescription(
                "Designed and developed new features for 3 games using Unity and C#.\n" +
                "Created and presented proposals for new characters, levels, power ups, and game ideas.\n" +
                "Performed functionality and play testing to find bugs.");

        ArrayList<Experience> experiences = new ArrayList<>();
        experiences.add(experience1);
        experiences.add(experience2);
        experiences.add(experience3);

        Project project1 = new Project();
        project1.setName("Notebook App");
        project1.setDate("Jan-March 2021");
        project1.setDescription(
                "Used React.JS to design and build web-based application for note-taking that enables" +
                "user to create and store notes as well as add tags to make them easier to find and browse.");

        Project project2 = new Project();
        project2.setName("Zombie Dash");
        project2.setDate("Winter 2019");
        project2.setDescription(
                "Designed and built game in C++ in which player must lead citizens to an exit while shooting and avoiding zombies.\n" +
                "Implemented features such as graphics (XQuartz), sounds, characters, power ups, obstacles, and multiple levels.");

        ArrayList<Project> projects = new ArrayList<>();
        projects.add(project1);
        projects.add(project2);

        return args -> {
            log.info("Preloading " + repository.save(
                    new Resume("Sharon Lu", contactInfo, education, skills, experiences, projects)));
        };
    }
}
