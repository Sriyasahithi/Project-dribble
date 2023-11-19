import React from 'react'
import Project from './Project'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import img4 from '../img/img4.jpg'
import img5 from '../img/img5.jpg'
import img6 from '../img/img6.jpg'
import img7 from '../img/img7.jpg'
import img8 from '../img/img8.jpg'
import img9 from '../img/img9.jpg'
import img10 from '../img/img10.jpg'
import img11 from '../img/img11.jpg'
import img12 from '../img/img12.jpg'
import img13 from '../img/img13.jpg'
const Projects = () => {
  return (
    <div className="flex flex-wrap max-w-7xl justify-evenly mt-10">
        <Project images={{image:img2, team:'TEAM',name:'Books',views:'369',likes:'274'}}/>
        <Project images={{image:img3, team:'PRO',name:'Library',views:'486',likes:'239'}}/>
        <Project images={{image:img4, team:'TEAM',name:'Motivation',views:'379',likes:'286'}}/>
        <Project images={{image:img5, team:'TEAM',name:'Scenary',views:'233',likes:'196'}}/>
        <Project images={{image:img6, team:'TEAM',name:'Flowers',views:'89',likes:'64'}}/>
        <Project images={{image:img7, team:'PRO',name:'Work',views:'164',likes:'88'}}/>
        <Project images={{image:img8, team:'TEAM',name:'Place',views:'436',likes:'288'}}/>
        <Project images={{image:img10,team:'TEAM',name:'Room',views:'72',likes:'29'}}/>
        <Project images={{image:img11,team:'PRO',name:'Mountain',views:'366',likes:'155'}}/>
        <Project images={{image:img12,team:'PRO',name:'Work',views:'65',likes:'39'}}/>
        <Project images={{image:img13,team:'TEAM',name:'Dessert',views:'188',likes:'93'}}/>
        <Project images={{image:img9, team:'TEAM',name:'Shop',views:'453',likes:'329'}}/>
        
        
    </div>
  )
}

export default Projects