import React from "react";
import '../App.css';

export default function AddResume() {
    const [firstLoad, setLoad] = React.useState(true);

    const [name, setName] = React.useState("");

    const [email, setEmail] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [linkedIn, setLinkedIn] = React.useState("");
    const [github, setGithub] = React.useState("");
    const [website, setWebsite] = React.useState("");

    const [school1, setSchool1] = React.useState("");
    const [degree1, setDegree1] = React.useState("");
    const [major1, setMajor1] = React.useState("");
    const [minor1, setMinor1] = React.useState("");
    const [gpa1, setGpa1] = React.useState("");

    const [school2, setSchool2] = React.useState("");
    const [degree2, setDegree2] = React.useState("");
    const [major2, setMajor2] = React.useState("");
    const [minor2, setMinor2] = React.useState("");
    const [gpa2, setGpa2] = React.useState("");

    const [school3, setSchool3] = React.useState("");
    const [degree3, setDegree3] = React.useState("");
    const [major3, setMajor3] = React.useState("");
    const [minor3, setMinor3] = React.useState("");
    const [gpa3, setGpa3] = React.useState("");

    const [isEducation2Active, setIsEducation2Active] = React.useState(false);
    const [isEducation3Active, setIsEducation3Active] = React.useState(false);

    const [skill, setSkill] = React.useState("");
    const [skills, setSkills] = React.useState([]);

    const[experienceTitle1, setExperienceTitle1] = React.useState("");
    const[experienceCompany1, setExperienceCompany1] = React.useState("");
    const[experienceDate1, setExperienceDate1] = React.useState("");
    const[experienceDescription1, setExperienceDescription1] = React.useState("");

    const[experienceTitle2, setExperienceTitle2] = React.useState("");
    const[experienceCompany2, setExperienceCompany2] = React.useState("");
    const[experienceDate2, setExperienceDate2] = React.useState("");
    const[experienceDescription2, setExperienceDescription2] = React.useState("");

    const[experienceTitle3, setExperienceTitle3] = React.useState("");
    const[experienceCompany3, setExperienceCompany3] = React.useState("");
    const[experienceDate3, setExperienceDate3] = React.useState("");
    const[experienceDescription3, setExperienceDescription3] = React.useState("");

    const [isExperience2Active, setIsExperience2Active] = React.useState(false);
    const [isExperience3Active, setIsExperience3Active] = React.useState(false);

    const[projectName1, setProjectName1] = React.useState("");
    const[projectDate1, setProjectDate1] = React.useState("");
    const[projectDescription1, setProjectDescription1] = React.useState("");

    const[projectName2, setProjectName2] = React.useState("");
    const[projectDate2, setProjectDate2] = React.useState("");
    const[projectDescription2, setProjectDescription2] = React.useState("");

    const[projectName3, setProjectName3] = React.useState("");
    const[projectDate3, setProjectDate3] = React.useState("");
    const[projectDescription3, setProjectDescription3] = React.useState("");

    const [isProject2Active, setIsProject2Active] = React.useState(false);
    const [isProject3Active, setIsProject3Active] = React.useState(false);


    const handleNameChange = event => setName(event.target.value);

    const handleEmailChange = event => setEmail(event.target.value);
    const handlePhoneNumberChange = event => setPhoneNumber(event.target.value);
    const handleLinkedInChange = event => setLinkedIn(event.target.value);
    const handleGithubChange = event => setGithub(event.target.value);
    const handleWebsiteChange = event => setWebsite(event.target.value);

    const handleSchool1Change = event => setSchool1(event.target.value);
    const handleDegree1Change = event => setDegree1(event.target.value);
    const handleMajor1Change = event => setMajor1(event.target.value);
    const handleMinor1Change = event => setMinor1(event.target.value);
    const handleGpa1Change = event => setGpa1(event.target.value);

    const handleSchool2Change = event => setSchool2(event.target.value);
    const handleDegree2Change = event => setDegree2(event.target.value);
    const handleMajor2Change = event => setMajor2(event.target.value);
    const handleMinor2Change = event => setMinor2(event.target.value);
    const handleGpa2Change = event => setGpa2(event.target.value);

    const handleSchool3Change = event => setSchool3(event.target.value);
    const handleDegree3Change = event => setDegree3(event.target.value);
    const handleMajor3Change = event => setMajor3(event.target.value);
    const handleMinor3Change = event => setMinor3(event.target.value);
    const handleGpa3Change = event => setGpa3(event.target.value);

    const handleSkillChange = event => setSkill(event.target.value);

    const handleExperienceTitle1Change = event => setExperienceTitle1(event.target.value);
    const handleExperienceCompany1Change = event => setExperienceCompany1(event.target.value);
    const handleExperienceDate1Change = event => setExperienceDate1(event.target.value);
    const handleExperienceDescription1Change = event => setExperienceDescription1(event.target.value);

    const handleExperienceTitle2Change = event => setExperienceTitle2(event.target.value);
    const handleExperienceCompany2Change = event => setExperienceCompany2(event.target.value);
    const handleExperienceDate2Change = event => setExperienceDate2(event.target.value);
    const handleExperienceDescription2Change = event => setExperienceDescription2(event.target.value);

    const handleExperienceTitle3Change = event => setExperienceTitle3(event.target.value);
    const handleExperienceCompany3Change = event => setExperienceCompany3(event.target.value);
    const handleExperienceDate3Change = event => setExperienceDate3(event.target.value);
    const handleExperienceDescription3Change = event => setExperienceDescription3(event.target.value);

    const handleProjectName1Change = event => setProjectName1(event.target.value);
    const handleProjectDate1Change = event => setProjectDate1(event.target.value);
    const handleProjectDescription1Change = event => setProjectDescription1(event.target.value);

    const handleProjectName2Change = event => setProjectName2(event.target.value);
    const handleProjectDate2Change = event => setProjectDate2(event.target.value);
    const handleProjectDescription2Change = event => setProjectDescription2(event.target.value);

    const handleProjectName3Change = event => setProjectName3(event.target.value);
    const handleProjectDate3Change = event => setProjectDate3(event.target.value);
    const handleProjectDescription3Change = event => setProjectDescription3(event.target.value);

    async function sampleFunc(toInput) {
        const response = await fetch("/resumes", {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(toInput)
        });

        let body = await response.json();
        console.log(body.id);
    }


    const handleSubmit = variables => {
        const contactInfo = { email, phoneNumber, linkedIn, github, website }
        console.log(contactInfo);
        const education1 = { "school": school1, "degree": degree1, "major": major1, "minor": minor1, "gpa": gpa1 }
        const education2 = { "school": school2, "degree": degree2, "major": major2, "minor": minor2, "gpa": gpa2 }
        const education3 = { "school": school3, "degree": degree3, "major": major3, "minor": minor3, "gpa": gpa3 }
        const education =
            (isEducation2Active
                ? (isEducation3Active
                    ? ([]).concat(education1).concat(education2).concat(education3)
                    : ([]).concat(education1).concat(education2))
                : ([]).concat(education1)
            );
        // const education = ([]).concat(education1).concat(education2).concat(education3);
        const experience1 = { "title": experienceTitle1, "company": experienceCompany1, "date": experienceDate1, "description": experienceDescription1};
        console.log(experience1);
        const experience2 = { "title": experienceTitle2, "company": experienceCompany2, "date": experienceDate2, "description": experienceDescription2};
        const experience3 = { "title": experienceTitle3, "company": experienceCompany3, "date": experienceDate3, "description": experienceDescription3};
        const experiences =
            (isExperience2Active
                ? (isExperience3Active
                    ? ([]).concat(experience1).concat(experience2).concat(experience3)
                    : ([]).concat(experience1).concat(experience2))
                : ([]).concat(experience1)
            );

        const project1 = { "name": projectName1, "date": projectDate1, "description": projectDescription1 }
        console.log(project1);
        const project2 = { "name": projectName2, "date": projectDate2, "description": projectDescription2 }
        const project3 = { "name": projectName3, "date": projectDate3, "description": projectDescription3 }
        // const projects = ([]).concat(project1).concat(project2).concat(project3);
        const projects =
            (isProject2Active
                    ? (isProject3Active
                        ? ([]).concat(project1).concat(project2).concat(project3)
                        : ([]).concat(project1).concat(project2))
                    : ([]).concat(project1)
            );

        const toInput = { name, contactInfo, education, skills, experiences, projects };

        let form = document.getElementById("myForm");
        console.log(form);
        for (let i = 0; i < form.elements.length; i++){
            if (form.elements[i].value === "" && form.elements[i].hasAttribute("required"))
            {
                return;
            }
        }
        sampleFunc(toInput);
    };

    const handleSkill = variables => {
        setSkills([...skills, skill]);
        setSkill("");
        console.log(skills);
    }

    const addEducation = variables => {
        if (!isEducation2Active) {
            setIsEducation2Active(true);
        }
        else if (!isEducation3Active) {
            setIsEducation3Active(true);
        }
    }

    const removeEducation = variables => {
        if (isEducation3Active) {
            setIsEducation3Active(false);
            setSchool3("");
            setDegree3("");
            setMajor3("");
            setMinor3("");
            setGpa3("");
        }
        else if (isEducation2Active) {
            setIsEducation2Active(false);
            setSchool2("");
            setDegree2("");
            setMajor2("");
            setMinor2("");
            setGpa2("");
        }
    }

    const addExperience = variables => {
        if (!isExperience2Active) {
            setIsExperience2Active(true);
            console.log("done");
        }
        else if (!isExperience3Active) {
            setIsExperience3Active(true);
        }
        console.log("Experience 2 is : " + isExperience2Active + " and Experience 3 is : " + isExperience3Active);
    }

    const removeExperience = variables => {
        if (isExperience3Active) {
            setIsExperience3Active(false);
            setExperienceTitle3("");
            setExperienceCompany3("");
            setExperienceDate3("");
            setExperienceDescription3("");
        }
        else if (isExperience2Active) {
            setIsExperience2Active(false);
            setExperienceTitle2("");
            setExperienceCompany2("");
            setExperienceDate2("");
            setExperienceDescription2("");
        }
    }

    const addProject = variables => {
        if (!isProject2Active) {
            setIsProject2Active(true);
        }
        else if (!isProject3Active) {
            setIsProject3Active(true);
        }
    }

    const removeProject = variables => {
        if (isProject3Active) {
            setIsProject3Active(false);
            setProjectName3("");
            setProjectDate3("");
            setProjectDescription3("");
        }
        else if (isProject2Active) {
            setIsProject2Active(false);
            setProjectName2("");
            setProjectDate2("");
            setProjectDescription2("");
        }
    }

    if (firstLoad) {
        setLoad(false)
    }

    return (
        <div id="page">
            <form id="myForm">
                <h1 id="title">Enter Info Here</h1>
                <h5>All fields marked with * are required</h5>
                <label>Name *&nbsp;
                    <input
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                </label>
                <br />
                <h2>Contact Info</h2>
                <label>Email *&nbsp;
                    <input
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </label>
                <br />
                <label>Phone Number *&nbsp;
                    <input
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        required
                    />
                </label>
                <br />
                <label>LinkedIn *&nbsp;
                    <input
                        value={linkedIn}
                        onChange={handleLinkedInChange}
                        required
                    />
                </label>
                <br />
                <label>Github&nbsp;
                    <input
                        value={github}
                        onChange={handleGithubChange}
                    />
                </label>
                <br />
                <label>Website&nbsp;
                    <input
                        value={website}
                        onChange={handleWebsiteChange}
                    />
                </label>
                <br />
                <h2>Education</h2>
                <label>School *&nbsp;
                    <input
                        value={school1}
                        onChange={handleSchool1Change}
                        required
                    />
                </label>
                <br />
                <label>Degree *&nbsp;
                    <select
                        value={degree1}
                        onChange={handleDegree1Change}
                        required
                    >
                        <option value="">Select Degree</option>
                        <option value="AA">AA</option>
                        <option value="AS">AS</option>
                        <option value="BA">BA</option>
                        <option value="BS">BS</option>
                        <option value="MA">MA</option>
                        <option value="MS">MS</option>
                        <option value="PhD">PhD</option>
                    </select>
                </label>
                <br />
                <label>Major *&nbsp;
                    <input
                        value={major1}
                        onChange={handleMajor1Change}
                        required
                    />
                </label>
                <br />
                <label>Minor&nbsp;
                    <input
                        value={minor1}
                        onChange={handleMinor1Change}
                    />
                </label>
                <br />
                <label>GPA&nbsp;
                    <input
                        value={gpa1}
                        onChange={handleGpa1Change}
                    />
                </label>
                <br />
                {isEducation2Active
                    ?
                    <div>
                        <br />
                        <label>School *&nbsp;
                            <input
                                value={school2}
                                onChange={handleSchool2Change}
                                required
                            />
                        </label>
                        <br />
                        <label>Degree *&nbsp;
                            <select
                                value={degree2}
                                onChange={handleDegree2Change}
                                required
                            >
                                <option value="">Select Degree</option>
                                <option value="AA">AA</option>
                                <option value="AS">AS</option>
                                <option value="BA">BA</option>
                                <option value="BS">BS</option>
                                <option value="MA">MA</option>
                                <option value="MS">MS</option>
                                <option value="PhD">PhD</option>
                            </select>
                        </label>
                        <br />
                        <label>Major *&nbsp;
                            <input
                                value={major2}
                                onChange={handleMajor2Change}
                                required
                            />
                        </label>
                        <br />
                        <label>Minor&nbsp;
                            <input
                                value={minor2}
                                onChange={handleMinor2Change}
                            />
                        </label>
                        <br />
                        <label>GPA&nbsp;
                            <input
                                value={gpa2}
                                onChange={handleGpa2Change}
                            />
                        </label>
                        <br />
                    </div>
                    : ""
                }
                {isEducation3Active
                    ?
                    <div>
                        <br />
                        <label>School *&nbsp;
                            <input
                                value={school3}
                                onChange={handleSchool3Change}
                                required
                            />
                        </label>
                        <br />
                        <label>Degree *&nbsp;
                            <select
                                value={degree3}
                                onChange={handleDegree3Change}
                                required
                            >
                                <option value="">Select Degree</option>
                                <option value="AA">AA</option>
                                <option value="AS">AS</option>
                                <option value="BA">BA</option>
                                <option value="BS">BS</option>
                                <option value="MA">MA</option>
                                <option value="MS">MS</option>
                                <option value="PhD">PhD</option>
                            </select>
                        </label>
                        <br />
                        <label>Major *&nbsp;
                            <input
                                value={major3}
                                onChange={handleMajor3Change}
                                required
                            />
                        </label>
                        <br />
                        <label>Minor&nbsp;
                            <input
                                value={minor3}
                                onChange={handleMinor3Change}
                            />
                        </label>
                        <br />
                        <label>GPA&nbsp;
                            <input
                                value={gpa3}
                                onChange={handleGpa3Change}
                            />
                        </label>
                        <br />
                    </div>
                    : ""
                }
                {isEducation2Active
                    ? <button type="button" onClick={removeEducation}>Remove education</button>
                    : ""
                }
                <br />
                {isEducation3Active
                    ? <h4 class="warning">Cannot add more educations</h4>
                    : <button type="button" onClick={addEducation}>Add education</button>

                }
                <br />
                <h2>Skills</h2>
                <label>Add skill:&nbsp;
                    <input
                        value={skill}
                        onChange={handleSkillChange}
                    />
                </label>
                <br />
                <br />
                <button type="button" onClick={handleSkill}>Submit skill</button>
                <br />
                <br />
                <h4>Skills submitted: {skills.map(skill => <div>{skill}</div>)}</h4>
                <br />
                <br />
                <h2>Experience 1</h2>
                <br />
                <label>Title *&nbsp;
                    <input
                        value={experienceTitle1}
                        onChange={handleExperienceTitle1Change}
                        required
                    />
                </label>
                <br />
                <label>Company *&nbsp;
                    <input
                        value={experienceCompany1}
                        onChange={handleExperienceCompany1Change}
                        required
                    />
                </label>
                <br />
                <label>Date *&nbsp;
                    <input
                        value={experienceDate1}
                        onChange={handleExperienceDate1Change}
                        required
                    />
                </label>
                <br />
                <label>Description *&nbsp;
                    <textarea
                        value={experienceDescription1}
                        onChange={handleExperienceDescription1Change}
                        required
                    />
                </label>
                <br />
                {isExperience2Active
                    ?
                        <div>
                            <h2>Experience 2</h2>
                            <br />
                            <label>Title *&nbsp;
                                <input
                                    value={experienceTitle2}
                                    onChange={handleExperienceTitle2Change}
                                    required
                                />
                            </label>
                            <br />
                            <label>Company *&nbsp;
                                <input
                                    value={experienceCompany2}
                                    onChange={handleExperienceCompany2Change}
                                    required
                                />
                            </label>
                            <br />
                            <label>Date *&nbsp;
                                <input
                                    value={experienceDate2}
                                    onChange={handleExperienceDate2Change}
                                    required
                                />
                            </label>
                            <br />
                            <label>Description *&nbsp;
                                <textarea
                                    value={experienceDescription2}
                                    onChange={handleExperienceDescription2Change}
                                    required
                                />
                            </label>
                        </div>
                    : ""
                }
                <br />
                {isExperience3Active
                    ?
                    <div>
                        <h2>Experience 3</h2>
                        <br />
                        <label>Title *&nbsp;
                            <input
                                value={experienceTitle3}
                                onChange={handleExperienceTitle3Change}
                                required
                            />
                        </label>
                        <br />
                        <label>Company *&nbsp;
                            <input
                                value={experienceCompany3}
                                onChange={handleExperienceCompany3Change}
                                required
                            />
                        </label>
                        <br />
                        <label>Date *&nbsp;
                            <input
                                value={experienceDate3}
                                onChange={handleExperienceDate3Change}
                                required
                            />
                        </label>
                        <br />
                        <label>Description *&nbsp;
                            <textarea
                                value={experienceDescription3}
                                onChange={handleExperienceDescription3Change}
                                required
                            />
                        </label>
                        <br />
                    </div>
                    : ""
                }
                {isExperience2Active
                    ? <button type="button" onClick={removeExperience}>Remove experience</button>
                    : ""
                }
                <br />
                {(isExperience2Active && isExperience3Active)
                    ? <h4 class="warning">Cannot add more experiences</h4>
                    : <button type="button" onClick={addExperience}>Add experience</button>
                }
                <br />
                <h2>Project 1</h2>
                <br />
                <label>Name *&nbsp;
                    <input
                        value={projectName1}
                        onChange={handleProjectName1Change}
                        required
                    />
                </label>
                <br />
                <label>Date *&nbsp;
                    <input
                        value={projectDate1}
                        onChange={handleProjectDate1Change}
                        required
                    />
                </label>
                <br />
                <label>Description *&nbsp;
                    <textarea
                        value={projectDescription1}
                        onChange={handleProjectDescription1Change}
                        required
                    />
                </label>
                <br />
                {isProject2Active
                    ?
                        <div>
                            <h2>Project 2 *</h2>
                            <br />
                            <label>Name&nbsp;
                                <input
                                    value={projectName2}
                                    onChange={handleProjectName2Change}
                                    required
                                />
                            </label>
                            <br />
                            <label>Date *&nbsp;
                                <input
                                    value={projectDate2}
                                    onChange={handleProjectDate2Change}
                                    required
                                />
                            </label>
                            <br />
                            <label>Description *&nbsp;
                                <textarea
                                    value={projectDescription2}
                                    onChange={handleProjectDescription2Change}
                                    required
                                />
                            </label>
                        </div>
                    : ""
                }
                <br />
                {isProject3Active
                    ?
                        <div>
                            <h2>Project 3</h2>
                            <br />
                            <label>Name *&nbsp;
                                <input
                                    value={projectName3}
                                    onChange={handleProjectName3Change}
                                    required
                                />
                            </label>
                            <br />
                            <label>Date *&nbsp;
                                <input
                                    value={projectDate3}
                                    onChange={handleProjectDate3Change}
                                    required
                                />
                            </label>
                            <br />
                            <label>Description *&nbsp;
                                <textarea
                                    value={projectDescription3}
                                    onChange={handleProjectDescription3Change}
                                    required
                                />
                            </label>
                        </div>
                    : ""
                }
                {isProject2Active
                    ? <button type="button" onClick={removeProject}>Remove project</button>
                    : ""
                }
                <br />
                {isProject3Active
                    ? <h4 class="warning">Cannot add more projects</h4>
                    : <button type="button" onClick={addProject}>Add project</button>
                }
                <br />
                <br />
                <button onClick={handleSubmit} id="submit-button">Submit</button>
                <br />
                <br />
                <a href="/view">View Resume Records</a>
            </form>
        </div>
    );
}