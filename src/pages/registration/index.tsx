import React, { useEffect, useState } from 'react';
import { Form, MainRegistration, ButtonsTable, SearchBox, TableGrid, TabMovement, TabUser } from './styles';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button, InputAdornment, TextField } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { createUser } from '../../store/users/thunks/createUser';
import { useAppSelector } from '../../store/hooks/useAppSelector';


interface RegistrationProps {
  setPositionSelected: React.Dispatch<React.SetStateAction<string>>
}

const Registration: React.FC<RegistrationProps> = ({ setPositionSelected }) => {
  const useDispatch = useAppDispatch()
  const users = useAppSelector((store) => store.users)
  const [tabSelected, setTabSelected] = useState(0);
  const [test, setTest] = useState(0)
  const [newUsername, setNewUsername] = useState("")
  const [newTotalValue, setNewTotalValue] = useState(0)

  const columnsTable: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Nome', width: 160 },
    { field: 'input_value', headerName: 'Entrada', width: 110 },
    { field: 'output_value', headerName: 'Saida', width: 110 },
    { field: 'last_value', headerName: 'Ultimo', width: 110 },
    { field: 'last_reason', headerName: 'Motivo', width: 170 }
  ]

  const onAddUser = () => {
    useDispatch(createUser({name: newUsername, total_money: newTotalValue}))
  }

  useEffect(() => {
    setPositionSelected("185px")
    console.log(users)
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
            <TextField 
              style={{ marginBottom: 10 }} 
              label="Nome" 
              value={newUsername}
              onChange={(event) => setNewUsername(event.target.value)}/>
            <TextField 
              type={"number"}
              style={{ marginBottom: 10 }} 
              label="Valor total" 
              value={newTotalValue}
              onChange={(event) => setNewTotalValue(Number(event.target.value))}/>
          </Form>

          <Button 
            onClick={() => onAddUser()}
            style={{ marginTop: 5 }} 
            variant='contained'>Adicionar</Button>
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
          rows={users}
          columns={columnsTable}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableColumnMenu
          style={{ backgroundColor: "#dddddd" }}
        />
      </TableGrid>

      <ButtonsTable>
        <Button style={{ marginTop: 5 }} variant='outlined'>Remover</Button>
      </ButtonsTable>
    </MainRegistration>
  )
}

export default Registration;