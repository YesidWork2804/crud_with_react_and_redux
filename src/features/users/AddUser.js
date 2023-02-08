import { useState } from "react";
import { Button } from "../../components/Button"
import TextField from "../../components/TextField"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "./userSlice";
import { v4 as uuidv4 } from 'uuid';

const AddUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
        email: ''
    });
    const handledAddUser = () => {
        setValues({ name: '', email: '' });
        dispatch(addUser({
            id: uuidv4(),
            name: values.name,
            email: values.email,
        }
        ));
        navigate('/');
    }

    return (
        <div className="mt-10 max-w-xl mx-auto ">
            <TextField
                label="Name"
                value={values.name}
                onchange={(e) => setValues({ ...values, name: e.target.value })}
                inputProps={{ type: 'text', placeholder: 'Jhon Doe' }}
            />
            <br />
            <TextField
                label="Email"
                value={values.email}
                onchange={(e) => setValues({ ...values, email: e.target.value })}
                inputProps={{ type: 'email', placeholder: 'jhondoe@gmail.com' }}
            />
            <Button onClick={handledAddUser}>Submit</Button>
        </div>
    )
}

export default AddUser