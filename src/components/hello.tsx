import * as React from "react";
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import * as actions from '../actions';

// In the HelloProps we determine the shape of the props

export interface HelloProps { compiler: string; framework: string; }

interface TestInterface {
  testInterfaceProperty: boolean;
}

interface TestStatePropertiesInput {
  app: {
    testWorking: boolean;
  };
}

interface TestStatePropertiesOutput {
  testWorking: boolean;
}

interface TestDispatchProperties {
  onComponentMount: Function;
}

// We include HelloProps and TestDispatchProperties for the function to know what types to expect

export class Hello extends React.Component<HelloProps & TestDispatchProperties> {

    componentDidMount(){
      console.log('hello mounted, here are the props: ', this.props)
      this.props.onComponentMount()
    }
    render() {
        console.log('Rendering the main component with state testWorking: ', this.props)
        return <h1>Hello !!!! from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}

// In the arguments of mapStateToProps we state that the arguments should be of the type determined
// in TestStatePropertiesInput and the output of the type in TestStatePropertiesOutput

const mapStateToProps = (state: TestStatePropertiesInput, ownProp?: any): TestStatePropertiesOutput => ({
    testWorking: state.app.testWorking
});

// In mapDispatchToProps we making the onComponentMount method available in props

const mapDispatchToProps = (dispatch: any): TestDispatchProperties => {
  console.log('we are mapping dispatch to props')
  return {
    onComponentMount: () => {
      dispatch(actions.changeTestState())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
