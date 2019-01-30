import React from "react";

export class Home extends React.Component{
    constructor(props){
        super();
        this.age=props.age;

    }
    onMakeOlder(){
        this.age +=3;
        console.log(this.age);
    }
    render(){

        return (
            <div>
                <p>in a new component!</p>
                <p>your name is {this.props.name} , your age is {this.age}</p>
              {/*  <p>User Object => Name : {this.props.user.name}</p>

                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby,i)=><li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                <hr/>
                {this.props.children}*/}
                <hr/>
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button>
            </div>
        );
    }
}

Home.propTypes={
    name: React.PropTypes.string,
    age: React.PropTypes.number
    /*user: React.PropTypes.object*/
};