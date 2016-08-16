import React from 'react'
import ReactDOM from 'react-dom'

import Resume from './body'
import data from './data'

const container = document.getElementsByClassName('container')[0]
ReactDOM.render(<Resume resume={data} />, container)
