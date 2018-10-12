import React from 'react'
import Company from './Company.js'

class ListCompanies extends React.Component{
  render (){
    const companies = [{
                        name: "Dunder Mifflin",
                        description: "This is a paper company"
                      },
                      {
                        name: "Paddy's Pub",
                        description: "This is a bar"
                      }]
    return(<div>
      {companies.map(company => <Company key={company.name} {...company} />) }
    </div>)
   }
}

export default ListCompanies