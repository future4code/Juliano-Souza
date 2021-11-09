import axios from 'axios'
import { BASE_URL } from '../constants/urls'

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