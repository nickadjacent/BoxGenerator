import React, { useState } from 'react';
import styled from 'styled-components';

const BoxDem = styled.div`
    background-color: ${props => props.bgColor || 'black'};
    display: inline-block;
    width: ${props => props.length || '100'}px;
    height: ${props => props.length || '100'}px;
    justify-content: center;
    margin: 4px;
`;

const Color = styled.input``;

const Size = styled.input``;

const Gen = styled.button``;

const BoxGen = (props) => {
    const colorField = React.createRef();
    const lengthField = React.createRef();

    const [state, setState] = useState({
        boxes: [],
        newCol: '',
        newLength: 0
    });

    const addColorButtonClicked = (event) => {
        try {
            event.preventDefault();
            setState({
                boxes: state.boxes.concat([{ color: state.newCol, length: state.newLength }]),
                newCol: '',
                newLength: 0
            });

            colorField.current.value = '';
            lengthField.current.value = '';
        } catch {
            console.error();
        }
    }

    const colorFieldOnChange = (event) => {
        event.preventDefault();
        setState({
            ...state,
            newCol: event.target.value
        })
    }

    const lengthFieldOnChange = (event) => {
        event.preventDefault();
        setState({
            ...state,
            newLength: event.target.value
        })
    }

    return (
        <div>
            <Color ref={colorField} onChange={colorFieldOnChange} placeholder='Color' />
            <Size ref={lengthField} onChange={lengthFieldOnChange} placeholder='Size' />

            <Gen onClick={addColorButtonClicked}>Add Color</Gen>
            <div>
                {state.boxes.map((obj, index) => <BoxDem key={index} bgColor={obj.color} length={obj.length}></BoxDem>)}
            </div>
        </div>
    );
}

export default BoxGen;