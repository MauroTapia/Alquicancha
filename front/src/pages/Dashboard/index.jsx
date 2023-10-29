import React, { useEffect } from 'react'
import { DashboardSection, DashboardWrapper, Title } from './dashboard.style'
import DashboardMenu from '../../modules/Dashboard/DashboardMenu';
import SectionProducts from '../../modules/Dashboard/SectionProducts';

const Dashboard = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <DashboardWrapper>
      <Title>Panel de administración</Title>
      <DashboardMenu />
      <DashboardSection>
        <SectionProducts />
      </DashboardSection>
    </DashboardWrapper>
  )
}

export default Dashboard