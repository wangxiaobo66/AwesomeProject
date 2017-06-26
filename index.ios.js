/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    ScrollView,
    StyleSheet,
    NavigatorIOS,
    Text,
    Image,
    View
} from 'react-native';

import {Navigator} from 'react-native-deprecated-custom-components';

import {Index} from '/Users/joker.wang/AwesomeProject/app/page/Index';
import {Details} from '/Users/joker.wang/AwesomeProject/app/page/Details';
import {Comments} from '/Users/joker.wang/AwesomeProject/app/page/Comments';

export default class AwesomeProject extends Component {
    render() {
        return (
            <Navigator
                style={{flex:1}}
                initialRoute={{name:'Index',component:Index}}
                configureScene={this.configureScene}
                renderScene={this.renderScene}
            />
        );
    }
    configureScene(route) {
        if(route.name=='Index'){
            return Navigator.SceneConfigs.PushFromLeft;
        }else if(route.name=='Details'){
            return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
        }else if(route.name=='Comments'){
            return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
        }
            //return Navigator.SceneConfigs.FloatFromBottom; // 底部弹出
    }
    renderScene(route, navigator) {
        if(route.name == "Details"){
            return <Details navigator={navigator}/>
        }else if(route.name == "Index"){
            return <Index navigator={navigator}/>
        }else if(route.name == "Comments"){
            return <Comments navigator={navigator}/>
        }

    }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
