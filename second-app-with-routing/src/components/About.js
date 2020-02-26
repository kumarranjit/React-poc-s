import React, { Component } from 'react';

class About extends Component {
    UNSAFE_componentWillMount() {
        console.log('Component WILL MOUNT!')
     }
     componentDidMount() {
        console.log('Component DID MOUNT!')
     }
     UNSAFE_componentWillReceiveProps(newProps) {    
        console.log('Component WILL RECIEVE PROPS!')
     }
     shouldComponentUpdate(newProps, newState) {
        return true;
     }
     UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
     }
     componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
     }
     componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
     }
  render() {
    return (
        <div>
          <h2 data-myattribute = "somevalue">About</h2>
        </div>
    );
  }
}

export default About;