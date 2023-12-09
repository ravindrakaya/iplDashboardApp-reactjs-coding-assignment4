// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
// import { async } from 'fast-glob'

class TeamMatches extends Component {
  state = {
    matchesData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getRecentMatchDetails()
  }

  renderLoader = () => (
    <div className="loader-Bg-container" testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderMatchDetailsList = () => {
    const {matchesData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = matchesData
    return (
      <div className="team-matches-bg-container">
        <img
          src={teamBannerUrl}
          alt="team banner"
          className="team-banner-img"
        />
        <p className="latest-match-para">Latest Matches</p>
        <LatestMatch
          key={latestMatchDetails.id}
          matchDetails={latestMatchDetails}
          recentMatchesList={recentMatches}
        />
      </div>
    )
  }

  getRecentMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updateData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        id: data.latest_match_details.id,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        firstInnings: data.latest_match_details.first_innings,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        result: data.latest_match_details.result,
        secondInnings: data.latest_match_details.second_innings,
        umpires: data.latest_match_details.umpires,
        venue: data.latest_match_details.venue,
      },
      recentMatches: data.recent_matches.map(eachItem => ({
        id: eachItem.id,
        competingTeam: eachItem.competing_team,
        competingTeamLogo: eachItem.competing_team_logo,
        date: eachItem.date,
        firstInnings: eachItem.first_innings,
        manOfTheMatch: eachItem.man_of_the_match,
        matchStatus: eachItem.match_status,
        result: eachItem.result,
        secondInnings: eachItem.second_innings,
        umpires: eachItem.umpires,
        venue: eachItem.venue,
      })),
    }
    this.setState({
      matchesData: updateData,
      isLoading: false,
    })
  }

  render() {
    const {isLoading} = this.state
    return isLoading ? this.renderLoader() : this.renderMatchDetailsList()
  }
}
export default TeamMatches
