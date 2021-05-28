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
            groups: {}
        };
        this.addNewGroup = this.addNewGroup.bind(this);
        this.deleteGroup = this.deleteGroup.bind(this);
        this.renameGroup = this.renameGroup.bind(this);
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

    addNewGroup() {
        let groupName = document.getElementById('groupName').value;
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

    async deleteGroup(groupId) {
        let courseGroups = this.state.groups;
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

    async renameGroup(groupId, newName) {
        let groupInfo = await axios.get(`http://localhost:5000/groups/${groupId}`);
        let courseGroups = this.state.groups;
        let newGroups = {};
        for (let course in courseGroups) {
            if (course === groupInfo.data.groupName) {
                newGroups[newName] = courseGroups[course];
            } else {
                newGroups[course] = courseGroups[course];
            }
        }
        groupInfo.data.groupName = newName;
        await axios.post(`http://localhost:5000/groups/update/${groupId}`, groupInfo.data);
        this.setState({
            groups: newGroups
        });
    }

    render() {
        let groupBlocks = [], groups = [], i = 0;
        for (let group in this.state.groups) {
            let groupBlockComponent = <GroupBlock groupName={group} groupId={this.state.groups[group].gid} deleteComponent={this.deleteGroup} renameComponent={this.renameGroup} courses={JSON.stringify(this.state.groups[group].courses)} />;
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

        const adderModalBody = (
            <>
                <label htmlFor='groupName'>Term name</label>
                <input type='text' className='form-control' id='groupName' />
            </>
        );

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
                                <NewAdder 
                                    adderType={"term"} 
                                    adderModalBody={adderModalBody}
                                    handleAddNew={this.addNewGroup}
                                />
                            </div>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Home;