import React from 'react'
import ReactDOM from 'react-dom/client'
import Triage from './components/Triage'
import DragLeft from './components/DragLeft'
import DragRight from './components/DragRight'
import Taps from './components/Taps'
import Reply from './components/Reply'
import Colors from './components/Colors'
import Praise from './components/Praise'
import Footer from './components/Footer'
import './css/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<>
    <Triage/>
    <DragLeft/>
    <DragRight/>
    <Taps/>
    <Reply/>
    <Colors/>
    <Praise/>
    <Footer/>
</>
)
