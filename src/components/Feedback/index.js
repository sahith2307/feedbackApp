// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {selected: false}

  selectedEmoji = () => {
    this.setState({selected: true})
  }

  mainPage = () => {
    const {feedbackData} = this.props
    const {emojis} = feedbackData

    return (
      <div>
        <h1>How satisfied are you with our customer support performance</h1>
        <ul>
          {emojis.map(each => (
            <li key={each.id} onClock={this.selectedEmoji}>
              <img src={each.imageUrl} alt={each.name} />
            </li>
          ))}
        </ul>
      </div>
    )
  }

  resultPage = () => {
    const {feedbackData} = this.props
    const {loveEmojiUrl} = feedbackData

    return (
      <div>
        <img src={loveEmojiUrl} alt="loveEmoji" />
      </div>
    )
  }

  render() {
    const {selected} = this.state
    return (
      <div>
        <div>{selected ? this.resultPage() : this.mainPage()}</div>
      </div>
    )
  }
}

export default Feedback
