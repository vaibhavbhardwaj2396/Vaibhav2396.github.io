import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom'
function App() {
    return (
        <div>
            <div className="demo-big-content">
                <Layout>
                    <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }}
                        to="/">VAIBHAV BHARDWAJ</Link>} scroll>
                        <Navigation>
                            <Link to="/resume">Resume</Link>
                            <Link to="/aboutme">About Me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contacts">Contact</Link>
                        </Navigation>
                    </Header>
                    <Drawer title={<Link style={{ textDecoration: 'none', color: 'black' }} to="/">VAIBHAV BHARDWAJ</Link>} >
                        <Navigation>
                            <Link to="/resume">Resume</Link>
                            <Link to="/aboutme">About Me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contacts">Contact</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Main />
                    </Content>
                </Layout>
            </div>

        </div>
    );
}

export default App;
