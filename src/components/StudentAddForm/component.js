// EditUserDialog.js
import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Button, Classes, HTMLSelect } from '@blueprintjs/core';
import { DateInput } from '@blueprintjs/datetime';

export default class StudentAddForm extends React.Component {
  componentDidMount() {
    if (Object.values(this.props.classesList).length < 1) {
      this.props.loadAllClasses();
    }
  }

  render() {
    if (Object.values(this.props.classesList).length < 1) return null;
    return (
      <Formik
        //initialValues={user /** { email, social } */}
        onSubmit={(values, actions) => {
          this.props.addStudent(values);
        }}
        render={({ errors, status, touched, isSubmitting }) => (
          <Form autoComplete={false}>
            <Field
              type="text"
              required
              name="firstname"
              className={Classes.INPUT}
              placeholder="Prénom"
            />
            <Field
              type="text"
              required
              name="lastname"
              className={Classes.INPUT}
              placeholder="Nom"
            />
            <Field
              type="date"
              required
              name="birthdate"
              component={DateInput}
              formatDate={date => date.toLocaleString()}
              parseDate={str => new Date(str)}
            />
            <Field
              name="classId"
              required
              component={HTMLSelect}
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
            <Button type="submit">Valider</Button>
          </Form>
        )}
      />
    );
  }
}
