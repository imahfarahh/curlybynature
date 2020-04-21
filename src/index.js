/* eslint-disable*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducers';

const initialState = {
  categories: ['Hair', 'MakeUp', 'Self-Care'],
  blogs: {
    0: {
      id: 0,
      blogTitle: 'How I embraced my curly hair?',
      blogContent: `.`,
      categories: ['Hair'],
      blogDescription:
        'I used to desperately seek straight hair and had an 8 year-long love affair with harsh blow-dries. Then I decided to liberate my locks – and discovered a whole world of fellow curly haired girlsum non blanditiis soluta porro quibusdam voluptas…st et voluptatem dignissimos dolor itaque sit nam',
    },
    1: {
      id: 1,
      blogTitle: 'What is my hair porosity and what does it mean?',
      blogContent: `.`,
      categories: ['Hair'],
      blogDescription:
        'Porosity is a measurement of your hairs ability to absorb and hold moisture, making each curl pattern incredibly unique. Keep reading to find out more…',
    },
    2: {
      id: 2,
      blogTitle: 'How to Figure Out Your Curl Type',
      blogContent: `.`,
      categories: ['Hair'],
      blogDescription:
        'Decoding your curl type can be confusing. Several different textures can exist on one head alone, which all have to somehow look cohesive when you style it. Its a lot to think about but I feel you.',
    },
    3: {
      id: 3,
      blogTitle: 'Are You Brushing Your Hair All Wrong?',
      blogContent: `.`,
      categories: ['Hair'],
      blogDescription:
        'The simple up-and-down motion of hair-brushing is mostly instinctive. Once we begin doing it, we go about it without thinking intently about the action. Follow the tips ahead to make sure you’re getting the best results possible for your fragile hair.',
    },
    4: {
      id: 4,
      blogTitle: 'The Ultimate Guide To Choosing The Right Oil For Your Curls',
      blogContent: `.`,
      categories: ['Hair'],
      blogDescription:
        'The entire Internet is raving about this new wonder oil, so you dutifully pick some up and try it on your hair and it does...nothing. Has everyone been lying? Was everyone paid to talk about that oil? I know you don’t have time to sort through them all, so I’m going to break it down for you.',
    },
    5: {
      id: 5,
      blogTitle: 'What To Do When You’ve Lost Your Curls',
      blogContent: `.`,
      categories: ['Hair'],
      blogDescription:
        'If you once enjoyed curly, bouncy ringlets, but have lately been finding that your crowning glory is beginning to, well, droop, you have reason to be concerned. Fortunately, there are some likely causes for your loss of curl, and here to help bring them back.',
    },
    6: {
      id: 6,
      blogTitle: '13 Common Mistakes People With Curly Hair Make — and How to Avoid Them',
      blogContent: `.`,
      categories: ['Hair'],
      blogDescription:
        ": If you have got curls, you already know that caring for them can be quite a handful. Curls generally need a little extra love, and it's important to know how to do right by your hair so it can stay looking amazing. We asked some hairstylists for a little advice on mistakes to avoid if you want to keep your curls thriving.",
    },
  },
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
