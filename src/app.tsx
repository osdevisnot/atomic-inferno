import Inferno from 'inferno';
import createElement from 'inferno-create-element';
import HelloWorld from './HelloWorld';

Inferno.render(<HelloWorld name="World" />, document.getElementById('app'));
