import React, { useCallback, useMemo, useRef, useState } from 'react';

const getAverage = numbers => {
    console.log('평균값 계산중');
    if (numbers.length == 0) return 0;
    const sum = numbers.reduce((a, b) => a + 1);
    return sum / numbers.length;
}

const Average = () => {

    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);

    const onInert = useCallback(e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    }, [number, list]);

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl} />
            <button onClick={onInert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                평균값: {avg}
            </div>
        </div>
    );
};

export default Average;