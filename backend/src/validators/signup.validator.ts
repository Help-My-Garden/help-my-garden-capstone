export const signupValidator = {


    profileEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        // Uncomment the next line to sanitize email, but it removes +1 from testing email addresses.
        // normalizeEmail: true,
        trim: true
    },
    profilePassword: {
        isLength: {
            errorMessage: 'Password must be at least eight characters',
            options: {min: 8}
        },
        trim: true,
        escape: true
    },
    profilePasswordConfirm: {
        isLength: {
            errorMessage: 'confirm password must be at least eight characters',
            options: {min: 8}
        },
        trim: true,
        escape: true
    },
    profileName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'profileAtHandle must be between one and sixty four characters',
            options: {min: 1, max: 64}
        }
    }
}