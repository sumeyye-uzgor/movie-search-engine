import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.scss';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import LoadingSpinner from './components/LoadingSpinner';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';
import reportWebVitals from './reportWebVitals';
import store from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/details/:id',
    element: <DetailsPage />,
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider
        router={router}
        fallbackElement={<LoadingSpinner />}
        future={{ v7_startTransition: true }}
      />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
