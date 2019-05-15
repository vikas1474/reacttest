import React, { Component } from 'react';

import Axios from 'axios';
 
class Measure extends Component{
    constructor(props){
        super(props);
        this.state={
            dataRecieved:[],
            isLoading:true
        }

    }

    componentDidMount(){
            Axios.get("http://localhost:3001/measures?shoppingChannel=online").then((res)=>{
            console.log(res.data);
            this.setState({
                    isLoading:false,
                    dataRecieved:res.data
                })
            })
    }



    render(){
        return(
            <div>
                {
                    this.state.isLoading ? (
                        <p>Loading</p>
                    ) :
                    (
                        <p>Not loading</p>
                    )
                }
            </div>
        )
    }
}
export default Measure;