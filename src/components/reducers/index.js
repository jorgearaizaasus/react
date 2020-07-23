//Reducers
const policies = (listPolicies = [], action) => {
    let listPoliciesCopy = listPolicies
    if(action.type == "CREATE_POLICY"){
        listPoliciesCopy.push(action.payload.name)
        return listPoliciesCopy
    }
    else if(action.type == "DELETE_POLICY"){
        let newList = listPoliciesCopy.filter((name) => {
            return name !== action.payload
        })
        return newList
    }
    else {
        return listPoliciesCopy
    }
}

const bank = (totalAmount = 0, action) => {
    switch(action.type){
        case "CREATE_POLICY":
            let newAmount = totalAmount + action.payload.amount
            return newAmount
        case "CREATE_CLAIM":
            return totalAmount - action.payload.amount
        default:
            return totalAmount
    }
}

const claimHistory = (listOfClaims = [], action) => {
    switch(action.type){
        case "CREATE_CLAIM":
            return [...listOfClaims, action.payload]
        default:
            return listOfClaims
    }
}

export default  combineReducers({
    listPolicies: policies,
    totalAmount: bank,
    listOfClaims: claimHistory
})

