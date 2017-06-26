/**
 * Created by joker.wang on 2017/5/12.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    Image,
    View,
    TextInput
} from 'react-native';
/*
const { APP } = require('../../redux/reducers');
const { Provider, connect } = require('react-redux');
const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;

let store = createStore(APP, applyMiddleware(thunk));
*/
import {Header} from '/Users/joker.wang/AwesomeProject/app/component/Header/Header';
/*
class component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
            name: '评论',
            value:'',
            placeholder:'添加评论...'
        }
    }

    render() {
        let {name,value,placeholder} = this.state;
        return (
            <View style={styles.container}>
                <Header name={name} onclickIcon={(e) => this.onclickIcon(e)}/>
                <View style={styles.input}>
                    <TextInput style={styles.text}
                               placeholder={placeholder}
                               value={value}
                               onChange={(e) => this.onChange(e)}/>
                </View>
            </View>
        )
    }
    componentDidMount() {
    }
    onclickIcon(e){
        const {navigator} = this.props;
        let route = {name:'Index'};
        navigator.push(route)
    }
    onChange(e){
        let value = e.target.value;
        this.setState({
            value:value
        })
    }
}
*/

export class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
            name: '评论',
            value:'',
            placeholder:'添加评论...'
        }
    }

    render() {
        let {name,value,placeholder} = this.state;
        return (
            <View style={styles.container}>
                <Header name={name} onclickIcon={(e) => this.onclickIcon(e)}/>
                <View style={styles.input}>
                    <TextInput style={styles.text}
                               placeholder={placeholder}
                               value={value}
                               onChange={(e) => this.onChange(e)}/>
                </View>
            </View>
        )
    }
    componentDidMount() {
    }
    onclickIcon(e){
        const {navigator} = this.props;
        let route = {name:'Index'};
        navigator.push(route)
    }
    onChange(e){
        let value = e.target.value;
        this.setState({
            value:value
        })
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        top:20,
        backgroundColor:'#fff',
        position:'relative'
    },
    input:{
        width:'100%',
        position:'absolute',
        bottom:20.5,
        left:0,
    },
    text:{
        width:'100%',
        borderColor:'#999',
        borderWidth:0.5,
        left:0,
        bottom:0,
        height:30
    }
});