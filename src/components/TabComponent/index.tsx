import { Box, Tab } from "@mui/material";
import { Container, Divider, TabsWrapper, Title } from "./style";
import { useState } from "react";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CarForm from "../CarForm";

export default function TabComponent() {

  const [value, setValue] = useState<string>('1');

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(String(newValue));
  };

  return(
    <Container>
      <Title>Informações</Title>
      <Divider />

      <TabsWrapper>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab sx={{textTransform: "none"}} label="Dados do veículo" value="1"></Tab>
              <Tab sx={{textTransform: "none"}} label="Preço médio" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <CarForm />
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
        </TabContext>
      </TabsWrapper>
    </Container>
  )
}