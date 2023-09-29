import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from 'react';
import { Cars } from '../service/api';
import { CarDTO } from '../dto/CarDTO';


interface CarsInterface {
  cars: CarDTO[];
  setCars: Dispatch<SetStateAction<[]>>;
  selectedCar: CarDTO;
  setSelectedCar: Dispatch<SetStateAction<CarDTO>>;
}

type CarsProviderProps = {
  children: ReactNode
}

const CarsContext = createContext<CarsInterface>({} as CarsInterface);

export function CarsProvider({ children }: CarsProviderProps) {

  const [cars, setCars] = useState<[]>([]);
  const [selectedCar, setSelectedCar] = useState<CarDTO>({} as CarDTO)

  async function handleResults() {
    const all = await Cars.getAllItems();
    setCars(all.data)
  }

  const value: CarsInterface = {
    cars: cars,
    setCars: setCars,
    selectedCar: selectedCar,
    setSelectedCar: setSelectedCar
    
  };

  useEffect(() => {
    if(cars && Object.keys(cars).length === 0){
      handleResults()
    }

  },[])

  return (
    <CarsContext.Provider value={value}>
      { children }
    </CarsContext.Provider>
  )
}

export function useCarsProvider() {
  const context = useContext(CarsContext);
  if(!context){
    throw new Error('Verifique o uso do Hook customizado no Provider.');
  }
  return context;
}

