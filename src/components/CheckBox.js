import React from 'react'
import CheckBox from '@react-native-community/checkbox'

export const CheckBox = () => {
    const [checkBox, setCheckBox] = useState(true)
    const [checkBox2, setCheckBox2] = useState(true)

    const revisar = (val) => (checkBox == true) ? setCheckBox(false) : setCheckBox(true)
    const revisar2 = (val) => (checkBox2 == true) ? setCheckBox2(false) : setCheckBox2(true) 
    return (

        <View>
            
          <CheckBox
            title="I agree to the Terms and Privacy Policy"
            disabled={false}
            value={checkBox}
            checkedColor='red'
            textStyle='blue'
            uncheckedColor='#4543'
            onValueChange={(checkBox) => {revisar(checkBox)}}
          ></CheckBox> 
          

          <CheckBox
            title="Suscribe for select products updates"
            disabled={false}
            value={checkBox2}
            onValueChange={(checkBox2) => {revisar2(checkBox2)}}
            ></CheckBox>
        </View>
    )
}




  
  
  

