import { Button } from './components/Button/Button';
import { UserInfo } from './components/UserInfo/UserInfo';

export const App = () => {

  const handleClick1 = () => {
    console.log('click1');
  }

  const handleClick2 = () => {
    console.log('click2');
  }

  const handleClick3 = () => {
    console.log('click3');
  }

  const handleClick4 = () => {
    console.log('click4');
  }

  const handleClick5 = () => {
    console.log('click5');
  }

  const handleClick6 = () => {
    console.log('click6');
  }

  return (
    <div>
      <UserInfo username="Alex Rubanov"/>
      <br/>
      <Button type='primary' content='Primary' isDisabled onClick={handleClick1}/>
      <Button type='primary' content='Primary' isDisabled={false} onClick={handleClick2}/>
      <br/>
      <Button type='secondary' content='Secondary' isDisabled onClick={handleClick3}/>
      <Button type='secondary' content='Secondary' isDisabled={false} onClick={handleClick4}/>
      <br/>
      <Button type='secondary2' content='Secondary2' isDisabled onClick={handleClick5}/>
      <Button type='secondary2' content='Secondary2' isDisabled={false} onClick={handleClick6}/>
      <br/>
    </div>
  );
}
