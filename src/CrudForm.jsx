import React, { Component, Fragment } from 'react'
import { Segment, Form, Input, Label, Header, Icon, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { createRegister } from './registerAction';
import { message } from 'antd'
import 'antd/dist/antd.css'

const mapStateToProps = (state) => ({
    data: state.data
})
const mapDispathToProps = {
    createRegister
}
class CrudForm extends Component {
    state = {
        fullName: '',
        nicNumber: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        status: false
    }
    handleChange = (event) => {
        if (event.target.name === 'confirmPassword') {
            if (this.handleConfirmPassword(event.target.value)) {
                this.setState({
                    status: true
                })
                message.success('Password Match')
            } else {
                this.setState({
                    status: false
                })
                message.error('Password Not Match')
            }
        }
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    hadleSubmit = (e) => {
        e.preventDefault()
        if (this.state.status) {
            const data = [
                { fullName: this.state.fullName, nicNumber: this.state.nicNumber, email: this.state.email, username: this.state.username, password: this.state.password }
            ]
            this.props.createRegister(data)
            message.success('Registered Successfully')
            window.location.reload()
            return true
        } else {
            return false
        }
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
        return (
            <Fragment>
                <Segment color='blue' textAlign='center' >
                    <Header icon><Icon name='user' />Registation Form</Header>
                </Segment>
                <Segment color='blue'>
                    <Form onSubmit={this.hadleSubmit}>
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
export default connect(mapStateToProps, mapDispathToProps)(CrudForm)
