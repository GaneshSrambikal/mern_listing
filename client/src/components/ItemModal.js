import React from "react";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";
import uuid from "uuid";

class ItemModal extends React.Component {
  state = {
    modal: false,
    name: ""
  };
  toogle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: this.state.name
    };
    this.props.addItem(newItem);

    this.toogle();
  };

  render() {
    return (
      <div>
        <Button
          color="success"
          style={{ marginBottom: "2rem" }}
          onClick={this.toogle}
        >
          Add Item
        </Button>

        <Modal isOpen={this.state.modal} toogle={this.toogle}>
          <ModalHeader toogle={this.toogle}>Add to List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  onChange={this.onChange}
                />
                <Button color="success" style={{ marginTop: "2rem" }} block>
                  add
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});
export default connect(mapStateToProps, { addItem })(ItemModal);
