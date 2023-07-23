import {Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Table} from '@mui/material';
import { Fragment } from 'react';

export default function TrackingList({trackData, type}) {

  const totalMoney= trackData.reduce((total, {money}) => total + parseFloat(money), 0)

  return (
    <Fragment>
      <div style={{marginTop: '20px', color: `${type==='income' ? 'green' : 'red'}`}}>
        <h3>Total {type === 'income' ? 'Income' : 'Expense'}: {totalMoney}</h3>
      </div>
      <TableContainer className='innerContainer' sx={{marginTop: '20px'}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Subject</TableCell>
              <TableCell align="right">Money</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trackData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.subject}
                </TableCell>
                <TableCell align="right">{row.money}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  )
}
