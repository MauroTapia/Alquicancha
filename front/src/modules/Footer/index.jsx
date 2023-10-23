import React from 'react'
import { FooterWrapper, SocialMedia, TeamDiv } from './footer.style'
import logoTeam from '../../assets/logoTeam.svg'
import x from '../../assets/square-x-twitter.svg'
import whatsapp from '../../assets/square-whatsapp.svg'
import instagram from '../../assets/square-instagram.svg'
import facebook from '../../assets/square-facebook.svg'

const Footer = () => {
  return (
    <FooterWrapper>
      <TeamDiv>
        <img src={logoTeam} alt="logo equipo uno" />
        <p>Copyright ©2023 All rights reserved</p>
      </TeamDiv>
      <SocialMedia>
        <img src={whatsapp} alt="whatsapp logo" />
        <img src={instagram} alt="instagram logo" />
        <img src={facebook} alt="facebook logo" />
        <img src={x} alt="x logo" />
      </SocialMedia>
    </FooterWrapper>
  )
}

export default Footer