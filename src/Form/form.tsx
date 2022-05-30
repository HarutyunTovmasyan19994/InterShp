import React, { FC, useEffect, useState, ChangeEvent } from 'react'
import { Box, Button, TextField } from '@mui/material'
import './form.css'
import { useDispatch, useSelector } from 'react-redux';
import { getBase64 } from '../ConverIMG/covertimg';
import { iRootReducer } from "../Redux/reducer";

const Form: FC = () => {
    const [personData, setPersonData] = useState<any>({ firstName: "", lastName:"",birthDay: "", gender: "",photo:"" });
    const[passdata,setPassData] = useState()
    const selector = useSelector((state: iRootReducer) => state.user.user)
    const [avatar, setAvatar] = useState<string>("")
    const dispatch = useDispatch()
    const URL = "http://intern-2022.arpify.com/form";
    const formInformation = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setPersonData({ ...personData, [name]: value })
    }

    const suumbitHandle = (e: any) => {
        e.preventDefault()
       fetch(URL, {
            method: "POST",
            headers: {
                " Content-Type": "multipart/form-data"
            },
            body: JSON.stringify(selector)
        })
            .then(res => res.json())
            .then(data => dispatch({ type: "ADD_PERSON", payload: [...data,avatar,...personData]}))
        
    }
    const Image = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            getBase64(event.target.files[0],setAvatar)
        }
    }
    console.log(avatar)
    return (
        <Box className='boxForm'>
            <Box className="form">
                <form onSubmit={(e) => suumbitHandle(e)}>
                    <p>
                        <TextField label="firstName" id="fullWidth" onChange={formInformation} name="firstName" value={personData.firstName} />
                    </p>
                    <p>
                        <TextField label="lastName" id="fullWidth" onChange={formInformation} name="lastName" value={personData.lastName} />
                    </p>
                    <p>
                        <TextField label="birthDay" id="fullWidth" onChange={formInformation} name="birthDay" value={personData.birthDay} />
                    </p>
                    <p>
                        <TextField label="gender" id="fullWidth" onChange={formInformation} name="gender" value={personData.gender} />
                    </p>
                    <p>
                        <TextField type="file"  id="fullWidth" label="CHOOSE PICTURES"  onChange={Image} name="photo" value={personData.photo}/>
                    </p>
                    <p>
                        <TextField label="fullWidth" id="fullWidth" />
                    </p>
                    <p>
                        <Button type="submit"> Sumbit </Button>
                        <Button  onClick={() => dispatch({type: "DEFAULT_REDUX"})}> Refresh </Button>
                    </p>
                </form>
            </Box>
        </Box>
    )
}

export default Form