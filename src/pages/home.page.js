import React from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import LogoutButton from '../components/logoutButton.component';
import GroupBlock from '../components/groupBlock.component';
import NewAdder from '../components/newAdder.component';
import Group from './group.page';

import './pages.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: []
        };
        this.addNewGroup = this.addNewGroup.bind(this);
        this.deleteGroup = this.deleteGroup.bind(this);
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/groups`)
            .then(res => {
                let groupData = res.data;
                let userId = localStorage.getItem('user');
                let courseGroups = {};
                for (let i = 0; i < groupData.length; i++) {
                    if (groupData[i].userId !== userId) {
                        continue;
                    }
                    courseGroups[groupData[i].groupName] = {
                        'courses': groupData[i].courses,
                        'gid': groupData[i]._id
                    };
                }
                this.setState({
                    groups: courseGroups
                });
            })
            .catch(err => console.error('Error: ' + err));
    }

    addNewGroup(groupName) {
        let courseGroups = this.state.groups;
        let userId = localStorage.getItem('user');
        axios.post(`http://localhost:5000/groups/add`, { userId, groupName, courses: [] })
            .then(data => { 
                courseGroups[groupName] = {
                    'courses': [],
                    'gid': data.data
                };
                this.setState({
                    modalShow: false,
                    groups: courseGroups
                });
             })
            .catch(err => console.error('Error: ' + err));
    }

    async deleteGroup(e, groupId) {
        let courseGroups = this.state.groups;
        e.preventDefault();
        e.stopPropagation();
        await axios.delete(`http://localhost:5000/groups/${groupId}`);
        await axios.delete(`http://localhost:5000/courses/deleteByGroup/${groupId}`);
        for (let group in courseGroups) {
            if (courseGroups[group].gid === groupId) {
                delete courseGroups[group];
                break;
            }
        }
        this.setState({
            groups: courseGroups
        });
    }

    render() {
        let groupBlocks = [], groups = [], i = 0;
        for (let group in this.state.groups) {
            let groupBlockComponent = <GroupBlock name={group} groupId={this.state.groups[group].gid} deleteComponent={this.deleteGroup} courses={JSON.stringify(this.state.groups[group].courses)} />;
            groupBlocks.push(
                <Link to={`/${group}`} className='groupBlockLink mt-3 pl-0' key={i}>
                    {groupBlockComponent}
                </Link> 
            );
            groups.push(
                <Route path={`/${group}`} key={i}>
                    <Group groupName={group} groupId={this.state.groups[group].gid} />
                </Route>
            );
            i++;
        }

        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        {groups}
                        <Route path='/'>
                            <LogoutButton />
                            <h1>Terms</h1>
                            <div className="groups-wrapper">
                                {groupBlocks}
                                <NewAdder adderType={"term"} adderInputLabel={"Term name"} handleAddNew={this.addNewGroup}/>
                            </div>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Home;