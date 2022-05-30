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
    const dispatch = useDispatch()
    const URL = "http://intern-2022.arpify.com/form";
    const formInformation = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setPersonData({ ...personData, [name]: value })
    }
    
  


    const suumbitHandle = (e: any) => {
        e.preventDefault()
        let formData = new FormData(e.target);
        // let formData = new FormData(personData);
        // const value  = Object.fromEntries(formData.entries())
       fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            body:JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err=>{
                console.log(err,"Error")
            })
        
    }
    const Image = (event: ChangeEvent<HTMLInputElement>) => {  
        if (event.target.files) {
           getBase64(event.target.files[0],(value)=>  setPersonData({ ...personData, 'photo':value}))
        }
    }
    return (
        <Box className='boxForm'>
            <Box className="form">
                <form onSubmit={(e) => suumbitHandle(e)} method="POST">
                    <div>
                         <TextField label="firstName" id="fullWidth" onChange={formInformation} name="firstName" value={personData.firstName} />
                    </div>
                    <div>
                        <TextField label="lastName" id="fullWidth" onChange={formInformation} name="lastName" value={personData.lastName} />
                    </div>
                    <div>
                        <TextField label="birthDay" id="fullWidth" onChange={formInformation} name="birthDay" value={personData.birthDay} />
                    </div>
                    <div>
                        <TextField label="gender" id="fullWidth" onChange={formInformation} name="gender" value={personData.gender} />
                    </div>
                    <div>
                        <TextField type="file"  id="fullWidth" label="CHOOSE PICTURES"  onChange={Image} name="photo"/>
                    </div>
                    {/* <div>
                        <TextField label="fullWidth" id="fullWidth" />
                    </div> */}
                    <div>
                        <Button type="submit"> Sumbit </Button>
                        <Button  onClick={() => dispatch({type: "DEFAULT_REDUX"})}> Refresh </Button>
                    </div>
                </form>
            </Box>
        </Box>
    )
}

export default Form