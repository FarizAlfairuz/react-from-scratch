import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Page from '../components/Page'
import View from '../components/View'
import { getInvoices } from '../data/dummyData'

const HomePage = (): JSX.Element => {
  const invoices = getInvoices()
  return (
    <Page>
      <View margin="20px 5px">Home Page</View>
      {invoices.map((invoice) => (
        <Link
          key={invoice.id}
          to={`/${invoice.id}`}
          style={{ textDecoration: 'none' }}
        >
          <Card>
            <View>
              <View padding="5px 0px">{invoice.name}</View>
              <View padding="5px 0px">{invoice.due}</View>
            </View>
          </Card>
        </Link>
      ))}
    </Page>
  )
}

export default HomePage
