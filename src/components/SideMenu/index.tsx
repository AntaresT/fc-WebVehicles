import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import Dashboard from '../../assets/svg/Dashboard.svg'
import Tags from '../../assets/svg/ShoppingTags.svg'
import Calendar from '../../assets/svg/Calendar.svg'
import CarIcon from '../../assets/svg/CarFrontView.svg'
import Rocket from '../../assets/svg/Rocket.svg'
import User from '../../assets/svg/UserCircle.svg'
import Chart from '../../assets/svg/Chart.svg'
import Bank from '../../assets/svg/Bank.svg'
import MenuBtn from '../../assets/svg/MenuBtn.svg'
import { useState } from 'react';
import { Container, IconContainer, ImgIcon } from './style';
import { IconButton } from '@mui/material';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

export default function SideMenu() {

  const [colapse, setColapse] = useState<boolean>(false)

  return(
    <Container>
      <Sidebar rootStyles={{height: 'calc(100vh - 72px)'}}  collapsed={colapse}>
        <Menu 
          rootStyles={{margin: colapse ? 0 : 24, background: "#fff"}}
          menuItemStyles={{
            button: ({level, active}) => {

              if (level === 0)
              return {
                backgroundColor: active ? '#0065FF' : '#FFF',
                borderRadius: active ? '6px' : '4px',
                color: active ? '#fff' : '#1D2C4B'
              };

            },
          }}
        >
    
          <MenuItem 
            icon={<ImgIcon src={Dashboard} alt='dashboard'/>}
          >
            Resumo
          </MenuItem>
          <MenuItem 
            icon={<ImgIcon src={Tags} alt='Tags'/>}
          >
            Oportunidades
          </MenuItem>
          <MenuItem 
            icon={<ImgIcon src={Calendar} alt='Calendar'/>}
          >
            Agenda
          </MenuItem>
          <MenuItem 
            active
            icon={<ImgIcon src={CarIcon} alt='Car-icon'/>} 
            component={<Link to="/" />}
          >
            Veículos
          </MenuItem>
          <MenuItem 
            icon={<ImgIcon src={Rocket} alt='Rocket'/>}
          >
            Publicação
          </MenuItem>
          <MenuItem 
            icon={<ImgIcon src={User} alt='User'/>}
          >
            Contatos
          </MenuItem>
          <MenuItem 
            icon={<ImgIcon src={Chart} alt='Chart'/>}
          >
            Analytics
          </MenuItem>
          <MenuItem 
            icon={<ImgIcon src={Bank} alt='Bank'/>}
          >
            Financiamento
          </MenuItem>
        </Menu>

        <IconContainer>
          <IconButton aria-label="colapse" onClick={() => setColapse(!colapse)}>
            <img src={MenuBtn} alt="menu-btn" className={clsx('rotate', colapse && 'active')} />
          </IconButton>
        </IconContainer>
      </Sidebar>
    </Container>
  )
}