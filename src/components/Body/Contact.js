import React, { Component } from 'react';
import { FormGroup, Button, Col, Label } from 'reactstrap';
import { Form, Control, Errors, actions } from 'react-redux-form';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
        resetFeedbackForm: () => {
            dispatch(actions.reset('feedback'))
        }
    }
}

const required = val => val && val.length;
const isNumber = val => !isNaN(Number(val));
const validEmail = val => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(val);

class Contact extends Component {

    handleSubmit = values => {
        console.log(values);
        this.props.resetFeedbackForm();
    }
    render() {
        document.title = "Contact";
        return (
            <div className="container">
                <div className="row row-content" style={{ paddingLeft: "20px", textAlign: "left" }}>
                    <div className="col-12">
                        <h3> Send us your feedback</h3>
                    </div>
                    <div className=" col-12 col-md-7" >
                        <Form model="feedback" onSubmit={values => this.handleSubmit(values)}>
                            <FormGroup row>
                                <Label htmlFor="firstname"
                                    md={2}> First Name</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".firstname"
                                        name="firstname"
                                        placeholder="Enter Your First Name"
                                        className="form-control"
                                        validators={
                                            { required }
                                        } />

                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={
                                            { required }
                                        } />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}> Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" name="lastname" placeholder="Enter Your Last Name"
                                        className="form-control"
                                        validators={
                                            { required }
                                        } />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={
                                            { required }
                                        } />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}> Contact tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" name="telnum" placeholder="Enter Your Telephone Number"
                                        className="form-control"
                                        validators={
                                            { required, isNumber }
                                        } />

                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required",
                                                isNumber: "Not a valid number"
                                            }
                                        } />

                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="email" md={2}> Email </Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".email"
                                        name="email"
                                        placeholder="Enter Your Email add. "
                                        className="form-control"
                                        validators={
                                            { required, validEmail }
                                        } />

                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required",
                                                validEmail: "not a valid email"
                                            }
                                        } />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Control.checkbox
                                                model=".agree" name="agree"
                                                className="form-check-input" />
                                            <strong> May we Contact you ?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>

                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select
                                        model=".contactType"
                                        name="contactType"
                                        className="form-control" >
                                        <option> Tel.</option>
                                        <option> Email </option>
                                    </Control.select>

                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="message" md={2}> Message </Label>
                                <Col md={10}>
                                    <Control.textarea
                                        model=".message"
                                        name="message"
                                        placeholder=" Your message"
                                        rows='12'
                                        className="form-control"
                                        validators={
                                            { required }
                                        } />

                                    <Errors
                                        className="text-danger"
                                        model=".textarea"
                                        show="touched"
                                        messages={
                                            { required }
                                        } />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col md={{ size: 110, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send FeedBack
                                    </Button>

                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        )

    }

}
export default connect(null, mapDispatchToProps)(Contact);