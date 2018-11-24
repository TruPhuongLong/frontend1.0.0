import React from 'react';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css'
import { Image } from '../components/Image';
import { dispatchWithLoading } from '../../libs/funcHelp'
import { editProductAction } from '../../redux/actions/product.action'
import { Field } from '../components/core/field'
import AdminHeader from '../components/admin.header';


class AdminEditProduct extends React.Component {

    constructor(props) {
        super(props)
        const { name, price, unitPrice, content } = props.current
        const imageUrlsFromServer = props.current.imageUrls;
        this.state = {
            fields: {
                name: name,
                price: '' + price,
                unitPrice: unitPrice,
                content: content,
                files: [],
                imageUrls: [],
                imageUrlsFromServer: imageUrlsFromServer || []
            },
            fieldErrors: {}
        }
    }

    // componentDidMount(){
    //     console.log('=== componentDidMount', this.state.fieldErrors)
    // }

    resetState = () => {
        const { name, price, unitPrice, content } = this.props.current
        const imageUrlsFromServer = this.props.current.imageUrls || [];
        this.setState({
            fields: {
                name: name,
                price: '' + price,
                unitPrice: unitPrice,
                content: content,
                files: [],
                imageUrls: [],
                imageUrlsFromServer: imageUrlsFromServer || []
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
        // console.log('submit')
        const { name, price, unitPrice, content } = this.state.fields
        const imageUrls = this.state.fields.imageUrlsFromServer
        console.log(imageUrls)
        const model = { name, price, unitPrice, content, imageUrls }
        this.props.editProduct(this.props.current._id, model, this.state.fields.files)
            .then(_ => {
                this.resetState();
                this.props.history.push('/admin/products')
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

    _removeImageUrlsFromServer = (index) => {
        console.log(index);
        const { imageUrlsFromServer } = this.state.fields;
        const _imageUrlsFromServer = imageUrlsFromServer.filter((_, _index) => _index !== index);
        this.setState(state => ({
            fields: {
                ...state.fields,
                imageUrlsFromServer: _imageUrlsFromServer,
            }
        }))
    }

    render() {
        const { name, price, unitPrice, content, files, imageUrls, imageUrlsFromServer } = this.state.fields;
        const {fieldErrors} = this.state;
        return (
            <div className="admin-container">>
            <div className="container">

                    <AdminHeader title="Product Edit" />

                    <form className="form-horizontal" onSubmit={this.onSubmit}>

                        <div className="form-group">
                            <label htmlFor="product-name" className="col-sm-2">Name</label>
                            <div className="col-sm-10">
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
                                        imageUrlsFromServer.map((url, index) => {
                                            return <Image src={url} index={index} key={'1...' + index} remove={() => this._removeImageUrlsFromServer(index)} />
                                        })
                                    }
                                    {
                                        imageUrls.map((url, index) => {
                                            return <Image src={url} index={index} key={'2...' + index} remove={() => this._remove(index)} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="form-group" style={{ textAlign: 'end' }}>
                            <div className="col-sm-offset-2 col-sm-10" style={{ textAlign: 'start' }}>
                                <button type="submit" className="btn btn-success" disabled={Object.keys(fieldErrors).length}>Submit</button>
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

const mapStateToProps = (state) => {
    const { list, current } = state.productState
    return { list, current }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editProduct: (productId, model, files) => {
            return dispatchWithLoading(dispatch, editProductAction(productId, model, files))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminEditProduct));