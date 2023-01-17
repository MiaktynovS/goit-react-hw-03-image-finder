import { ColorRing } from 'react-loader-spinner';
import s from './Loader.module.css';

export function Loader() {
  return (
    <div className={s.wrapper}>
      <ColorRing 
       visible={true}
       height="80"
       width="80"
       ariaLabel="blocks-loading"
       wrapperStyle={{}}
       wrapperClass="blocks-wrapper"
       colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      className={s.loader} />
    </div>
  );
}