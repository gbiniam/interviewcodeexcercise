import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
class Rocket extends Component {
  constructor(props){
    super(props);
    this.state={
      rockets:[]
    }
    this.options={
      defaultSortName: 'success_rate_pct',
      defaultSortOrder: 'asc'
    }
  }
  /*componentDidMount()*/
  componentWillMount(){
    fetch('https://api.spacexdata.com/v2/rockets')
    .then( response => response.json())
    .then( (results) => {
      this.setState({rockets:results});
  }
  )
  }

  render() {
    let items=this.state.rockets
    return (
    <div>
    <div><br/></div>
    <div className="bg-info clearfix" style={{ padding: '.15rem' }}>
     <p className="text-black">SpaceX Rocets Information</p>
    </div>
    <div><br/></div>
    <BootstrapTable data={items} striped>
       <TableHeaderColumn isKey dataField='id'>ID</TableHeaderColumn>
       <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
       <TableHeaderColumn dataField='type'>Type</TableHeaderColumn>
       <TableHeaderColumn dataField='active' >Active</TableHeaderColumn>
       <TableHeaderColumn dataField='stages'>Stages</TableHeaderColumn>
       <TableHeaderColumn dataField='boosters'>Boosters</TableHeaderColumn>
       <TableHeaderColumn dataField='cost_per_launch'>Cost/Launch</TableHeaderColumn>
       <TableHeaderColumn dataField='success_rate_pct'>S.Rate</TableHeaderColumn>
       <TableHeaderColumn dataField='first_flight'>First Flight</TableHeaderColumn>
       <TableHeaderColumn dataField='country'>Country</TableHeaderColumn>
       <TableHeaderColumn dataField='company'>Company</TableHeaderColumn>
   </BootstrapTable>
   </div>
 );
  }
}

export default Rocket;
