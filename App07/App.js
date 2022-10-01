import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Switch, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dados00: '',
      dados1: '',
      dados2: '',
      dados3: '',
      dados4: '',
      dados5: '',
      dados6: '',
      dadosInformados: '',
      input01: '',
      input02: '',      
      status: false,
      valor: 0,
      sexo: 0,
      sexos: [
        { nome: 'Gênero' },
        { nome: 'Masculino', sexo: 'Masculino' },
        { nome: 'Feminino', sexo: 'Feminino' },
      ],

      escolaridade: 0,
      escolaridades: [
        { nome: 'Nível de Escolaridade' },
        { nome: 'Ens. Fundamental Incompleto', escolaridade: 'Ensino Fundamental Incompleto' },
        { nome: 'Ens. Fundamental Completo', escolaridade: 'Ensino Fundamental Completo' },
        { nome: 'Ens. Médio Incompleto', escolaridade: 'Ensino Médio Incompleto' },
        { nome: 'Ens. Médio Completo', escolaridade: 'Ensino Médio Completo' },
        { nome: 'Ens. Superior Incompleto', escolaridade: 'Ensino Superior Incompleto' },
        { nome: 'Ens. Superior Completo', escolaridade: 'Ensino Superior Completo' },
      ]
    };

    this.confirmar = this.confirmar.bind(this);

  }

  confirmar()   { 


    if (this.state.input01 === '') {
      alert('Digite seu nome')
      return;
    }
    if (this.state.input02 === '') {
      alert('Digite sua idade')
      return;
    }
    if (this.state.escolaridades[this.state.escolaridade].nome === 'Nível de Escolaridade') {
      alert('Escolha umas das opções de Nível de Escolaridade')
      return;
    }
    if (this.state.sexos[this.state.sexo].nome === 'Gênero') {
      alert('Escolha umas das opções de Gênero')
      return;
    }
    
    this.setState({ dados00: 'Dados informados:'});
    this.setState({ dados1: 'Nome: ' + this.state.input01 });
    this.setState({ dados2: 'Idade: ' + this.state.input02 });
    this.setState({ dados3: 'Sexo: ' + this.state.sexos[this.state.sexo].nome });
    this.setState({ dados4: 'Escolaridade: ' + this.state.escolaridades[this.state.escolaridade].escolaridade });
    this.setState({ dados5: 'Limite: R$' + this.state.valor.toFixed(0) + ',00' });
    this.setState({ dados6: 'Brasileiro: ' + ((this.state.status) ? "Sim" : "Não") });
  }


