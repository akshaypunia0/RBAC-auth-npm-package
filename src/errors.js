export const rbacErrors = {

    UNAUTHORIZED: {
        status: 401,
        message: 'unauthorized: user not authenticated'
    },

    ROLE_MISSING: {
        status: 401,
        message: 'Unauthorized: user role not found'
    },

    FORBIDDEN: {
        status: 403,
        message: 'unauthorized user: insufficient permissions'
    },

    INVALID_ROLES: {
        status: 500,
        message: 'Server error: invalid roles configuration'
    }


}