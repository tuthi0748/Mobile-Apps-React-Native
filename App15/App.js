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
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20))`,
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


  const deleteTarefa = (id) => {
    db.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM tarefas WHERE id = ?`,
        [id],
        (sqlTxn, res) => {
          console.log(`${tarefa} Tarefa deletada com sucesso!`);
          setTarefas('');
          getTarefas();
        },
        (error) => {
          console.log('Erro ao deletar uma Tarefa ' + error.message);
        }
      );
    });
  };

  const incluirTarefa = () => {
    if (!tarefa) {
      alert("Informe uma tarefa");
      return false;
    }

    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO tarefas (nome) VALUES (?)`,
        [tarefa],
        (sqlTxn, res) => {
          console.log(`${tarefa} Tarefa adicionada com sucesso!`);
          getTarefas();
          setTarefa("");
        },
        error => {
          console.log("Erro ao inserir uma Tarefa " + error.message);
        },
      );
    });
  };

  const getTarefas = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM tarefas ORDER BY id ASC`,
        [],
        (sqlTxn, res) => {
          console.log("Tarefas lidas com sucesso!");
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, nome: item.nome });
            }

            setTarefas(results);
          }
        },
        error => {
          console.log("Erro ao obter Tarefas " + error.message);
        },
      );
    });
  };

  const renderTarefa = ({ item }) => {
    return (

      <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>

        <Text style={{ fontSize: 20, textAlign: 'left' }}>{item.id} - {item.nome}  </Text>

        <View>
          <TouchableOpacity title="Remover" onPress={() => {
            deleteTarefa(item.id);
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
      await getTarefas();
    }
    fetchData();
  }, []);

  return (

    <View style={styles.container}>

      <Text style={styles.title}>Tarefas</Text>
      <StatusBar backgroundColor="#222" />


      <View>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.input}
            value={tarefa}
            onChangeText={setTarefa}
            underlineColorAndroid="transparent"
          />

          <TouchableOpacity title="Salvar" onPress={incluirTarefa}>
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
            data={tarefas}
            renderItem={renderTarefa}
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
    width: 330,
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