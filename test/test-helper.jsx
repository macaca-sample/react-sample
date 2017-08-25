import ReactDOM from 'react-dom';

import Progress from '../src/components/Progress';
import H5NumberInput from '../src/components/H5NumberInput';
import List from '../src/components/List';
import Button from '../src/components/Button';

window._test = {
  progress: () =>{
    ReactDOM.render(<Progress />,
    document.getElementById('example'));
  },
  h5NumberInput: () =>{
    ReactDOM.render(<H5NumberInput />,
    document.getElementById('example'));
  },
  list: () =>{
    ReactDOM.render(<List />,
    document.getElementById('example'));
  },
  button: () =>{
    ReactDOM.render(<Button />,
    document.getElementById('example'));
  }
};

