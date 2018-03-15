import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Table } from 'reactstrap';
class AboutSpaceX extends Component {

  constructor(props){
    super(props);
    this.state={
      items:[],
      address:[],
      isLoading:false}
  }
  /*componentDidMount()*/
  componentWillMount(){
    this.setState({isLoading:true});
    fetch('https://api.spacexdata.com/v2/info')
    .then( response => response.json())
    .then( (results) => {
      this.setState({items:results});
      this.setState({address:results.headquarters});
  }
  )
  }
  render() {
    let jsonResult = this.state.items;
    let jsonAddress= this.state.address;
    if (!jsonResult)
      return <p> No Result from the API call found! </p>
    return (
      <div className="App">
      <div className="bg-info clearfix" style={{ padding: '.515rem' }}>
       <p className="text-black">Welcome to SpaceX, Here is some infromation about SpaceX</p>
      </div>
      <Table striped size="sm">

       <thead>
       </thead>
       <tbody>
         <tr>
           <td>Company Name</td>
           <td>{jsonResult.name}</td>
         </tr>
         <tr>
           <td>Founder</td>
           <td>{jsonResult.founder}</td>
         </tr>

         <tr>
           <td>Founded</td>
           <td>{jsonResult.founded}</td>
         </tr>

         <tr>
           <td>Employees</td>
           <td>{jsonResult.employees}</td>
         </tr>

         <tr>
           <td>Vehicles</td>
           <td>{jsonResult.vehicles}</td>
         </tr>

         <tr>
           <td>Launch Sites</td>
           <td>{jsonResult.launch_sites}</td>
         </tr>

         <tr>
           <td>Test Sites</td>
           <td>{jsonResult.test_sites}</td>
         </tr>

         <tr>
           <td>CEO</td>
           <td>{jsonResult.ceo}</td>
         </tr>

         <tr>
           <td>CTO</td>
           <td>{jsonResult.cto}</td>
         </tr>

         <tr>
           <td>COO</td>
           <td>{jsonResult.coo}</td>
         </tr>

         <tr>
           <td>CTO Propulsion</td>
           <td>{jsonResult.cto_propulsion}</td>
         </tr>

         <tr>
           <td>valuation</td>
           <td>{jsonResult.valuation}</td>
         </tr>

         <tr>
           <td>Headquarters</td>
          <td>{jsonAddress.address}, {jsonAddress.city}, {jsonAddress.state}</td>
         </tr>

         <tr>
           <td>Summary</td>
           <td>{jsonResult.summary}</td>
         </tr>
       </tbody>
     </Table>

      </div>
    );
  }
}

export default AboutSpaceX;
