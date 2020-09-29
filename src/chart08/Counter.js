import React, { useReducer } from 'react';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    }
    // switch (action.type) {
    //     case 'INCREMENT':
    //         return { value: state.value + 1 };
    //     case 'DECREMENT':
    //         return { value: state.value - 1 };
    //     default: 
    //         return state;
    // }
}


const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    });

    const { name, nickname } = state;
    const onChange = e => {
        dispatch(e.target);
    };

    return (
        <div>
           <input name="name" value={name} onChange={onChange} />
           <input name="nickname" value={nickname} onChange={onChange} /><br />
           이름: {name}, 닉네임: {nickname}
        </div>
    );
};


export default Counter;