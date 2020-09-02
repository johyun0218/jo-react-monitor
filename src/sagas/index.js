import {takeEvery, call, put} from 'redux-saga/effects'
import {
  FETCH_USER, RECEIVE_USER, REQEUST_USER, ADD_USER, EDIT_USER
} from '../reducers/user'
import * as api from '../api'