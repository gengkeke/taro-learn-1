import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

function Child(props) {
  return (
    <View>
      <Text>{props.userName}</Text>
    </View>
  )
}
export default Child
