
function getStorageData() {
    const savedData = localStorage.getItem('installed')

    if (savedData) {
        const getData = JSON.parse(savedData);
        return getData;
    } else {
        return [];
    }
}


function addToStorage(id){

    const data = getStorageData()
    console.log(data)

    if(!data.includes(id)) {
        data.push(id);
        const updateData = JSON.stringify(data)
        localStorage.setItem('installed' ,updateData)
    } 

}


function removeSavedData(id){
    const data = getStorageData().filter(item => item !== id);
    const stringified = JSON.stringify(data);
    localStorage.setItem('installed', stringified);
    return data;
}


export {addToStorage, getStorageData, removeSavedData}