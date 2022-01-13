import React from 'react'
import { useSelector } from 'react-redux'
import { CippPageList } from 'src/components'
import { cellBooleanFormatter, cellDateFormatter } from '../../../components/cipp'

//TODO: Add CellBoolean
const columns = [
  {
    selector: (row) => row['Name'],
    name: 'Name',
    sortable: true,
    exportSelector: 'Name',
  },
  {
    selector: (row) => row['PhishThresholdLevel'],
    name: 'Phish Threshold Level',
    sortable: true,
    exportSelector: 'PhishThresholdLevel',
  },
  {
    selector: (row) => row['Enabled'],
    name: 'Enabled',
    sortable: true,
    cell: cellBooleanFormatter(),
    exportSelector: 'Enabled',
  },
  {
    selector: (row) => row['ExcludedSenders'],
    name: 'Excluded Senders',
    sortable: true,
    cell: cellBooleanFormatter(),
    exportSelector: 'ExcludedSenders',
  },
  {
    selector: (row) => row['ExcludedDomains'],
    name: 'Excluded Domains',
    sortable: true,
    cell: cellBooleanFormatter(),
    exportSelector: 'ExcludedDomains',
  },
  {
    selector: (row) => row['WhenChangedUTC'],
    name: 'Last Change Date',
    sortable: true,
    cell: cellDateFormatter(),
    exportSelector: 'WhenChangedUTC',
  },
  {
    selector: (row) => row['Priority'],
    name: 'Priority',
    sortable: true,
    exportSelector: 'Priority',
  },
]

const MailboxList = () => {
  const tenant = useSelector((state) => state.app.currentTenant)

  return (
    <CippPageList
      title="Phishing Policies"
      datatable={{
        keyField: 'id',
        reportName: `${tenant?.defaultDomainName}-PhishingPolicies-List`,
        path: '/api/ListPhishPolicies',
        columns,
        params: { TenantFilter: tenant?.defaultDomainName },
      }}
    />
  )
}

export default MailboxList
