import { Link } from 'expo-router'
import { View, Text } from 'react-native'

export default function Screen () {
  return (
    <View>
      <Text>
        Olá, eu sou um arquivo vazio.
      </Text>

      <Link href={"/scrollview"} style={{ width: 380, height: 40, backgroundColor: 'green'}}>Clique em mim para acessar a página com scrollview</Link>
    </View>
  )
}