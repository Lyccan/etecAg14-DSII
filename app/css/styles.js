import {
    StyleSheet
}

    from "react-native";

export default styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f4f8", // cor de fundo suave
        paddingHorizontal: 20,
    }

    ,
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 30,
    }

    ,
    divInputs: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "#fff",

        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        padding: 20,
        width: "90%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0, height: 2
        }

        ,
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        marginBottom: 20,
    }

    ,
    textInput: {
        fontSize: 16,
        fontWeight: "600",
        color: "#555",
        marginBottom: 5,
    }

    ,
    input: {
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        width: "100%",
        marginBottom: 15,
        backgroundColor: "#fafafa",
    }

    ,
    button: {
        backgroundColor: "#000000",

        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
        shadowColor: "#FFFFFF",
        shadowOffset: {
            width: 0, height: 2
        }

        ,
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3,
    }

    ,
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    }

    ,
});