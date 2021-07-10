import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import font from '../Open_Sans/OpenSans-Regular.ttf'
import boldFont from '../Open_Sans/OpenSans-SemiBold.ttf'
import {useParams} from "react-router";

Font.register({family: 'Open Sans', src: font});
Font.register({family: 'Open Sans Bold', src: boldFont});

Font.registerHyphenationCallback(word => (
    [word]
));

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        margin: 20
    },
    columns: {
        flexDirection: 'row'
    },
    leftColumn: {
        margin: 10,
        padding: 10,
        maxWidth: '30%'
    },
    rightColumn: {
        margin: 10,
        padding: 10,
        maxWidth: '60%'
    },
    viewer: {
        height: '100vh',
        width: '100vw'
    },
    name: {
        fontSize: 30,
        fontFamily: 'Open Sans Bold',
        margin: 'auto'
    },
    heading: {
        fontSize: 18,
        fontFamily: 'Open Sans Bold'
    },
    experienceTitle: {
        fontSize: 13,
        fontFamily: 'Open Sans',
        textTransform: 'uppercase'
    },
    boldText: {
        fontSize: 13,
        fontFamily: 'Open Sans Bold'
    },
    text: {
        fontSize: 13,
        fontFamily: 'Open Sans'
    },
    leftColumnText: {
        fontSize: 13,
        fontFamily: 'Open Sans',
        marginTop: 5
    },
    subText: {
        fontSize: 11,
        fontFamily: 'Open Sans'
    },
    formattedLine: {
        flexDirection: 'row'
    }
});

const Br = () => "\n";

