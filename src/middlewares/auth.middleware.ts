import { Request, Response, NextFunction } from "express";
import { ENV_CONFIG } from "../config/env";
const jwt = require('jsonwebtoken');

export const isLoggedIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith(`Bearer `)) {
            return res.status(401).json({ message: 'Unauthorized: No Token Found' });
        }

        const token = authHeader.split(' ')[1];

        try {
            const decode = jwt.verify(token, ENV_CONFIG.jwtSecret);
            (req as any).user = decode;
            next();
        } catch (error) {
            return res.status(401).json({ message: 'Invalid or expired token' });
        }
    }
    catch (error) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
}

export const isRecruiter = (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;
    if (user && user.role === 'recruiter') {
        return next();
    }
    return res.status(403).json({ message: 'Access denied: Recruiter role required' });
};

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;
    if (user && user.role === 'admin') {
        return next();
    }
    return res.status(403).json({ message: 'Access denied: Admin role required' });
};
