import { useState, useEffect } from 'react'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'
import '../../@core/scss/react/libs/file-uploader/file-uploader.scss'
import 'uppy/dist/uppy.css'
import { MoreVertical, Edit, Trash } from 'react-feather'
import Action from '../../middleware/API'
import baseURL from '../../middleware/BaseURL'
//import toast types from components 
import { SuccessToast, ErrorToast } from '../components/toastify'
//import toasts from react
import { toast } from 'react-toastify'

import { Card, Spinner, Form, Row, Col, CardTitle, CardBody, Table, Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from 'reactstrap'


const DesktopBanner = () => {
  const [modal, setModal] = useState(null)
  const [modal2, setModal2] = useState(null)
  const [modal3, setModal3] = useState(null)
  const [banners, setBanners] = useState([])
  const [preview, setPreview] = useState([])


  useEffect(() => {
    const getBanners = async () => {
      const { data } = await Action.get(`/banner`)
      setBanners(data.data)
      console.log(data)
    }
    getBanners()
  }, [])

  const toggleModalDanger = id => {
    if (modal !== id) {
      setModal(id)
    } else {
      setModal(null)
    }
  }
  const toggleModalPrimary = id => {
    if (modal2 !== id) {
      setModal2(id)
    } else {
      setModal2(null)
    }
  }
  const toggleAddNew = id => {
    if (modal3 !== id) {
      setModal3(id)
    } else {
      setModal3(null)
    }
  }
  //file uploader
  const [uploadImg, setUploadImg] = useState(null)
  const [editImg, setEditImg] = useState(null)

  const uppy = new Uppy({
    meta: { type: 'avatar' },
    restrictions: { maxNumberOfFiles: 1 },
    autoProceed: true
  })

  uppy.use(thumbnailGenerator)

  uppy.on('thumbnail:generated', (file, preview) => {
    setUploadImg(file.data)
  })
  const uppyEdit = new Uppy({
    meta: { type: 'avatar' },
    restrictions: { maxNumberOfFiles: 1 },
    autoProceed: true
  })

  uppyEdit.use(thumbnailGenerator)

  uppyEdit.on('thumbnail:generated', (file, preview) => {
    setEditImg(file.data)
    setPreview(preview)
  })
  //post data 
  const uploadData = new FormData()
  uploadData.append('file', uploadImg)

  //post api 
  const postBanner = async (e) => {
    e.preventDefault()
    const res = await Action.post(`/banner`, uploadData, {})
    console.log(res)
  }

  //delete banner 
  const deleteBanner = async (id) => {
    const res = await Action.delete(`/banner?id=${ id }`)
    console.log(res)
    if (res.data.success) {
      toast.success(<SuccessToast title="Success" text="Banner Deleted Successfully!" />)

    } else {
      toast.error(<ErrorToast title="error" text="Something went wrong, try again later" />)
    }
  }
  const editFile = new FormData()
  editFile.append('file', editImg)
  //Update api 
  const updateBanner = async (id) => {
    const res = await Action.put(`/banner/${ id }`, editFile, {})
    console.log(res)
  }
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>All Desktop Banners </CardTitle>
          <div className="float-right mb-2">
            <Button color="primary" onClick={ () => toggleAddNew(0) }>
              Add new Banner
            </Button>
            <Modal
              isOpen={ modal3 === 0 }
              toggle={ () => toggleAddNew(0) }
              className='modal-dialog-centered'
              modalClassName="modal-primary"
              key={ 0 }>
              <ModalHeader toggle={ () => toggleAddNew(0) }>Upload</ModalHeader>
              <ModalBody>
                <Form>
                  <Row>
                    <Col sm='12' className="mt-2">
                      {/* basic image upload */ }

                      <h6> Upload Banners </h6>
                      <DragDrop uppy={ uppy } />
                      { uploadImg !== null ? <img className='rounded mt-2' src={ uploadImg } alt='avatar' /> : null }
                    </Col>

                  </Row>
                </Form>
              </ModalBody>
              <ModalFooter>

                <Button color="primary" onClick={ (e) => postBanner(e) }>
                  Submit
                  {/* spinner */ }
                  {/* <Spinner color='light' /> */ }
                </Button>
              </ModalFooter>
            </Modal>
          </div>
          <Table responsive>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Banners</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                banners.map((value, index) => {
                  return (
                    <tr key={ index }>
                      <td>
                        { index + 1 }
                      </td>

                      <td> <img src={ baseURL + value.Bgimage } width="300" height="100" alt="" /> </td>
                      <td>
                        <UncontrolledDropdown>
                          <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                            <MoreVertical size={ 15 } />
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem href='/' onClick={ (e) => {
                              e.preventDefault()
                              toggleModalPrimary(value._id)
                            } }>
                              <Edit className='mr-50' size={ 15 } />  <span className='align-middle'>Edit</span>
                            </DropdownItem>

                            <DropdownItem href='/' onClick={ (e) => {
                              e.preventDefault()
                              toggleModalDanger(value._id)
                            } }>
                              <Trash className='mr-50' size={ 15 } /> <span className='align-middle'>Delete</span>
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                        <Modal
                          isOpen={ modal2 === value._id }
                          toggle={ () => toggleModalPrimary(value.id) }
                          className='modal-dialog-centered'
                          modalClassName="modal-primary"
                          key={ value._id }>
                          <ModalHeader toggle={ () => toggleModalPrimary(value._id) }>Edit</ModalHeader>
                          <ModalBody>
                            <Form>
                              <Row>
                                <Col sm='12' className="mt-2">
                                  {/* basic image upload */ }

                                  <h6> edit Banner </h6>
                                  <DragDrop uppy={ uppyEdit } />
                                  { editImg !== null ? <img className='rounded mt-2' src={ preview ? preview : editImg } alt='avatar' /> : null }
                                </Col>

                              </Row>
                            </Form>
                          </ModalBody>
                          <ModalFooter>

                            <Button color="primary" onClick={ () => updateBanner(value._id) }>
                              Submit
                              {/* spinner */ }
                              {/* <Spinner color='light' /> */ }
                            </Button>
                          </ModalFooter>
                        </Modal>

                        {/* delete modal */ }
                        <Modal
                          isOpen={ modal === value._id }
                          toggle={ () => toggleModalDanger(value._id) }
                          className='modal-dialog-centered'
                          modalClassName="modal-danger"
                          key={ value.id }>
                          <ModalHeader toggle={ () => toggleModalDanger(value._id) }>Delete</ModalHeader>
                          <ModalBody>
                            Are you sure you want to delete this?
                          </ModalBody>
                          <ModalFooter>
                            <Button color="danger" onClick={ () => deleteBanner(value._id) }>
                              delete
                            </Button>
                          </ModalFooter>
                        </Modal>
                      </td>
                    </tr>
                  )
                })
              }


            </tbody>
          </Table>
        </CardBody>
      </Card>
    </>
  )
}
export default DesktopBanner
