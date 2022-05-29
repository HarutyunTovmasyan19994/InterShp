import React, { FC, useEffect, useState, ChangeEvent } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import './form.css'

const Form: FC = () => {
    const [formData, setFormData] = useState<any>({ firstName: "", lastName:"",birthDay: "", gender: "" });
    const[data,setData] = useState()
    const URL = "http://intern-2022.arpify.com/form";
    // useEffect(() => {
    //     fetch(URL, {
    //         method: "POST",
    //         headers: {
    //             " Content-Type": "multipart/form-data"
    //         },
    //         body: formData
    //     })
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])

    const formInformation = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    const suumbitHandle = (e: any) => {
        e.preventDefault()
        fetch(URL, {
            method: "POST",
            headers: {
                " Content-Type": "multipart/form-data"
            },
            body: JSON.stringify({
                "message": "User crated successfully.",
                "userFullName": formData.firstName,

            })
        })
    }
    console.log(data)
    return (
        <Box className='boxForm'>
            <Box className="form">
                <form onSubmit={(e) => suumbitHandle(e)}>
                    <p>
                        <TextField label="firstName" id="fullWidth" onChange={formInformation} name="firstName" value={formData.firstName} />
                    </p>
                    <p>
                        <TextField label="lastName" id="fullWidth" onChange={formInformation} name="lastName" value={formData.lastName} />
                    </p>
                    <p>
                        <TextField label="birthDay" id="fullWidth" onChange={formInformation} name="birthDay" value={formData.birthDay} />
                    </p>
                    <p>
                        <TextField label="gender" id="fullWidth" onChange={formInformation} name="gender" value={formData.gender} />
                    </p>
                    <p>
                        <TextField label="fullWidth" id="fullWidth" />
                    </p>
                    <p>
                        <TextField label="fullWidth" id="fullWidth" />
                    </p>
                    <p>
                        <Button type="submit"> Sumbit </Button>
                    </p>
                </form>
            </Box>
            <Box>
                <Link to='/person-informetion'>
                    Prev
                </Link>
            </Box>


        </Box>
    )
}

export default Form