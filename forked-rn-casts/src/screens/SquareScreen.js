import React, {useReducer} from 'react';
import { View, StyleSheet, Button, Text} from 'react-native';
import ColorCounter from '../components/ColourCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action)=>{
    //state=== {red: number, green: number, blue:number }
    //action === {colorToChange: 'red'||'green'||'blue'}
    switch(action.colorToChange){
      case 'red':
        return state.red + action.amount > 255 || state.red + action.amount < 0 ?
        state :
        {...state, red: state.red + action.amount};
      case 'green':
        return state.green + action.amount > 255 || state.green + action.amount < 0 ?
        state : 
        {...state, green: state.green + action.amount};

      case 'blue':
        return state.blue + action.amount > 255 || state.blue + action.amount < 0 ?
        state:
        {...state, blue: state.blue + action.amount};
      default:
        return state;
    }
}

const SquareScreen = () => {
  
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
  const {red, green, blue} = state;
  console.log(state);//{red: 0, green: 0, blue:0}



  return (
  <View>
      <ColorCounter 
        onIncrease={()=> dispatch({colorToChange:'red', amount: COLOR_INCREMENT})}
        onDecrease={()=> dispatch({colorToChange:'red', amount: -1* COLOR_INCREMENT})} 
        color="red"/>
      <ColorCounter 
        onIncrease={()=> dispatch({colorToChange:'blue', amount: COLOR_INCREMENT})} 
        onDecrease={()=> dispatch({colorToChange:'blue', amount: -1* COLOR_INCREMENT})} 
        color="blue"/>
      <ColorCounter 
        onIncrease={()=> dispatch({colorToChange:'green', amount: COLOR_INCREMENT})} 
        onDecrease={()=> dispatch({colorToChange:'green', amount: -1* COLOR_INCREMENT})} 
        color="green"/>
      <View style={{height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})`}}/>
  </View>
  );
};
const styles = StyleSheet.create({
    text: {
      fontSize:30
    }
  });
export default SquareScreen;