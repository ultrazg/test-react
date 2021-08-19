import React from 'react'
import { scoreText as SCORE_TEXT } from '../../types'

const Index = (props) => {
  let scoText = SCORE_TEXT
  let score = props.score

  return (
    <p>名称：{props.name} 评分：{scoText[score]}</p>
  )
}

export default Index