import React, { useState } from 'react'
import styles from './../styles/Main.module.css'
import { Link } from 'react-router-dom'

const FIELDS = {
  NAME: 'name',
  ROOM: 'room'
}

const Main = () => {

  const {NAME, ROOM} = FIELDS
  const [values, setValues] = useState({[NAME]: "", [ROOM]: ""})

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Join</h1>
        <form className={styles.form}>
          <div className={styles.group}>
            <input 
              type="text" 
              name="name" 
              value=""
              placeholder="Name"
              className={styles.input}
              onChange={() => {}}
              autoComplete="off"
              required
            />
          </div>
          <div className={styles.group}>
            <input 
              type="text" 
              name="room" 
              value=""
              placeholder="Room" 
              className={styles.input}
              onChange={() => {}}
              autoComplete="off"
            />
          </div>
          <Link to={`/chat?name=${values[NAME]}&room=${values[ROOM]}`}>
            <button type='submit' className={styles.button}>
              Sign In
            </button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Main
