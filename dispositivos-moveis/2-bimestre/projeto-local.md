# Comandos para criação de projeto local com terminal e VSCode.

1. Utilize o comando ```npx create-expo-app --template``` para criar um projeto utilizando uma das 5 templates disponibilizadas pelo Expo.
2. Selecione a opção ```Blank (Typescript)``` para criar um projeto vazio utilizando Typescript.
3. Crie um nome para o seu projeto, levando em conta a estrutura base de nomenclatura para diretórios do Windows e Linux (evite o uso de espaços ou caracteres especiais).
4. Após a criação do projeto, utilize o comando ```cd [nome_do_projeto]``` para acessar o diretório do projeto que você criou, substituindo o texto com "nome_do_projeto" pelo nome que você escolheu.
5. Execute o comando ```npx expo install react-dom react-native-web @expo/metro-runtime``` para adicionar as dependências utilizadas para executar o projeto no navegador.
6. Utilize o comando ```npx start``` para iniciar o projeto de forma geral e leia o QR Code no celular utilizando o app Expo Go.
- Caso queira rodar o projeto no navegador, utilize o comando ```npm run web```.

## Passo a passo para a importação e criação de páginas com Router.

1. Utilize no terminal o comando ```npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar``` para instalar as dependências necessárias para o Router do expo.
2. 
