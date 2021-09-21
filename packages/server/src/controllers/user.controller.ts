// pkgs:
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import config from 'config';
import { Request, Response } from 'express';

// utils:
import User from '../models/user.model';

// get token secret key:
const { token_gen_sec_key } = config.get('server');

// get all users
export const getRegisteredUsers = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).json({
            message: `Something went wrong, Please try again later: ERROR: ${error}`,
        });
    }
};

// crete new user handler
export const signupHandler = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    try {
        const existedUser = await User.findOne({ email });

        if (existedUser) {
            res.status(400).json({
                message: `This user is already existed: ${email}`,
            });
        }

        if (password !== confirmPassword) {
            res.status(400).json({
                message: `Passwords not matched each other.`,
            });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const createdUser = await User.create({
            email: email,
            password: hashedPassword,
            name: `${firstName} ${lastName}`,
        });

        const userToken = jwt.sign(
            { email: createdUser, id: createdUser._id },
            token_gen_sec_key,
            {
                expiresIn: `1h`,
            }
        );

        res.status(201).json({ auth: createdUser, token: userToken });
    } catch (err) {
        res.status(500).json({
            message: `Something went wrong ERROR: ${err}`,
        });
    }
};

// logging existed user handler
export const SignInHandler = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { email, password } = req.body;

    try {
        const existedUser: any = await User.findOne({ email });

        if (!existedUser)
            res.status(404).json({
                message: `No user registered with this email: ${email}`,
            });

        const isPasswordCorrect = bcrypt.compare(
            password,
            existedUser?.password
        );

        if (!isPasswordCorrect)
            res.status(400).json({ message: `Invalid credentials` });

        const userToken = jwt.sign(
            { email: existedUser, id: existedUser?._id },
            token_gen_sec_key,
            {
                expiresIn: `1h`,
            }
        );

        res.status(200).json({ auth: existedUser, token: userToken });
    } catch (err) {
        res.status(500).json({
            message: `Something went wrong ERROR: ${err}`,
        });
    }
};
