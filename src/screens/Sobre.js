import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

export default function Sobre({ navigation }) {
  return (
    <View style={styles.tela}>
      <Text style={styles.titulo}>Sobre</Text>
      <Image source={require('../../assets/jornal.png')} style={styles.imagem} />

      <View style={styles.linha} />

      <Text style={styles.texto}>
        Criei esse aplicativo de Notícias na matéria de Desenvolvimento Móvel.
      </Text>
      <Text style={styles.texto}>No app eu usei três tipos de navegação:</Text>
      <Text style={styles.item}>• Drawer (menu lateral)</Text>
      <Text style={styles.item}>• Tabs (Tecnologia e Esportes)</Text>
      <Text style={styles.item}>• Stack (Lista → Detalhes)</Text>

      <Pressable style={styles.botao} onPress={() => navigation.navigate('Notícias')}>
        <Text style={styles.textoBotao}>VOLTAR</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  imagem: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginVertical: 15,
  },
  linha: {
    height: 1,
    backgroundColor: '#333',
    marginBottom: 20,
  },
  texto: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  item: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
    marginBottom: 6,
  },
  botao: {
    backgroundColor: '#2196f3',
    padding: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 'auto',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
