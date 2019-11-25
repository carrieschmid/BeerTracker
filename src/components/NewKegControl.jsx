import React from 'react';

import AddKeg from './AddKeg';
import PropTypes from 'prop-types';

class NewKegControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          formVisibleOnPage: false
        };
      }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
        currentlyVisibleContent = <AddKeg onAddNewKeg={this.props.onAddNewKeg}/>;
      } else {
        currentlyVisibleContent = "Please enter."
      }
    return (
        {currentlyVisibleContent}
    );
  }
}

NewKegControl.propTypes = {
  onAddNewKeg: PropTypes.func
};

export default NewKegControl;