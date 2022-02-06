// ** React Imports
import { Link } from 'react-router-dom'
import { AiOutlineCloudDownload, AiOutlineDelete } from 'react-icons/ai'
import avatar1 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import Pagination from './pagination'

// ** Third Party Components
import { Eye } from 'react-feather'
import { UncontrolledTooltip, Label, Input, Table, Row, Col, Card } from 'reactstrap'

// ** Styles
import '@styles/react/apps/app-invoice.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import CardBody from 'reactstrap/lib/CardBody'

import { useState, useEffect } from 'react'
import Action from '../../middleware/API'
import baseURL from '../../middleware/BaseURL'
import { toast } from 'react-toastify'

const orderTable = ({ handleFilter, value, handleStatusValue, statusValue, handlePerPage, rowsPerPage }) => {
  const [allOrders, setAllOrders] = useState([])
  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    //using promise 
    const GetOrders = async () => {
      try {
        const { data } = await Action.get('/order')
        setAllOrders(data.data)
      } catch (error) {
        console.log(error)
      }
    }
    GetOrders()
  }, [])

  useEffect(() => {
    //using promise 
    const GetProducts = async () => {
      try {
        const { data } = await Action.get('/product')
        console.log(data.data)
      } catch (error) {
        console.log(error)
      }
    }
    GetProducts()
  }, [])

  return (
    <Card>
      <CardBody>
        <div className='invoice-list-table-header w-100 p-1'>
          <Row>

            <Col
              lg='6'
              className='actions-right d-flex flex-lg-nowrap mb-2 flex-wrap mt-lg-0 mt-1 pr-lg-1 p-0'>
              <div className='d-flex align-items-center'>
                <Label for='search-invoice'>Search</Label>
                <Input
                  id='search-invoice'
                  className='ml-50 mr-2 w-100'
                  type='text'
                  value={ value }
                  onChange={ e => handleFilter(e.target.value) }
                  placeholder='Search Invoice'
                />
              </div>
            </Col>
          </Row>
          <Table responsive>
            <thead>
              <tr>
                <th>ORDER ID</th>
                <th>CUSTOMER</th>
                <th>PRODUCT NAME</th>
                <th>QUANTITY</th>
                <th>AMOUNT</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {
                allOrders.map((data, i) => {
                  console.log(Action.get("/product?_id=${id}", {})[0])
                  return (

                    <tr className='p-3'>
                      <td>
                        <Link to={ `/orders/preview/${ data._id }` }>{ data._id }</Link>
                      </td>
                      <td>
                        <div className='d-flex justify-content-left align-items-center'>
                          <img src={ avatar1 } width='35' className='mr-50 rounded-circle' height='35' alt="" />
                          <div className='d-flex flex-column'>
                            <h6 className='user-name text-truncate mb-0'>{ data.name }</h6>
                            <small className='text-truncate text-muted mb-0'>{ data.email }</small>
                          </div>
                        </div>
                      </td>

                      <td>{ data.product }</td>
                      <td> { data.quantity } </td>
                      <td>$555</td>
                      <td>
                        <div className='column-action d-flex align-items-center'>
                          <AiOutlineCloudDownload size={ 19 } id={ `send-tooltip-5036` } />
                          <UncontrolledTooltip placement='top' target={ `send-tooltip-5036` }>
                            Download
                          </UncontrolledTooltip>
                          <Link to={ `/orders/preview/5036` } className="text-dark" id={ `pw-tooltip-5036` }>
                            <Eye size={ 19 } className='mx-1' />
                          </Link>
                          <UncontrolledTooltip placement='top' target={ `pw-tooltip-5036` }>
                            Preview Invoice
                          </UncontrolledTooltip>
                          <AiOutlineDelete size={ 19 } className='' id="row-id" />
                          <UncontrolledTooltip placement='top' target="row-id">
                            Delete
                          </UncontrolledTooltip>

                        </div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
          <Pagination />
        </div>
      </CardBody>
    </Card>
  )
}

export default orderTable
