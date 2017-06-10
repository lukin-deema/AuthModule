
export const addNewUser = (user) => {
    return {
        id: user.id,
        email: user.email,
        name: user.name,
        password: user.password,
    }
};

export const toggleVisibility = (visibilityFilter)=>{
    return {
        visibilityFilter
    }
};