import React, { Suspense } from 'react';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import News from './Components/News/News';
import Login from './Components/Login/Login';
import { InitalizeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withRouter from './hoc/withRouter';
import Preloader from './Components/common/Preloader/Preloader';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

const UsersContainer = React.lazy(() => import('./Components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const ProfileContiner = React.lazy(() => import('./Components/Profile/ProfileContainer'));
const HeaderContainer = React.lazy(() => import('./Components/Header/HeaderContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.InitalizeApp();
  }

  render() {
    if (!this.props.initalaized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <Suspense fallback={<Preloader />}>
          <HeaderContainer />
          <NavBar />
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/message" element={<DialogsContainer />} />
              <Route path="/profile/:userId?" element={<ProfileContiner />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/login" element={<Login />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Suspense>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initalaized: state.initialize.initalaized,
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { InitalizeApp })
)(App);

const MainAppRender = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default MainAppRender;
