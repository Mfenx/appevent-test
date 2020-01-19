import React, {Component} from 'react';
import './App.scss';
import Layout from "./hoc/Layout/Layout";

import routes from './routes/routes'


class App extends Component {


    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        return (
              <Layout>
                  {routes}
              </Layout>
        );
    }
}

export default App;
