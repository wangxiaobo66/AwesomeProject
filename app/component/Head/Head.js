/**
 * Created by joker.wang on 2017/5/8.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableHighlight
} from 'react-native';

let logo = require('/Users/joker.wang/AwesomeProject/app/img/logo.png');
let camera = require('/Users/joker.wang/AwesomeProject/app/img/camera.png');
let more = require('/Users/joker.wang/AwesomeProject/app/img/more.png');

export class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width:106.5,
            height:30.5
        };
    }
    render(){
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.Touch}
                    onPress={(e) => this.cameraClick(e)}
                >
                <Image style={styles.camera}
                       source={camera}/>
                </TouchableHighlight>
                <Image style={{width:this.state.width,height:this.state.height}}
                       source={logo}/>
                <Image style={styles.more}
                       source={more}/>
            </View>
        );
    }
    cameraClick(e){
        let {cameraClick} = this.props;
        if(typeof cameraClick == "function"){
            cameraClick(true)
        }
    }
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:40,
        justifyContent: 'center',//上下居中
        alignItems: 'center',//左右居中
        backgroundColor:'#fff',
        borderBottomColor:'#999',
        borderBottomWidth:0.5,
        position:'fixed',
        position:'relative'
    },
    camera:{

        width:24,
        height:21,

    },
    more:{
        width:22,
        height:15,
        right:20,
        position:'absolute'
    },
    text:{
        textAlign: 'center',
        color:'#333',
        fontSize:40
    },
    Touch:{
        left:20,
        position:'absolute'
    }
});