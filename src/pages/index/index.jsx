import Taro, { useState } from '@tarojs/taro'
import {View, Text, Button, Image} from '@tarojs/components'
import Child from './child'
import './index.less'

export default function Index() {

  const [userName, setUserName] = useState("Hello World1")
  const [blogTitle, setBlogTitle] = useState('Title')

  const gotoBlog = () => {
    Taro.navigateTo({ url: `/pages/blog/blog?blogTitle=${blogTitle}` })
  }

  return (
    <View>
      <Text>
        {userName}
      </Text>
      <Child userName={userName} />
      <Button onClick={gotoBlog}>BLOG</Button>
    </View>
  )
}
