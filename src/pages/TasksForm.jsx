import { Form, Formik, useFormik } from "formik";
import { useTask } from "../context/TaskProvider.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import * as Yup from "yup";

const TasksForm = () => {
  const { createTask, getTask, updateTask } = useTask();
  const params = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState({
    name: "",
    last_name: "",
    email: "",
  });

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({
          name: task.name,
          last_name: task.last_name,
          email: task.email,
        });
      }
    };
    loadTask();
  }, []);

  // * Mensaje de alerta
  const [mensaje, guardarMensaje] = useState(null);


    const schemaValidacion = Yup.object({
      name: Yup.string().required("* Name is required"),
      last_name: Yup.string().required("* Last name is required"),
      email: Yup.string()
        .email("* Invalid email")
        .required("* Email is required"),
    })

    const actualizarInfoCliente = async (values) => {

      try {
        if (params.id) {
          await updateTask(params.id, values);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Client edited successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          await createTask(values);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Client register correct",
            showConfirmButton: false,
            timer: 1500,
          });
        }

        setTimeout(() => {
          navigate("/");
          setTask({
            name: "",
            last_name: "",
            email: "",
          });
        }, 1500);

      } catch (error) {
        guardarMensaje(error.message);
        setTimeout(() => {
          guardarMensaje(null);
        }, 2000);
      }
    }

  return (
    <div className="">
      <Formik 
        validationSchema={schemaValidacion}
        enableReinitialize
        initialValues={task}
        onSubmit={(values) => {
          actualizarInfoCliente(values);
        }}
      >
        {(props) => (
          <Form
            className=" flex flex-col gap-2 bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-20">
            <h1 className="text-xl font-bold uppercase text-center">
              {params.id ? "Edit Client" : "New Client"}
            </h1>

            <label className="block">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Write a name"
              className="outline-none px-2 py-1 rounded-sm w-full"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
            />
            {props.touched.name && props.errors.name ? (
              <p className="mb-2 pl-1 border-l-4 border-gray-500 text-red-500 text-xs italic">
                {props.errors.name}
              </p>
            ) : null}
            <label className="block">Last name</label>
            <input
              name="last_name"
              placeholder="Write a last name"
              className="outline-none px-2 py-1 rounded-sm w-full"
              onChange={props.handleChange}
              value={props.values.last_name}></input>
            {props.touched.last_name && props.errors.last_name ? (
              <p className="mb-2 pl-1 border-l-4 border-gray-500 text-red-500 text-xs italic">
                {props.errors.last_name}
              </p>
            ) : null}
            <label className="block">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Write a email"
              className="outline-none px-2 py-1 rounded-sm w-full"
              onChange={props.handleChange}
              value={props.values.email}></input>
            {props.touched.email && props.errors.email ? (
              <p className="mb-2 pl-1 border-l-4 border-gray-500 text-red-500 text-xs italic">
                {props.errors.email}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={props.isSubmitting}
              className="mt-2 uppercase font-bold block bg-indigo-500 py-2 text-white w-full rounded-md">
              {props.isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TasksForm;
