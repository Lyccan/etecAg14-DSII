import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';

function CalculoDiaria() {
  const [adultos, setAdultos] = useState(4);
  const [criancas, setCriancas] = useState(0);
  const [checkin, setCheckin] = useState('2024-05-27');
  const [checkout, setCheckout] = useState('2024-11-27');
  const [suite, setSuite] = useState("Suíte Single");

  const handleSuiteChange = () => {
    const suites = ["Suíte Single", "Suíte Double", "Suíte Master"];
    const currentIndex = suites.indexOf(suite);
    const nextIndex = (currentIndex + 1) % suites.length;
    setSuite(suites[nextIndex]);
  };

  const handleIncrement = (setter, value) => setter(value + 1);
  const handleDecrement = (setter, value) => {
    if (value > 0) {
      setter(value - 1);
    }
  };

  const handleCheckinChange = (newCheckin) => {
    setCheckin(newCheckin);

    // Verifica se o check-out é menor ou igual ao novo check-in e ajusta, se necessário
    if (Date.parse(newCheckin) >= Date.parse(checkout)) {
      const newCheckout = new Date(newCheckin);
      newCheckout.setDate(newCheckout.getDate() + 1); // Avança um dia para garantir validade
      setCheckout(newCheckout.toISOString().split('T')[0]);
    }
  };

  const handleCheckoutChange = (newCheckout) => {
    if (Date.parse(newCheckout) > Date.parse(checkin)) {
      setCheckout(newCheckout);
    } else {
      Alert.alert("Data Inválida", "A data de check-out deve ser maior que a data de check-in.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cálculo da Diária</Text>

      <View style={styles.box}>
        <View style={styles.row}>
          <Text style={styles.label}>Adultos:</Text>
          <Text style={styles.value}>{adultos}</Text>
          <TouchableOpacity style={styles.button} onPress={() => handleDecrement(setAdultos, adultos)}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleIncrement(setAdultos, adultos)}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Crianças:</Text>
          <Text style={styles.value}>{criancas}</Text>
          <TouchableOpacity style={styles.button} onPress={() => handleDecrement(setCriancas, criancas)}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleIncrement(setCriancas, criancas)}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Escolha sua Suíte</Text>
          <TouchableOpacity style={styles.suiteButton} onPress={handleSuiteChange}>
            <Text style={styles.suiteText}>{suite}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dateContainer}>
          <View style={styles.dateRow}>
            <Text style={styles.label}>Check-in:</Text>
            <TextInput
              style={styles.input}
              value={checkin}
              onChangeText={handleCheckinChange}
            />
          </View>

          <View style={styles.dateRow}>
            <Text style={styles.label}>Check-out:</Text>
            <TextInput
              style={styles.input}
              value={checkout}
              onChangeText={handleCheckoutChange}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.advanceButton}>
          <Text style={styles.advanceButtonText}>Avançar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0fff0',
  },
  title: {
    fontSize: 24,
    color: '#228B22',
    marginBottom: 20,
  },
  box: {
    backgroundColor: '#f0fff0',
    padding: 20,
    borderRadius: 8,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: '#228B22',
  },
  value: {
    width: 20,
    textAlign: 'center',
    fontSize: 18,
    color: '#228B22',
  },
  button: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#32CD32',
    borderRadius: 4,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  suiteButton: {
    padding: 10,
    backgroundColor: '#32CD32',
    borderRadius: 4,
  },
  suiteText: {
    color: '#fff',
    fontSize: 16,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  dateRow: {
    flexDirection: 'column',
  },
  input: {
    padding: 6,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#32CD32',
    width: 120,
  },
  advanceButton: {
    backgroundColor: '#32CD32',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginTop: 15,
  },
  advanceButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default CalculoDiaria;
