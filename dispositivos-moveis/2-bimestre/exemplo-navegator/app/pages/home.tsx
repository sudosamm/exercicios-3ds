import { router, Stack } from 'expo-router'
import { View, Text, Button } from 'react-native'

export default function Screen () {
    const nome = 'Usuário'
    function handleClick () {
        router.replace('/pages/login')
    }
    function handleIndex () {
        router.navigate('/')
    }
  return (
    <View>
        <Stack.Screen options={{ title: 'Página do usuário' }}/>
        <Text>
            <Button title='Sair' onPress={handleClick}/>
            <Button title='Index' onPress={handleIndex}/>
        </Text>
    </View>
  )
}