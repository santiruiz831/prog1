import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import {auth, db} from '../firebase/config'; 
import firebase from 'firebase';


class Card extends Component{
    constructor(props){
        super(props);
        this.state={
            cantidadDeLikes: this.props.dataPost.data.likes.length,
            myLike: false,
        }
         console.log(props)
    
    }
    
    componentDidMount(){
        if (this.props.dataPost.data.likes.includes(auth.currentUser.email)) {
            this.setState({
                myLike: true
            })
        }
    }

    like(){
        db.collection('posts')
        .doc(this.props.dataPost.id)
        .update({
            likes: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email)
        })
        .then(()=> this.setState({
            cantidadDeLikes: this.props.dataPost.data.likes.length +1
        }))
        .catch(error => console.log(error))
    }

    unlike(){
        db.collection('posts')
        .doc(this.props.dataPost.id)
        .update({
            likes: firebase.firestore.FieldValue.arrayRemove(auth.currentUser.email)
        })
        .then(()=> this.setState({
            cantidadDeLikes: this.setState({
                
            }),
            myLike: true
        }))
        .catch(error => console.log(error))
    }

    render(){
        return(
                <View>
                    <Text>{this.props.data.posteo}</Text>
                    {
                        this.state.myLike ?
                        <TouchableOpacity onPress={(()=> this.unlike())}>
                        <Text>cantidad De Likes {this.state.cantidadDeLikes}</Text>
                    </TouchableOpacity>:
                    
                    <TouchableOpacity onPress={(()=> this.like())}>
                        <Text>cantidad De Likes {this.state.cantidadDeLikes}</Text>
                    </TouchableOpacity>
                    }
                </View>
        )
    }

}


export default Card;