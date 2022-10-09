import React, { useEffect } from 'react';
import { MainRegistration, SearchBox, TableGrid } from './styles';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';



interface RegistrationProps {
  setPositionSelected: React.Dispatch<React.SetStateAction<string>>
}

const Registration: React.FC<RegistrationProps> = ({ setPositionSelected }) => {
  useEffect(() => {
    setPositionSelected("185px")
  }, [])


  const columnsTable: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Nome', width: 130 },
    { field: 'input', headerName: 'Entrada', width: 90 },
    { field: 'output', headerName: 'Saida', width: 90 },
    { field: 'last', headerName: 'Ultimo', width: 90 },
    { field: 'reason', headerName: 'Motivo', width: 130 }
  ]

  // Still data static
  const rowsTable = [
    { id: 1, name: 'Angelo', input: '1200', output: '200', last: '-100', reason: 'Coffee :)' },
    { id: 2, name: 'Angelo', input: '1000', output: '200', last: '-200', reason: 'Coffee :)' }
  ]

  return (
    <MainRegistration>
      <SearchBox>

      </SearchBox>

      <TableGrid>
        <DataGrid
          rows={rowsTable}
          columns={columnsTable}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </TableGrid>
    </MainRegistration>
  )
}

export default Registration;