import { ToastContainer, toast } from 'react-toastify';
import { Observable } from '~/components/ObserverPattern/Observable';

const logger = (data) => {
  console.log(`${Date.now()} ${data}`);
};

const toastify = (data) => {
  toast(data, {
    position: toast.POSITION.BOTTOM_RIGHT,
    closeButton: false,
    autoClose: 2000,
  });
};

Observable.instance.subscribe(logger);
Observable.instance.subscribe(toastify);

export const ObserverPatternMain = () => {
  const onClickFirstButton = () => {
    Observable.instance.notify('First Button Clicked!!!');
  };

  const onClickSecondButton = () => {
    Observable.instance.notify('Second Button Clicked!!!!!!!!!!!');
  };

  return (
    <div className="App">
      <button onClick={onClickFirstButton}>Click First Button!</button>

      <button onClick={onClickSecondButton}>Click Second Button!</button>
      <ToastContainer />
    </div>
  );
};
