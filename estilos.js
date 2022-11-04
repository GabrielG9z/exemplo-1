import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#c3f45f",
  },
  um: {
    backgroundColor: "#0c9fd3",
    flex: 2,
    width: "100%",
  },
  dois: {
    width: "100%",
    backgroundColor: "#ffdc03",
    flex: 3,
  },
  titulo: {
    color: "blue",
    fontSize: 32,
  },
  subtitulo: {
    color: "f00",
    fontSize: 24,
  },
});

export default estilos;

/* Para fazermos o acesso aos estilos CSS nós precisamos importar e exportar  */
