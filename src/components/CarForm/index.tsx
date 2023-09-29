import { FormControlLabel, FormGroup, Radio, RadioGroup, TextField } from "@mui/material";
import { FormTitle, InputWrapper } from "./style";
import { useParams } from "react-router-dom";
import { useCarsProvider } from "../../provider/CarsContext";

export default function CarForm(){

  const params = useParams()
  const { selectedCar } = useCarsProvider();

  console.log(params)
  //Here I have the car value using the contextAPI, but a few information are missing
  console.log(selectedCar)

  return (
    <FormGroup>
      <FormTitle>Dados do veículo</FormTitle>
      <RadioGroup
        sx={{marginTop: '16px'}}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio size="small" />} label="0 km" />
        <FormControlLabel value="male" control={<Radio size="small" />} label="Seminovo" />
      </RadioGroup>

      <InputWrapper>
        <TextField 
          id="outlined-basic" 
          label="Placa" 
          size="small" 
          variant="outlined" 
          sx={{width:'132px', marginRight: '16px'}} 
        />
        <TextField 
          id="outlined-basic" 
          label="Renavam" 
          size="small" 
          variant="outlined" 
          sx={{width:'132px'}} 
          
        />
      </InputWrapper>
    </FormGroup>
  )
}