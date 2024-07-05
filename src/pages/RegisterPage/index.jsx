import ConfirmButton from "../../components/ConfirmButton"
import { Input } from "../../components/InputText/style"
import { FormDataEarth } from "../../utils/formHandler"
import { AdressList } from "../../infra/database"
import { useState } from "react"
import { FormContainer, FormInputs, FormSection, InputsBig, InputsColumns, MainContainer } from "./style"
import TextLabel from "../../components/Label"
import { useNavigate, useParams } from "react-router-dom"

function RegisterPage() {
    
    const {updateId} = useParams()
    console.log(updateId);

    console.log(updateId);
    const navigate = useNavigate();
    const [cep, setCep] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [type, setType] = useState('');
    const [factory, setFactory] = useState('');
    const [error, setError] = useState('');

    var id = 0

    const handleCEPChange = (event) => {
        let formattedCep = event.target.value.replace(/\D/g, ''); 
        formattedCep = formattedCep.slice(0, 8); 
        formattedCep = formattedCep.replace(/(\d{5})(\d{1,3})/, '$1-$2'); 
        setCep(formattedCep);
    }

    const handleStateMask = (event) => {
        let formattedState = event.target.value.toUpperCase(); 
        formattedState = formattedState.slice(0, 2); 
        setState(formattedState);
    }

    const handleConfirm = () => {
        if (updateId){
            const data = FormDataEarth(id,country, neighborhood, city, street, state, number, cep, type, factory)
            const isEmpty = Object.values(data).some(value => value === '');
            
            if (isEmpty) {
                setError('Por favor, preencha todos os campos.');
            } else {
                AdressList[updateId] = data
                navigate("/")
            }
        } else {
            const data = FormDataEarth(id,country, neighborhood, city, street, state, number, cep, type, factory)
            const isEmpty = Object.values(data).some(value => value === '');
    
            if (isEmpty) {
                setError('Por favor, preencha todos os campos.');
            } else {
                AdressList.push(data)
                id ++
                navigate("/")
            }

        }
    }

    const FormEarth = () => {
        return(
            <>
                <InputsBig>
                    <TextLabel label="País"/>
                    <Input
                        placeholder="Ex: Brasil"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    ></Input>
                    <TextLabel label="Bairro"/>
                    <Input
                        placeholder="Ex: Centro"
                        value={neighborhood}
                        onChange={(e) => setNeighborhood(e.target.value)}

                    ></Input>
                    <TextLabel label="Cidade"/>
                    <Input
                        placeholder="Ex: Fortaleza"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    ></Input>
                    <TextLabel label="Rua"/>
                    <Input
                        placeholder="Ex: Av. Barão Studart"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}

                    ></Input>
                    
                </InputsBig>

                <InputsColumns>
                    <TextLabel label="Estado"/>
                    <Input
                        placeholder="Ex: CE"
                        value={state}
                        onChange={handleStateMask}
                    ></Input>
                    <TextLabel label="Número"/>
                    <Input
                        placeholder="Ex: 200"
                        value={number}
                        type="number"
                        onChange={(e) => setNumber(e.target.value)}
                    ></Input>
                    <TextLabel label="CEP"/>
                    <Input
                        placeholder="Ex: 6228-0000"
                        value={cep}
                        onChange={handleCEPChange}
                    ></Input>
                    <TextLabel label="Tipo"/>
                    <Input
                        placeholder="Ex: Casa/Trabalho"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    ></Input>
                </InputsColumns>
            </>
        );
    }

    const FormMars = () => {
        return(
            <>
                <InputsBig>
                    <TextLabel label="Lote"/>
                    <Input
                        placeholder="Ex: 1111"
                        value={factory}
                        onChange={(e) => setFactory(e.target.value)}
                    ></Input>
                </InputsBig>
            </>
        );
    }

    return (
    //   <>
        <MainContainer>
            <FormContainer>
                {updateId ? <TextLabel label="Edite seu endereço" size="28px" margintop="3%" marginbottom="0px"/> : <TextLabel label="Cadastre um novo endereço" size="28px" margintop="3%" marginbottom="0px"/>}
                
                <FormSection>
                    <TextLabel label="Endereço da Terra:" margintop="5%" size="20px" />
                    <FormInputs>
                        {FormEarth()}
                    </FormInputs>
                </FormSection>

               <FormSection>
                    <TextLabel label="Endereço de Marte:" marginbottom="0px" margintop="5%" size="20px"/>
                    <FormInputs>
                        {FormMars()}
                    </FormInputs>
               </FormSection>
                
                
                <TextLabel label={error} color="#dc2121" marginbottom="2%" margintop="5%"/>
                
                <ConfirmButton
                    onClick = {() => handleConfirm()} label = {"Confirmar"}
                />
            </FormContainer>
        </MainContainer>
    //   </>
    )
  }
  
  export default RegisterPage
  