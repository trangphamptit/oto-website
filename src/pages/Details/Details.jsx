import React, { Component } from 'react';
import LinkToDetails from '../../components/LinkToDetails';
import Grid from '@material-ui/core/Grid';
import SimpleTable from '../../components/Table';
import AppContext from '../../services/AppContext';
import './Details.scss';
class Details extends Component {
  render() {
    return (
      <React.Fragment>
        <LinkToDetails />
        <br />
        <AppContext />
        <Grid container justify="center" spacing={2}>
          <Grid item xs={5}>
            hhihihi
          </Grid>
          <Grid item xs={7}>
            <h2>Acquiera mas</h2>
            <span className="brand">Thương hiệu: EOM</span>
            <div className="product-price">
              <span className="price">100.000 d</span>
              <span className="prev-price">150.000 d</span>
            </div>
            <p className="description">
              En el valle, la vivienda en la vigilancia específica, el reemplazo
              o la consolidación de la cama, un hombre obsesionado con la
              reducción de opciones de apuestas ilegales. Wow, mercado muy
              atractivo, de mis visitantes. Tiempo de desarrollo reciente para
              odiar, un bar beef tiempo.
            </p>
            <div className="d-flex ">
              <button
                className="btn btn-dark mx-1"
                // onClick={() => value.decrement(item)}
                // disabled={item.quantity === 1}
              >
                -
              </button>
              <button className="btn btn-dark mx-1">
                {/* {item.quantity} */}1
              </button>
              <button
                className="btn btn-dark mx-1"
                // onClick={() => value.increment(item)}
              >
                +
              </button>
            </div>
          </Grid>
        </Grid>
        <h2>Thông tin chi tiết</h2>
        <SimpleTable />
      </React.Fragment>
    );
  }
}

export default Details;
