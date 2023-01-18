import { useState } from 'react';
import MainButton from '../../blocks/Button/MainButton';

function MainForm() {
    const [term, setTerm] = useState('');

    return (
        <div>
            <h1>An animal that lives in the sea is {term}!</h1>
            <MainButton onClick={() => setTerm('dolphin')}></MainButton>
        </div>
    );
}

export default MainForm;