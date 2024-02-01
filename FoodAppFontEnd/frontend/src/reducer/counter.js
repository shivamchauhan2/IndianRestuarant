import {createAction,createReducer} from '@reduxjs/toolkit'
let initialState={items:[],
    totalAmount:0,
    showLogIn:false,
    showSignIn:false
}

//Action Generators
const increment=createAction("counter/addToCart")
const decrement=createAction("counter/deleteToCart")
const clearCart=createAction("counter/deletecart")
const logIn=createAction("login/login")
const signIn=createAction("signup/signup")

let countReducer=createReducer(initialState,(builder)=>{
    builder.addCase(logIn,(state,action)=>{
        state.showLogIn=!state.showLogIn
    })
    builder.addCase(signIn,(state,action)=>{
        state.showSignIn=!state.showSignIn
    })
    builder.addCase(increment,(state,action)=>{
        let items=[...state.items]
            let index = items.findIndex(item => item.id === action.payload.id)
            if(index > -1) {
                items[index] = {
                    ...items[index],
                    quantity: items[index].quantity + 1
                }
                state.items=[...items]
                state.totalAmount +=action.payload.price
            }
            else {
                let item={...action.payload,quantity:1}
                state.items=[...state.items,item]
                state.totalAmount +=action.payload.price
            }
        }
    )
        // state.value++   // state is reducers state
        //return is not required 
        //state seems to be mutated but it's not
        //inner library
    // })
    builder.addCase(decrement,(state,action)=>{
        let items=[...state.items]
            let index=items.findIndex(item=>item.id===action.payload)
            let totalAmount=state.totalAmount -items[index].price
            state.totalAmount=totalAmount
            if(items[index].quantity>1){
                items[index]={...items[index],quantity: items[index].quantity-1}
                state.items=[...items]
            }
            else if(items[index].quantity===1){
                items.splice(index, 1)
                state.items=items
            }
        // state.value--
    })
    builder.addCase(clearCart,(state)=>{
        state.items=[]
        state.totalAmount=0
        return {
            items: [],
            totalAmount: 0
        }
    })
})

export {increment,decrement,clearCart,logIn,signIn}
export default countReducer