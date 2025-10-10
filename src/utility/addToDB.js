// src/utility/addToDB.js
const getStoreData=()=>{
    const storeAppDataSTR=localStorage.getItem("installedApps");
    if(storeAppDataSTR){
       const storeAppData=JSON.parse(storeAppDataSTR)
       return storeAppData
    }else {
        return [];
    }

}


const addStoreData=(id)=>{
    const storeData=getStoreData()

    if(storeData.includes(id)){
        alert("already exits this app")
    }else {
        storeData.push(id)
    }
    const data=JSON.stringify(storeData)
    localStorage.setItem("installedApps",data)


}
export {addStoreData}