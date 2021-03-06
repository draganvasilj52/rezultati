import classes from '../pages/Score.module.css'
import MyLeaguesTitle from '../MatchPreview/MyLeaguesTitle'
import React from 'react'

const LeaguesList = ({ previewData, handleClick, selectedLeague }) => {
  return (
    <div className={classes.side}>
      <p className={classes.title}>MY LEAGUES</p>
      {previewData.map((item, index) => (
        <MyLeaguesTitle
          selectedLeague={selectedLeague}
          handleClick={handleClick}
          key={index}
          item={item.league}
        />
      ))}
    </div>
  )
}

export default LeaguesList
