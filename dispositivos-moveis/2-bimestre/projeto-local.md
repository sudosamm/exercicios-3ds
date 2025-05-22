# Comandos para criação de projeto local com terminal e VSCode.
Este arquivo visa servir aos alunos como uma espécie de "cola" para que os mesmos consigam criar seus projetos nos computadores ou em casa sem qualquer auxilio.
### 1. Criação de um projeto local utilizando React Native + Typescript.
Crie um novo projeto utilizando a template de Typescript. Após a execução do comando, será solicitado que o usuário insira o nome do seu projeto.
```sh
npx create-expo-app --template blank-typescript
```

Após a criação do projeto, utilize o comando ```cd [nome_do_projeto]``` para acessar o diretório do projeto que você criou, substituindo o **[nome_do_projeto]** pelo nome que você escolheu. Ex:
```sh
cd meu_primeiro_projeto
```
Adicione as dependências que serão utilizadas para executar o projeto no navegador.
```sh
npx expo install react-dom react-native-web @expo/metro-runtime
```

---

### 2. Importação e criação de páginas com Router.

Instale as dependências necessárias para o Router do expo.
```sh
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

No arquivo ```package.json``` localize a propriedade ```main``` na linha 4 e atualize o seu valor para ```expo-router/entry```. A linha deve ficar da seguinte forma:
```ts
"main": "expo-router/entry"
```

No arquivo ```app.json``` localize a linha 25 que contém a propriedade ```web:``` na linha 25 e adicione o suporte para o Metro. A linha ficará da seguinte forma:
```ts
{
  "web": {
    "favicon": "./assets/favicon.png",
    "bundler": "metro"
  }
}
```

Crie o arquivo inicial do client ```app/_layout.tsx``` no diretório do projeto.
```ts
import { Stack } from 'expo-router'

export default function RootLayout () {
  return (
    <Stack>
      <Stack.Screen name="index"/>
    </Stack>
  )
}
```

Crie o arquivo ```index.tsx``` para a sua tela inicial.
```ts
import { View, Text } from 'react-native'

export default function Screen () {
  return (
    <View>
      <Text>
        Olá, eu sou um arquivo vazio.
      </Text>
    </View>
  )
}
```

Inicie o projeto e leia o QR Code utilizando um dispositivo móvel para iniciar a visualização.
```sh
npm start
```

- Utilize o seguinte comando somente caso não possua um dispositivo móvel disponível para realizar a visualização do projeto ou caso você precise exibir o projeto na tela do navegador.
```sh
npm run web
```
