import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landingpage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>

                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmTw_j8KTde3UNI841HcgpvwC6SE4X_JCRgb4Xm3Dy9e4zHPtZ"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1> Devloper</h1>
                            <hr />

                            <p> HTML/CSSS| Bootstrap| JavaScript</p>

                            <div className="social-links">

                                {/* Linked In */}
                                <a href="https://in.linkedin.com/" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>    
                            </div>
                        </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Landingpage;