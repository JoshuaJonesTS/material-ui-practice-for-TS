import Button from '@mui/material/Button';

function MainButton() {
    return (
        <div>
            <Button variant="contained" onClick={() => console.log('clicked')}>Contained</Button>
        </div>
    );
}

export default MainButton;