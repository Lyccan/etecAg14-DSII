import { StyleSheet } from "react-native";

export default resultStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e7f1ff",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 20,
    },
    card: {
        backgroundColor: "#ffffff", // fundo branco para o card
        borderRadius: 10,
        padding: 20,
        width: "90%",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    text: {
        fontSize: 18,
        margin: 5,
        color: "#000",
    },
    bold: {
        fontWeight: "bold",
        color: "#000", // cor do texto em negrito
    },
    highlight: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#D9534F",
    },
});