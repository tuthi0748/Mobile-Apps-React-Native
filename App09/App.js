import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';

class App extends Component {
  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.textoPrincipal}>Vagas</Text>



        <ScrollView style={styles.scrollView} showsHorizontalScrollIndicator={false}>
          <View style={styles.box}>
            <Text style={styles.textoPrimario}>Desenvolvedor Backend</Text>

            <Text style={styles.textoSecundario}>Salário: R$ 3000,00</Text>
            <Text style={styles.textoSecundario}>Descrição: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"</Text>
            <Text style={styles.textoSecundario}>Contato: Lorem ipsum dolor sit amet</Text>

          </View>

          <View style={styles.box}>
            <Text style={styles.textoPrimario}>Engenheiro de Dados</Text>

            <Text style={styles.textoSecundario}>Salário: R$ 3000,00</Text>
            <Text style={styles.textoSecundario}>Descrição: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"</Text>
            <Text style={styles.textoSecundario}>Contato: Lorem ipsum dolor sit amet</Text>

          </View>


          <View style={styles.box}>
            <Text style={styles.textoPrimario}>Desenvolvedor Frontend</Text>

            <Text style={styles.textoSecundario}>Salário: R$ 2500,00</Text>
            <Text style={styles.textoSecundario}>Descrição: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"</Text>
            <Text style={styles.textoSecundario}>Contato: Lorem ipsum dolor sit amet</Text>

          </View>


          <View style={styles.box}>
            <Text style={styles.textoPrimario}>Analista Dados Júnior</Text>

            <Text style={styles.textoSecundario}>Salário: R$ 1500,00</Text>
            <Text style={styles.textoSecundario}>Descrição: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"</Text>
            <Text style={styles.textoSecundario}>Contato: Lorem ipsum dolor sit amet</Text>

          </View>



          <View style={styles.box}>
            <Text style={styles.textoPrimario}>UX Designer</Text>

            <Text style={styles.textoSecundario}>Salário: R$ 2000,00</Text>
            <Text style={styles.textoSecundario}>Descrição: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"</Text>
            <Text style={styles.textoSecundario}>Contato: Lorem ipsum dolor sit amet</Text>

          </View>


        </ScrollView>

      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  box: {
    backgroundColor: '#fff',
    height: 200,
    margin: 15,
    padding: 2,
    borderWidth: 2,
    borderColor: '#000'
  },

  textoPrincipal: {
    fontSize: 48,
    color: '#ff8300',
    marginVertical: 20,
    textAlign: 'center'
  },
  textoPrimario: {
    fontSize: 24,
    color: '#00a',
    marginVertical: 5
  },
  textoSecundario: {
    fontSize: 20,
    color: '#000',
    marginVertical: 5
  }

})

export default App;


