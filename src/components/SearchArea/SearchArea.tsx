import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { fetchMovies } from '../../slices/moviesSlice';
import { AppDispatch } from '../../store';
import Button from '../Button';
import Input from '../Input';
import styles from './SearchArea.module.scss';
import { setReleaseYear, setSearchTerm } from '../../slices/searchSlice';

const SearchArea: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = Yup.object().shape({
    searchTerm: Yup.string().trim().required('Search term is required'),
    releaseYear: Yup.string()
      .matches(/^\d{4}$/, 'Enter a valid year (e.g., 2024)')
      .nullable(),
  });

  return (
    <Formik
      initialValues={{
        searchTerm: 'Pokemon',
        releaseYear: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        setIsSubmitting(true);
        try {
          dispatch(setSearchTerm(values.searchTerm));
          dispatch(setReleaseYear(values.searchTerm));
          await dispatch(
            fetchMovies({
              searchTerm: values.searchTerm,
              releaseYear: values.releaseYear || undefined,
              page: 1,
            }),
          );
        } finally {
          setIsSubmitting(false);
        }
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit} className={styles.searchArea}>
          <div className={styles.inputContainer}>
            <Field
              name="searchTerm"
              as={Input}
              type="text"
              placeholder="Search by name"
            />
            <ErrorMessage
              name="searchTerm"
              component="div"
              className={styles.error}
            />
          </div>
          <div className={styles.inputContainer}>
            <Field
              name="releaseYear"
              as={Input}
              type="text"
              placeholder="Filter by year (optional)"
            />
            <ErrorMessage
              name="releaseYear"
              component="div"
              className={styles.error}
            />
          </div>
          <Button type="submit" variant="default" disabled={isSubmitting}>
            Search
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchArea;
