import React, { Component } from 'react';
import { CategoriesConsumer } from '../services/context/CategoriesContext';
import { EventsConsumer } from '../services/context/EventsContext';

export class Form extends Component {

    constructor() {
        super();

        this.state = {
            name: '',
            category: ''
        }
    }

    handleChangeGetData = (e) => {

        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });

    }


    render() {
        return (
            <EventsConsumer>
                {(value) => {
                    return (
                        <form 
                            onSubmit={(e) => {
                                e.preventDefault();
                                value.getEventsByKeyword(this.state);
                            }
                        }>
                            <fieldset className="uk-fieldset uk-margin">
                                <legend className="uk-legend uk-text-center">
                                    Busca tu evento por nombre o catégoria
                                </legend>
                            </fieldset>

                            <div className="uk-column-1-3@m uk-margin">
                                <div className="uk-margin" uk-margin="true">
                                    <input
                                        type="text"
                                        name="name"
                                        className="uk-input"
                                        placeholder="Nombre de evento o ciudad"
                                        onChange={this.handleChangeGetData}
                                    />
                                </div>
                                <div className="uk-margin" uk-margin="true">
                                    <select
                                        name="category"
                                        className="uk-select"
                                        onChange={this.handleChangeGetData}
                                    >
                                        <option value="0">--Seleccione--</option>
                                        <CategoriesConsumer>
                                            {(value) => {
                                                return (
                                                    value.categories.map((category, key) => (
                                                        <option
                                                            key={key}
                                                            value={category.id}
                                                            data-uk-form-select
                                                        >
                                                            {category.name_localized}
                                                        </option>
                                                    ))
                                                )
                                            }}
                                        </CategoriesConsumer>

                                    </select>
                                </div>
                                <div className="uk-margin uk-text-center" uk-margin="true">
                                    <input
                                        type="submit"
                                        name="name"
                                        className="uk-button uk-button-danger"
                                        value="Buscar evento"
                                    />
                                    {value.loader ? 
                                        <i className="fa fa-spinner fa-spin"></i>
                                    : 
                                    null}
                                    
                                </div>
                            </div>
                        </form>
                    )
                }}
            </EventsConsumer>
        );
    }
}

export default Form;
