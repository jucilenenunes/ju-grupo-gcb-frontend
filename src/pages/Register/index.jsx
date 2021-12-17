import { useState } from 'react';
import * as moment from 'moment';
import { FormControl } from './styles';
import Modal from '../../components/Modal';


const Register = ({open, setOpen}) => {
    const [dataRegister, setDataRegister] = useState({});

    const onChangeField = (e) => { 
        setDataRegister( 
            { 
                ...dataRegister, 
                [e.target.parentElement.id]: e.target.value 
            } 
        ); 

        if (e.target.parentElement.id === 'addressPostalCode' && e.target.value.length === 9) {
            fetch(`https://viacep.com.br/ws/${e.target.value.replace('-', '')}/json/`)
            .then(rs => rs.json())
            .then((rs) => {
                setDataRegister({...dataRegister, cepResultado: { ...rs }});
            });
        }
    }

    const check = (dtReg) => {
        let result = { hasErrors: false, errors: []};

        let inputs = document.querySelectorAll('.form-register > div > input');
        for (let i=0; i<inputs.length; i++) {
            inputs[i].parentElement.classList.remove('error');
            inputs[i].parentElement.getElementsByTagName('span')[0].innerText = '';
        }

        if (!dtReg) {
            result.hasErrors = true;
            result.errors.push({field: undefined, message: 'Internal error.'});
        } else {
            if (!dtReg.name) {
                result.hasErrors = true;
                result.errors.push({field: 'name', message: 'Field "Name" is required.'});
            }

            if (!dtReg.birthDate) {
                result.hasErrors = true;
                result.errors.push({ field: 'birthDate', message: 'Field "Birth Date" is required.'});
            } else {
                let birthDateIsValid = moment(dtReg.birthDate, 'DD/MM/YYYY', true).isValid();
                if (!birthDateIsValid) {
                    result.hasErrors = true;
                    result.errors.push({ field: 'birthDate', message: 'Field "Birth Date" is not valid date.'});
                }
            }

            if (!dtReg.document) {
                result.hasErrors = true;
                result.errors.push({ field: 'document', message: 'Field "CPF" is required.'});
            }

            if (!dtReg.addressPostalCode) {
                result.hasErrors = true;
                result.errors.push({ field: 'addressPostalCode', message: 'Field "CEP" is required.'});
            } else if (dtReg.addressPostalCode.length !== 8) {
                result.hasErrors = true;
                result.errors.push({ field: 'addressPostalCode', message: 'Field "CEP" is required and have to contain 9 characters.'});
            }

            if (!dtReg.addressNumber) {
                result.hasErrors = true;
                result.errors.push({ field: 'addressNumber', message: 'Field "Address Number" is required.'});
            }
        }

        if (result.hasErrors) {
            result.errors.forEach((error) => {
                document.getElementById(error.field).classList.add('error');
                document.getElementById(error.field).getElementsByTagName('span')[0].innerText = error.message;
            });
        }

        return result;
    }
    
    const register = () => {
        const checkResult = check(dataRegister);
        if (!checkResult.hasErrors) {
            localStorage['dataRegister'] = JSON.stringify(dataRegister);
            setDataRegister({ ...dataRegister, cepResultado: undefined });
            setOpen(false);
            alert('Grata pela oportunidade de apresentar meu trabalho!\n\nOs dados foram salvos no localStorage conforme descrito.\n\nby Jucilene Nunes');
        }
    }

    return (!!open ?
        <Modal title="Register" setOpen={setOpen}>
            <div className="form-register">
                <FormControl id="name">
                    <label>Name:</label>
                    <input type="text" onChange={onChangeField} />
                    <span></span>
                </FormControl>
                <FormControl id="birthDate">
                    <label>Birth Date:</label>
                    <input type="text" minLength="10" maxLength="10" onChange={onChangeField} />
                    <span></span>
                </FormControl>
                <FormControl id="document">
                    <label>CPF:</label>
                    <input type="text" onChange={onChangeField} />
                    <span></span>
                </FormControl>
                <FormControl id="addressPostalCode">
                    <label>CEP:</label>
                    <input type="text" minLength="9" maxLength="9" placeholder="09665-000" onChange={onChangeField} />
                    <span></span>
                    {
                        dataRegister.cepResultado ? (
                            <div className="cepResultado">
                                <h5>Address:</h5>
                                &nbsp;{dataRegister.cepResultado.logradouro}<br />
                                &nbsp;{dataRegister.cepResultado.bairro},&nbsp;
                                {dataRegister.cepResultado.localidade}&nbsp;-&nbsp;
                                {dataRegister.cepResultado.uf}
                            </div>
                        ) : ""
                    }
                </FormControl>
                <FormControl id="addressNumber">
                    <label>Address Number:</label>
                    <input type="text" onChange={onChangeField} />
                    <span></span>
                </FormControl>
                <FormControl id="addressComplement">
                    <label>Address Complement:</label>
                    <input type="text" onChange={onChangeField} />
                    <span></span>
                </FormControl>
                <FormControl>
                    <button onClick={register}>Register</button>
                </FormControl>
            </div>
        </Modal>
        : ""
    );
}

export default Register;






