import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import {auth, db} from '../firebase/config';
import MyCamera from '../components/MyCamera';


class NewPost extends Component{
    constructor(props){
        super(props)
        this.state={
            description:"",
            likes:[],
            showCamera: true,
            url: ''
        }
    }
    
    guardarPost(){
         db.collection('posts').add({
                createdAt: Date.now(),
                owner: auth.currentUser.email,
                description: this.state.description,
                likes:[],
                comments:[],
                url: this.state.url
            })
            .then( response => this.setState({
                description:'',
                photo: "",
                showCamera: true,
            },
            ()=>this.props.navigation.navigate('Home')))
             .catch((error) => {
                 alert("No se pudo crear tu publicación.");
             });
    }
    
    onImageUpload (url){
        this.setState({
            url: url,  //le pasamos al estado lo que viene por paramewtros
            showCamera: false,
        })
    }

    render(){
        return(
                <View style={styles.container}> 
                    {
                    this.state.showCamera ?
                        <MyCamera onImageUpload={(url) => this.onImageUpload(url)} /> 
                    :
                        <View style={styles.container}>
                            <Text style={styles.title}>Nuevo Post</Text>
                            <TextInput
                                style={styles.field}
                                keyboardType='default'
                                placeholder='description'
                                onChangeText={text => this.setState({ description: text })}
                                multiline
                                value={this.state.description}
                            />
                            <TouchableOpacity style={styles.button} onPress={() => this.guardarPost()}>
                                <Text style={styles.buttonText}>Publicar</Text>
                            </TouchableOpacity>
                        </View>
                    }
                </View>
        )   
    }
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        marginTop: 10,
        height: '100%'
    },
    title:{
        marginBottom:20
    },
    button: {
        borderRadius: 2,
        padding:3,
        backgroundColor: '#',
    },
    buttonText:{
        color: '#40194f'
    },
    container: {
  
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f2e9e4",
        color: "#40194f",
    },
    field: {
        color: "white",
        flex: 1,
        width: "100%",
        justifyContent: "center",
        padding: 10,
        marginTop: 15,
        borderRadius: 15,
        backgroundColor: "#fdf",
    },
    image: {
        marginTop: 15,
        height: 1000,
        width: "90%",
        borderRadius: 12,
    },
});

export default NewPost;