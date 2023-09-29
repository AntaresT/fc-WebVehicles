import { Actions, Container, DropdownSection, LeftSide, RightSide, Select } from "./style"
import { Badge, Link } from "@mui/material"
import Logo from '../../assets/svg/Logo.svg'
import UnitLogo from '../../assets/svg/UnitLogo.svg'
import Notification from '../../assets/svg/Notification.svg'
import Settings from '../../assets/svg/Gear.svg'
import Profile from '../../assets/svg/Profile.svg'



export default function Header() {
  return(
    <Container>
      <LeftSide>
        <img src={Logo} alt='Logo'/>

        <DropdownSection>
          <img src={UnitLogo} alt='UnitLogo'/>

          <Select name="select" defaultValue={'ribeirao-preto'}>
            <option value="ribeirao-preto">Dryve - Ribeirão Preto</option>
            <option value="sao-paulo">Dryve - São Paulo</option>
          </Select>
        </DropdownSection>
      </LeftSide>

      <RightSide>
        <Actions>
          <Badge color="warning" overlap="circular" variant="dot">
            <Link href="#">
              <img src={Notification} alt='Notifications' />
            </Link>
          </Badge>

          <Link href="#">
            <img src={Settings} alt='Settings'/>
          </Link>

        </Actions>

        <Link href="#">
          <img src={Profile} alt='Profile'/>
        </Link>

      </RightSide>
    </Container>
  )
}

