import { FlatList, StyleSheet } from 'react-native';
import CardNoticia from '../components/CardNoticia';

// mesma tela para as duas abas, so muda a lista que recebe pelos params
export default function ListaNoticias({ route, navigation }) {
  const { noticias } = route.params;

  return (
    <FlatList
      style={styles.tela}
      contentContainerStyle={{ padding: 16 }}
      data={noticias}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CardNoticia
          noticia={item}
          onPress={() => navigation.navigate('Detalhes', { noticia: item })}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});
