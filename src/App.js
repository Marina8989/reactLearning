import React from 'react';
import Header from './Header';
import Main from './Main';


function App() {
  return (
      <div>
        <Header
            header={{name: 'Orange', about: 'Orange is the best way to have a grreat immune system',
            one: 'Add to tea', two: 'Add to water'}}
         />
         <Header
            header={{name: 'Apple', about: 'Apple is the best way to have a grreat immune system',
            one: 'Add to cake', two: 'Add to pie'}}
         />
         <Header
            header={{name: 'Kiwi', about: 'Kiwi is the best way to have a grreat immune system',
            one: 'Add to shampoo', two: 'Add to conditioner'}}
         />

         <Main
           answer={{one: 'Winter', two:'Spring', three: 'Summer', four: 'Autumn'}}
          />
      </div>
  );
}

export default App;
