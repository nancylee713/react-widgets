import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';


const items = [
  {
    title: 'What is Strasbourg known for?',
    content: 'Strasbourg is the seat Council of Europe, of the European Court of Human Rights and of the European Parliament. A lot of people also consider Strasbourg to be the capital of the European Union.'
  },
  {
    title: 'What is Brest known for?',
    content: 'Brest is a town in France. It is in the Finistère department and the Brittany region.'
  },
  {
    title: 'What is Metz known for?',
    content: 'Metz is a city in France, the prefecture of the Lorraine region and the Moselle department.'
  }
]

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'The Color Violet',
    value: 'violet'
  }
]

export default () => {
  const [selected, setSelected] = useState(options[0]);
  
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown 
          label="Select a Color" 
          options={options} 
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  )
};