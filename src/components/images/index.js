import React from 'react';
import unsplash from '../api/unsplash'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

class ImagesComponent extends React.Component{
  constructor(){
    super()
    this.state={
      listaImagenes:[]
    }
    this.search = this.search.bind(this);
  }

    async search (){
      const response = await unsplash.get('search/photos', {
        params:{
          query: 'oso',
          orientation: 'portrait'
        }
      })
      this.setState({listaImagenes: response.data.results})
      console.log('SEARCH this.state.listaImagenes: ', this.state.listaImagenes);
    }
    render(){
      const {imagesFormApi} = this.state.listaImagenes;
      return (
        <div class="container">
          imagesFprmApi: {imagesFormApi}
          {
            this.state.listaImagenes &&
            this.state.listaImagenes.map(apiImages => (
            

              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={apiImages.urls.small} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                  {apiImages.alt_description}
                  </Card.Text>
                  <Button variant="primary">Detalles</Button>
                </Card.Body>
              </Card>
            ))
          }
          <Button variant="primary">Primary</Button>{' '}
        </div>
      )
    }
    componentDidMount(){
      this.search();
      console.log('componentDidMount this.state.listaImagenes: ', this.state.listaImagenes);
    }
  }

export default ImagesComponent;