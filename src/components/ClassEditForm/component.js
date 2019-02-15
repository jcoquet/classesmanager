import React from 'react';
import { Formik, Field, Form } from 'formik';

export default class ClassEditForm extends React.Component {
  render() {
    if (!this.props.class) return null;

    return (
      <Formik
        initialValues={this.props.class}
        onSubmit={values => {
          this.props.updateClass(values);
        }}
        render={({ values }) => (
          <Form>
            <Field type="text" required name="name" />
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
            <button type="submit">Valider</button>
          </Form>
        )}
      />
    );
  }
}
