import React, { useReducer } from 'react' 

let initialState = {
    counterOneValue : 0,
    counterTwoValue : 10
}


//2. reducer function holds two params current state and action

let reducer =(state, action) => {
    switch (action.type) {
        case "increment":
            return {...state, counterOneValue: state.counterOneValue + action.value}
            
        case "decrement":
            return {...state, counterOneValue:state.counterOneValue - action.value}
        
        case "increment5" :
            return {...state, counterTwoValue:state.counterTwoValue + action.value}

        case "decrement5":
            return {...state, counterTwoValue: state.counterTwoValue - action.value}

        case "reset":
            return initialState
         
        default:
            return state 
            
    }
}

const CounterOne =()=>{

    let [count, dispatch] = useReducer(reducer, initialState)//1.it hold two parameters reducer function and initialstate


    return(
        <React.Fragment>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow-lg text-center">
                            <div className="card-header text-white fw-bold bg-warning">
                                <h1>Counter</h1>
                            </div>
                            <div className="card-body">
                                <h1 className='text-success'>{count.counterOneValue}</h1>
                                <h1 className='text-warning'>{count.counterTwoValue}</h1>

                                <button onClick={() =>dispatch({type :"increment" , value:1})} className='btn btn-success m-2 btn-sm'>Increment</button>
                                <button onClick={()=>dispatch({type :"decrement" , value:1})} className='btn btn-secondary m-2 btn-sm'>Decrement</button>

                                <button onClick={() =>dispatch({type :"increment" , value:2})} className='btn btn-success m-2 btn-sm'>Increment2</button>
                                <button onClick={()=>dispatch({type :"decrement" , value:2})} className='btn btn-secondary m-2 btn-sm'>Decrement2</button>

                                <button onClick={()=>dispatch({type :"reset"})} className='btn btn-primary m-2 btn-sm'>Reset</button>

                                <button onClick={() =>dispatch({type :"increment5" , value:5})} className='btn btn-success m-2 btn-sm'>Increment5</button>
                                <button onClick={()=>dispatch({type :"decrement5" , value:5})} className='btn btn-secondary m-2 btn-sm'>Decrement5</button>
                           </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CounterOne;