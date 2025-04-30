import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const MuiTable = () => {
    var data =[
        {name:"tiya",age:12,place:"EKM"}]
  return (
    <div className='table'>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Place</TableCell>
                    <TableCell>Age</TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
               {data.map((val,i)=>{
                return(
                    <TableRow>
                        <TableCell>{val.name}</TableCell>
                        <TableCell>{val.place}</TableCell>
                        <TableCell>{val.age}</TableCell>

                    </TableRow>
                )
               })}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default MuiTable
