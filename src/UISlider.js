import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'; 
import noUiSlider from 'nouislider';

class ReactSliderApp extends React.Component {
    render() {
        return (
            <div className="react-slider-app" className="text-center">
                <SliderValue value={this.props.value} color={this.props.color}/>
                <JQueryUISlider
                value = {this.props.value}
                slider = {this.props.slider || null}
                onChange={(r) => this.props.onChange(r)} />
            </div>
        );
    }
}


class JQueryUISlider extends React.Component {
    componentDidMount() {
        if (this.props.slider){
            this.props.slider.value = this.props.value;
        }
        
        const parent = ReactDOM.findDOMNode(this);
        this.slider = noUiSlider.create(parent, this.props.slider || {
            min: 0,
            max: 256,
            value: this.props.value,
            start: 40,
            connect: "lower",
            step: 1,
            range: {
                'min': 0,
                'max': 256,
            },
            });
            

    parent.noUiSlider.on('update', function(evt, ui){
        let val = evt[0];
        this.props.onChange(val)
        
    }.bind(this));

    }

    componentWillUnmount() {
        const parent = ReactDOM.findDOMNode(this);
        noUiSlider.destroy()
    }
    shouldComponentUpdate() {
        return false;
    }
    render() {
        return (
            <div className="slider"></div>
        );
    }
}


class SliderValue extends React.Component{
    render() {
        return (
                <div>{this.props.color}: {this.props.value}</div>
        );
    }
}


export default ReactSliderApp;