import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  Button,
} from "react-native";

import estilos from "./estilos";

export default function App() {
  return (
    /* Esse componente ajuda a ajustar à tela do aparelho que está sendo utilizado */
    <SafeAreaView style={estilos.container}>
      {/* Esse componente statusBar faz com que o app se ajuste de acordo com a barra de tarefas do dispositivo */}
      <StatusBar barStyle={"default"} />
      <View style={estilos.um}>
        <Text style={estilos.titulo}>Olá!!!</Text>
      </View>
      <View style={estilos.dois}>
        <Text style={estilos.subtitulo}>
          Trabalhando com desenvolvimento de Apps
        </Text>
      </View>
      <Button title="clica ae :D" />
    </SafeAreaView>
  );
}
