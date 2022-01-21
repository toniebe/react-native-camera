import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'

export default class Review extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        let {uri,data} = this.props.route.params
        console.log(uri);   
        return (
            <View >
                <Image source={{uri}} style={{width:400,height:400}} />
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity  style={styles.upload}>
                      <Text style={{ fontSize: 14 }}> UPLOAD </Text>
                    </TouchableOpacity>
                  </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    upload: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
      },
})
