import React, {Component} from 'react';
import Auxi from '../../../hoc/Auxi/Auxi';
import Button from '../../UI/Button/Button';

class OrderSummary  extends Component{

    // this  could be  a functional  component
    componentDidUpdate(){
        console.log("order summary will update");
    }

    render(){

        const ingredientsummary = Object.keys( this.props.ingredients ).map( (igKey)=>{
            return ( 
                <li key={igKey}> 
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: { this.props.ingredients[igKey] } 
                </li>
            );    
        });

        return(
            <Auxi>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredient:</p>
                <ul>
                    {ingredientsummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout ?</p>
                <Button clicked={this.props.purchaseCancelled} btnType="Danger">CANCEL</Button>
                <Button clicked={this.props.purchaseContinued} btnType="Success">CONTINUE</Button>
            </Auxi>
        );
    }
}

export default OrderSummary;