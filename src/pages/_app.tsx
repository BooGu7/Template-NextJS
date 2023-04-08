import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { NextPage } from 'next';
import { Router } from 'next/router';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/styles.scss';

import { store } from '@/stores';
import nProgress from 'nprogress';

import { ConfigProvider, Layout, Space, Row, Col } from 'antd';
import { theme } from 'theme.config';

// Header
import Logo from '../common/utils/components/Header/Logo';
import Menubar from '../common/utils/components/Header/Menubar';
// Body
import SendForm from '../common/utils/components/Body/SendForm';
import TitleArea from '../common/utils/components/Body/PageTitleArea';
import ImageSVG from '../common/utils/components/Body/Image';
// Footer
import Contact from '../common/utils/components/Footer/Contact';
import Services from '../common/utils/components/Footer/Services';
import Navigation from '../common/utils/components/Footer/Navigation';
import Social from '../common/utils/components/Footer/Social';

const { Header, Footer, Content } = Layout;

type EnhancedAppProps = AppProps & {
  Component: NextPage;
};

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

const App: React.FC<EnhancedAppProps> = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <title>POS extension - Try SipScience</title>
        <meta name="description" content="Our POS extension supercharges bars and restaurants. Better consumers loyalty, reduced financial risk &amp; new insights. Sign up today for free!" />
        <link rel="canonical" href="https://www.sipscience.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SipScience POS Extension" />
        <meta property="og:description" content="Our POS extension supercharges bars and restaurants. Better consumers loyalty, reduced financial risk &amp; new insights. Sign up today for free!" />
        <meta property="og:url" content="https://www.sipscience.com/" />
        <meta property="og:site_name" content="SipScience" />
        <meta property="article:publisher" content="https://www.facebook.com/SipScience/" />
        <meta property="article:modified_time" content="2022-04-01T18:44:38+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.sipscience.com/wp-content/uploads/2021/11/barimage-scaled.webp" />
        <meta name="twitter:site" content="@sipscience" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="9 minutes" />
        <meta name="msapplication-TileImage" content="https://www.sipscience.com/wp-content/uploads/2021/12/cropped-logo_white-270x270.png" />
      </Head>
      <ConfigProvider theme={theme}>
        <ReduxProvider store={store}>
          <Space direction="vertical">
            <Layout className="container-fluid">
              <Header>
                <Row className="navbar">
                  <Col className="navbar-col" span={12}>
                    <Logo />
                  </Col>
                  <Col className="navbar-col navbar-size" span={12}>
                    <Menubar />
                  </Col>
                </Row>
              </Header>
              <Content className="container-content">
                <Row className="top-container-content">
                  <Col className="col-container-content" span={24}>
                    <TitleArea />
                  </Col>
                </Row>
                <Row className="body-container-content">
                  <Col sm={24} xl={12}>
                    <ImageSVG />
                  </Col>
                  <Col sm={24} xl={12}>
                    <SendForm />
                  </Col>
                </Row>
              </Content>
            </Layout>
            <Layout className="container-footer">
              <Footer className="container-footer">
                <Row className="top-footer">
                  <Contact />
                  <Services />
                  <Navigation />
                </Row>
                <Row className="bottom-footer">
                  <Social />
                </Row>
              </Footer>
            </Layout>
          </Space>
        </ReduxProvider>
      </ConfigProvider>
    </>
  );
};

export default App;
