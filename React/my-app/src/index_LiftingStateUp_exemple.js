import React from 'react';
import ReactDOM from 'react-dom';


const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}


class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: '', scale: 'c'};

        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(temperature) {
        this.setState({temperature: temperature, scale: 'c'});
    }

    handleFahrenheitChange(temperature) {
        this.setState({temperature: temperature, scale: 'f'});
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.state.scale;
        const celsius = (scale==='c') ? temperature : tryConvert(temperature, toCelsius);
        const fahrenheit = (scale==='f') ? temperature : tryConvert(temperature, toFahrenheit);

        return (
            <div>
                <TemperatureInput 
                    scale={'c'}
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureInput
                    scale={'f'}
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />

                <BoilingVerdict
                    celsius={parseFloat(celsius)}
                />
            </div>
        )
    }
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onTemperatureChange(event.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        )
    }
}

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

ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
);
