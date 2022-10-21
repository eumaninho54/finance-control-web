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
import { getUsers } from '../../store/users/thunks/getUsers';
import { createTransaction } from '../../store/users/thunks/createTransaction';
import { deleteUsers } from '../../store/users/thunks/deleteUsers';


interface RegistrationProps {
  setPositionSelected: React.Dispatch<React.SetStateAction<string>>
}

const Registration: React.FC<RegistrationProps> = ({ setPositionSelected }) => {
  const useDispatch = useAppDispatch()
  const users = useAppSelector((store) => store.users)
  const [tabSelected, setTabSelected] = useState(0);
  const [newUsername, setNewUsername] = useState("")
  const [newInitialValue, setNewInitialValue] = useState(0)
  const [idUser, setIdUser] = useState(0)
  const [reason, setReason] = useState("")
  const [valueTransaction, setValueTransaction] = useState(0)
  const [idsSelected, setIdsSelected] = useState<number[]>([])

  const columnsTable: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Nome', width: 160 },
    { field: 'input_value', headerName: 'Total entrada', width: 110 },
    { field: 'output_value', headerName: 'Total saida', width: 110 },
    { field: 'last_value', headerName: 'Ultimo', width: 110 },
    { field: 'last_reason', headerName: 'Motivo', width: 170 }
  ]

  const onAddUser = () => {
    useDispatch(createUser({ name: newUsername, initialValue: newInitialValue }))
  }

  const onAddTransaction = () => {
    useDispatch(createTransaction(
      {
        id: idUser,
        reason: reason,
        valueTransaction: valueTransaction
      }
    ))
  }

  const onDeleteUsers = () => {
    useDispatch(deleteUsers({ id: idsSelected }))
  }

  const menuItems = () => {
    return users.map((user) => {
      return (
        <MenuItem key={user.id} value={String(user.id)}>{user.name}</MenuItem>
      )
    })
  }

  useEffect(() => {
    setPositionSelected("245px")
    useDispatch(getUsers())
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
              onChange={(event) => setNewUsername(event.target.value)} />
            <TextField
              type={"number"}
              style={{ marginBottom: 10 }}
              label="Valor inicial"
              value={newInitialValue}
              onChange={(event) => setNewInitialValue(Number(event.target.value))} />
          </Form>

          <Button
            onClick={() => onAddUser()}
            style={{ marginTop: 5 }}
            variant='contained'>Adicionar</Button>
        </TabUser>

        <TabMovement tabSelected={tabSelected} index={1}>
          <Form>
            <Select
              style={{ marginBottom: 10, width: 220 }}
              value={idUser}
              notched={false}
              onChange={(event) => setIdUser(Number(event.target.value))}
              MenuProps={{ PaperProps: { style: { maxHeight: 300 } } }}
              input={<OutlinedInput label="Nome do usuario" />}
              renderValue={(value) => value == 0
                ? "Nome do usuario"
                : users.find((user) => (user.id) == value)?.name}
            >
              {menuItems()}
            </Select>

            <TextField
              value={reason}
              onChange={(event) => setReason(event.target.value)}
              inputProps={{ maxLength: 20 }}
              style={{ marginBottom: 10, width: 220 }}
              label="Motivo" />
          </Form>

          <Form>
            <TextField
              label="Valor da transação"
              value={valueTransaction}
              onChange={(event) => setValueTransaction(Number(event.target.value))}
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

          <Button
            onClick={() => onAddTransaction()}
            style={{ marginTop: 5 }}
            variant='contained'>
            Adicionar
          </Button>
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
          onSelectionModelChange={(rows) => {
            let arrayIds: number[] = []
            rows.map((id) => arrayIds.push(Number(id)))
            setIdsSelected(arrayIds)
          }}
        />
      </TableGrid>

      <ButtonsTable>
        <Button
          onClick={() => onDeleteUsers()}
          style={{ marginTop: 5 }}
          variant='outlined'>
          Remover
        </Button>
      </ButtonsTable>
    </MainRegistration>
  )
}

export default Registration;