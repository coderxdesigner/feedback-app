import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header'
import About from '../pages/About'
import FeedbackList from './FeedbackList'
import FeedbackData from '../data/FeebackData'
import FeedbackStats from './FeedbackStats'
import FeedbackForm from './FeedbackForm'
import AboutLinkIcon from './AboutLinkIcon'

//need to add the data in
const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback = id => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter(item => item.id !== id))
    }
  }
  const addFeedback = newFeedback => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }
  return (
    <Router>
      <Header></Header>
      <div className='container'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}></FeedbackList>
              </>
            }
          />
          <Route path='/about' element={<About />}></Route>
        </Routes>
        <AboutLinkIcon />
      </div>
    </Router>
  )
}

export default App
