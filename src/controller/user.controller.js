    import User from "./../models/user.model.js"


    export const register = async (req, res) => {
        const {name, lastName, email, password , picture, phoneNumber } = req.body
        try  {
            const user = new User({name, lastName, email, password , picture, phoneNumber })
            await user.save()
            res.status(200).json({message: "user is created"})
        } catch (error){
            res.status(400).json({error: error.message});
        }
    }