import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** Third Party Components
import { Row, Col, Alert } from 'reactstrap'

// ** Invoice Preview Components
import PreviewCard from './PreviewCard'
import PreviewActions from './PreviewActions'
// import SendInvoiceSidebar from '../shared-sidebar/SidebarSendInvoice'
// import AddPaymentSidebar from '../shared-sidebar/SidebarAddPayment'

// ** Styles
import '@styles/base/pages/app-invoice.scss'
import Action from "../../../middleware/API"

const InvoicePreview = () => {
  // ** Vars
  const { id } = useParams()

  // ** States
  const [data, setData] = useState([])
  const [sendSidebarOpen, setSendSidebarOpen] = useState(false)
  const [addPaymentOpen, setAddPaymentOpen] = useState(false)

  // ** Functions to toggle add & send sidebar
  const toggleSendSidebar = () => setSendSidebarOpen(!sendSidebarOpen)
  const toggleAddSidebar = () => setAddPaymentOpen(!addPaymentOpen)

  // ** Get invoice on mount based on id
  useEffect(async () => {
    const res = await Action.get(`/booking?_id=${ id }`, {})
    if (res.data.success === true) {
      setData(false)
    } else {

    }

  }, [])

  return data ? (
    <div className='invoice-preview-wrapper'>
      <Row className='invoice-preview'>
        <Col xl={ 12 } md={ 12 } sm={ 12 }>
          <PreviewCard data={ data } />
        </Col>
        {/* <Col xl={3} md={4} sm={12}>
          <PreviewActions id={id} setSendSidebarOpen={setSendSidebarOpen} setAddPaymentOpen={setAddPaymentOpen} />
        </Col> */}
      </Row>
      {/* <SendInvoiceSidebar toggleSidebar={toggleSendSidebar} open={sendSidebarOpen} />
      <AddPaymentSidebar toggleSidebar={toggleAddSidebar} open={addPaymentOpen} /> */}
    </div>
  ) : (
    <div className='invoice-preview-wrapper'>
      <Row className='invoice-preview'>
        <Col xl={ 12 } md={ 12 } sm={ 12 }>
          <PreviewCard data={ data } />
        </Col>
        {/* <Col xl={3} md={4} sm={12}>
          <PreviewActions id={id} setSendSidebarOpen={setSendSidebarOpen} setAddPaymentOpen={setAddPaymentOpen} />
        </Col> */}
      </Row>
      {/* <SendInvoiceSidebar toggleSidebar={toggleSendSidebar} open={sendSidebarOpen} />
      <AddPaymentSidebar toggleSidebar={toggleAddSidebar} open={addPaymentOpen} /> */}
    </div>
  )
}

export default InvoicePreview
