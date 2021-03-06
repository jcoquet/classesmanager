import React from 'react';
import { Formik, Field, Form } from 'formik';

export default class NewClass extends React.Component {
  render() {
    return (
      <Formik
        onSubmit={values => {
          this.props.addClass(values);
        }}
        render={({ values }) => (
          <Form>
            <Field type="text" required name="name" value={values.name || ''} />
            <Field
              name="level"
              required
              component="select"
              placeholder="Classe"
            >
              <option />
              <option>cp</option>
              <option>ce1</option>
              <option>ce2</option>
              <option>cm1</option>
              <option>cm2</option>
            </Field>
            <button type="submit">Nouvelle classe</button>
          </Form>
        )}
      />
    );
  }
}
