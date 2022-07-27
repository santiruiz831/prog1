import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';

import {db, storage} from '../firebase/config';
import firebase from 'firebase';
import {Camera} from 'expo-camera'


class MyCamara extends Component{
    constructor(props){
        super(props)
        this.state={
           permission: false,
           showCamera: true,
           url: '' 
        }
        this.metodosDeCamara = ''
    }

    componentDidMount(){
        Camera.requestCameraPermissionsAsync()
        .then(()=> {
            this.setState({
                permission: true, 
            })
        })
        .catch(error => console.log(error));
    }


    takePicture(){
        //Usar un metodo de camara para sacar la foto.abs
        this.metodosDeCamara.takePictureAsync()
        .then(photo => {
            this.setState({
            //Obtener la URL temporal para guardarla en un estado
                url: photo.uri,
                showCamera: false
            })
        })
        .catch()
    }

    savePhoto(){
        fetch(this.state.photo)
        .then(res => res.blob())
        .then(image => {const ref = storage.ref(`photos/${Date.now()}.jpg`)
        ref.put(image)
        .then(()=> {
            ref.getDownloadURL()
            .then((url)=> {
                this.props.onImageUpload(url); //Tiene que venir del padre
            })
        })
    
    })
    .catch(error => console.log(error))
    }

    clearPhoto(){
        //To do 
    }

    render(){
        return(
        //console.log(this.props);
                <View>
                    {
                        this.state.permission ?
                            this.state.showCamera ?
                        <View style={styles.cameraBody}>
                            <Camera
                            style={styles.cameraBody}
                            type= {Camera.Constants.Type.front}
                            ref={metodosDeCamara => this.metodosDeCamara = metodosDeCamara }
                            />  
                        </View> 
                        :
                        <View style={styles.cameraBody}>
                            <Image
                                style={styles.preview}
                                source={{uri: this.state.photo}}
                                resizeMode = 'cover'
                            />
                        </View>
                        :
                        <Text>No tengo permisos de camara</Text>
                    }
                   

                    <TouchableOpacity 
                        style={styles.shootButton}
                        onPress={()=> this.takePicture()}
                         >
                             <Text>Shoot</Text>
                        </TouchableOpacity>

                    

                     <View style={styles.buttonArea}>
                        <TouchableOpacity onPress={()=> this.savePhoto()}>
                            <Text>Guardar foto</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> this.clearPhoto()}>
                            <Text>Rechazar foto</Text>
                        </TouchableOpacity>
                     </View>
                </View>
        )
        
    }

}

const styles = StyleSheet.create({
    cameraBody:{
        height: '80%',
        width: '90%'
    },

    shootButton:{
        height: '20%',
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 5,
        borderRadius: 4,
        marginTop: 20
    },

    preview:{
        height: '80%'
    },

    buttonArea:{
        
    },

})



export default MyCamara;