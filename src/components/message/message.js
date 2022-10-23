
import React from "react";
import Modal from "../../shared/modal";
import Appbutton from "../../shared/button";
import "./message.css"

export default class Message extends React.Component {
  constructor(props) {
    super(props);    
  }
  render() {   
    return (      
      <Modal>
        <div className="messsage-container">
          <div className="messsage-box">
            <Appbutton
              onClick ={() => {this.props.handleHide()}}                 
              className = {'close'}
            ></Appbutton>            
            <h2 className='message-text'>
                Operation completed successfully        
            </h2>          
          </div>
        </div>
      </Modal>
    );
  }
}

