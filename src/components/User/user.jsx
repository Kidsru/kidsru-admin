import React from 'react'
import BtnGreen from './Detals/PaymeStatusBtn/BtnGreen'
import BtnRed from './Detals/PaymeStatusBtn/BtnRed'
import BtnBlue from './Detals/PaymeStatusBtn/BtnBlue'
import BtnGrey from './Detals/PaymeStatusBtn/BtnGrey'
import MentorBtn from './Detals/MentorBtn/MentorBtn'
import Actions from './Detals/ActionsBtns/Actions'
import Profil from './Detals/Profil/Profil'
import Profil2 from './Detals/Profil2/Profil2'
import Pagination from './Detals/pagination/Pagination'
import ProgressBar from './Detals/progressBar/progressBar'

function User() {
  return (
    <div>
      <BtnGreen></BtnGreen>
      <BtnRed></BtnRed>
      <BtnGrey></BtnGrey>
      <BtnBlue></BtnBlue>
      <MentorBtn></MentorBtn>
      <Actions></Actions>
      <Profil></Profil>
      <Profil2></Profil2>
      <Pagination></Pagination>
      <ProgressBar percent={75} progressText />
    </div>
  )
}

export default User