import React from 'react';
import Hello from '../components/hello.component'

export default class HelloContainer extends React.Component {
    render() {
        let name = "World";
        return (
            <Hello name={name}/>
        )
    }
}