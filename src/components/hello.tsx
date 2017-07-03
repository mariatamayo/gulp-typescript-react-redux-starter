import * as React from "react";
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';

// In the HelloProps we determine the shape of the props

export interface HelloProps { compiler: string; framework: string; }

interface TestInterface {
  testInterfaceProperty: boolean;
}

interface TestStatePropertiesInput {
  app: {
    testWorking: boolean;
    compiler: string;
    framework: string;
  };
}

interface TestStatePropertiesOutput {
  testWorking: boolean;
  compiler: string;
  framework: string;
}

interface TestDispatchProperties {
  onComponentMount: Function;
}

// We include HelloProps and TestDispatchProperties for the function to know what types to expect

export class Hello extends React.Component<HelloProps & TestDispatchProperties> {

  componentDidMount(){
    this.props.onComponentMount()
  }
  render() {
    return (
      <div>
        <h1>Hello !!!! from {this.props.compiler} and {this.props.framework}!</h1>
        <Link to='/sampleRoute'>
          <button>Take me there</button>
        </Link>
      </div>
    );
  }
}

// In the arguments of mapStateToProps we state that the arguments should be of the type determined
// in TestStatePropertiesInput and the output of the type in TestStatePropertiesOutput

const mapStateToProps = (state: TestStatePropertiesInput, ownProp?: any): TestStatePropertiesOutput => ({
  testWorking: state.app.testWorking,
  compiler: state.app.compiler,
  framework: state.app.framework
});

// In mapDispatchToProps we making the onComponentMount method available in props

const mapDispatchToProps = (dispatch: any): TestDispatchProperties => ({
  onComponentMount: () => {
    dispatch(actions.changeTestState())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
