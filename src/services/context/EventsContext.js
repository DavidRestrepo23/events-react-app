import React, { Component } from 'react';
import axios from 'axios';

const EventsContext = React.createContext();
export const EventsConsumer = EventsContext.Consumer;

export class EventsProvider extends Component {

    token = 'V7RATNTP4S5FZDIJLGHV';
    order_by = 'date';

    constructor(){
        super();

        this.state = {
            events:[],
            loader:false
        }
    }

    getEventsByKeyword = async (keyword) => {
        
        const url = `https://www.eventbriteapi.com/v3/events/search/?q=${keyword.name}&categories=${keyword.category}&sort_by=${this.order_by}&token=${this.token}&locale=es_ES`;

        this.setState({
            loader:true
        });

        const events = await axios.get(url);

        this.setState({
            events: events.data.events,
            loader:false
        });

    }

    render() {
        return (
            <EventsContext.Provider
                value={{
                    events: this.state.events,
                    loader: this.state.loader,
                    getEventsByKeyword: this.getEventsByKeyword
                }}
            >
                {this.props.children}

            </EventsContext.Provider>
        );
    }
}

export default EventsProvider;
