import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity ,TextInput} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {

  state = {
   monedaorigen:"USD",
    datos: [],
    datosregresojson :
      {
  rates: {
    CAD: null,
    HKD: null,
    ISK: null,
    PHP: null,
    DKK: null,
    HUF: null,
    CZK: null,
    GBP: null,
    RON: null,
    SEK: null,
    IDR: null,
    INR: null,
    BRL: null,
    RUB: null,
    HRK: null,
    JPY: null,
    THB: null,
    CHF: null,
    EUR: null,
    MYR: null,
    BGN: null,
    TRY: null,
    CNY: null,
    NOK: null,
    NZD: null,
    ZAR: null,
    USD: null,
    MXN: null,
    SGD: null,
    AUD: null,
    ILS: null,
    KRW: null,
    PLN: null,
  },
  base: null,
  date: null
}
      }

  getExchData = async() =>{

    try
    {
      var url = 'https://api.exchangeratesapi.io/latest?base='+ this.state.monedaorigen;
      const response = await fetch(url)
      const datos  = await response.json()
      this.setState({datos})
      this.setState({datosregresojson: datos})
    }
    catch(e)
    {
      console.log(e);
    }
  }
  render() {
    return (
      <View style={styles.container}>
      <TextInput
       placeholder="dame USD o MXN"
       onChangeText={(text)=> this.setState({monedaorigen:text.toUpperCase()})}
       />
     <TouchableOpacity onPress={() => this.getExchData()} style={{ padding : 20, backgroundColor: 'green' }}>
<Text> Obtener data </Text>
</TouchableOpacity>
<Text> MEXICAN PESO= {JSON.stringify(this.state.datosregresojson.rates.MXN)} </Text>
<Text> LIBRA= {JSON.stringify(this.state.datosregresojson.rates.GBP)} </Text>
<Text> YEN= {JSON.stringify(this.state.datosregresojson.rates.JPY)} </Text>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
