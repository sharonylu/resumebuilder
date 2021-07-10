import React from "react";
import '../App.css';

export default function SimpleTable() {
    const [data, updateData] = React.useState([]);
    const [firstLoad, setLoad] = React.useState(true);
    let isLoading = true

    function sampleFunc() {
        fetch("/resumes")
            .then(response => response.json())
            .then(json => {
                let resumeList = json._embedded.resumeList;
                updateData(resumeList);
                console.log(resumeList);
                console.log("embedded data: " + data);
            });
    }

    if (firstLoad) {
        sampleFunc();
        setLoad(false);
        console.log("firstLoad is false")
    }

    console.log("data is now: " + data + "; data length is now " + data.length);
    if (data.length > 0) {
        isLoading = false;
        console.log("data length > 0")
    }

    return (
        <div id="page">
            <h1 id="title">Resume Directory</h1>

            {isLoading
                ? (<h5>Loading</h5>)
                : (
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Contact Info</th>
                            <th>Education</th>
                            <th>Skills</th>
                            <th>Experiences</th>
                            <th>Projects</th>
                            <th>Links</th>
                        </tr>
                        {data?.map(row => (
                            <tr key={row.name}>
                                <td>{row.name}</td>
                                <td>
                                    {row.contactInfo.phoneNumber}
                                    <br />
                                    {row.contactInfo.email}
                                    <br />
                                    {row.contactInfo.linkedIn}
                                    <br />
                                    {row.contactInfo.github}
                                    <br />
                                    {row.contactInfo.website}
                                </td>
                                <td>
                                    {row.education.map(item =>
                                        <div>
                                            {item.school}
                                            <br />
                                            {item.degree}
                                            <br />
                                            {item.major}
                                            <br />
                                            {item.minor}
                                            <br />
                                            {item.gpa}
                                        </div>
                                    )}
                                </td>
                                <td>
                                    {row.skills.map(item => <div>{item}</div>)}</td>
                                <td>
                                    {row.experiences.map(item =>
                                        <div>
                                            {item.title}
                                            <br />
                                            {item.company}
                                            <br />
                                            {item.date}
                                            <br />
                                            {item.description}
                                        </div>
                                    )}
                                </td>
                                <td>{
                                    row.projects.map(item =>
                                        <div>
                                            {item.name}
                                            <br />
                                            {item.date}
                                            <br />
                                            {item.description}
                                        </div>
                                    )}
                                </td>
                                <td>
                                    <a href={"/pdf/" + row.id}>
                                        {row.name}'s Pdf
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </table>
                )
            }
            <a href={"/"}>Head back to save data</a>
        </div>
    );
}