import React, { useState } from 'react'
import girlImg from '../src/assets/images/Girl.png'
import boyImg from '../src/assets/images/Boy.png'
import { TextField,Stack,FormLabel,Radio,RadioGroup,FormControlLabel,FormControl,Select,InputLabel,MenuItem,Button  } from '@mui/material';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Modal from 'react-bootstrap/Modal';






function App() {
  //data store state
  const [fullname,setFullName]=useState("")
  const [address,setAddress]=useState("")
  const [mobileNum,setMobileNum]=useState("")
  const [email,setEmail]=useState("")
  const [gender,setGender]=useState("")
  const [Course,setCourse]=useState("")
  const [dob,setDob]=useState(null)
  //validation state
  const [isfullnameInvalid,setIsFullnameInvalid]=useState(false)
  const [isAddressInvalid,setIsAddressInvalid]=useState(false)
  const [isMobileNumInvalid,setIsMobileNumInvalid]=useState(false)
  const [isEmailInvalid,setIsEmailInvalid]=useState(false)
  //validation functions
  const handleInputValidationName=(tag)=>{
    const {name,value}=tag;
    console.log(name,value);
    console.log(!!value.match(/^[A-Za-z\s.]*$/));
    if (!!value.match(/^[A-Za-z\s.]*$/)) {
      //valid
      if (name == "fullName") {
        setFullName(value);
        setIsFullnameInvalid(false);
      }
    } else {
      if (name == "fullName") {
        setFullName(value);
        setIsFullnameInvalid(true);
      }
    }
  }
  const handleInputValidationAddress=(tag)=>{
    const {name,value}=tag;
    console.log(name,value);
    console.log(!!value.match(/^[A-Za-z\s.]*$/));
    if (!!value.match(/^[A-Za-z\s.]*$/)) {
      //valid
      if (name === "address") {
        setAddress(value);
        setIsAddressInvalid(false);
      }
    } else {
      if (name === "address") {
        setAddress(value);
        setIsAddressInvalid(true);
      }
    }


   }
   const handleInputValidationMobileNum=(tag)=>{
    const {name,value}=tag;
    console.log(!!value.match(/^[7-9]\d{9}$/));
    if (!!value.match(/^[7-9]\d{9}$/)) {
      if (name == "mobileNum") {
        setMobileNum(value);
        setIsMobileNumInvalid(false);
      }
    } else {
      if (name == "mobileNum") {
        setMobileNum(value);
        setIsMobileNumInvalid(true);
      }
    }

      
    }
    const handleEmailInputValidation=(tag)=>{
      const {name,value}=tag;
      console.log(!!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/));
      if (!!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        if (name=="email") {
          setEmail(value)
          setIsEmailInvalid(false)


          
        }
        
      }else{
        if (name=="email") {
          setEmail(value)
          setIsEmailInvalid(true)


          
        }
       
        }

      }
      //handle gender
      const handleGenderChange=(event)=>{
        console.log(event.target.value);
        setGender(event.target.value);


      }
      //handle course
      const handleCourseChange=(event)=>{
        console.log(event.target.value);

        setCourse(event.target.value)

      }
      //handle date
      const handleDateChange=(date)=>{
        console.log(date);
        setDob(date);
      }
      //
     

   
      //modal
      
      
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleOkClick = () => {
        // Show an alert with the message
        alert('Data submitted successfully!');
        setShow(true);
      };
      const handleShow = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        if (!fullname || !address) {
          // If fullname or address is empty, show alert and return without showing modal
          alert('Please fill form completely.');
        } else {
          // If both fields are filled out, show the modal
          setShow(true);
        }
      };
      //clear
    const handleClear=()=>{
    // Clear all form fields
    setFullName('');
    setAddress('');
    setMobileNum('');
    setEmail('');
    setGender('');
    setCourse('');
    setDob(null);

    // Reset validation states
    setIsFullnameInvalid(false);
    setIsAddressInvalid(false);
    setIsMobileNumInvalid(false);
    setIsEmailInvalid(false);
  };

  
    return (
    <div style={{height:'120vh',backgroundColor:'black'}} className='w-100 d-flex align-items-center justify-content-center'>
      <div style={{height:'110vh',backgroundColor:'white',width:'65%'}}>
        <div  style={{height:'30%',width:'100%'}} className='w-100 d-flex align-items-center justify-content-center'>
        <div style={{backgroundColor:'#28282B',height:'90%',width:'85%',borderRadius:'20px'}} className="mt-5 d-flex align-items-center justify-content-evenly">
          <div style={{width:'20%',height:'80%'}}>
            <img style={{width:'100%',height:'100%',borderRadius:'50%'}} src={girlImg} alt="" />
          </div>
          <div>
            <h3 style={{color:'white'}}>REGISTRATION  FORM</h3>
          </div>
          <div style={{width:'20%',height:'80%'}}>
            <img style={{width:'100%',height:'100%',borderRadius:'50%'}} src={boyImg} alt="" />

          </div>

        </div>

        </div>
        
        <form className="mt-5">
        <Stack direction="row" spacing={2}  className="mb-3 d-flex  justify-content-center">
        <TextField onChange={e=>handleInputValidationName(e.target)} name='fullName' value={fullname} style={{width:'45%'}} id="outlined-basic" label="Name" variant="outlined" />
       

        <TextField  onChange={e=>handleInputValidationAddress(e.target)} name='address' style={{width:'45%'}} id="outlined-multiline-static" label="Address" value={address} multiline rows={3}/>
        </Stack>
        <div style={{width:'30%',height:'20%',marginLeft:'190px'}}>
        {
            isfullnameInvalid &&
            <div  className=' mb-3 text-danger fw-bolder'>Invalid Name</div>






          }
          </div>
          <div style={{width:'30%',height:'20%',marginLeft:'630px'}}>          
          {
            isAddressInvalid &&
            <div  className='mb-3 text-danger fw-bolder'>Invalid Address</div>




          }
        </div>
        <div className="mb-3">
          <Stack direction="row" spacing={2}  className="mb-3 d-flex  justify-content-center">
          <TextField onChange={e=>handleInputValidationMobileNum(e.target)} name='mobileNum' style={{width:'45%'}} id="outlined-basic" label="Mobile Number" value={mobileNum} variant="outlined" />
          <TextField onChange={e=>handleEmailInputValidation(e.target)} name='email' value={email} style={{width:'45%'}} id="outlined-basic" label="E-mail" variant="outlined" />



          </Stack>
          </div>
          <div style={{width:'30%',height:'20%',marginLeft:'190px'}}>
          {
            isMobileNumInvalid &&
            <div  className=' mb-3 text-danger fw-bolder'>Invalid Mobile Number</div>






          }
          <div style={{width:'35%',height:'20%',marginLeft:'450px'}}>
            {
              isEmailInvalid &&
            
            <div  className='mb-3 text-danger fw-bolder'>Invalid Email</div>


          }
          </div>
          </div>
          <div className="mb-3">
          <Stack direction="row" spacing={2}  className="mb-3 d-flex  justify-content-center">
          <FormControl style={{width:'45%'}}>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup  onChange={handleGenderChange} value={gender} caria-labelledby="demo-radio-buttons-group-label" defaultValue="female"  row>
              <FormControlLabel name='female' value="female" control={<Radio />} label="Female" />
              <FormControlLabel name='male' value="male" control={<Radio />} label="Male" />
              <FormControlLabel name='other' value="other" control={<Radio />} label="Other" />
              </RadioGroup>
          </FormControl>
          <FormControl style={{width:'45%'}} fullWidth>
              <InputLabel id="demo-simple-select-label">Course</InputLabel>
              <Select  onChange={handleCourseChange} value={Course} labelId="demo-simple-select-label" id="demo-simple-select" label="Course">
              <MenuItem name='biology' value={10}>Biology</MenuItem>
              <MenuItem name='computer' value={20}>Computer Science</MenuItem>
              <MenuItem name='commerce' value={30}>Commerce</MenuItem>
              <MenuItem name='humanities' value={40}>Humanities</MenuItem>

              </Select>
          </FormControl>
          </Stack>

          
          </div>
          <div className="mb-3" >
         
          <Stack direction="column" spacing={1}  className="mb-3 d-flex align-items:center justify-content-center" style={{marginLeft:'40px'}}>
        
          

          <LocalizationProvider  dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
            <DatePicker value={dob} onChange={handleDateChange}/>
            </DemoContainer>
          </LocalizationProvider>
          
          </Stack>
          <div className="mt-5" >
          <Stack spacing={15} direction="row" className="mb-3 d-flex  justify-content-center">
          <Button onClick={handleShow} type='submit'  disabled={!gender ||!dob ||!Course||isEmailInvalid||isMobileNumInvalid} style={{backgroundColor:'red',height:'50px',width:'120px'}} variant="contained">SUBMIT</Button>
          <Button onClick={handleClear} style={{backgroundColor:'black',height:'50px',width:'120px'}} variant="contained">CLEAR</Button>

          </Stack>

          </div>
          
      </div>

    </form>
      
        


      </div>
    {/* modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{marginLeft:'70px',color:'#CC5500'}}>STUDENT INFORMATION</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex align-items-center justify-content-center'>
        <div style={{width:'90%',backgroundColor:'#FAF9F6',height:'100%',textAlign:'center',border:'2px solid',padding:'20px'}}>
          <h5>Name:{fullname}</h5>
          <h5>Course:  {Course === 10
                        ? "Biology"
                        : Course === 20
                        ? "Computer Science"
                        : Course === 30
                        ? "Commerce"
                        : Course===40
                        ?"Humanities"
                      :"" }</h5>
          <h5>Gender:{gender}</h5>
          <h5>Adderss:{address}</h5>
          <h5>Date Of Birth:{dob ? dob.format("DD-MM-YYYY") : ""}{" "}</h5>
          <h5>E-mail:{email}</h5>
          <h5>Mobile Number:{mobileNum}</h5>






         
        
        </div>
         
        </Modal.Body>
        <Modal.Footer>
          <Button style={{backgroundColor:'#880808',color:'white',marginRight:'10px'}} variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  onClick={handleOkClick} style={{backgroundColor:'#023020',color:'white'}} variant="primary">OK</Button>
        </Modal.Footer>
      </Modal>
      
    
    </div>

 
   
  )
}

export default App
