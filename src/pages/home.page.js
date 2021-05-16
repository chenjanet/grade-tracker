import React from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

import LogoutButton from '../components/logoutButton.component';
import GroupBlock from '../components/groupBlock.component';
import NewGroupAdder from '../components/newGroupAdder.component';
import Group from './group.page';

import './pages.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: {},
            modalShow: false
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.addNewGroup = this.addNewGroup.bind(this);
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/groups`)
            .then(res => {
                let groupData = res.data;
                let username = localStorage.getItem('user');
                let courseGroups = [];
                for (let i = 0; i < groupData.length; i++) {
                    if (groupData[i].username !== username) {
                        continue;
                    }
                    courseGroups[groupData[i].groupname] = groupData[i].courses;
                }
                this.setState({
                    groups: courseGroups
                });
            })
            .catch(err => console.error('Error: ' + err));
    }

    handleOpenModal() {
        this.setState({
            modalShow: true
        });
    }

    handleCloseModal() {
        this.setState({
            modalShow: false
        });
    }

    addNewGroup() {
        console.log("Add new group");
        this.setState({
            modalShow: false
        });
    }

    render() {
        let groupBlocks = [], groups = [], i = 0;
        for (let group in this.state.groups) {
            let groupBlockComponent = <GroupBlock name={group} courses={JSON.stringify(this.state.groups[group])} />;
            groupBlocks.push(
                <Link to={`/${group}`} className='mt-3 mr-2 pl-0' key={i}>
                    {groupBlockComponent}
                </Link> 
            );
            groups.push(
                <Route exact path={`/${group}`} key={i}>
                    <Group name={group} courses={JSON.stringify(this.state.groups[group])} />
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
                                <NewGroupAdder onClick={this.handleOpenModal}/>
                            </div>
                        </Route>
                    </Switch>
                </BrowserRouter>
                <Modal show={this.state.modalShow} onHide={this.handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add new term</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.addNewGroup}>

                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className='secondary' onClick={this.handleCloseModal}>Cancel</button>
                        <button type='submit'>Save</button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Home;