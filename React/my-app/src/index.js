import React from 'react';
import ReactDOM from 'react-dom';


class BoilingVerdict extends React.Component {
    static VERDICT_BOIL = 'The water would boil.';
    static VERDICT_NOT_BOIL = 'The water would not boil.';

    render() {
        const verdict = (this.props.celsius >= 100) ? BoilingVerdict.VERDICT_BOIL : BoilingVerdict.VERDICT_NOT_BOIL;
        return (
            <p>{verdict}</p>
        );
    }
}

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {temperature: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({temperature: event.target.value})
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input value={temperature} onChange={this.handleChange} />

                <BoilingVerdict celsius={parseFloat(this.state.temperature)} />
            </fieldset>
        )
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
);
