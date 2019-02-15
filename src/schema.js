import { schema } from 'normalizr';

export const studentSchema = new schema.Entity('student');
export const classSchema = new schema.Entity('class', {
  students: [studentSchema]
});
export const classListSchema = [classSchema];
