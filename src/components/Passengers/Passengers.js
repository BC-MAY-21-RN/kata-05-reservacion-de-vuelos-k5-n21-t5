import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SmoothPicker from 'react-native-smooth-picker';
import IonIcon from 'react-native-vector-icons/Ionicons';
import styles from './PassengersStyle';

const dataPassengers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const opacities = {
  0: 1,
  1: 1,
  2: 0.6,
  3: 0.3,
  4: 0.1,
};
const sizeText = {
  0: 25,
  1: 20,
  2: 15,
};
const Item = React.memo(({opacity, selected, vertical, fontSize, name}) => {
  return (
    <View
    style={[
      styles.OptionWrapper,
      {
        opacity,
        borderColor: selected ? '#ABC9AF' : 'transparent',
        width: vertical ? 250 : 'auto',
      },
    ]}>
    {selected && <IonIcon name="chevron-forward-outline" style={styles.backIcon}/>}
    <Text style={[styles.text,{fontSize}]}>{name}</Text>
    {selected && <IonIcon name="chevron-back-outline" style={styles.backIcon}/>}
  </View>
  );
});

const ItemToRender = ({item, index}, indexSelected, vertical) => {
  const selected = index === indexSelected;
  const gap = Math.abs(index - indexSelected);

  let opacity = opacities[gap];
  if (gap > 3) {
    opacity = opacities[4];
  }
  let fontSize = sizeText[gap];
  if (gap > 1) {
    fontSize = sizeText[2];
  }
  return <Item opacity={opacity} selected={selected} vertical={vertical} fontSize={fontSize} name={item}/>;
};

export const PassengerPicker = () => {

  function handleChange(index) {
    setSelected(index);
  }
  const [ selected, setSelected ] = useState(1);
  console.log(selected)
  return (
    <View style={styles.container}>
      <View style={styles.wrapperVertical}>
        <SmoothPicker
          initialScrollToIndex={selected}
          onScrollToIndexFailed={() => {}}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          data={dataPassengers}
          scrollAnimation
          onSelected={({ item, index }) => handleChange(index)}
          renderItem={option => ItemToRender(option, selected, true)}
          magnet
        />
      </View>
    </View>
  );
};
