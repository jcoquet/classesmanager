// EditUserDialog.js
import React from 'react';
import { Formik, Field, Form } from 'formik';

export default class StudentEditForm extends React.Component {
  componentDidMount() {
    if (Object.values(this.props.classesList).length < 1) {
      this.props.loadAllClasses();
    }
  }

  render() {
    if (Object.values(this.props.classesList).length < 1) return null;

    const studentId = this.props.match.params.id;

    const student = this.props.students[studentId];

    if (!student) return "Cet élève n'existe pas.";

    return (
      <Formik
        initialValues={student}
        onSubmit={(values, actions) => {
          this.props.updateStudent(values);
        }}
        render={({ errors, status, touched, isSubmitting }) => (
          <Form>
            <Field type="text" name="firstname" />
            <Field type="text" name="lastname" />
            <Field type="date" name="birthdate" />
            <Field
              name="classId"
              required
              component="select"
              placeholder="Classe"
            >
              <option />
              {Object.values(this.props.classesList).map(item => (
                <option key={item.id} value={item.id}>
                  {item.name} ({item.level})
                </option>
              ))}
            </Field>
            {status && status.msg && <div>{status.msg}</div>}
            <button type="submit">Submit</button>
          </Form>
        )}
      />
    );
  }
}
