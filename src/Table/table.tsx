import React, { FC, useEffect, useState } from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import './table.css'


const PersonInformetion: FC = () => {
    const [data, setData] = useState<any>([])
    const URL = "http://intern-2022.arpify.com/init"

    useEffect(() => {
        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    "firstName": "Harut",
                    "lastName": "Tovmasyan",
                    "birthDay": "1999-04-01",
                    "gender": "female"
                }
            )

        })
            .then(response => response.json())
            .then(date => setData(date))
    }, [])
    console.log(data)
    return (
        <Box className="table">
            <TableContainer component={Paper}>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">FirstName</TableCell>
                            <TableCell align="right">LastdName</TableCell>
                            <TableCell align="right">BirthDay</TableCell>
                            <TableCell align="right">Gender</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map((person: any) =>
                                <TableRow>
                                    <TableCell align="right">{person.firstName}</TableCell>
                                    <TableCell align="right">{person.lastName}</TableCell>
                                    <TableCell align="right">{person.birthDay}</TableCell>
                                    <TableCell align="right">{person.gender}</TableCell>
                                </TableRow>

                            )
                        }

                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default PersonInformetion