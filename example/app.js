import React from 'react'
import { render } from 'react-dom'
import MyPlayer from '../src'

const App = () =>
  <MyPlayer 
    src="https://nn4cdn.nikkigames.cn/xiaomaoqiu/b4cc53349ba8a218854457b377616172.mp4" 
    targetUrl="https://nn4cdn.nikkigames.cn/nn4cn/mp4.html" 
    style={{ maxHeight: '90vh', maxWidth: '90vw' }} />
render(<App />, document.getElementById('root'))