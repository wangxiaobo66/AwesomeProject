/**
 * Created by joker.wang on 2017/5/9.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    Image,
    View
} from 'react-native';

let Dimensions = require('Dimensions');
let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;
let ScreenScale = Dimensions.get('window').scale;

import {Header} from '/Users/joker.wang/AwesomeProject/app/component/Header/Header';
import {Intro} from '/Users/joker.wang/AwesomeProject/app/component/Intro/Intro';

let img1 = require('/Users/joker.wang/AwesomeProject/app/img/img1.jpg');
let img2 = require('/Users/joker.wang/AwesomeProject/app/img/img2.jpg');
let img3 = require('/Users/joker.wang/AwesomeProject/app/img/img3.jpg');
let src1 = '/Users/joker.wang/AwesomeProject/app/img/img1.jpg';

//跳转的页面
import {Index} from '/Users/joker.wang/AwesomeProject/app/page/Index';

export class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width:0,
            height:0,
            name:'lok666'
        }
    }
    render(){
        let {width,height,name} = this.state;
        return(
            <View style={styles.container}>
                <Header name={name} onclickIcon={(e) => this.onclickIcon(e)}/>
                <ScrollView>
                    <Intro/>
                    <View style={styles.list}>
                        <Image style={[{width:width,height:height}]}
                               source={img1}/>
                        <Image style={[styles.img,{width:width,height:height}]}
                               source={img2}/>
                        <Image style={[styles.img,{width:width,height:height}]}
                               source={img3}/>

                    </View>
                    <View style={styles.list}>
                        <Image style={[{width:width,height:height}]}
                               source={img1}/>
                        <Image style={[styles.img,{width:width,height:height}]}
                               source={img2}/>
                        <Image style={[styles.img,{width:width,height:height}]}
                               source={img3}/>

                    </View>
                </ScrollView>
            </View>
        )
    }
    componentDidMount() {
        Image.getSize(src1, (width, height) => {
            height = ScreenWidth*33/100; //按照屏幕宽度进行等比缩放
            this.setState({
                width: ScreenWidth*33/100,
                height: height
            })
        });
    }
    onclickIcon(e){
        this._onPressButton();
    }
    _onPressButton(){
        const {navigator} = this.props;
        let route = {name:'Index'};
        navigator.push(route)
    }
}

const styles = StyleSheet.create({
    container: {
        top:20,
        backgroundColor: '#fff',
        flex:1
    },
    list:{
        width:'100%',
        flexDirection: 'row',
        borderBottomWidth:2,
        borderColor:'#fff'
    },
    img:{
       marginLeft:'0.5%'
    }
});