render() {

  let sexosItem = this.state.sexos.map((sexo, chave) => {
    return <Picker.Item key={chave} value={chave} label={sexo.nome} />
  })

  let escolaridadesItem = this.state.escolaridades.map((escolaridade, chave) => {
    return <Picker.Item key={chave} value={chave} label={escolaridade.nome} />
  })


  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Abertura de Conta</Text>

      {/*  --------------------------     NOME   ------------------------------------*/}

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.textoPrincipal}>Nome: </Text>

        <TextInput
          style={styles.input}
          onChangeText={(texto01) => this.setState({ input01: texto01 })}
        />
      </View>

      {/*  --------------------------     IDADE   ------------------------------------*/}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.textoPrincipal}>Idade: </Text>

        <TextInput
          style={styles.input}
          onChangeText={(texto02) => this.setState({ input02: texto02 })}
        />
      </View>

      {/*  --------------------------     SEXO   ------------------------------------*/}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: .5 }}>
          <Text style={styles.textoPrincipal2}>Sexo: </Text>
        </View>

        <View style={{ flex: .8 }}>

          <Picker style={styles.Picker} mode="dropdown"
            selectedValue={this.state.sexo}
            onValueChange={(itemValue, itemIndex) => this.setState({ sexo: itemValue })}
          >
            {sexosItem}
          </Picker>

        </View>
      </View>

      {/*  --------------------------     ESCOLARIDADE   ------------------------------------*/}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <View style={{ flex: .5 }}>

          <Text style={styles.textoPrincipal2}>Escolaridade: </Text>
        </View>
        <View style={{ flex: .8 }}>
          <Picker style={styles.Picker} mode="dropdown"
            selectedValue={this.state.escolaridade}
            onValueChange={(itemValue, itemIndex) => this.setState({ escolaridade: itemValue })}
          >
            {escolaridadesItem}
          </Picker>
        </View>
      </View>

      {/*  --------------------------     LIMITE   ------------------------------------*/}

      <View style={{ flexDirection: 'row', alignItems: 'stretch', marginVertical: 20 }}>
        <View style={{ flex: .5, alignItems: 'stretch', justifyContent: 'center' }}>
          <Text style={styles.textoPrincipal}>Limite: </Text>
        </View>
        <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
          <Slider
            minimumValue={0}
            maximumValue={1000}
            onValueChange={(valorSelecionado) => this.setState({ valor: valorSelecionado })}
            value={this.state.valor}
            step={100}
            minimumTrackTintColor='blue'
            maximumTrackTintColor='red'
            thumbTintColor='#aaa'
          />
        </View>
        <View>
          <Text style={{ textAlign: 'center', fontSize: 30 }}>
            R$ {this.state.valor.toFixed(0)},00
          </Text>
        </View>
      </View>


      {/*  --------------------------    BRASILEIRO   ------------------------------------*/}

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: .5 }}>
          <Text style={styles.textoPrincipal}>Brasileiro: </Text>
        </View>

        <Switch style={{ marginLeft: 15, transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
          value={this.state.status}
          onValueChange={(valorSwitch) => this.setState({ status: valorSwitch })}
          trackColor={{ false: "#767577", true: "#0f0" }}
        />
        <Text style={{ marginLeft: 15, textAlign: 'center', fontSize: 30 }}>
          {(this.state.status) ? "Sim" : "Não"}
        </Text>
      </View>
      {/* 



      {/*  --------------------------    BOTÃO CONFIRMAR  ------------------------------------*/}
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Pressable style={styles.botaoConfirmar} title="Confirmar" onPress={this.confirmar}>
          <Text style={styles.textoBotao}>Confirmar</Text>
        </Pressable>
      </View>

      {/*  --------------------------    DADOS INFORMADOS   ------------------------------------*/}

      <View>

        <Text style={{ color: '#0af', fontWeight: 'bold', textAlign: 'center', fontSize: 20, marginVertical: -5 }}>
          {this.state.dados00}
          </Text>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: '#000', fontWeight: 'bold' }}></Text>
          <Text style={styles.textoDados}>{this.state.dados1}</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: '#000', fontWeight: 'bold' }}></Text>
          <Text style={styles.textoDados}>{this.state.dados2}</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: '#000', fontWeight: 'bold' }}></Text>
          <Text style={styles.textoDados}>{this.state.dados3}</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: '#000', fontWeight: 'bold' }}></Text>
          <Text style={styles.textoDados}>{this.state.dados4}</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: '#000', fontWeight: 'bold' }}></Text>
          <Text style={styles.textoDados}>{this.state.dados5}</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: '#000', fontWeight: 'bold' }}></Text>
          <Text style={styles.textoDados}>{this.state.dados6}</Text>
        </View>

      </View>

    </View>
  );

}
}




{/*  --------------------------    STYLES   ------------------------------------*/}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  logo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff8300'
  },
  textoPrincipal: {
    fontSize: 20,
    color: '#000'
  },
  textoPrincipal2: {
    fontSize: 20,
    color: '#000'
  },
  sexos: {
    marginTop: 15,
    fontSize: 20,
    textAlign: 'center'
  },
  Picker: {
    width: 240,
    backgroundColor: '#eee'
  },
  input: {
    width: 240,
    textDecorationLine: 'underline',
    fontSize: 20,
    color: '#f00',
  },
  botaoConfirmar: {
    width: 350,
    height: 50,
    margin: 20,
    backgroundColor: '#0af',
  },
  textoBotao: {
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 45,
    fontSize: 25,
    color: '#fff',
  },
  textoDados: {
    textAlign: 'center',
    fontSize: 18,
    color: '#f00',
    textDecorationLine: 'underline',
  },

});
