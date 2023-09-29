import Header from "../../components/Header";
import ItemsList from "../../components/ItemsList";
import SideMenu from "../../components/SideMenu";
import { WrapperList } from './style'

export default function List() {
  return(
    <>
      <Header />
      <WrapperList>
        <SideMenu />
        <ItemsList />
      </WrapperList>
    </>
  )
}