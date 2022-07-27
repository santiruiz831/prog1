import React, { Component } from 'react';
import { db, auth } from '../firebase/config';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    Image
} from 'react-native';
import Post from './Post';
import { FontAwesome } from '@expo/vector-icons'; 

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            email: '',
            whoIs: '',
            users: []
        }
    }

    componentDidMount(){
        db.collection('posts').where('owner', '==', this.state.whoIs).onSnapshot(
            (docs) => {
                let posts = [];
                docs.forEach( oneDoc => {
                    posts.push({
                        id: oneDoc.id,
                        data: oneDoc.data()
                    })
                })

                this.setState({
                    posts: posts
                })
            }
        );
        db.collection("users")
            .where("email", "==", auth.currentUser.email)
            // .orderBy("createdAt", "desc")
            .onSnapshot(
                (docs) => {
                    let postsAux = [];
                    docs.forEach((doc) => {
                        postsAux.push({
                            id: doc.id,
                            data: doc.data(),
                        });
                    }); // For each
                    console.log(postsAux)
                    this.setState({
                        username: postsAux[0].data.userName,
                        loader: false,
                    });
                   ;
                }
            );

        
    }


    // Obtener información a partir de una búsqueda.
    search(email) {
        db.collection('posts').where('owner', '==', email).onSnapshot(
            docs => {
                let posts = [];
                docs.forEach(oneDoc => {
                    posts.push({
                        id: oneDoc.id,
                        data: oneDoc.data()
                    })
                })

                this.setState({
                    posts: posts,
                    email: '',
                    whoIs: email,
                })
            }
        )
    }
    render() {
        let filteredPosts =
        this.state.email.length > 0
          ? this.state.posts.filter((element) =>
              element.data.owner
                .toLowerCase()
                .includes(this.state.searchInput.toLowerCase())
            )
          : this.state.posts;
  
      let filteredUsers =
        this.state.email.length > 0
          ? this.state.users.filter((element) =>
              element.data.username
                .toLowerCase()
                .includes(this.state.searchInput.toLowerCase())
            )
          : this.state.users;
        return (
            <View style={styles.container}>
                {/* Si no hay resultados deben mostrar un mensaje al usuario. Puede ser un mensaje único o segmenteado: en caso de que el usuario no exista o si el usuario existe indicar que aún no tiene posteos. */}
                {this.state.loader ? (
                    <ActivityIndicator size='large' color='blue' />
                ) : (
                <>
                <Text style={styles.titulo}>Posts del usuario: {this.state.whoIs}</Text>
                <View style={styles.form}>
                    <Text>
                        <TextInput
                            style={styles.field}
                            keyboardType='default'
                            placeholder='Email a buscar...'
                            value={this.state.email}
                            onChangeText={text => this.setState({ email: text })}
                        /> 
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.search(this.state.email)}
                            //👇 Les dejo un dato sorpresa para los que llegaron hasta acá: así se deshabilita un touchable opacity
                            disabled={this.state.email == '' ? true : false}
                        >
                            <Text style={styles.buttonText}>
                            <FontAwesome name="search" size={24} color="#40194f" />
                            </Text>
                        </TouchableOpacity>
                    </Text>
                </View>
                {filteredUsers.length > 0 ? (
                filteredPosts.length > 0 ? (
                  <FlatList
                    style={styles.flatlist}
                    showsHorizontalScrollIndicator={false}
                    data={filteredPosts}
                    keyExtractor={(post) => post.id.toString()}
                    renderItem={({ item }) => <Post dataItem={item}></Post>}
                  />
                ) : (
                  <View style={styles.noPosts}>
                    <Text style={styles.texto}>
                      Lo siento, este usuario aun no hizo un posteo
                    </Text>
                  </View>
                )
              ) : (
                <View style={styles.noPosts}>
                  <Text style={styles.texto}>
                    Ese usuario no existe. Por favor, prueba con otro.
                  </Text>
                </View>
              )}
            </>
              )}
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fdf7ff",
        color: "#fdf7ff",
    },
    form: {
        flex: 1,
        marginHorizontal: 20,
    },
    field: {
        borderColor: '#dcdcdc',
        borderWidth: 1,
        borderRadius: 2,
        padding: 3,
        marginBottom: 8,
        width: '90%'
    },
    button: {
        height: 30,
        width: 30,
        marginLeft: 10,
    },
    buttonText: {
        color: '#fff'
    },
    titulo: {
        color: '#40194f',
        fontSize: 20,
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
    },
    posts: {
        marginTop: 100,
    },
    noPosts: {
        marginTop: 100,
    },
    texto: {
        color: '#40194f',
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 20,
        marginLeft: 20,
        textAlign: 'center',
    }
})

export default Search;