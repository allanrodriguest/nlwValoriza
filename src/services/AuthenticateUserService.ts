import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {

    async execute({email, password}: IAuthenticateRequest){
        const usersRepositories = getCustomRepository(UsersRepositories);

        const user = await usersRepositories.findOne({
            email
        });

        if(!user) {
            throw new Error("Email/Password Incorrect");   // Security Purpose
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) {
            throw new Error("Email/Password Incorrect");
        }

        const token = sign(
            {
            email: user.email
            }, 
            "4b8552307e0b325da897986471b1180b", 
        {
            subject: user.id,
            expiresIn: "1d"
        }
        );

        return token;
    }
}

export { AuthenticateUserService };