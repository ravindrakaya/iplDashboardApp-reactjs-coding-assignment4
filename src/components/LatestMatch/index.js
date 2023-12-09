// Write your code here
import MatchCard from '../MatchCard'
import './index.css'

const LatestMatch = props => {
  const {matchDetails, recentMatchesList} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = matchDetails
  return (
    <div className="match-bg-container">
      <div className="latest-match-container">
        <div className="container1">
          <p className="team-heading">{competingTeam} </p>
          <p className="team-para">{date} </p>
          <p className="team-para">{venue} </p>
          <p className="team-para">{result} </p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="team-logo"
        />
        <div className="container2">
          <p className="team-para">First Innings </p>
          <p className="team-para1">{firstInnings} </p>
          <p className="team-para">Second Innings </p>
          <p className="team-para1">{secondInnings} </p>
          <p className="team-para">Man Of The Match </p>
          <p className="team-para1">{manOfTheMatch} </p>
          <p className="team-para">Umpires </p>
          <p className="team-para1">{umpires} </p>
        </div>
      </div>
      <ul className="unordered-list-container">
        {recentMatchesList.map(eachItem => (
          <MatchCard key={eachItem.id} matchDetails={eachItem} />
        ))}
      </ul>
    </div>
  )
}
export default LatestMatch
