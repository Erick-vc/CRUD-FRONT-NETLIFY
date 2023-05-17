import axios from "axios";

export const getTasksRequest = async () => 
  await axios.get('https://crud-back-railway-production.up.railway.app/');

export const createTaskRequest = async (task) => 
  await axios.post('https://crud-back-railway-production.up.railway.app/customers', task);

export const deleteTaskRequest = async (id) => 
  await axios.delete(`https://crud-back-railway-production.up.railway.app/customers/${id}`);

export const getTaskRequest = async (id) => 
  await axios.get(`https://crud-back-railway-production.up.railway.app/customers/${id}`);

export const updateTaskRequest = async (id, newFields) => 
  await axios.put(`https://crud-back-railway-production.up.railway.app/customers/${id}`, newFields)

export const toggleTaskDoneRequest = async (id, done) => 
  await axios.put(`https://crud-back-railway-production.up.railway.app/customers/${id}`, {
    done
  })