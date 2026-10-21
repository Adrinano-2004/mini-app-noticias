import { useLayoutEffect } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function DetalhesNoticia({ route, navigation }) {
  const { noticia } = route.params;

  // troca o titulo do header pelo titulo da noticia
  useLayoutEffect(() => {
    navigation.setOptions({ title: noticia.titulo });
  }, [navigation, noticia]);

  return (
    <ScrollView style={styles.tela} contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.categoria}>{noticia.categoria.toUpperCase()}</Text>
      <Text style={styles.titulo}>{noticia.titulo}</Text>
      <Text style={styles.conteudo}>{noticia.conteudo}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  categoria: {
    fontSize: 13,
    color: '#888',
    marginBottom: 6,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 12,
  },
  conteudo: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
});
