import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import AddKeg from './AddKeg';
import PropTypes from 'prop-types';

class NewKegControl extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   formVisibleOnPage: false
  };
  this.handleConfirmation = this.handleConfirmation.bind(this);
 }

 handleConfirmation(){
  this.setState({formVisibleOnPage: true});
 }

 render(){
  let currentlyVisibleContent = null;
  if (this.state.formVisibleOnPage){
   currentlyVisibleContent = <AddKeg onAddNewKeg={this.props.onAddNewKeg}/>;
  } else {
   currentlyVisibleContent = <ConfirmationQuestions onConfirmation={this.handleConfirmation}/>;
   console.log(this.state);
   //here's where we pass the prop onConfirmation into ConfirmationQuestions
  }
  return (
   <div>
    {currentlyVisibleContent}
   </div>
  );
 }
}

NewKegControl.propTypes = {
 onAddNewKeg: PropTypes.func
};

export default NewKegControl;
