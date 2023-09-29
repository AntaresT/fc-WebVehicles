import CarDetail from "../../components/CarDetail";
import Header from "../../components/Header";
import SideMenu from "../../components/SideMenu";
import { WrapperDetails } from "./style";

export default function Details() {
  return(
    <>
      <Header />
      <WrapperDetails>
        <SideMenu />
        <CarDetail />
      </WrapperDetails>
    </>
  )
}