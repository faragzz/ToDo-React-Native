import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  TextInput,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import { DataProps } from "./types/data";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Toast from "react-native-simple-toast";
import { useState } from "react";
import { styles } from "./App.style";
import { storiesOf } from "@storybook/react-native";

export default function App() {
  const DATA: DataProps[] = [
    {
      id: "1",
      title: "hello",
      completed: false,
    },
    {
      id: "2",
      title: "world",
      completed: false,
    },
    {
      id: "3",
      title: "example",
      completed: false,
    },
    {
      id: "4",
      title: "react",
      completed: false,
    },
  ];

  const Todos = (props: DataProps) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => updateItemCompleted(props)}
    >
      <Text style={props.completed ? styles.itemCompleted : styles.itemText}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );

  const [items, setItems] = useState(DATA);
  const [text, setText] = useState("");
  const [counter, setCounter] = useState(5);
  const [isModelVisible, setModelVisible] = useState(false);
  const addNewText = () => {
    let newTodo: DataProps = {
      id: counter.toString(),
      title: text,
      completed: false,
    };
    setCounter(counter + 1);
    setItems([...items, newTodo]);
    setText("");
    setModelVisible(false);
  };

  const updateItemCompleted = (item: DataProps) => {
    const index: number = items.findIndex((currItem) => currItem.id == item.id);
    if (index != -1) {
      Toast.show("This is a toast.", Toast.LONG);
      const updatedItems = [...items];
      updatedItems[index] = {
        ...items[index],
        completed: !items[index].completed,
      };
      setItems(updatedItems);
    }
  };

  const renderAddBtn = () => (
    <TouchableOpacity onPress={() => setModelVisible(true)}>
      <View style={styles.icon}>
        <Ionicons name="add" size={24} color="white" />
      </View>
    </TouchableOpacity>
  );
  const cancel = () => {
    setModelVisible(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Modal
        visible={isModelVisible}
        transparent={true}
        onRequestClose={() => setModelVisible(!isModelVisible)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modal}>
            <TextInput
              style={styles.input}
              onChangeText={setText}
              value={text}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignSelf: "stretch",
                marginBottom: 10,
              }}
            >
              <Button title="add todo" onPress={addNewText} />
              <Button title="canecl" onPress={cancel} />
            </View>
          </View>
        </View>
      </Modal>
      <FlatList
        style={styles.list}
        data={items}
        renderItem={({ item }) => <Todos {...item} />}
        keyExtractor={(item) => item.id}
        ListFooterComponent={renderAddBtn}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}