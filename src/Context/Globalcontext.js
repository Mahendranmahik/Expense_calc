import React, { createContext, useReducer } from 'react'

export const Globalcontext = createContext()

const initialstate={
    transactions:[
            {id:Math.floor(Math.random()*100000000),text:'buying mobile',desc:'',amount:-18000},
            {id:Math.floor(Math.random()*100000000),text:'cashback',desc:'',amount:200},
            {id:Math.floor(Math.random()*100000000),text:'pay due',desc:'',amount:-2000},
            {id:Math.floor(Math.random()*100000000),text:'credit for ',desc:'',amount:100},
        ]
}

const reducer=(state,action)=>{
    switch(action.type){
        case "deletetrans":
            return{
                ...state,
                transactions:state.transactions.filter(transaction=>transaction.id !== action.payload)
            }
        case "addtrans":
            return{
                ...state,
                transactions:[action.payload,...state.transactions]
            }
    }
}



export const GlobalcontextProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialstate)

    const deletetrans=(id)=>{
        dispatch({
            type:'deletetrans',
            payload:id
        })  
    }

    const addtrans=(transaction)=>{
        dispatch({
            type:"addtrans",
            payload:transaction
        })
    }
    
    return(
        <Globalcontext.Provider value={{
            transactions:state.transactions,
            deletetrans:deletetrans,
            addtrans:addtrans
        }}>
            {children}
        </Globalcontext.Provider>
    )
}
  
