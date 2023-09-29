import { CarDTO } from "../../dto/CarDTO";
import { CarImg, Container, Dot, Span, TextSection, WrapperP } from "./style";

interface CarInfo {
  carInfo: CarDTO
}

export default function TableCard({carInfo}: CarInfo) {

  const formatePrice = (carInfo.ad_selling_price / 1).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  const formatMileage = carInfo.mileage.toLocaleString('pt-BR', {
    style: 'unit',
    unit: 'kilometer'
  })

  return(
    <Container>
      <CarImg src={carInfo.image} alt='car-image' />
      <TextSection>
        <Span fontWeight='600' changeColor='#1D2C4B' >{carInfo.brand_name + ' ' + carInfo.model_name}</Span>
        <Span fontWeight='400' changeColor='#1D2C4B'>{carInfo.version_name}</Span>
        <Span fontWeight='400' changeColor='#1D2C4B'>{carInfo.manufacturing_year+"/"+carInfo.model_year} <Dot /> {carInfo.fuel_type}</Span>
        <WrapperP>
          <Span fontWeight='400' changeColor='#1D2C4B'>{formatMileage}</Span>        
          <Dot/> 
          <Span fontWeight='600' changeColor='#0065FF'>{formatePrice}</Span> 
        </WrapperP>
      </TextSection>
    </Container>
  )
}