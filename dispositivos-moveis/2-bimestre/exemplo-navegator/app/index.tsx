import { Link, router, Stack, useNavigation } from 'expo-router';
import { useState } from 'react'
import { View, Text, Button } from 'react-native'

export default function Screen () {
    const [counter, setCounter] = useState(0);

    const [head, setHead] = useState(false)
    const [cabecalho, setCabecalho] = useState('Ocultar cabeçalho');

    const navigation = useNavigation()

    function handleHeader() {
        setHead(!head)
        if(head){
            setCabecalho('Ocultar cabecalho')
        }
        else{
            setCabecalho('Exibir cabecalho')
        }
        navigation.setOptions({
            headerShown: head
        })
    }

    function contador () {
        setCounter(counter+1)
    }

    function handleClick () {
        router.navigate('/pages/login')
    }
    function handleLogout () {
        router.navigate('/pages/home')
    }
  return (
    <View style={{flexDirection: 'column'}}>
        <Stack.Screen options={{ headerRight: () => <Button title='Logout' onPress={handleLogout} />}}/>
        <Text>
            <Button title='Ir para login' onPress={handleClick}/>
            <Text style={{fontSize: 30}}>{counter}</Text>
            <Button title='Incrementar' onPress={contador}/>

            <Link replace href={'./pages/login'}>Clique aqui para ir para o login</Link>

            <Button title={cabecalho} onPress={handleHeader}/>
        </Text>
    </View>
  )
}