import React, { useEffect } from 'react';
import { FormUser, MainRegistration, SearchBox, TableGrid, TabMovement, TabUser } from './styles';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button, TextField } from '@mui/material';



interface RegistrationProps {
  setPositionSelected: React.Dispatch<React.SetStateAction<string>>
}

const Registration: React.FC<RegistrationProps> = ({ setPositionSelected }) => {
  const [tabSelected, setTabSelected] = React.useState(0);

  const columnsTable: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Nome', width: 160 },
    { field: 'input', headerName: 'Entrada', width: 110 },
    { field: 'output', headerName: 'Saida', width: 110 },
    { field: 'last', headerName: 'Ultimo', width: 110 },
    { field: 'reason', headerName: 'Motivo', width: 160 }
  ]

  // Still data static
  const rowsTable = [
    { id: 1, name: 'Angelo', input: '1200', output: '200', last: '-100', reason: 'Coffee :)' },
    { id: 2, name: 'Angelo', input: '1000', output: '200', last: '-200', reason: 'Coffee :)' },
    { id: 3, name: 'Angelo', input: '1000', output: '200', last: '-200', reason: 'Coffee :)' },
    { id: 4, name: 'Angelo', input: '1000', output: '200', last: '-200', reason: 'Coffee :)' },
    { id: 5, name: 'Angelo', input: '1000', output: '200', last: '-200', reason: 'Coffee :)' },
    { id: 6, name: 'Angelo', input: '1000', output: '200', last: '-200', reason: 'Coffee :)' },
    { id: 7, name: 'Angelo', input: '1000', output: '200', last: '-200', reason: 'Coffee :)' },
    { id: 8, name: 'Angelo', input: '1000', output: '200', last: '-200', reason: 'Coffee :)' },
    { id: 9, name: 'Angelo', input: '1000', output: '200', last: '-200', reason: 'Coffee :)' },
    { id: 10, name: 'Angelo', input: '1000', output: '200', last: '-200', reason: 'Coffee :)' }
  ]

  useEffect(() => {
    setPositionSelected("185px")

    console.log("a")
  }, [])

  return (
    <MainRegistration>
      <SearchBox>
        <Tabs centered value={tabSelected} onChange={(_, value) => setTabSelected(value)}>
          <Tab label="Usuario" />
          <Tab label="Movimentação" />
        </Tabs>

        <TabUser tabSelected={tabSelected} index={0}>
          <FormUser>
            <TextField style={{marginBottom: 10}} label="Nome" />
            <TextField style={{marginBottom: 10}} label="Valor de entrada" />
          </FormUser>

          <Button style={{marginTop: 5}} variant='contained'>Adicionar</Button>
        </TabUser>

        <TabMovement tabSelected={tabSelected} index={1}>
          
        </TabMovement>
      </SearchBox>

      <TableGrid>
        <DataGrid
          rows={rowsTable}
          columns={columnsTable}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableColumnMenu
          style={{ backgroundColor: "#dddddd" }}
        />
      </TableGrid>
    </MainRegistration>
  )
}

export default Registration;