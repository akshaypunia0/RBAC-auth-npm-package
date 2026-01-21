import { rbacErrors } from "./errors.js"


export const authorize = (allowedRoles = []) => {


    if(!Array.isArray(allowedRoles)) {
        throw new Error(rbacErrors.INVALID_ROLES.message)
    }

    return (req, res, next) => {

        if(!req.user || req.user === undefined) {
            return res.status(rbacErrors.UNAUTHORIZED.status).json(rbacErrors.UNAUTHORIZED.message)
        }

        if(!req.user.role || req.user.role === undefined) {
            return res.status(rbacErrors.ROLE_MISSING.status).json(rbacErrors.ROLE_MISSING.message)
        }

        if(!allowedRoles.includes(req.user.role)){
            return res.status(rbacErrors.FORBIDDEN.status).json(rbacErrors.FORBIDDEN.message)
        }

        next()

    }
}