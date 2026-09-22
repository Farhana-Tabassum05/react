import React from 'react'
import Card from './components/Card'


function App(){
  return (
    <div className="parent">
      <Card user="Farhana Tabassum" description = "I am a very kind person and i love gardening, coding, listening to music, reading books and many more.." img="https://images.unsplash.com/photo-1771838026270-28fd7e3bef1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww" />
      <Card user="Rehana Begum" description = "I am a silent person but if you irritate me no one is as voilent as me. I like stitching, drawing, painting and anything related to creativity" img="https://plus.unsplash.com/premium_photo-1671805322278-13793483b464?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww"/>
      <Card user="Inayat" description="I am a very sadistic type of person. No one around me can guess when i will be sweet and turn into angry bird. I love fighting animes like berserk, Dragon ball, Baki etc" img="https://images.unsplash.com/photo-1733690683193-087f7bd60bdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RHJhZ29uJTIwYmFsbHxlbnwwfHwwfHx8MA%3D%3D"/>
    </div>
  )
}

export default App