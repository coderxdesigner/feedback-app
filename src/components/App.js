import { useState } from 'react'
import Header from './Header'
import FeedbackList from './FeedbackList'
import FeedbackData from '../data/FeebackData'

//need to add the data in
const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback = id => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter(item => item.id !== id))
    }
  }
  return (
    <div>
      <Header></Header>
      <div className='container'>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}></FeedbackList>
      </div>
    </div>
  )
}

export default App
