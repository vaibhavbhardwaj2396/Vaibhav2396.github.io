import React from 'react';
import {Switch ,Route} from 'react-router-dom' ;
import Landingpage from './landingpage';
import Aboutme from './aboutme';
import Contacts from './contacts';
import Projects from './projects';
import Resume from './resume';


const Main = ()=> 
(
    <Switch>
        <Route exact path ="/" component={Landingpage} />
        <Route path ="/aboutme" component={Aboutme} />
        <Route path ="/contacts" component={Contacts} />
        <Route path ="/projects" component={Projects} />
        <Route path ="/resume" component={Resume} />
    </Switch>
)

export default Main;
