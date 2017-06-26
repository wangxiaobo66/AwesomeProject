/**
 * Created by joker.wang on 2017/5/8.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableHighlight,
} from 'react-native';

import Swiper from 'react-native-swiper';

let Dimensions = require('Dimensions');
let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;
let ScreenScale = Dimensions.get('window').scale;

let backHeart = require('/Users/joker.wang/AwesomeProject/app/img/black_heart.png');
let redHeart = require('/Users/joker.wang/AwesomeProject/app/img/red_heart.png');
let comments = require('/Users/joker.wang/AwesomeProject/app/img/comments.png');

export class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /*
            headerSrc: '',
            name: '',
            time: '',
            src: '',
            */
            width: 0,
            height: 0,
            heart:false
        };
    }

    render() {
        let {headerSrc, name, time, src} = this.props.detail;
        let {width, height,heart}= this.state;
        return (
            <View>
                <View style={styles.header}>
                    <TouchableHighlight
                        //onPressIn={() => console.log("onPressIn")}
                        //onPressOut={() => console.log("onPressOut")}
                        onPress={() => this.onclick()}
                        //onLongPress={() => console.log("onLongPress")}
                    >
                        <Image style={styles.icon}
                               source={headerSrc}/>
                    </TouchableHighlight>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.time}>{time}</Text>
                </View>
                <View style={styles.imgView}>
                    {
                        this.imgList(src)
                    }
                </View>
                <View style={styles.state}>
                    <TouchableHighlight
                        onPress={() => this.heart()}
                    >
                        <Image style={[styles.heart,{width:23,height:20}]}
                               source={(heart?redHeart:backHeart)}/>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => this.comments()}
                    >
                    <Image style={[styles.comments,{width:20,height:20}]}
                           source={comments}/>
                    </TouchableHighlight>
                    <Image/>
                    <Image/>
                </View>
                <View style={styles.sender}>
                    <Text style={styles.senderName}>{name}</Text>
                    <Text style={styles.content}>大海啊，全是水</Text>
                    <TouchableHighlight
                        onPress={() => this.comments()}
                    >
                        <Text style={styles.seeComments}>查看全部评论</Text>
                    </TouchableHighlight>
                </View>
            </View>

        )
    }

    componentDidMount() {
        //console.log(this.props.detail,"&&&&");
        Image.getSize(this.props.detail.uri, (width, height) => {
            height = ScreenWidth * height / width; //按照屏幕宽度进行等比缩放
            this.setState({
                width: ScreenWidth,
                height: height
            })
        });
    }

    onclick() {
        let {onclickIcon} = this.props;
        if(typeof onclickIcon == "function"){
            onclickIcon(123)
        }
    }
    comments(){
        let {onclickcomments} = this.props;
        if(typeof onclickcomments == "function"){
            onclickcomments(123)
        }
    }
    imgList(src){//判断是否是多张图片
        if(src.length!=undefined){
            let attr =[];
            for(var i = 0 ,len = src.length;i<len;i++){
                attr.push(<Image style={[{width:ScreenWidth,height:ScreenWidth}]}
                                 source={src[i].src}/>)
            }
            return <Swiper
                        height={ScreenWidth}
                        >
                        {
                            attr
                        }
                    </Swiper>
        }else{
            return <Image style={[{width:this.state.width,height:this.state.height}]}
                          source={src}/>
        }

    }
    /*
     componentWillReceiveProps(nextProps) {
     console.log(1,"#########");
     this.setState({
     headerSrc:nextProps.detail.headerSrc,
     name:nextProps.detail.name,
     time:nextProps.detail.time,
     src:nextProps.detail.src
     })
     }*/
    heart(){
        let {heart} =this.state;
        if(heart){
            this.setState({
                heart:false
            })
        }else{
            this.setState({
                heart:true
            })
        }
    }
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',//上下居中
        width: '100%',
        height: 40,
        position: 'relative'
    },
    icon: {
        width: 24,
        height: 24,
        left: 20,
        top: -10,
        borderRadius: 12,
        position: 'absolute'
    },
    name: {
        position: 'absolute',
        left: 50,
        fontSize: 14,
        fontWeight:'bold'
    },
    time: {
        position: 'absolute',
        right: 20,
        fontSize: 12
    },
    imgView: {
        alignItems: 'center',//左右居中
        width: '100%'
    },
    img: {
        width: ScreenWidth
    },
    heart:{
        top:-6,
        left:20,
        position: 'absolute',
    },
    comments:{
        top:-6,
        left:60,
        position: 'absolute',
    },
    state:{
        position: 'relative',
        justifyContent: 'center',//上下居中
        height:30,
        width:'100%'
    },
    sender:{
        width: '100%',
        position: 'relative',
        height:50
    },
    senderName:{
        left:20,
        top:5,
        fontSize:14,
        fontWeight:'bold',
        position: 'absolute',
    },
    content:{
        top:6,
        fontSize:14,
        fontWeight:'normal',
        position: 'absolute',
        left:80

    },
    seeComments:{
        fontSize:14,
        left:20,
        color:'#999',
        position: 'absolute',
        top:30
    }
});