import React, { Component, Fragment } from 'react';

import { isMobile } from 'react-device-detect';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';

import logo from './assets/icon.svg';
import iconHeart from './assets/heart-icon.svg';

import {
  GlobalStyle,
  About,
  FormWarp,
  Header,
  Logo,
  Button,
  Title,
  SubTitle,
  Link,
} from './styles';

export default class App extends Component {
  state = {
    inputPhoneNumber: '',
    whatsappEndpoint: '',
  };

  componentDidMount() {
    this.setState({
      whatsappEndpoint: isMobile ? 'https://api.whatsapp.com/' : 'https://web.whatsapp.com/',
    });
  }

  loadJSONP = (url, callback) => {
    const ref = window.document.getElementsByTagName('script')[0];
    const script = window.document.createElement('script');
    script.src = `${url + (url.indexOf('?') + 1 ? '&' : '?')}callback=${callback}`;
    ref.parentNode.insertBefore(script, ref);
    script.onload = () => {
      script.remove();
    };
  };

  getLocation = (callback) => {
    this.loadJSONP('https://ipinfo.io', 'sendBack');
    window.sendBack = (resp) => {
      const countryCode = resp && resp.country ? resp.country : '';
      callback(countryCode);
    };
  };

  handleSubmit = () => {
    const { inputPhoneNumber, whatsappEndpoint } = this.state;
    if (!inputPhoneNumber) return;
    window.location.href = `${whatsappEndpoint}send?phone=${inputPhoneNumber}`;
  };

  handleNumberChange = (status, value, countryData, number) => {
    this.setState({ inputPhoneNumber: number });
  };

  render() {
    return (
      <Fragment>
        <Header>
          <Logo
            src={logo}
            alt="ZAP2 - Send Whatsapp message to someone without add on contact list"
          />
          <Title>
            <span>Zap</span>
2
          </Title>
          <SubTitle>Send WhatsApp messages to someone not on your contact list</SubTitle>
        </Header>

        <FormWarp>
          <IntlTelInput
            defaultCountry="auto"
            preferredCountries={['br', 'us']}
            onPhoneNumberChange={this.handleNumberChange}
            geoIpLookup={this.getLocation}
            format
            // css={['intl-tel-input', 'form-control']}
          />
          <Button onClick={this.handleSubmit}>Ok</Button>
        </FormWarp>

        <About>
          <p>
            Made with
            <img src={iconHeart} alt="love" />
            in Curitiba - PR - Brazil
          </p>
          <p>
            by
            <Link target="_blank" href="https://github.com/jeffersonrt">
              Jefferson Torá.
            </Link>
            Contribute to
            <Link target="_blank" href="https://github.com/jeffersonrt/zap2">
              Github project.
            </Link>
          </p>
        </About>

        <GlobalStyle />
      </Fragment>
    );
  }
}
