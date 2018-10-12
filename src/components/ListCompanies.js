import React from 'react'
import Company from './Company.js'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'


const COMPANY_QUERY = gql`{
                          allCompanies {
                            id,
                            name
                          }
                        }`
class ListCompanies extends React.Component{
  render (){

    return(<Query query={COMPANY_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>
        if (error) return <div>Error</div>

        const companies = data.allCompanies;

        return (
          <div>
            {companies.map(company => <Company key={company.name} {...company} />) }
          </div>
        )
      }}
    </Query>)
   }
}

export default ListCompanies