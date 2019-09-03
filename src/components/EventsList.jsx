import React from 'react';
import Event from '../components/Event';
import { EventsConsumer } from '../services/context/EventsContext';

const EventsList = () => {
    return ( 
        <div className="uk-child-width-1-3@m" uk-grid="true">
            <EventsConsumer>
                {(value) => {
                    return value.events.map((event, key) => (
                        <Event key={key} event={event} />
                    ))
                }}
            </EventsConsumer>
        </div>
    );
}
 
export default EventsList;