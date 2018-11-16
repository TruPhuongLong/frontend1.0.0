import React from 'react';
import { isEmail } from 'validator';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Field } from './core/field';

export class LoginForm extends React.Component {

    state = {
        fields: {
            email: '',
            password: '',
        },
        fieldErrors: {}
    }

    onInputChanged = ({ name, value, errors }) => {
        const { fields, fieldErrors } = this.state;
        fields[name] = value;
        if (errors) {
            fieldErrors[name] = errors;
        } else {
            delete fieldErrors[name];
        }
        this.setState({ fields, fieldErrors })
    }

    styles = {
        leftCol: {
            verticalAlign: 'top',
        }
    }

    render() {
        const { email, password } = this.state.fields;
        const { fieldErrors } = this.state;
        const { onSubmit } = this.props;
        return (
            <form className="form-horizontal" onSubmit={onSubmit}>

                <div className="form-group" >
                    <div className="col-sm-2" style={this.styles.leftCol}>
                        <label> Email: </label>
                    </div>
                    <div className="col-sm-10">
                        <Field type="email"
                            placeholder="@email"
                            className="form-control"
                            name="email"
                            value={email}
                            onChange={this.onInputChanged}
                            validates={[
                                (val) => isEmail(val) ? null : 'email invalid'
                            ]}
                        />
                    </div>
                </div>

                <div className="form-group" >
                    <div className="col-sm-2" style={this.styles.leftCol}>
                        <label> Password: </label>
                    </div>
                    <div className="col-sm-10" >
                        <Field type="password"
                            placeholder="@password"
                            className="form-control"
                            name="password"
                            value={password}
                            onChange={this.onInputChanged}
                            validates={[
                                (val) => val.length >= 6 ? null : 'password must atleast 6 character'
                            ]}
                        />
                    </div>
                </div>

                <div className="form-group" >
                    <div className="col-sm-2"></div>
                    <div className="col-sm-10" style={{ textAlign: 'left' }}>
                        <button type="submit" className="btn btn-primary" disabled={Object.keys(fieldErrors).length}>Login</button>
                    </div>
                </div>

            </form>
        )
    }
}
