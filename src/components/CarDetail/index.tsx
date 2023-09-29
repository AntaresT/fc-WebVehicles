import { IconButton } from "@mui/material";
import { Container, InformationContainer, Title, TopSection } from "./style";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useNavigate } from "react-router-dom";
import FormComponent from "../TabComponent";


export default function CarDetail() {
  const navigate = useNavigate();

  function handleReturnPage() {
    navigate('/')
  }

  return(
    <Container>
      <TopSection>
        <Title>
          <IconButton 
            aria-label="Return page" 
            onClick={handleReturnPage}
            sx={{marginRight: '16px'}}
          >
            <KeyboardArrowLeftIcon 
              onClick={handleReturnPage} 
              sx={{ color: "#0065FF" }}
            />
          </IconButton>
          Editar veículo
        </Title>
      </TopSection>

      <InformationContainer>
        <FormComponent />
      </InformationContainer>

    </Container>
  )
}