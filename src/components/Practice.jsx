import React, { Component } from 'react'

export default class Practice extends Component{
    constructor(props){
        super(props);
        this.state={
            users:[]
        }

    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
          return res.json()
        }).then((val)=>{
            this.setState({users:val})
            console.log(this.state.users);
        })
    }
    render(){
        return(
            <div>
                <ul>
               {
                this.state.users.map((val,ind)=>{
                   return(
                    <li>{val.name}</li>
                   );
                })
               }
               </ul>
               
            </div>
        );
    }
}