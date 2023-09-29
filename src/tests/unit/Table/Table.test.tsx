import { render, screen } from '@testing-library/react';
import ItemsList from '../../../components/ItemsList';
import '@testing-library/jest-dom'

test('it should test', () =>{
  render(<ItemsList />)

  const tableId = screen.getByTestId('table-test');
  expect(tableId).toBeInTheDocument();
})