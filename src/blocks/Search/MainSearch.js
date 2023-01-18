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

    console.log(nameSelected);

    return (
        <div>
            <div className='e-btn-group'>
                <input type="radio" id="radioleft" name="align" value="left"/>
                <label className="e-btn" htmlFor="radioleft">Left</label>
                <input type="radio" id="radiomiddle" name="align" value="middle"/>
                <label className="e-btn" htmlFor="radiomiddle">Center</label>
                <input type="radio" id="radioright" name="align" value="right"/>
                <label className="e-btn" htmlFor="radioright">Right</label>
            </div>
          
            
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