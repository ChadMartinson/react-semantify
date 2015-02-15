"use strict";

import React        from 'react/addons';
import Semantify    from 'react-semantify';
import ExampleBlock from '../components/ExampleBlock.jsx';
import PageTitle    from '../components/PageTitle.jsx';

var {Button, Divider, Header} = Semantify;

export default React.createClass({

  render() {
    return (
      <div>
        <PageTitle title="Button">
          A button indicates a possible user action
        </PageTitle>

        <div className="main container">
          <Header className="large dividing">Type</Header>
          <ExampleBlock header="Button"
                        sub="A standard button"
                        codeBlock="<Button>Button</Button>">
            <Button>Button</Button>
          </ExampleBlock>

          <Header className="large dividing">States</Header>

          <ExampleBlock header="Active"
                        sub="A button can show it is in active mode"
                        codeBlock="<Button active={true} >Button</Button>">
            <Button active={true}>Button</Button>
          </ExampleBlock>

          <Divider/>

          <ExampleBlock header="Disabled"
                        sub="A button can show it is in Disabled mode"
                        codeBlock="<Button disabled={true} >Button</Button>">
            <Button disabled={true}>Button</Button>
          </ExampleBlock>

          <Divider/>

          <ExampleBlock header="Loading"
                        sub="A button can show it is in Loading mode"
                        codeBlock="<Button loading={true} >Button</Button>">
            <Button loading={true}>Button</Button>
          </ExampleBlock>

        </div>
      </div>
    );
  }
});
