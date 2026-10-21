# Mini App de Notícias

Atividade 4 de Desenvolvimento Mobile, feita com React Native + Expo + React Navigation.

## Navegação
- **Drawer** (raiz): Notícias e Sobre
- **Tabs** (dentro de Notícias): Tecnologia e Esportes
- **Stack** (dentro de cada aba): Lista de notícias → Detalhes da notícia

## Estrutura
```
App.js                        -> monta o Drawer, as Tabs e os Stacks
src/dados.js                  -> lista de notícias
src/components/CardNoticia.js -> card reutilizável das listas
src/screens/ListaNoticias.js  -> lista de notícias (usada nas duas abas)
src/screens/DetalhesNoticia.js-> notícia completa (título no header com setOptions)
src/screens/Sobre.js          -> tela Sobre com imagem e botão Voltar
```

## Como rodar
```
npm install
npx expo start
```
Aperte `w` para abrir no navegador ou leia o QR Code com o Expo Go.
