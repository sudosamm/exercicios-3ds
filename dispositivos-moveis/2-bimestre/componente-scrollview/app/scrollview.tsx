import { Link } from 'expo-router'
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Screen () {
  return (
    <SafeAreaView>
    <ScrollView horizontal= {false}>
      <Text>
        Olá, eu sou uma página com scrollview
      </Text>
      <ScrollView horizontal={true}>
        <Link href={'/blue'} style={{width: 300, height: 300, backgroundColor: 'blue'}}><Text>Caixa</Text></Link>
        <Text style={{width: 300, height: 300, backgroundColor: 'yellow'}}>Caixa</Text>
      
      <Text style={{width: 300, height: 300, backgroundColor: 'red'}}>Caixa</Text>
      
      <Text style={{width: 300, height: 300, backgroundColor: 'orange'}}>Caixa</Text>
      </ScrollView>
      <Text style={{width: 300, height: 300, backgroundColor: 'yellow'}}>Caixa</Text>
      
      <Text style={{width: 300, height: 300, backgroundColor: 'red'}}>Caixa</Text>
      
      <Text style={{width: 300, height: 300, backgroundColor: 'orange'}}>Caixa</Text>

      <Link href={"../"} style={{ width: 380, height: 40, backgroundColor: 'green'}}>Clique em mim para acessar a página com scrollview</Link>
    </ScrollView>
    </SafeAreaView>
  )
}