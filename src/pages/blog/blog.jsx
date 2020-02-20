import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import { xiedajiao, liuying } from '../../tools'

function Blog() {
  const [blogTitle, setBlogTitle] = useState('')
  const [articleList, setArticleList] = useState([])
  const girls = [
    { id: 1, name: '谢大脚' },
    { id: 2, name: '刘英' },
    { id: 3, name: '王小蒙' },
    { id: 4, name: '香秀' }
  ]

  const testHandler = () => {
    Taro.request({
      url: 'https://apiblog.jspang.com/default/getArticleList'
    }).then(res => {
      console.log(res.data)
      setArticleList(res.data.list)
    })
  }

  useEffect(() => {
    setBlogTitle(this.$router.params.blogTitle)
    xiedajiao()
    liuying()
  }, [])

  return (
    <View>
      <Text>{blogTitle}</Text>
      <Button onClick={() => Taro.navigateBack()}>返回</Button>
      <Image src={require('../../static/test.jpg')} />
      {
        girls.map((item, index) => {
          return <View>{item.name}</View>
        })
      }
      <Button onClick={testHandler}>请求远程数据</Button>
      {
        articleList.map((item, index) => {
          return (<View key={index}>{index}.{item.title} </View>)
        })
      }
    </View>
  )
}
export default Blog
