import CreateItem from '../components/CreateItem';
import Link from 'next/link';

const Reset = props => (
  <div>
    <p>Reset your password {props.query.resetToken}</p>
  </div>
);

export default Reset;
