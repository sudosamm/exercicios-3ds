import { Stack } from 'expo-router'

export default function RootLayout () {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Página' }}/>
      <Stack.Screen name='pages/login' options={{ title: 'Página de Login'}}/>
    </Stack>
  )
}