// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {
    teamDetailsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamCards()
  }

  renderSpinnerLoader = () => (
    <div className="loader-bg" testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderAppContainer = () => {
    const {teamDetailsList} = this.state
    return (
      <div className="app-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="logo-heading">IPL Dashboard</h1>
        </div>
        <ul className="team-card-container">
          {teamDetailsList.map(eachItem => (
            <TeamCard key={eachItem.id} teamDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }

  getTeamCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updateData = teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({
      teamDetailsList: updateData,
      isLoading: false,
    })
  }

  render() {
    const {isLoading} = this.state
    return isLoading ? this.renderSpinnerLoader() : this.renderAppContainer()
  }
}
export default Home
