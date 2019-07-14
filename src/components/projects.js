import React, { Component } from 'react';
import {Tabs,Tab,Grid,Cell,Card,CardTitle,CardText,CardActions,Button,CardMenu,IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="project-grid"> 
                <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                    <CardTitle style={{color:'#fff',height:'176px',background:
                    'url(http://assets.viewers-guide.hbo.com/xlarge53319d4beb51c.jpg) center / cover'}}> I am a Stark</CardTitle>
                    <CardText>
                        Hell Yeah! I am a Stark
                    </CardText>
                    <CardActions border>
                        <Button colored>abc</Button>
                        <Button colored>123</Button>
                        <Button colored>345</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}> 
                    <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        }

        else if (this.state.activeTab === 1) {
            return (
                <div className="project-grid"> 
                <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                    <CardTitle style={{color:'#fff',height:'176px',background:
                    'url(https://fastdecals.com/shop/images/thumbnails/200/236/detailed/15/houseoflannister01_corpFC.png?t=1526617511) center / cover'}}> I am a Lannisters</CardTitle>
                    <CardText>
                        Hell Yeah! I am a Lannisters
                    </CardText>
                    <CardActions border>
                        <Button colored>abc</Button>
                        <Button colored>123</Button>
                        <Button colored>345</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}> 
                    <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                    <CardTitle style={{color:'#fff',height:'176px',background:
                    'url(https://fastdecals.com/shop/images/thumbnails/200/236/detailed/15/houseoflannister01_corpFC.png?t=1526617511) center / cover'}}> I am a Lannisters</CardTitle>
                    <CardText>
                        Hell Yeah! I am a Lannisters part 2
                    </CardText>
                    <CardActions border>
                        <Button colored>abc</Button>
                        <Button colored>123</Button>
                        <Button colored>345</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}> 
                    <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div className="project-grid" > 
                <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                    <CardTitle style={{color:'#fff',height:'176px',background:
                    'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdiiTwH7anWbxoZlsmLxxF77HBO_CHFnd3_HmR-9cDixaKOlKN) center / cover'}}> I am a Targerian</CardTitle>
                    <CardText>
                        Hell Yeah! I am a Targerian
                    </CardText>
                    <CardActions border>
                        <Button colored>abc</Button>
                        <Button colored>123</Button>
                        <Button colored>345</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}> 
                    <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        }

        
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Starks</Tab>
                    <Tab>Lannisters</Tab>
                    <Tab>Targaryens</Tab>
                </Tabs>
                
                    <Grid>
                    <Cell col={12}>
                    <div className="content"> {this.toggleCategories()}</div>


                    </Cell>

                    </Grid>
                   
              
            </div>
        );
    }
}

export default Projects;