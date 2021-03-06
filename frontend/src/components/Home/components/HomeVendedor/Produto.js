import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import moment from 'moment';
import 'moment/min/locales.min';
import numeral from 'numeral';
import 'numeral/locales';
import Typography from '@material-ui/core/Typography';
import { CardHeader, Avatar, Grid } from '@material-ui/core';
import ProdutoDetalhes from './ProdutoDetalhes';

const styles = theme => ({
  root: {
    width: 345,
    margin: theme.spacing(1)
  },
  media: {
    height: 140,
  },
  avatarMedia: {
    height: 140,
    width: 140
  }
});

numeral.register('locale', 'BRASIL', {
  delimiters: {
      thousands: ',',
      decimal: '.'
  },
  abbreviations: {
      thousand: 'K',
      million: 'MI',
      billion: 'BI',
      trillion: 'TRI'
  },
  currency: {
      symbol: 'R$'
  }
});
numeral.locale('BRASIL');
class Produto extends Component {
  state = {
    detalhesOpen: false,
  }

  handleDetail = () => {
    this.setState({ detalhesOpen: !this.state.detalhesOpen });
  }

  render() {
    const { classes, produto } = this.props;

    return (
      <>
        <Card className={classes.root} onClick={this.handleDetail}>
          <CardActionArea>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar} src={produto.imagem || "https://www.lucastavares.net/wp/wp-content/themes/ctheme/assets/img/img-default.jpg"} />
              }
              title={produto.nome}
              subheader={moment(produto.createdAt).locale('pt-br').format("dddd, MMMM Do YYYY")}
            />
            <CardMedia className={classes.media}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Avatar aria-label="recipe" className={classes.avatarMedia} src={produto.imagem || "https://www.lucastavares.net/wp/wp-content/themes/ctheme/assets/img/img-default.jpg"} />
              </Grid>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {numeral(produto.valor).format('$0,0.00')}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {produto.descricao}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <ProdutoDetalhes
          produto={produto}
          open={this.state.detalhesOpen}
          handleDetail={this.handleDetail}
          vendedorNome={localStorage.getItem('nome')}
        />
      </>
    );
  }
}

export default withStyles(styles)(Produto);
