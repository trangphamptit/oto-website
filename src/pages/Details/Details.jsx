import React, { Component } from 'react';
import LinkToDetails from '../../components/LinkToDetails';
import Grid from '@material-ui/core/Grid';
import SimpleTable from '../../components/Table';
// import { AppContext } from '../../services/AppContext';
import './Details.scss';
import product from '../../img/product.jpg';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import axios from 'axios';
import { AppContext } from '../../services/AppContext';
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            details: {},
        };
    }
    async componentDidMount() {
        try {
            const { data } = await axios.get(
                `https://phutungotoapi.glitch.me/products/${this.state.id}`
            );
            this.setState({ details: data });
        } catch (err) {
            console.log(err);
        }
    }

    // const { increment, decrement } = useContext(AppContext);
    render() {
        const {
            _id,
            categoryID,
            brandID,
            name,
            description,
            price,
            image,
            quantity,
            discountAmount,
        } = this.state.details;

        const { addToCart, increment, decrement } = this.context;
        if (_id) {
            return (
                <React.Fragment>
                    <LinkToDetails productName={'name'} />
                    <br />
                    {/* <AppContext /> */}
                    <Grid container justify="center" spacing={2}>
                        <Grid item xs={5}>
                            <img
                                className="details-img"
                                src={image}
                                alt="product"
                            />
                        </Grid>
                        <Grid item xs={7}>
                            <h2>{name}</h2>
                            <span className="brand">
                                Thương hiệu: {brandID.name}
                            </span>
                            <div className="product-price">
                                <span className="price">
                                    {discountAmount} d
                                </span>
                                <span className="prev-price">{price}d</span>
                            </div>
                            <p className="description">{description}</p>

                            <Button
                                onClick={() => addToCart(this.state.details)}
                            >
                                add to cart
                            </Button>
                        </Grid>
                    </Grid>
                </React.Fragment>
            );
        } else {
            return <h1>Không tìm thấy sản phẩm</h1>;
        }
    }
}
Details.contextType = AppContext;
export default Details;
