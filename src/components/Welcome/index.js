import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {subscribed: true}

  changeButton = () => {
    this.setState(prevState => ({subscribed: !prevState.subscribed}))
  }

  render() {
    const {subscribed} = this.state
    const buttonText = subscribed ? 'Subscribe' : 'subscribed'

    return (
      <div className="maincontainer">
        <h1 className="welocome_heading">Welcome</h1>
        <p className="discription">Thank you! Happy Learning</p>
        <button className="buttonn" type="button" onClick={this.changeButton}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
