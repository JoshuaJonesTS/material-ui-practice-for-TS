import { useState } from 'react';
import MainButton from '../../blocks/Button/MainButton';

function MainForm() {
    const [term, setTerm] = useState('');

    return (
        <div>
            <p> You clicked {term}</p>
            <MainButton oncClick={() => setTerm('dolphin')}></MainButton>
        </div>
    );
}

export default MainForm;