import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import styles from '../style/Categories.css';

function Categories() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.statusReducer);

  function checkStatusHandler() {
    dispatch(checkStatus());
  }

  return (
    <div className={styles['categories-section']}>
      <div className={styles.heading}>Categories</div>
      <div className={styles.status}>{status}</div>
      <button className="chk-status" type="button" onClick={checkStatusHandler}>Check Status</button>
    </div>
  );
}

export default Categories;
