import { useState } from 'react'
import Header from './Header'
import FeedbackList from './FeedbackList'
import FeedbackData from '../data/FeebackData'

//need to add the data in
const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)
  return (
    <div>
      <Header></Header>
      <div className='container'>
        <FeedbackList feedback={feedback}></FeedbackList>
      </div>
    </div>
  )
}

export default App
