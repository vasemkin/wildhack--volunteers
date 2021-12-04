import React from "react"
import { Div, Text, Button } from "react-native-magnus"

const SwitchTab = ({prompt, call, action}) => {
    return(
        <Div {...rowStyle}>
          <Text {...textStyle}>{prompt}</Text>
          <Button
            onPress={action}
            {...emptyButtonStyle}
          >
            <Text {...boldStyle}>{call}</Text>
          </Button>
        </Div>
    )
}

export default SwitchTab


export const textStyle = {
    fontSize: 16,
    color: '#6C757D'
  }
  
  export const rowStyle = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    mt: '100%'
  }
  
  export const emptyButtonStyle = {
    bg: 'transparent',
    alignItems: 'center',
    p: 2,
    ml: 6
  }
  
  export const boldStyle = {
    fontWeight: 'bold',
    fontSize: 16
  }