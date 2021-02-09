import axios from 'axios'
import Cookies from 'universal-cookie'

import { handleResponse } from './handleResponse'

const BASE_URL = 'http://192.168.1.70:3000'

/** USER **/
export async function APICreateUser(user) {
  return await handleResponse(axios.post(`${BASE_URL}/v1/users/create`, user))
}
export async function APILogin(user) {
  return await handleResponse(axios.post(`${BASE_URL}/v1/users/login`, user))
}

/** USER --> SETTINGS **/
export async function APIUpdateUserData(type, data) {
  return await handleResponse(axios.put(`${BASE_URL}/v1/users/reset/${type}`, data, setHeaders()))
}

/** QUIZZES **/
export async function APIGetQuizzes(type) {
  return await handleResponse(axios.get(`${BASE_URL}/v1/quizzes/type/${type}`, setHeaders()))
}
export async function APIGetQuestionsQuiz(quizId) {
  return await handleResponse(axios.get(`${BASE_URL}/v1/quizzes/${quizId}`, setHeaders()))
}
export async function APIResultQuiz(answers) {
  return await handleResponse(axios.post(`${BASE_URL}/v1/quizzes/result`, answers, setHeaders()))
}

/** LEADERBOARD **/
export async function APIGetLeaderBoard(page = 1, limit = 5) {
  return await handleResponse(axios.get(`${BASE_URL}/v1/leaderboard?page=${page}&limit=${limit}`, setHeaders()))
}

/** NOTIFICATIONS **/
export async function APIGetUnviewedNotifications() {
  return await handleResponse(axios.get(`${BASE_URL}/v1/notifications/unviewed`, setHeaders()))
}
export async function APICleanViewedNotifications() {
  return await handleResponse(axios.put(`${BASE_URL}/v1/notifications/viewed`, null, setHeaders()))
}

/** LESSONS **/
export async function APIGetLessons(type) {
  return await handleResponse(axios.get(`${BASE_URL}/v1/lessons/type/${type}`, setHeaders()))
}
export async function APIGetLesson(lessonId) {
  return await handleResponse(axios.get(`${BASE_URL}/v1/lessons/${lessonId}`, setHeaders()))
}
export async function APIMarkAsReadLesson(lesson) {
  return await handleResponse(axios.put(`${BASE_URL}/v1/lessons/lecture`, lesson, setHeaders()))
}

function setHeaders(values = {}) {
  const cookies = new Cookies(),
    headers = {
      ...values,
      Authorization: cookies.get('token'),
      iso: cookies.get('iso')
    }

  console.log(cookies.get('iso'))
  return {
    headers
  }
}