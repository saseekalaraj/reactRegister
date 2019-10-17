import React, { Fragment } from 'react';
import { Grid, Container, Segment } from 'semantic-ui-react';
import CrudForm from './CrudForm';


function App() {
  return (
    <Fragment>
      <Grid>
        <Grid.Column width={4} style={{background:'#232423'}}></Grid.Column>
        <Grid.Column width={8} style={{background:'#232423'}}>
          <Container >
            <Segment style={{top:15}}>
              <CrudForm />
            </Segment>
          </Container>
        </Grid.Column>
        <Grid.Column width={4} style={{background:'#232423'}}></Grid.Column>
      </Grid>
    </Fragment>

  );
}

export default App;
