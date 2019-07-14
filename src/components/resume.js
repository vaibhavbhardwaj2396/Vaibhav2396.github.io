import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Expereince from './experience';
import Skills from './skills';


class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                                alt="avatar"
                                style={{ height: "200px" }} />
                        </div>
                        <h2 style={{ paddingTop: '2em' }} > Vaibhav Bhardwaj</h2>
                        <h4 style={{ color: 'grey' }}>Programmer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>My Address</p>
                        <h5>Phone</h5>
                        <p>6545664896465</p>
                        <h5>Email</h5>
                        <p>someone@exampke.com</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>


                        <Education
                            startYear={2012}
                            endYear={2014}
                            schoolName="My University"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker"
                        />
                        <Education
                            startYear={2014}
                            endYear={2018}
                            schoolName="My College/University"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker"
                        />

                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2> Experience</h2>
                        <Expereince
                            startYear={2019}
                            endYear="current"
                            jobName="First Job"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum" />

                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>skills</h2>
                        <Skills
                            skill="JavaScript"
                            progress={100}
                        />
                        <Skills
                            skill="C#"
                            progress={80}
                        />
                        <Skills
                            skill="React"
                            progress={50}
                        />
                    </Cell>
                </Grid>
            </div>

        )
    }
}

export default Resume;