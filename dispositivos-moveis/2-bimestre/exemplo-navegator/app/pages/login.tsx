import { router, Stack } from 'expo-router'
import { View, Text, Button } from 'react-native'

export default function Screen () {
    function handleClick () {
        router.replace('/pages/home')
    }
    function handleBack () {
        router.navigate('/')
    }
  return (
    <View>
        <Text>
                <Button title='Entrar' onPress={handleClick}/>
                <Button title='Retornar' onPress={handleBack}/>
        </Text>
    </View>
  )
}