import React, { Fragment } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import EventsList from './components/EventsList';

import CategoryProvider from './services/context/CategoriesContext';
import EventsProvider from './services/context/EventsContext';

function App() {
  return (
    <Fragment>
      <Header />
      <CategoryProvider>
        <div className="uk-container">
          <EventsProvider>
            <Form />
            <EventsList />
          </EventsProvider>
        </div>
      </CategoryProvider>
    </Fragment>
  );
}

export default App;
  