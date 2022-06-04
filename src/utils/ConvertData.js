
const convertData = (data)=>{
    const keys = new Set()
    let result = []
    
    data.forEach(element => {
        keys.add(element.publishedYear)   
    });

    keys.forEach(element => {
        const year = element
        const obj = {}
        obj[year] = []

        result.push(obj)
    });

    data.forEach(element => {
        const year = element.publishedYear
        const index = [...keys].indexOf(year)

        result[index][year].push(element)
    });
    
    return result
}

const delist = (data) =>{
    let result = []

    data.forEach((element)=>{
        const year = Object.keys(element)[0]
        result.push(...element[year])
    })

    return result
}

export default convertData
export {delist}