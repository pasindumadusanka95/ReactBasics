import React from "react";

export class Home extends React.Component{
    render(){

        return (
            <div>
                <p>in a new component!</p>
                <p>your name is {this.props.name} , your age is {this.props.age}</p>
                <p>User Object => Name : {this.props.user.name}</p>

                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby)=><li>{hobby}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
}