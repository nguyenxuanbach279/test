import { FC, useState } from 'react'
import reactlogo from './assets/images/react.svg'
import './assets/styles/app.css'
import './assets/styles/app.scss'

const App: FC = () => {
  const [fullname, setFullname] = useState('Dư Thanh Được');
  const a = 'abcd'
  return (
    <div>
      <img src={reactlogo} alt='React Logo' width={100} height={100} />
      <h1>{a}</h1>
      <h2>Bài viết được viết tại blog {process.env.HOST}</h2>
    </div>
  )
}

export default App
