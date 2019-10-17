import React, { Component, Fragment } from 'react'
import { Segment, Form, Input, Label, Header, Icon, Button } from 'semantic-ui-react'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    data: state.register.data
})
class CrudForm extends Component {
    state = {
        fullName: '',
        nicNumber: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    }
    handleChange = (event) => {
        if (event.target.name === 'confirmPassword') {
            if (this.handleConfirmPassword(event.target.value)) {

            }
        }
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleConfirmPassword = (value) => {
        if (this.state.password !== value) {
            return false
        } else {
            return true
        }
    }
    render() {
        const { fullName, nicNumber, email, username, password, confirmPassword } = this.state
        const {data} = this.props
        return (
            <Fragment>
                <Segment color='blue' textAlign='center' >
                    <Header icon><Icon name='user' />Registation Form</Header>
                </Segment>
                <Segment color='blue'>
                    <Form>
                        <Form.Field>
                            <Label color='blue' ribbon='left' style={{ bottom: 10 }}>Full Name</Label>
                            <Input placeholder="Enter Full Name" name='fullName' type='text' onChange={this.handleChange} value={fullName} />
                        </Form.Field>
                        <Form.Field>
                            <Label color='blue' ribbon='left' style={{ bottom: 10 }}>Nic Number</Label>
                            <Input placeholder="Enter Nic Number" name='nicNumber' type='text' onChange={this.handleChange} value={nicNumber} />
                        </Form.Field>
                        <Form.Field>
                            <Label color='blue' ribbon='left' style={{ bottom: 10 }}>Email</Label>
                            <Input placeholder="Enter Email Address" name='email' type='email' onChange={this.handleChange} value={email} />
                        </Form.Field>
                        <Form.Field>
                            <Label color='blue' ribbon='left' style={{ bottom: 10 }}>Username</Label>
                            <Input placeholder="Enter Username" name='username' type='text' onChange={this.handleChange} value={username} />
                        </Form.Field>
                        <Form.Field>
                            <Label color='blue' ribbon='left' style={{ bottom: 10 }}>Password</Label>
                            <Input placeholder="Enter Password" name='password' type='password' onChange={this.handleChange} value={password} />
                        </Form.Field>
                        <Form.Field>
                            <Label color='blue' ribbon='left' style={{ bottom: 10 }}>Confirm Password</Label>
                            <Input placeholder="ReEnter Password" name='confirmPassword' type='password' onChange={this.handleChange} value={confirmPassword} />
                        </Form.Field>
                        <Segment textAlign='center' color='blue'>
                            <Form.Checkbox label='I agree to the Terms and Conditions' />
                            <Button primary type="submit">
                                Submit
                        </Button>
                            <Button negative type="reset">
                                Cancel
                        </Button><br /><br />
                            <Label>I Have Already Account <Label as='a' tag color='blue'>Login</Label></Label>
                        </Segment>
                    </Form>
                </Segment>
            </Fragment>
        )
    }
}
export default connect(mapStateToProps)(CrudForm)