export default function ViewPdf() {
    const { id } = useParams();

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

    const[projectName1, setProjectName1] = React.useState("");
    const[projectDate1, setProjectDate1] = React.useState("");
    const[projectDescription1, setProjectDescription1] = React.useState("");

    const[projectName2, setProjectName2] = React.useState("");
    const[projectDate2, setProjectDate2] = React.useState("");
    const[projectDescription2, setProjectDescription2] = React.useState("");

    const[projectName3, setProjectName3] = React.useState("");
    const[projectDate3, setProjectDate3] = React.useState("");
    const[projectDescription3, setProjectDescription3] = React.useState("");

    function fetchResume() {
        fetch("/resumes/" + id)
            .then(response => response.json())
            .then(json => {
                try {
                    console.log("json: " + JSON.stringify(json));
                    setName(json.name);

                    setEmail(json.contactInfo.email);
                    setPhoneNumber(json.contactInfo.phoneNumber);
                    setLinkedIn(json.contactInfo.linkedIn);
                    setGithub(json.contactInfo.github);
                    setWebsite(json.contactInfo.website);

                    setSchool1(json.education[0].school);
                    setDegree1(json.education[0].degree);
                    setMajor1(json.education[0].major);
                    setMinor1(json.education[0].minor);
                    setGpa1(json.education[0].gpa);

                    if (json.education.length > 1) {
                        setSchool2(json.education[1].school);
                        setDegree2(json.education[1].degree);
                        setMajor2(json.education[1].major);
                        setMinor2(json.education[1].minor);
                        setGpa2(json.education[1].gpa);
                    }

                    if (json.education.length === 3) {
                        setSchool3(json.education[2].school);
                        setDegree3(json.education[2].degree);
                        setMajor3(json.education[2].major);
                        setMinor3(json.education[2].minor);
                        setGpa3(json.education[2].gpa);
                    }

                    setSkills(json.skills);

                    setExperienceTitle1(json.experiences[0].title);
                    setExperienceCompany1(json.experiences[0].company);
                    setExperienceDate1(json.experiences[0].date);
                    setExperienceDescription1(json.experiences[0].description);

                    if (json.experiences.length > 1) {
                        setExperienceTitle2(json.experiences[1].title);
                        setExperienceCompany2(json.experiences[1].company);
                        setExperienceDate2(json.experiences[1].date);
                        setExperienceDescription2(json.experiences[1].description);
                    }

                    console.log(json.experiences.length);
                    if (json.experiences.length === 3) {
                        setExperienceTitle3(json.experiences[2].title);
                        setExperienceCompany3(json.experiences[2].company);
                        setExperienceDate3(json.experiences[2].date);
                        setExperienceDescription3(json.experiences[2].description);
                    }

                    setProjectName1(json.projects[0].name);
                    setProjectDate1(json.projects[0].date);
                    setProjectDescription1(json.projects[0].description);

                    if (json.projects.length > 1) {
                        setProjectName2(json.projects[1].name);
                        setProjectDate2(json.projects[1].date);
                        setProjectDescription2(json.projects[1].description);
                    }

                    console.log("projects: " + json.projects.length);
                    if (json.projects.length === 3) {
                        console.log("print 3rd project");
                        setProjectName3(json.projects[2].name);
                        setProjectDate3(json.projects[2].date);
                        setProjectDescription3(json.projects[2].description);
                    }
                }
                catch (err) {
                    console.log(err);
                }
            });
    }

    if (firstLoad) {
        fetchResume();
        setLoad(false);
        console.log("firstLoad is false")
    }

    return (
        <PDFViewer style={styles.viewer}>
            <Document>
                <Page size="A4" style={styles.page}>
                    <View>
                        <Text style={styles.name}>{name}</Text>
                    </View>
                    <View style={styles.columns}>
                        <View style={styles.leftColumn}>
                            <Text style={styles.heading}>CONTACT</Text>
                            <Text style={styles.leftColumnText}>{email}</Text>
                            <Text style={styles.leftColumnText}>{phoneNumber}</Text>
                            <Text style={styles.leftColumnText}>{linkedIn}</Text>
                            <Text style={styles.leftColumnText}>{github}</Text>
                            <Text style={styles.leftColumnText}>{website}</Text>
                            <Text><Br /></Text>

                            <Text style={styles.heading}>EDUCATION</Text>
                            <Text style={styles.leftColumnText}>{school1}</Text>
                            <Text style={styles.leftColumnText}>{degree1} {major1}</Text>
                            <Text style={styles.leftColumnText}>Minor in {minor1}</Text>
                            <Text style={styles.leftColumnText}>GPA: {gpa1}</Text>
                            <Text><Br /></Text>

                            {school2 !== "" && (
                                <div>
                                    <Text style={styles.leftColumnText}>{school2}</Text>
                                    <Text style={styles.leftColumnText}>{degree2} {major2}</Text>
]                                    <Text style={styles.leftColumnText}>Minor in {minor2}</Text>
                                    <Text style={styles.leftColumnText}>GPA: {gpa2}</Text>
                                    <Text><Br /></Text>
                                </div>
                            )}

                            {school3 !== "" && (
                                <div>
                                    <Text style={styles.leftColumnText}>{school3}</Text>
                                    <Text style={styles.leftColumnText}>{degree3} {major3}</Text>
                                    <Text style={styles.leftColumnText}>Minor in {minor3}</Text>
                                    <Text style={styles.leftColumnText}>GPA: {gpa3}</Text>
                                    <Text><Br /></Text>
                                </div>
                            )}

                            {skills.length !== 0 && (
                                <div>
                                    <Text style={styles.heading}>SKILLS</Text>
                                    {skills.map(skill => <Text style={styles.leftColumnText}>{skill}</Text>)}
                                </div>
                            )}
                        </View>
                        <View style={styles.rightColumn}>
                            <Text style={styles.heading}>EXPERIENCES</Text>
                            <Text style={styles.experienceTitle}>{experienceTitle1}</Text>
                            <View style={styles.formattedLine}>
                                <Text style={styles.boldText}>{experienceCompany1} | </Text>
                                <Text style={styles.text}>{experienceDate1}</Text>
                            </View>
                            <Text style={styles.subText}>{experienceDescription1}</Text>
                            <Text><Br /></Text>

                            {experienceTitle2 !== "" && (
                                <div>
                                    <Text style={styles.experienceTitle}>{experienceTitle2}</Text>
                                    <View style={styles.formattedLine}>
                                        <Text style={styles.boldText}>{experienceCompany2} | </Text>
                                        <Text style={styles.text}>{experienceDate2}</Text>
                                    </View>
                                    <Text style={styles.subText}>{experienceDescription2}</Text>
                                    <Text><Br /></Text>
                                </div>
                            )}

                            {experienceTitle3 !== "" && (
                                <div>
                                    <Text style={styles.experienceTitle}>{experienceTitle3}</Text>
                                    <View style={styles.formattedLine}>
                                        <Text style={styles.boldText}>{experienceCompany3} | </Text>
                                        <Text style={styles.text}>{experienceDate3}</Text>
                                    </View>
                                    <Text style={styles.subText}>{experienceDescription3}</Text>
                                    <Text><Br /></Text>
                                </div>
                            )}

                            <Text style={styles.heading}>PROJECTS</Text>
                            <View style={styles.formattedLine}>
                                <Text style={styles.boldText}>{projectName1} | </Text>
                                <Text style={styles.text}>{projectDate1}</Text>
                            </View>
                            <Text style={styles.subText}>{projectDescription1}</Text>
                            <Text><Br /></Text>

                            {projectName2 !== "" && (
                                <div>
                                    <View style={styles.formattedLine}>
                                        <Text style={styles.boldText}>{projectName2} | </Text>
                                        <Text style={styles.text}>{projectDate2}</Text>
                                    </View>
                                    <Text style={styles.subText}>{projectDescription2}</Text>
                                    <Text><Br /></Text>
                                </div>
                            )}

                            {projectName3 !== "" && (
                                <div>
                                    <View style={styles.formattedLine}>
                                        <Text style={styles.boldText}>{projectName3} | </Text>
                                        <Text style={styles.text}>{projectDate3}</Text>
                                    </View>
                                    <Text style={styles.subText}>{projectDescription3}</Text>
                                    <Text><Br /></Text>
                                </div>
                            )}
                        </View>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    )
}
