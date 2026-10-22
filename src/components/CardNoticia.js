import { Pressable, Text, StyleSheet } from 'react-native';

export default function CardNoticia({ noticia, onPress }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Text style={styles.categoria}>{noticia.categoria.toUpperCase()}</Text>
      <Text style={styles.titulo}>{noticia.titulo}</Text>
      <Text style={styles.resumo}>{noticia.resumo}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  categoria: {
    fontSize: 12,
    color: '#888',
    letterSpacing: 1,
    marginBottom: 4,
  },
  titulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 6,
  },
  resumo: {
    fontSize: 14,
    color: '#444',
  },
});
