import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, TextInput, FlatList, StyleSheet, TouchableOpacity } from "react-native";
// Para React Native CLI
import { openDatabase } from "react-native-sqlite-storage";

// Para Expo
// import * as SQLite from 'expo-sqlite';

// Para React Native CLI
const db = openDatabase({
  name: "rn_sqlite",
});

// Para Expo
// const db = SQLite.openDatabase("tarefas.db");

const App = () => {
  const [produto, setProduto] = useState();
  const [quantidade, setQuantidade] = useState();
  const [compras, setCompras] = useState([]);
  
  

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS compras (id INTEGER PRIMARY KEY AUTOINCREMENT, quantidade INTEGER, nome VARCHAR(20))`,
        [],
        (sqlTxn, res) => {
          console.log("Tabela criada com sucesso!");
        },
        error => {
          console.log("error on creating table " + error.message);
        },
      );
    });
  };


  const deleteProduto = (id) => {
    db.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM compras WHERE id = ?`,
        [id],
        (sqlTxn, res) => {
          console.log(`${produto} Produto removido com sucesso!`);
          setCompras('');
          getCompras();
        },
        (error) => {
          console.log('Erro ao remover um produto ' + error.message);
        }
      );
    });
  };

  const incluirProduto = () => {
    if (!produto || !quantidade) {
      alert("Informe um produto");
      return false;
    }

    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO compras (quantidade,nome) VALUES (?,?)`,
        [quantidade,produto],
        (sqlTxn, res) => {
          console.log(`${produto} Produto incluso com sucesso!`);
          getCompras();
          setProduto("");
          setQuantidade("");
        },
        error => {
          console.log("Erro ao inserir um Produto " + error.message);
        },
      );
    });
  };

  const getCompras = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM compras ORDER BY id ASC`,
        [],
        (sqlTxn, res) => {
          console.log("Produtos lidos com sucesso!");
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id,quantidade: item.quantidade, nome: item.nome });
            }

            setCompras(results);
          }
        },
        error => {
          console.log("Erro ao obter Produtos " + error.message);
        },
      );
    });
  };

  const renderProduto = ({ item }) => {
    return (

      <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>

        <Text style={{ fontSize: 20, textAlign: 'left' }}> {item.nome} ({item.quantidade})  </Text>

        <View>
          <TouchableOpacity title="Remover" onPress={() => {
            deleteProduto(item.id);
          }}>
            <Text style={styles.botao2}>x</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  };

  useEffect(() => {
    async function fetchData() {
      await createTables();
      await getCompras();
    }
    fetchData();
  }, []);

  return (

    <View style={styles.container}>

      <Text style={styles.title}>Lista de Compras</Text>
      <StatusBar backgroundColor="#222" />


      <View>
        <View style={styles.viewInput}>

        <TextInput
            placeholder="Qtde"
            style={styles.input}
            value={quantidade}
            onChangeText={setQuantidade}
            keyboardType='numeric'
          />

          <TextInput
            placeholder="Produto"
            style={styles.input2}
            value={produto}
            onChangeText={setProduto}
            underlineColorAndroid="transparent"
          />

          <TouchableOpacity title="Salvar" onPress={incluirProduto}>
            <Text style={styles.botao}>+</Text>
          </TouchableOpacity>
        </View>
      </View>


      <View style={{
        borderWidth: 2,
        flex: 1,
        margin: 20,
        alignItems: 'center'
      }}>


        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>


          <FlatList style={{
            marginTop: 10,
            fontSize: 40,

          }}
            data={compras}
            renderItem={renderProduto}
            key={t => t.id}
          />

        </View>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center'
  },
  viewInput: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    textDecorationLine: 'underline',
    textAlign: 'center'
  },
  input: {
    width: 60,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    textAlign: 'center'
  },
  input2: {
    width: 240,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    textAlign: 'center'
  },
  botao: {
    backgroundColor: '#222',
    color: '#FFF',
    height: 40,
    width: 40,
    padding: 10,
    marginLeft: 4,
    marginRight: 4,
    borderRadius: 100,
    textAlign: 'center'

  },
  botao2: {
    backgroundColor: '#f00',
    color: '#FFF',
    height: 20,
    width: 20,
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 100,
    textAlign: 'center'

  },
  nome: {
    marginTop: 15,
    fontSize: 30,
    textAlign: 'center'
  }
});


export default App;