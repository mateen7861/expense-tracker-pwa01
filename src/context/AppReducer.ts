import { TransactionType } from "../Types";

type Actions = 
| {type: "add", transaction: TransactionType}
| {type: "delete", id: number}

 const reducer=(state: { transactions: TransactionType[]; }, action: Actions ) => {
    switch(action.type) {
        case 'delete':
            return {
                transactions: state.transactions.filter(t => t.id !== action.id)
            }
        case 'add':
            return {
                ...state,
                transactions: [action.transaction, ...state.transactions]
            }
        default:
            return state;
    }
}
export default reducer