import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

import resultStyles from "./css/resultStyles";

export default function ResultScreen() {
    const { priceGas, priceEtanol, marca, modelo, compensa } = useLocalSearchParams();
    let text = compensa !== "0" ? "É mais vantajoso utilizar etanol" : "É mais vantajoso utilizar gasolina.";

    return (
        <View style={resultStyles.container}>
            <Text style={resultStyles.title}>Resultado da Análise</Text>
            <View style={resultStyles.card}>
                <Text style={resultStyles.text}>Marca: <Text style={resultStyles.bold}>{marca}</Text></Text>
                <Text style={resultStyles.text}>Modelo: <Text style={resultStyles.bold}>{modelo}</Text></Text>
                <Text style={resultStyles.text}>Preço da Gasolina: <Text style={resultStyles.bold}>R$ {priceGas}</Text></Text>
                <Text style={resultStyles.text}>Preço do Etanol: <Text style={resultStyles.bold}>R$ {priceEtanol}</Text></Text>
                <Text style={[resultStyles.text, resultStyles.highlight]}>{text}</Text>
            </View>
        </View>
    );
}
