/**
 * Created by joker.wang on 2017/5/10.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableHighlight
} from 'react-native';

let headerIcon = require('/Users/joker.wang/AwesomeProject/app/img/header_icon.jpg');

export class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Image style={styles.icon}
                           source={headerIcon}/>
                    <View style={styles.rightTop}>
                        <View style={styles.num}>
                            <Text style={styles.numText}>6,452</Text>
                            <Text style={styles.nameText}>帖子</Text>
                        </View>
                        <View style={styles.num}>
                            <Text style={styles.numText}>252万</Text>
                            <Text style={styles.nameText}>关注者</Text>
                        </View>
                        <View style={styles.num}>
                            <Text style={styles.numText}>4052</Text>
                            <Text style={styles.nameText}>关注</Text>
                        </View>
                    </View>
                    <TouchableHighlight
                        //onPressIn={() => console.log("onPressIn")}
                        //onPressOut={() => console.log("onPressOut")}
                        //onPress={() => this.onclick()}
                    >
                        <View style={styles.rightBottom}>
                            <Text style={styles.button}>关注</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={styles.intro}>
                        <Text style={styles.introName}>SHAWN YU 余文乐</Text>
                        <Text style={styles.introHref}>www.mdnsonline.com/</Text>
                        <Text style={styles.introFocus}>关注者:</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:160,
        position:'relative',
        borderBottomWidth:0.5,
        borderColor:'#333'
    },
    icon:{
        width:80,
        height:80,
        borderRadius:40,
        position:'absolute',
        margin:10
    },
    rightTop:{
        width:'70%',
        height:40,
        position:'absolute',
        right:10,
        top:10,
        flexDirection: 'row'
    },
    num:{
        alignItems: 'center',//左右居中
        width:'33%',
    },
    numText:{
        fontSize:14,
        color:'#000'
    },
    nameText:{
        fontSize:12,
        color:'#999'
    },
    rightBottom:{
        justifyContent: 'center',//上下居中
        alignItems: 'center',//左右居中
        position:'absolute',
        right:10,
        top:50,
        width:'70%',
        height:28,
        borderWidth:1,
        borderColor:'#eee',
        borderRadius:2
    },
    button:{
        color:'#000',
        fontSize:14,
    },
    intro:{
        position:'absolute',
        left:10,
        top:100
    },
    introName:{
        fontSize:14,
        color:'#000'
    },
    introHref:{
        fontSize:12,
        color:'blue'
    },
    introFocus:{
        fontSize:12,
        color:'#999'
    }
});