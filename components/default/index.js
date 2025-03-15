import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import Button from '../button';

function Mainler() {
  const [num1, setNum1] = useState(''); // Estado para armazenar o número gerado
  const [num2, setNum2] = useState(''); // Estado para armazenar o número gerado
  const [vlr, setVlr] = useState(null); // Estado para armazenar o número gerado

  const handlePress = () => {
    const result = parseFloat(num1) * parseFloat(num2);
    setVlr(isNaN(result) ? 0 : result);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 50 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        {vlr !== null ? vlr : 'Faça a multiplicação:'}
      </Text>

      <TextInput 
        style={styles.input}
        onChangeText={setNum1}
        value={num1}
        keyboardType="numeric"
        placeholder="Digite o primeiro número"
      />
    
      <TextInput 
        style={styles.input}
        onChangeText={setNum2}
        value={num2}
        keyboardType="numeric"
        placeholder="Digite o segundo número"
      />

      
      <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 30 }}>
        <Button onPress={handlePress} />
      </View>
    </View>
  );
}

export default Mainler;

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});