import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Container, P, PaginationContainer, RowsTable, Select, TableText, TableTitle } from './style';
import { Pagination } from '@mui/material';
import { CarDTO } from '../../dto/CarDTO';
import TableCard from '../TableCard';
import { useNavigate } from 'react-router-dom';
import { useCarsProvider } from '../../provider/CarsContext';

interface Column {
  id: 'carData' | 'reference' | 'licensePlate' | 'date';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'carData', label: 'Dados do Veículo', minWidth: 270 },
  { id: 'reference', label: 'REF', minWidth: 100 },
  {
    id: 'licensePlate',
    label: 'Placa',
    minWidth: 70,
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'date',
    label: 'Data',
    minWidth: 70,
    format: (value: number) => value.toLocaleString('en-US'),
  },
];


export default function TableComponent({totalItems, allItems}:{ totalItems: number, allItems: CarDTO[]}) {
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const navigate = useNavigate();
  const { setSelectedCar } = useCarsProvider();


  function handleChangePage(_event: React.ChangeEvent<unknown>, value: number) {
    setPage(value);
  }

  function handleChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  }

  function randomId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
  
    for (let i = 0; i < 7; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters.charAt(randomIndex);
    }
  
    return code;
  }

  function licensePlateMock() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let licensePlate = '';
 
    for (let i = 0; i < 3; i++) {
      const randomLetter = letters.charAt(Math.floor(Math.random() * letters.length));
      licensePlate += randomLetter;
    }
  
    for (let i = 0; i < 4; i++) {
      const randomNumber = numbers.charAt(Math.floor(Math.random() * numbers.length));
      licensePlate += randomNumber;
    }
  
    return licensePlate;
  }

  function handleSelectCar(item: CarDTO) {
    setSelectedCar(item)
    navigate(`/details/${item.vehicle_uuid}`)
  }

  return (
    <Container>
      <TableContainer sx={{ maxHeight: 'calc(820px - 86px)' }}>
        <Table stickyHeader aria-label="sticky table" data-testid="table-test">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  <TableTitle>{column.label}</TableTitle>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {allItems
              .slice(page-1, page * rowsPerPage)
              .map((item, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index} onClick={() => handleSelectCar(item)} >
                    <TableCell>
                      <TableCard carInfo={item} />
                    </TableCell>
                    <TableCell>
                      <TableText>{randomId()}</TableText>
                    </TableCell>
                    <TableCell>
                      <TableText>{licensePlateMock()}</TableText>
                    </TableCell>
                    <TableCell>
                      <TableText>24/07/2020</TableText>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    
     <PaginationContainer>
        <Pagination 
          count={allItems.length} 
          shape="rounded" 
          onChange={handleChangePage}
          page={page}
          color='primary'
        />

        <RowsTable>
          <P>Exibindo {rowsPerPage} de {totalItems} registros</P>
          <Select
            value={rowsPerPage}
            onChange={handleChangeRowsPerPage}
          >
            <option value={5}>5</option>
            <option value={8}>8</option>
            <option value={10}>10</option>
          </Select>
        </RowsTable>
      </PaginationContainer>
    </Container>
  );
}
