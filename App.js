import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import ListaNoticias from './src/screens/ListaNoticias';
import DetalhesNoticia from './src/screens/DetalhesNoticia';
import Sobre from './src/screens/Sobre';
import { noticiasTecnologia, noticiasEsportes } from './src/dados';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// stack da aba Tecnologia: Lista -> Detalhes
function TecnologiaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Lista"
        component={ListaNoticias}
        initialParams={{ noticias: noticiasTecnologia }}
        options={{ title: 'Tecnologia' }}
      />
      <Stack.Screen name="Detalhes" component={DetalhesNoticia} />
    </Stack.Navigator>
  );
}

// stack da aba Esportes: Lista -> Detalhes
function EsportesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Lista"
        component={ListaNoticias}
        initialParams={{ noticias: noticiasEsportes }}
        options={{ title: 'Esportes' }}
      />
      <Stack.Screen name="Detalhes" component={DetalhesNoticia} />
    </Stack.Navigator>
  );
}

// abas de baixo da secao Noticias
function NoticiasTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2196f3',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Tecnologia"
        component={TecnologiaStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hardware-chip-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Esportes"
        component={EsportesStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trophy-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// drawer e a navegacao principal (raiz) do app
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          drawerActiveTintColor: '#2196f3',
        }}
      >
        <Drawer.Screen
          name="Notícias"
          component={NoticiasTabs}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="newspaper-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Sobre"
          component={Sobre}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="information-circle-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
