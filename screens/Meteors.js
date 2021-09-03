import React, { Component } from 'react';
import { Alert, Text, View } from 'react-native';

import axios from 'axios';

export default class MeteorScreen extends Component {

    constructor()
    {
        this.state ={

            meteors : " "
        }
    }

    componentDidMount()
    {
        this.getMeteors();
    }

    getMeteors=()=>
    {
        axios
        .get("https://api.nasa.gov/neo/rest/v1/feed?api_key=g6heha5uhneFZi1u8W84lb0IgPPVecmvxd7RUSJ0")
        .then(response => {
            this.setState({ meteors : response.data.near_earth_objects})
        })
        .catch(error => alert(error.message))
    }

    render() {

        if(object.keys(this.state.meteors).length === 0)
        {
    
            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Text>Loading ......</Text>
                </View>
            )
        }

        else{
            return(

                
            )

        }
    }
    
}