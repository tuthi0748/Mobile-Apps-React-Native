import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import api from './src/services/api';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

 
class App extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      git: [],
      gitSolicitado: '',
      gitResultado: '',  
    };
    this.retorno = this.retorno.bind(this);
  }


 
  async retorno() {
    let gitSolicitado = this.state.gitSolicitado;
    const response = await api.get(gitSolicitado);
    this.setState({
      git: response.data,
    });
    this.setState({
      gitResultado: `
      Git Profile: \n
        • Id: ${this.state.git.id} \n
        • Nome: ${this.state.git.name} \n
        • Repositórios: ${this.state.git.repos_url} \n
        • Criado em: ${this.state.git.created_at} \n
        • Seguidores: ${this.state.git.followers}\n
        • Seguindo: ${this.state.git.following}
      `,
    });
    Keyboard.dismiss();
  }


  render() {
    let img = this.state.git.avatar_url 
    ? this.state.git.avatar_url
    : 'https://pngimg.com/uploads/github/small/github_PNG72.png';

    return (
      <View style={styles.container}>
        
        <View style={styles.row}>
          <Text style={styles.title}>Perfil dos Devs</Text>

          <Image
          source={{ uri:'http://pngimg.com/uploads/github/github_PNG93.png'}}
          style={{ width: 50, height: 50, marginLeft: 10}}
        />
        </View>
        

   


        <View style={styles.row}>
          <TextInput
            placeholder="Digite o login git: "
            style={styles.input}
            onChangeText={(value) => this.setState({ gitSolicitado: value })}
            keyboardType="numeric"
          />

          <TouchableOpacity style={{ paddingLeft: 15, paddingTop:10 }} onPress={this.retorno}>
            <Feather name='search' size={30} color='#f00' />
          </TouchableOpacity>
        </View>

        <View style={styles.box}>

        <View style={styles.row}>
          <Image
          source={{ uri: img }}
          style={{ width: 115, height: 115, borderRadius: 100, borderColor:'#000', borderWidth: 3}}
        />
        </View>

        
          <Text style={styles.resultado}>
            {this.state.gitResultado}
          </Text>
        
        </View>
       
        <View style={styles.box1}>
      
          <Text style={{ color: '#fff', fontSize: 16 }}>
            
          </Text>
      
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: '#222',
  },
  title: {
    fontSize: 30,
    textDecorationLine: 'underline',
    textAlign: 'center',
    color: '#fff'
  },
  row: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',

  },
  input: {
    height: 45,
    fontSize: 20,
    padding: 10,
    width: 325,
    backgroundColor: '#EEEEEE',
    borderColor: '#fff',
    color: '#000',
  },
  resultado: {
    fontWeight: '800',
    color: '#fff',
    fontSize: 15
  },
  box: {
    color: 'white',
    marginTop: 40,
    margin: 20,
    
    
  },
  box1: {
    backgroundColor: '#fff',
    paddingTop: 80,
    color: '#f00',
    marginTop: 600,
    margin: 20,
  },
});

export default App;