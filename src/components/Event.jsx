import React from 'react';

const style = {
    image : {
        width: '100%',
    }
};

const Event = ({ event }) => {

    let { text } = event.description;

    if(text) {
        if( text.length > 250) {
            text = text.substr(0, 250);
        }
    }else {
        text = null;
    }

    return (
        <div>
            <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                    {event.logo ? <img style={style.image} src={event.logo.url} alt={event.name} /> : null}
                </div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">
                        {event.name.text}
                    </h3>
                    <p>
                        {text}
                    </p>
                </div>
                <div className="uk-card-footer">
                    <a className="uk-button uk-button-secondary" target="_blank" rel="noopener noreferrer" href={event.url}>
                        Más Información
                </a>
                </div>
            </div>
        </div>
    );
}

export default Event;