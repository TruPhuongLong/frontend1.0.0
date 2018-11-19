import React from 'react';
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css'
import { Image } from '../components/Image';
import { dispatchWithLoading } from '../../libs/funcHelp'
import { createProductAction } from '../../redux/actions/product.action'
import { Field } from '../components/core/field'
import AdminHeader from '../components/admin.header';

class CreateProduct extends React.Component {

    state = {
        fields: {
            name: '',
            price: '',
            unitPrice: '',
            content: '',
            files: [],
            imageUrls: []
        },
        fieldErrors: {}
    }

    resetState = () => {
        this.setState({
            fields: {
                name: '',
                price: '',
                unitPrice: '',
                content: '',
                files: [],
                imageUrls: []
            },
            fieldErrors: {}
        })
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

    onTextareaChange = (event) => {
        const value = event.target.value;
        this.setState((state) => ({
            fields: {
                ...state.fields,
                content: value
            }
        }))
    }

    onFileChange = (event) => {
        const file = event.target.files[0];
        this.previewImage(file);
        this.setState(state => ({
            fields: {
                ...state.fields,
                files: [...state.fields.files, file]
            }
        }))
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log('submit')
        const { name, price, unitPrice, content } = this.state.fields
        const model = { name, price, unitPrice, content }
        this.props.createProduct(model, this.state.fields.files)
            .then(_ => {
                this.resetState();
            })
    }

    previewImage(file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            this.setState(state => ({
                fields: {
                    ...state.fields,
                    imageUrls: [...state.fields.imageUrls, reader.result]
                }
            }))
        }
        reader.readAsDataURL(file)
    }

    _remove = (index) => {
        console.log(index);
        const { files, imageUrls } = this.state.fields;
        const _files = files.filter((_, _index) => _index !== index);
        const _imageUrls = imageUrls.filter((_, _index) => _index !== index);
        this.setState(state => ({
            fields: {
                ...state.fields,
                files: _files,
                imageUrls: _imageUrls,
            }
        }))
    }

    render() {
        const { name, price, unitPrice, content, files, imageUrls } = this.state.fields;
        return (
            <div className="admin-container">>
            <div className="container">

                    <AdminHeader title="Product post" />

                    <form className="form-horizontal" onSubmit={this.onSubmit}>

                        <div className="form-group">
                            <label htmlFor="product-name" className="col-sm-2">Name</label>
                            <div className="col-sm-10">
                                {/* <input
                                    id="product-name"
                                    className="form-control"
                                    ref={input => this.name = input}
                                /> */}
                                <Field type="text"
                                    placeholder="@name"
                                    className="form-control"
                                    name="name"
                                    value={name}
                                    onChange={this.onInputChanged}
                                    validates={[
                                        (val) => val.length > 0 ? null : 'name require'
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="product-price" className="col-sm-2">Price</label>
                            <div className="col-sm-10">
                                {/* <input
                                    className="form-control"
                                    id="product-price"
                                    ref={input => this.price = input}
                                /> */}
                                <Field type="text"
                                    placeholder="@price"
                                    className="form-control"
                                    name="price"
                                    value={price}
                                    onChange={this.onInputChanged}
                                    validates={[
                                        (val) => val.length > 0 ? null : 'price require'
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="product-unit-price" className="col-sm-2">Unit Price</label>
                            <div className="col-sm-10">
                                {/* <input
                                    className="form-control"
                                    id="product-unit-price"
                                    ref={input => this.unitPrice = input}
                                /> */}
                                <Field type="text"
                                    placeholder="@unit price"
                                    className="form-control"
                                    name="unitPrice"
                                    value={unitPrice}
                                    onChange={this.onInputChanged}
                                    validates={[
                                        (val) => val.length > 0 ? null : 'unit price require'
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="product-content" className="col-sm-2">Content</label>
                            <div className="col-sm-10">
                                <textarea
                                    className="form-control"
                                    id="product-content"
                                    rows="10"
                                    // ref={input => this.content = input}
                                    name="content"
                                    value={content}
                                    onChange={this.onTextareaChange}
                                />
                            </div>
                        </div>

                        <div className="form-group" style={{ textAlign: 'end' }}>
                            <div className="col-sm-10 col-sm-offset-2" style={{ textAlign: 'start' }}>
                                <div style={{ position: 'relative' }}>
                                    <button className="btn btn-success">get image from computer...</button>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="product-main-image"
                                        style={{ position: 'absolute', top: '0px', opacity: '0' }}
                                        onChange={this.onFileChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-group" style={{ textAlign: 'end' }}>

                            <div className="col-sm-offset-2 col-sm-10" style={{ textAlign: 'start' }}>
                                <div style={inline}>
                                    {
                                        imageUrls.map((url, index) => {
                                            return <Image src={url} index={index} key={index} remove={this._remove} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="form-group" style={{ textAlign: 'end' }}>
                            <div className="col-sm-offset-2 col-sm-10" style={{ textAlign: 'start' }}>
                                <button type="submit" className="btn btn-default">Submit</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

const inline = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    flexWrap: 'wrap',
}

// const mapStateToProps = (state) => {

// }

const mapDispatchToProps = (dispatch) => {
    return {
        createProduct: (model, files) => {
            return dispatchWithLoading(dispatch, createProductAction(model, files))
        }
    }
}

export default connect(null, mapDispatchToProps)(CreateProduct);