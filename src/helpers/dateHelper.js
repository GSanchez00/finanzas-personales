export const formatDDMMYYYY=(dateJson)=>{
    let año=dateJson.substring(0,4)
    let mes=dateJson.substring(5,7)
    let dia=dateJson.substring(8,10)
    return `${dia}-${mes}-${año}`;
}