import React, {Component} from 'react';
import {connect} from 'react-redux';

class BoxList extends Component 
{
    shippingCost_Calc = (country, weight) => // Calculating shipping cost for each country using multiplier
    {
        var shippingCost;
        switch (country) 
        {
            case 'Sweden':
                shippingCost = (1.3 * weight);
                return shippingCost;
            case 'China':
                shippingCost = (4.0 * weight);
                return shippingCost;
            case 'Brazil':
                shippingCost = (8.6 * weight);
                return shippingCost;

            case 'Australia':
                shippingCost = (7.2 * weight);
                return shippingCost;
            default:
                break;
        }
    }

    render() // Rendering the list of boxes as a table
    {
        return (
            <div className="list-box-container"> 
                <h1>List boxes</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Receiver</th>
                            <th>Weight</th>
                            <th>Box colour</th>
                            <th>Country</th>
                            <th>Shipping cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.boxes.map((box) => 
                        {
                            return (
                                <tr key={box.id}>
                                    <td>{box.name}</td>
                                    <td>{box.weight} kilogram(s)</td>
                                    <td style={{backgroundColor: box.color}}></td>
                                    <td>{box.country}</td>
                                    <td>{this.shippingCost_Calc(box.country, box.weight)} SEK</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

            </div>
        )
    }
}


const mapStateToProps = (state) => ({boxes: state.boxes})

export default connect(mapStateToProps)(BoxList);