import createElement from 'inferno-create-element';
import Component from 'inferno-component';

export interface HelloWorldProps {
  name: string
}

export default class HelloWorld extends Component<HelloWorldProps, any> {
  render(props) {
    return <p>Hello {props.name} !</p>
  }
}