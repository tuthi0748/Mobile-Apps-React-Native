import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, Text, SafeAreaView } from 'react-native';

class App extends Component {
  render() {
    let img = 'https://yata.ostr.locaweb.com.br/b1da36362690140b82f2615336181d34f58abf5a5fadf78cb182f5aafb43242e';
    return (
      
      <View style={styles.container}>
        <Text style={styles.textoPrincipal}>Anúncios</Text>
        <SafeAreaView style={styles.containerSafe}>
        <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.box1}>
            <Image source={{ uri: img }} style={{borderRadius: 10, width: 80, height: 80, marginTop: 20}}/>
            <Text style={styles.textoSecundario}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</Text>
            </View>
          <View style={styles.box2}>
          <Image source={{ uri: img }} style={{borderRadius: 10, width: 80, height: 80, marginTop: 20}}/>
          <Text style={styles.textoSecundario}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</Text>
          </View>
          <View style={styles.box3}>
          <Image source={{ uri: img }} style={{borderRadius: 10, width: 80, height: 80, marginTop: 20}}/>
          <Text style={styles.textoSecundario}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</Text>
          </View>
          <View style={styles.box4}>
          <Image source={{ uri: img }} style={{borderRadius: 10, width: 80, height: 80, marginTop: 20}}/>
          <Text style={styles.textoSecundario}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</Text>
          </View>
          <View style={styles.box5}>
          <Image source={{ uri: img }} style={{borderRadius: 10, width: 80, height: 80, marginTop: 20}}/>
          <Text style={styles.textoSecundario}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</Text>
          </View>
          <View style={styles.box6}>
          <Image source={{ uri: img }} style={{borderRadius: 10, width: 80, height: 80, marginTop: 20}}/>
          <Text style={styles.textoSecundario}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</Text>
          </View>
        </ScrollView>
        </SafeAreaView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerSafe: {
    margin: 10,
    padding: 5,
    borderWidth: 3,
    borderColor: '#000'
  },

  box1: {
    backgroundColor: 'red',
    height: 250,
    width: 130,
    alignItems: 'center',
    margin: 2,
    padding: 2,
    borderWidth: 2,
    borderColor: '#000'
  },
  box2: {
    backgroundColor: 'green',
    height: 250,
    width: 130,
    alignItems: 'center',
    margin: 2,
    padding: 2,
    borderWidth: 2,
    borderColor: '#000'
  },
  box3: {
    backgroundColor: 'yellow',
    height: 250,
    width: 130,
    alignItems: 'center',
    margin: 2,
    padding: 2,
    borderWidth: 2,
    borderColor: '#000'
  },
  box4: {
    backgroundColor: 'blue',
    height: 250,
    width: 130,
    alignItems: 'center',
    margin: 2,
    padding: 2,
    borderWidth: 2,
    borderColor: '#000'
  },
  box5: {
    backgroundColor: 'gray',
    height: 250,
    width: 130,
    alignItems: 'center',
    margin: 2,
    padding: 2,
    borderWidth: 2,
    borderColor: '#000'
  },
  box6: {
    backgroundColor: 'purple',
    height: 250,
    width: 130,
    alignItems: 'center',
    margin: 2,
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
  textoSecundario: {
    fontSize: 14,
    color: '#000',
    marginVertical: 20,
    textAlign: 'center'
  }

})

export default App;


