import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
class Launch extends Component {
  constructor(props){
    super(props);
    this.state={
      launches:[]
    }
    this.options={
      defaultSortName: 'success_rate_pct',
      defaultSortOrder: 'asc'
    }
  }
  /*componentDidMount()*/
  componentWillMount(){
    fetch('https://api.spacexdata.com/v2/launches/all')
    .then( response => response.json())
    .then( (results) => {
      this.setState({launches:results});
  }
  )
  }

  render() {
    let items=this.state.launches
    return (
    <div>
    <div><br/></div>
    <div className="bg-info clearfix" style={{ padding: '.15rem' }}>
     <p className="text-black">SpaceX Launches Information</p>
    </div>
    <div><br/></div>
    <BootstrapTable data={items} striped>
       <TableHeaderColumn isKey dataField='flight_number' dataSort={true}>Flight#</TableHeaderColumn>
       <TableHeaderColumn dataField='launch_year' dataSort filter={ { type: 'TextFilter', delay: 1000 } } >Launch Year</TableHeaderColumn>
       <TableHeaderColumn dataField='launch_date_unix'>Launch Date Unix</TableHeaderColumn>
       <TableHeaderColumn dataField='launch_date_utc' >Launch Date UTC</TableHeaderColumn>
       <TableHeaderColumn dataField='launch_date_local'>Launch Date Local</TableHeaderColumn>
   </BootstrapTable>
   </div>
  );
  }
  }

export default Launch;
