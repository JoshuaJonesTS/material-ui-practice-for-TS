import { useState } from 'react';

function MainSearch() {
    const [term, setTerm] = useState('default');
    const [nameSelected, setNameSelected] = useState(false);
    const [typeSelected, setTypeSelected] = useState(false);
    const [envSelected, setEnvSelected] = useState(false);
    
    let animals = [
        {
            name: 'dolphin',
            type: 'mammal',
            environment: 'ocean'
        }, 
        {
            name: 'wolf',
            type: 'mammal',
            environment: 'temperate forest'
        },
        {
            name: 'toucan',
            type: 'bird',
            environment: 'tropical rainforest'
        }
    ];

    // 1) Loop through the list of objects and do the following on each object:
    let animalName = [];
    animals.forEach(animal => {
        // animalName.push([animal.name]);
    });
    
    animalName.forEach(name => {
        // console.log(name);
    });

    console.log(term);

    const onSearchChange = (event) => {
        const searchField = event.target.value;
        
        setTerm(() => {
            return {searchField};
        });
    }

    return (
        <div>
            <div>
                {/* Name */}
                <input 
                    type="radio" 
                    id="name" 
                    name="align"
                    onChange={() => {
                        setNameSelected(true);
                        setTypeSelected(false);
                        setEnvSelected(false);
                    }} 
                />
                <label htmlFor="radioleft">Name</label>

                {/* Type */}
                <input 
                    type="radio" 
                    id="type" 
                    name="align" 
                    onChange={() => {
                        setNameSelected(false);
                        setTypeSelected(true);
                        setEnvSelected(false);
                    }} 
                />
                <label htmlFor="type">Type</label>

                {/* Environment */}
                <input 
                    type="radio" 
                    id="environment" 
                    name="align" 
                    onChange={() => {
                        setNameSelected(false);
                        setTypeSelected(false);
                        setEnvSelected(true);
                    }} 
                />
                <label htmlFor="environmen">Environment</label>
            </div>
            <input 
                type="text" 
                onChange={e => setTerm(e.target.value.toLowerCase())}
                onChangeHandler={onSearchChange}
            >
            </input>
            {/* class based component */}
            {
                // if(nameSelected) {

                // }
            }
            
            {/* 1.1) Retrieve the value inside of the object that corresponds with the Search
            Field specified by the user. (For example, if the search field is “age”, then
            get the “age” value inside of the object) */}

            {/* 1.2) Check if the search value from the user matches the value inside of the object. */}

            {/* 1.2.1) If it matches, add the object to the search results list */}

            {/* 1.2.2) If it does not match, do nothing. */}

            {/* 2) Return the list of search results */}
        </div>
    );
}

export default MainSearch;