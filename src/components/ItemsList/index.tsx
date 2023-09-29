import { useEffect, useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import { useCarsProvider } from "../../provider/CarsContext"
import { ButtonAdd, ButtonFilter, Container, LeftSide, RightSide, Title, TopActions } from "./style";
import Search from '../../assets/svg/SearchIcon.svg';
import FilterIcon from '../../assets/svg/FilterIcon.svg';
import PlusIcon from '../../assets/svg/Plus.svg';
import TableComponent from "../TableComponent";

export default function ItemsList() {
  const { cars } = useCarsProvider();

  const [totalResults, setTotal] = useState<number>(0);

  useEffect(() => {
    if(cars && cars.length > 0){
      setTotal(cars.length)
    }
    console.log(totalResults, 'total')
  }, [totalResults, cars])

  return(
    <Container>
      <TopActions>
        <LeftSide>
          <Title>Veículos</Title>
          <TextField
            id="input-with-icon-textfield"
            label="Buscar..."
            variant="outlined"
            size='small'
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <img src={Search} alt='search-icon' role="img" />
                </InputAdornment>
              ),
            }}
          />
        </LeftSide>

        <RightSide>
          <ButtonFilter><img src={FilterIcon} alt='filter-icon'/>Filtrar</ButtonFilter>
          <ButtonAdd><img src={PlusIcon} alt='filter-icon'/>Adicionar</ButtonAdd>
        </RightSide>
      </TopActions>


      <TableComponent totalItems={totalResults} allItems={cars} />
    </Container>
  )
}