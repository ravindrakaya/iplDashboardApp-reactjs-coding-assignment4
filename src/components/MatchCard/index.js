// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetails
  const getClassName = () => {
    if (matchStatus === 'Won') {
      return 'won-class'
    }
    return 'loose-class'
  }

  const resultClass = getClassName()

  return (
    <li className="list-item-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-img"
      />
      <p className="competing-team-heading">{competingTeam}</p>
      <p className="competing-team-para">{result} </p>
      <p className={resultClass}>{matchStatus} </p>
    </li>
  )
}
export default MatchCard
