const {createStore,combineReducers} = require('redux') 
//Action creators
//person who submitted the form
let lastId = 0
const newBooking = (name,amount)=>{
  return {
    type:'NEW_BOOKING',
    payload:{
      id:++lastId,
      name,
      amount
    }
  }
}

const cancelBooking = (id,refundAmount)=>{
  return {
    type:'CANCEL_BOOKING',
    payload:{
      id,
      refundAmount
    }
  }
}

//reducers 

//for reservation
const reservationReducer = (state=[],action)=>{
 switch(action.type){
   case 'NEW_BOOKING':
     return [
       ...state,
       action.payload
     ]
   case 'CANCEL_BOOKING':
     return state.filter(na=> na.id== action.payload.id)
     default: return state
 } 
}

//for cancellation history


const canclellationHistoryReducer  = (state=[],action)=>{
switch(action.type){
  case 'CANCEL_BOOKING':
    return [...state,action.payload]
  default: return state
}
}

const acountingReducer = (state=0,action)=>{
  switch(action.type){
    case 'NEW_BOOKING':
      return state + action.payload.amount
    case 'CANCEL_BOOKING':
      return state - action.payload.refundAmount
    default: return state;
  }
}

//Redux store

const rootReducer = combineReducers({
  reservation:reservationReducer,
  canclellation:canclellationHistoryReducer,
  accountation:acountingReducer
})

const store = createStore(rootReducer)

store.dispatch(newBooking('Aatif Ali',10))
store.dispatch(newBooking('Attu Chaudhary',35))
store.dispatch(newBooking('Uzair Chaudhary',10))
store.dispatch(newBooking('Arshalan Ali',25))
store.dispatch(cancelBooking(2,15));
// store.dispatch(newBooking('Aatif Ali',10))
// store.dispatch(newBooking('Aatif Ali',10))

console.log(store.getState())