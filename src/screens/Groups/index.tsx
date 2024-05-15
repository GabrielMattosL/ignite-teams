import { StyleSheet, Text, View } from 'react-native';

import { Container } from './styles';

export function Groups() {
  return (
    <Container>
        <View style={styles.container}>
            <Text style={styles.text}>Groups</Text>
        </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 32
  }
});
