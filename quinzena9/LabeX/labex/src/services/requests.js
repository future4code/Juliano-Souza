import axios from 'axios'
import { BASE_URL } from '../constants/urls'

// Get Token 
const token = localStorage.getItem('Token')
const auth = { headers: { auth: token } }

// Aplicar para Viagem

export const applyToTrip = (e, tripId, formValues, setFormValues) => {
    e.preventDefault()

    axios.post(`${BASE_URL}/trips/${tripId}/apply`, formValues)
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
    .catch(() => window.alert('Erro em nossos servidores...'))
}

// Login

export const login = (e, loginValues, setLoginValues, navigate) => { 
    e.preventDefault()

    axios.post(`${BASE_URL}/login`, loginValues).then(res => {
        localStorage.setItem('Token', res.data.token)
        setLoginValues({
            email: '',
            password: ''
        })
        navigate('/admin')
    }).catch(() => alert('Verifique os dados e tente novamente'))

}

// Create Trip

export const createTrip = (e, newTripValues, setNewTripValues) => {
    e.preventDefault()

    axios.post(`${BASE_URL}/trips`, newTripValues, auth)
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
    .catch(() => window.alert('Erro em nossos servidores...'))
}

// Delete Trip 

export const deleteTrip = (id, navigate) => {

    axios.delete(`${BASE_URL}/trips/${id}`, auth)
    .then(() => {
        navigate(`/admin`)
    })
    .catch(() => window.alert('Erro em nossos servidores...'))

}

// Decide candidate

export const decideCandidate = (tripId, candidateId, userResponse) => {

    axios.put(`${BASE_URL}/trips/${tripId}/candidates/${candidateId}/decide`, userResponse, auth)
    .then(() => {}).catch('Error')

}