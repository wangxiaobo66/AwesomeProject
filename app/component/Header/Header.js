/**
 * Created by joker.wang on 2017/5/10.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableHighlight,
    Text
} from 'react-native';

let left = require('/Users/joker.wang/AwesomeProject/app/img/left.png');

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render(){
        let {name} = this.props;
        return(
            <View style={styles.container}>
                <TouchableHighlight
                    style={styles.touch}
                    //onPressIn={() => this.onPressIn()}
                    //onPressOut={() => console.log("onPressOut")}
                    onPress={() => this.onclick()}
                >
                <Image style={styles.img}
                       source={left}/>
                </TouchableHighlight>
                <Text style={styles.name}>{name}</Text>
            </View>
        )
    }
    onclick() {
        let {onclickIcon} = this.props;
        if(typeof onclickIcon == "function"){
            onclickIcon(123)
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
    img:{
        width:11,
        height:20,
        position:'absolute',
        left:20
    },
    touch:{
        position:'absolute',
        left:0,
        top:10
    },
    name:{
        color:'#000',
        fontSize:18
    }
});