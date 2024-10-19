
const peticiones=async(data,metodo,url,tk)=>{

    var res=await fetch(url,{
        method:metodo,
        body:data,
        headers:{
            'Authorization':tk
        }
    })

    res= await res.json()

    return res
}