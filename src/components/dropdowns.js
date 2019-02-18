import React from 'react';
import { connect } from 'react-redux';
import DisplayEncounter from './display-encounter';
import DisplayZoo from './display-zoo';
import './main.css';

export function Dropdowns(props) {

    const animals = props.animals.map((animal, index) => (
        <option key={index} value={animal}>
            {animal}
        </option>
    ));

    const zoos = props.zoos.map((zoo, index) => (
        <option key={index} value={zoo}>
            {zoo}
        </option>
    ));

    let selectValue = '';

    function animalChange(value) {
        console.log(value);
        if (value === 'Kangaroo') {
            selectValue = <DisplayEncounter />;
            console.log(selectValue);
        }
    }

    function zooChange(value) {
        console.log(value);
        if (value === 'Featherdale Wildlife Park') {
            selectValue = <DisplayZoo />;
            console.log(selectValue);
        }
    }

    return (
        <div>
        <section className="dropdowns">
            <h3>Animals</h3>
            <select name="animal-dropdown" className="animal-dropdown" onChange={e => animalChange(e.target.value)}>
                {animals}
            </select>
            <h3>Zoos</h3>
            <select name="zoo-dropdown" className="zoo-dropdown" 
            onChange={e => zooChange(e.target.value)}>
                {zoos}
            </select>
        </section>
        <section class="results">
            {selectValue}
        </section>
        </div>
    );
}

const mapStateToProps = state => ({
    animals: state.animals,
    zoos: state.zoos
  });
  
  export default connect(mapStateToProps)(Dropdowns);