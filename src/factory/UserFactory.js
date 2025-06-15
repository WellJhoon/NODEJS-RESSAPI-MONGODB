import User from '../models/user.model.js'


export class UserFactory {
    static create(type, data){
        switch (type.toLowerCase()) {
            case "admin":
                return new User({...data, role: "admin"})
            case "doctor":
                return new User({...data, role: "doctor"})
            case "paciente": 
                return new User({...data, role: "paciente"})        
            default:
                throw new Error("Tipo de usuario no reconocido")
        }
    }
}