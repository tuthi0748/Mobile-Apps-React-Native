import React, { Component } from 'react';
import { View, Text, Pressable} from 'react-native';
import { styles } from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { peopleCounter: 0 };

    this.clicouPlus = this.clicouPlus.bind(this);

    this.clicouMinus = this.clicouMinus.bind(this);
  }

  clicouPlus() {
    this.setState((contagemAnterior) => {
      return { peopleCounter: contagemAnterior.peopleCounter + 1 };
    });
  }

  clicouMinus() {
    if (this.state.peopleCounter == 0) {
      return { peopleCounter: 0 };
    }
    this.setState((contagemAnterior) => {
      return { peopleCounter: contagemAnterior.peopleCounter - 1 };
    });
  }

  render() {
    let nomeApp = 'Contador de Pessoas';

    return (
      <View style={styles.container}>
      
        <Text style={styles.textoPrincipal}>{nomeApp}</Text>
        <Text style={styles.textoContagem}>{this.state.peopleCounter}</Text>
        
        <Pressable style={styles.botaoPlus} onPress={() => this.clicouPlus()}>
          <Text style={styles.textoBotao}>+</Text>
        </Pressable>
        <Pressable style={styles.botaoMinus} onPress={() => this.clicouMinus()}>
          <Text style={styles.textoBotao}>-</Text>
        </Pressable>
      
      </View>
    );
  }
}

export default App;
