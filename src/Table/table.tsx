import React, { FC, useEffect, useState } from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useDispatch, useSelector } from "react-redux";
import { iRootReducer } from "../Redux/reducer";
import {Link} from 'react-router-dom'
import './table.css'

const PersonInformetion: FC = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state: iRootReducer) => state.user.user)

    const URL = "http://intern-2022.arpify.com/init"

    useEffect(() => {
        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    "firstName": "Harutyun",
                    "lastName": "Tovmasyan",
                    "birthDay": "1999-04-01",
                    "gender": "female"
                }
            )

        })
            .then(response => response.json())
            .then(date => dispatch({ type: "ADD_PERSON", payload: [...date] }))
    }, [])
    const checkColor = (person: any) => selector.find(p => p.firstName === "Harutyun" && p.lastName === person.lastName) ? "red" : "white"
    return (
        <Box className="table">
            <Box className="box">
                <TableContainer component={Paper}>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">N</TableCell>
                                <TableCell align="center">FirstName</TableCell>
                                <TableCell align="center">LastdName</TableCell>
                                <TableCell align="center">BirthDay</TableCell>
                                <TableCell align="center">Gender</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                selector.map((item) =>
                                    <TableRow  >
                                        <TableCell align="center" sx={{ background: checkColor(item) }}>{Number(item.count) - 1} 1</TableCell>
                                        <TableCell align="center" sx={{ background: checkColor(item) }}>{item.firstName}</TableCell>
                                        <TableCell align="center" sx={{ background: checkColor(item) }}>{item.lastName}</TableCell>
                                        <TableCell align="center" sx={{ background: checkColor(item) }}>{item.birthDay}</TableCell>
                                        <TableCell align="center" sx={{ background: checkColor(item) }}>{item.gender}</TableCell>
                                    </TableRow>
                                )
                            }

                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Link to='/form'>
            <ArrowForwardIosIcon/>
            </Link>
        
        </Box>
    )
}

export default PersonInformetion