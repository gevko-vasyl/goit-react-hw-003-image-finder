import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './Spinner.scss';

const Spinner = () => {
  return (
    <Loader
      className="Spinner"
      type="ThreeDots"
      color="#3f51b5"
      height={80}
      width={80}
    />
  );
};

export default Spinner;
