import { useState } from "react";
import { Button, Text, TextInput, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "./css/styles";

export default function Index() {
  const [numA, setPriceGas] = useState(0);
  const [numB, setPriceEtanol] = useState(0);
  const [txtA, setMarca] = useState('');
  const [txtB, setModelo] = useState('');
  const router = useRouter();

  const handleVehycle = (priceGas, priceEtanol, marca, modelo, compensa) => {
    priceGas = parseFloat(numA);
    priceEtanol = parseFloat(numB);
    marca = txtA;
    modelo = txtB;
    compensa;

    if (priceEtanol <= priceGas * 0.7) {
      compensa = 1;
    } else {
      compensa = 0;
    }

    router.push({
      pathname: "/result",
      params: { priceGas, priceEtanol, marca, modelo, compensa }
    });
  };

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Verifique o Combustível Ideal!</Text>
      <View style={styles.divInputs}>
        <Text style={styles.textInput}>Preço da Gasolina</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="R$"
          onChangeText={(text) => setPriceGas(text)} // Atualiza o estado
        />

        <Text style={styles.textInput}>Preço do Etanol</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="R$"
          onChangeText={(text) => setPriceEtanol(text)} // Atualiza o estado
        />

        <Text style={styles.textInput}>Marca do Veículo</Text>
        <TextInput
          style={styles.input}
          placeholder="BMW"
          onChangeText={setMarca}
        />

        <Text style={styles.textInput}>Modelo do Veículo</Text>
        <TextInput
          style={styles.input}
          placeholder="I8"
          onChangeText={setModelo} // Atualiza o estado
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleVehycle}>
        <Text style={styles.buttonText}>Verificar</Text>
      </TouchableOpacity>
    </View>
  );
}