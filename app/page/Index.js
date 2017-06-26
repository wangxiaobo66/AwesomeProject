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

import {ImagePicker} from 'react-native-image-picker';

let photoOptions = {
    //底部弹出框选项
    title:'请选择',
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'选择相册',
    quality:0.75,
    allowsEditing:true,
    noData:false,
    storageOptions: {
        skipBackup: true,
        path:'images'
    }
};

import {ImagePickerManager} from 'NativeModules';

let options = {
    title: '', // 选择器的标题，可以设置为空来不显示标题
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照', // 调取摄像头的按钮，可以设置为空使用户不可选择拍照
    chooseFromLibraryButtonTitle: '相册', // 调取相册的按钮，可以设置为空使用户不可选择相册照片
    customButtons: {
    'Choose Photo from Facebook': 'fb', // [按钮文字] : [当选择这个按钮时返回的字符串]
    },
    mediaType: 'photo', // 'photo' or 'video'
    videoQuality: 'high', // 'low', 'medium', or 'high'
    durationLimit: 10, // video recording max time in seconds
    maxWidth: 100, // photos only默认为手机屏幕的宽，高与宽一样，为正方形照片
    maxHeight: 100, // photos only
    allowsEditing: false, // 当用户选择过照片之后是否允许再次编辑图片
};

let ScrollableTabView = require('react-native-scrollable-tab-view');

//组件
import {Head} from '/Users/joker.wang/AwesomeProject/app/component/Head/Head';
import {List} from '/Users/joker.wang/AwesomeProject/app/component/List/List';
import {CustomTabBar} from '/Users/joker.wang/AwesomeProject/app/component/CustomTabBar/CustomTabBar';//自定义tab样式
//跳转的页面
//import {Details} from '/Users/joker.wang/AwesomeProject/app/page/Details';

export class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas:[
                {"headerSrc":require('/Users/joker.wang/AwesomeProject/app/img/header_icon.jpg'),"time":"7分钟前","name":"lok666","src":[{"src":require('/Users/joker.wang/AwesomeProject/app/img/img1.jpg')},{"src":require('/Users/joker.wang/AwesomeProject/app/img/img1.jpg')},{"src":require('/Users/joker.wang/AwesomeProject/app/img/img1.jpg')}],"uri":"/Users/joker.wang/AwesomeProject/app/img/img1.jpg"},
                {"headerSrc":require('/Users/joker.wang/AwesomeProject/app/img/header_icon.jpg'),"time":"1天前","name":"lok666","src":require('/Users/joker.wang/AwesomeProject/app/img/img2.jpg'),"uri":"/Users/joker.wang/AwesomeProject/app/img/img2.jpg"},
                {"headerSrc":require('/Users/joker.wang/AwesomeProject/app/img/header_icon.jpg'),"time":"1天前","name":"lok666","src":require('/Users/joker.wang/AwesomeProject/app/img/img3.jpg'),"uri":"/Users/joker.wang/AwesomeProject/app/img/img3.jpg"}
            ]
        }
    }
    render() {
        let {datas} = this.state;
        return (
            <ScrollableTabView
                renderTabBar={() => <CustomTabBar />}
                initialPage={1}
            >
                <View style={styles.oneView}>
                    <Text>一个页面</Text>
                </View>
                <View style={styles.container}>
                    <Head cameraClick={(e) => this.cameraClick(e)}/>
                    <ScrollView>
                        {
                            this.list(datas)
                        }
                    </ScrollView>
                </View>
                <View style={styles.otherView}>
                    <Text>另一个页面</Text>
                </View>
            </ScrollableTabView>
        );
    }
    list(datas){
        let list = [];
        for(let i=0,len = datas.length;i<len;i++){
            list.push(
                <List detail={datas[i]} onclickIcon={(e) => this.onclickIcon(e)} onclickcomments={(e) => this.onclickcomments(e)}/>
            )
        }
       // console.log(list,"***");
        return list;
    }
    onclickIcon(e){
        const {navigator} = this.props;
        let route = {name:'Details'};
        navigator.push(route)
    }
    onclickcomments(e){
        const {navigator} = this.props;
        let route = {name:'Comments'};
        navigator.push(route)
    }
    cameraClick(e){
        //console.log(ImagePicker);
        /*
        ImagePicker.showImagePicker(photoOptions,(response) =>{
            console.log('response'+response);
            if (response.didCancel){
                return
            }
        })

        ImagePicker.showImagePicker(photoOptions, (response) => {
            console.log('Response = ', response);
        })
         */
        ImagePickerManager.showImagePicker(options, (response) => {
            console.log('Response = ', response);
        })
    }
}

const styles = StyleSheet.create({
    container: {
        top:20,
        marginBottom:60,
        backgroundColor: '#fff',
    },
    oneView:{
        backgroundColor:'#333',
        flex:1,
        justifyContent: 'center',//上下居中
        alignItems: 'center',//左右居中
    },
    otherView:{
        backgroundColor:'#fff',
        flex:1,
        justifyContent: 'center',//上下居中
        alignItems: 'center',//左右居中
    }
});