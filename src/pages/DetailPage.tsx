import React from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import Page from '../components/Page'
import View from '../components/View'
import { getSingleInvoice } from '../data/dummyData'

const DetailPage = (): JSX.Element => {
  const params = useParams()
  const invoice = getSingleInvoice(parseInt(params.id, 10))

  return (
    <Page>
      <View margin="20px 5px">Detail Page</View>
      <Card>Name: {invoice.name}</Card>
      <Card>Amount: {invoice.amount}</Card>
      <Card>Number: {invoice.number}</Card>
      <Card>Due: {invoice.due}</Card>
    </Page>
  )
}

export default DetailPage
