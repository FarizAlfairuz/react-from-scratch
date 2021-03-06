interface DataObject {
  id: string
  name: string
  number: number
  amount: string
  due: string
}

const invoices = [
  {
    id: '1',
    name: 'Santa Monica',
    number: 1995,
    amount: '$10,800',
    due: '12/05/1995',
  },
  {
    id: '2',
    name: 'Stankonia',
    number: 2000,
    amount: '$8,000',
    due: '10/31/2000',
  },
  {
    id: '3',
    name: 'Ocean Avenue',
    number: 2003,
    amount: '$9,500',
    due: '07/22/2003',
  },
  {
    id: '4',
    name: 'Tubthumper',
    number: 1997,
    amount: '$14,000',
    due: '09/01/1997',
  },
  {
    id: '5',
    name: 'Wide Open Spaces',
    number: 1998,
    amount: '$4,600',
    due: '01/27/1998',
  },
]

export const getInvoices = (): DataObject[] => {
  return invoices
}

export const getSingleInvoice = (id: string): DataObject => {
  return invoices.find((invoice) => (invoice.id as string) === id) as DataObject
}
