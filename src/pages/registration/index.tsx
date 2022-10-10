import React, { useEffect, useState } from 'react';
import { Form, MainRegistration, RemoveTable, SearchBox, TableGrid, TabMovement, TabUser } from './styles';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button, InputAdornment, TextField } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';


interface RegistrationProps {
  setPositionSelected: React.Dispatch<React.SetStateAction<string>>
}

const Registration: React.FC<RegistrationProps> = ({ setPositionSelected }) => {
  const [tabSelected, setTabSelected] = useState(0);
  const [test, setTest] = useState(0)

  const columnsTable: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Nome', width: 160 },
    { field: 'input', headerName: 'Entrada', width: 110 },
    { field: 'output', headerName: 'Saida', width: 110 },
    { field: 'last', headerName: 'Ultimo', width: 110 },
    { field: 'reason', headerName: 'Motivo', width: 170 }
  ]

  // Still data static
  const rowsTable = [
    { id: 1, name: 'Angelo', input: '1200', output: '200', last: '-100', reason: 'Comprou uma motocicl' },
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
  }, [])

  return (
    <MainRegistration>
      <SearchBox>
        <Tabs centered value={tabSelected} onChange={(_, value) => setTabSelected(value)}>
          <Tab label="Usuario" />
          <Tab label="Movimentação" />
        </Tabs>

        <TabUser tabSelected={tabSelected} index={0}>
          <Form>
            <TextField style={{ marginBottom: 10 }} label="Nome" />
            <TextField style={{ marginBottom: 10 }} label="Valor de entrada" />
          </Form>

          <Button style={{ marginTop: 5 }} variant='contained'>Adicionar</Button>
        </TabUser>

        <TabMovement tabSelected={tabSelected} index={1}>
          <Form>
            <Select
              labelId='demo-simple-select-label'
              style={{ marginBottom: 10, width: 220 }}
              value={test}
              notched={false}
              onChange={(event) => setTest(event.target.value as number)}
              MenuProps={{ PaperProps: { style: { maxHeight: 300 } } }}
              input={<OutlinedInput label="Nome do usuario" />}
              renderValue={(value) => value || "Selecione o nome"}
            >
              <MenuItem value={1}>Angelo</MenuItem>
            </Select>

            <TextField inputProps={{ maxLength: 20 }} style={{ marginBottom: 10, width: 220 }} label="Motivo" />
          </Form>

          <Form>
            <TextField
              label="Valor de entrada"
              type={'number'}
              style={{ marginBottom: 10, width: 220 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CurrencyExchangeIcon />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="Valor de saida"
              type={'number'}
              style={{ marginBottom: 10, width: 220 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CurrencyExchangeIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Form>

          <Button style={{ marginTop: 5 }} variant='contained'>Adicionar</Button>
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

      <RemoveTable>
        <Button style={{ marginTop: 5 }} variant='outlined'>Remover</Button>
      </RemoveTable>
    </MainRegistration>
  )
}

export default Registration;