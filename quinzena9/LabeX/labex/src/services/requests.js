import axios from 'axios'
import { BASE_URL } from '../constants/urls'


// Aplicar para Viagem

export const applyToTrip = (e, params, formValues, setFormValues) => {
    e.preventDefault()
    
    const { name, age, applicationText, profession, country } = formValues

    const body = {
        name,
        age,
        applicationText,
        profession,
        country
    }

    axios.post(`${BASE_URL}/trips/${params.id}/apply`, body)
    .then(() => {
        alert('Sucess')
        setFormValues({
            name: '',
            age: '',
            applicationText: '',
            profession: '',
            country: '',
        })
    })
    .catch(() => alert('Error') )
}

// Login

export const login = (e, loginValues, setLoginValues) => {
    
    e.preventDefault()

    const { email, password } = loginValues

    const body = {
        email,
        password
    }

    axios.post(`${BASE_URL}/login`, body).then(res => {
        localStorage.setItem('Token', res.data.token)
        setLoginValues({
            email: '',
            password: ''
            
        })
    }).catch(() => alert('Oops, algo errado.'))

}

// Create Trip

export const createTrip = (e, newTripValues, token, setNewTripValues) => {
    e.preventDefault()

    const { name, planet, date, description, durationInDays } = newTripValues

    const AUTH = {headers: {
        auth: token
    }}

    const body = {
        name,
        planet,
        date,
        description,
        durationInDays
    }

    axios.post(`${BASE_URL}/trips`, body, AUTH)
    .then(() => {
        alert('Trip Criada')
        setNewTripValues({
            name: '',
            planet: '',
            date: '',
            description: '',
            durationInDays: ''
        })
    })
    .catch(() => alert('Erro'))
}