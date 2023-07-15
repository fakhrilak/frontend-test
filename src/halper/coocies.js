export const getCoocies=(name)=>{
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(`${name}=`)) {
          return cookie.substring(`${name}=`.length);
        }
      }
    
    return null;
}

export const removeCoocies=(cookieName)=>{
    document.cookie = `${cookieName}=; expires=; path=/;`;
}