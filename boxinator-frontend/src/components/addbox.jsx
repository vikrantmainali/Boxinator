import {React, Component} from 'react';
import {connect} from 'react-redux';
import {getBoxes, postBox} from "./box.action";
import '../styles.css';

class addbox extends Component
 {
    state = // Initital states
    {
        name: '',
        weight: '',
        color: '#FFFFFF',
        country: 'Sweden',

        nameError: '',
        weightError: '',
        colorError: ''
    }

    formChecker = () => // Check if all the form values are correctly filled
    {
        let isError = false;
        let defaultWeight = 0;

        let color = this.state.color;
        let R = color.substr(1, 2);
        let G = color.substr(3,4);
        let B = color.substr(5, 6);

        if (!this.state.name) // If no name has been input
        { 
            this.setState
            ({
                nameError: 'Receiver name is required.'
            })
            isError = true;
        } 
        else 
        {
            this.setState
            ({ 
                nameError: '',
            })
        }


        if (!this.state.weight) // If no weight has been input
         {
            this.setState
            ({
                weightError: 'Weight is required.'
            })
            isError = true;
        } 
        else if (this.state.weight < 0) 
        {
            this.setState
            ({
                weightError: 'Negative values are not permitted for weight.',
                weight: defaultWeight
            })
            isError = true;
        } 
        else 
        {
            this.setState
            ({
                weightError: '',
            })
        }


        if (!fullColorHex(R,G,B).substr(4,5) === "00") // If last 2 values of the Hex are 00, it is considered a shade of blue
        {
            this.setState
            ({
                colorError: "The color of the box can not be of shade Blue."
            })
            isError = true;
        }
         else
        {
            this.setState
            ({
                colorError: '',
            })
        }
        return isError;
    }

    handleChange = (e) => // Handler for form change
    {
        this.setState
        ({
            [e.target.id]: e.target.value
        })
    }


    handleSubmit = (e) => // Submit button handler
    {
        e.preventDefault();
        if (!this.formChecker()) 
        {
            this.props.dispatch(postBox(this.state))
                .then(() => this.props.dispatch(getBoxes()))

            this.setState // Clearing inputs after box has been added
            ({ 
                name: '',
                weight: '',
                color: '#FFFFFF',
                country: 'Sweden',

                nameError: '',
                weightError: '',
                colorError: ''
            })
            alert("The box has been successfully added!");
        }
    }

    render() { // Form to add boxes
        return (
            <div className="add-box-container">
                <h1>Add Box</h1>
                <form onSubmit={this.handleSubmit}>

                    <p className="field-title">Name :</p>
                    <input type="name" id="name" placeholder="Enter Reciever Name" onChange={this.handleChange}
                           value={this.state.name}/>
                    <p className="errorMsg">{this.state.nameError}</p>

                    <p className="field-title">Weight :</p>
                    <input type="name" id="weight" placeholder="Enter Weight (in kg)" onChange={this.handleChange}
                           value={this.state.weight}/>
                    <p className="errorMsg">{this.state.weightError}</p>

                    <p className="field-title">Box Color :</p>
                    <input type="color" id="color" onChange={this.handleChange} 
                    value={this.state.color}/>
                    <p className="errorMsg">{this.state.colorError}</p>

                    <p className="field-title">Country:</p>
                    <select name="country" id="country" onChange={this.handleChange} value={this.state.country}>
                        <option value="Sweden">Sweden</option>
                        <option value="China">China</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Australia">Australia</option>
                    </select>
                    <br/>
                    <button className="save-btn">Save</button>
                </form>
            </div>
        )
    }
}

var rgbToHex = function (rgb) // Helper method to turn each RGB value into Hex
{ 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) 
    {
         hex = "0" + hex;
    }
    return hex;
  };

  var fullColorHex = function(r,g,b) // Function to turn RGB values into Hex
  {   
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);

    return red+green+blue;
  };
export default connect()(addbox);  