import axios from "axios";

export const getTasksRequest = async () => 
  await axios.get('crud-back-railway-production.up.railway.app/customers');

export const createTaskRequest = async (task) => 
  await axios.post('crud-back-railway-production.up.railway.app/customers', task);

export const deleteTaskRequest = async (id) => 
  await axios.delete(`crud-back-railway-production.up.railway.app/customers/${id}`);

export const getTaskRequest = async (id) => 
  await axios.get(`crud-back-railway-production.up.railway.app/customers/${id}`);

export const updateTaskRequest = async (id, newFields) => 
  await axios.put(`crud-back-railway-production.up.railway.app/customers/${id}`, newFields)

export const toggleTaskDoneRequest = async (id, done) => 
  await axios.put(`hcrud-back-railway-production.up.railway.app/customers/${id}`, {
    done
  })