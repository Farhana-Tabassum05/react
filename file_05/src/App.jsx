import React from 'react'
import Section1 from './components/section 1/Section1'
import Section2 from './components/section 2/Section2'

const App = () => {
  const users = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: 'hello i am very satisfied with the services provided and i recommend them to my friends',
      tag: 'Satisfied',
      color: 'pink'
    },
    {
      img: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro: '',
      tag: 'Underserved',
      color: ''
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1681823043769-a7c20809a756?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro: '',
      tag: 'Satisfied',
      color: ''
    },
    {
      img: 'https://images.unsplash.com/photo-1571365689578-618663443bd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro: '',
      tag: 'Underbanked',
      color: ''
    }
  ]
  return (
    <div>
        <Section1 users={users}/>
        <Section2/>
    </div>
  )
}

export default App