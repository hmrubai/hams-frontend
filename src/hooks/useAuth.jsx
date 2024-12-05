export const useToken =()=>{
    const token=localStorage.getItem("HAMS-TOKEN")
    return token
}
export const useUser =()=>{
    const user=localStorage.getItem("HAMS-USER")
    return user
}

export const useLogout=()=>{
    localStorage.removeItem("HAMS-USER")
    localStorage.removeItem("HAMS-TOKEN")
    return "Log out successful"
}



