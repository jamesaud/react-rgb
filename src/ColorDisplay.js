import React from 'react';
import ReactDOM from 'react-dom';
import ReactSliderApp from './UISlider';
import HexConverter from './hex-converter';

var Color = {
    RED: "Red",
    BLUE: "Blue",
    GREEN: "Green",
    ALPHA: "Alpha"
}

class ColorDisplay extends React.Component {

    constructor(){
        super();
        this.state = {
            color: {
                red: 10,
                green: 50,
                blue: 90,
                alpha: 1
            }
        }
    }

    handleChange(value, COLOR){
        const color = this.state.color;
        value = parseFloat(value);
        if (COLOR == Color.RED){
            color.red = value;
        } else if (COLOR == Color.BLUE){
            color.blue = value;
        } else if (COLOR == Color.GREEN){
            color.green = value;
        } else if (COLOR == Color.ALPHA){
            color.alpha = value;
        } else throw "Did not provide correct color";
        
        this.setState({
            color: color
        });
    }

    render(){
        const color = this.state.color;
        const divStyle = {
            backgroundColor: `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})`,
            height: '80vh',
            width: '100%',
            margin: "0 auto",
            };

        const opacity_slider = {
            min: 0,
            max: 1,
            start: 40,
            connect: "lower",
            step: .01,
            range: {
                'min': 0,
                'max': 1,
            },
            };


        const SliderStyle = {
            paddingTop: "10px",
            paddingBottom: "10px"            
        }
        return (
        <div>
            <div id="colordisplay" style={divStyle}></div>
            
            <div className="container" style={SliderStyle}>
                <div className=" row">
                        <div  className="col-md-3 col-sm-6"><ReactSliderApp value={this.state.color.red} color={Color.RED} onChange={(value) => this.handleChange(value, Color.RED)} /></div>
                        <div  className="col-md-3 col-sm-6"><ReactSliderApp value={this.state.color.blue} color={Color.BLUE}  onChange={(value) => this.handleChange(value, Color.BLUE)} /></div>
                        <div  className="col-md-3 col-sm-6"><ReactSliderApp value={this.state.color.green} color={Color.GREEN} onChange={(value) => this.handleChange(value, Color.GREEN)} /></div>
                        <div  className="col-md-3 col-sm-6"><ReactSliderApp value={this.state.color.alpha} color={Color.ALPHA} onChange={(value) => this.handleChange(value, Color.ALPHA)} slider={opacity_slider} /></div>
                </div>
                <div className="row">
                    <CssValueDisplay color={this.state.color}/>
                </div>
            </div>
        </div>
        )
    }
}


class CssValueDisplay extends React.Component{
    render() {
       var hc = new HexConverter();
       var red = this.props.color.red,
           blue = this.props.color.blue,
           green = this.props.color.green,
           alpha = this.props.color.alpha;

       var hex = hc.rgbToHex(red, blue, green);
        
       return (
            <div id="css-value-display" >
                <code>background-color: rgba({red}, {green}, {blue}, {alpha})</code>
                <br />
                <code>{hex}</code>
            </div>
        );
    }
}


export default ColorDisplay; 