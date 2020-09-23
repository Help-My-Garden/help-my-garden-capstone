import React, {useState} from 'react';
import * as Yup from "yup";
import {Formik} from "formik";
import {useDispatch} from "react-redux";
import { fetchPlantsByCommonName } from "../../../../store/plants";
import { SearchFormContent } from './SearchFormContent'

export const PlantSearchForm = () => {
	const plant = {
		plantCommonName: "",
	};

	const dispatch = useDispatch()

	const [status, setStatus] = useState(null);
	const validator = Yup.object().shape({
		plantCommonName: Yup.string()
			.required("requires search content"),
	});

	const submitSearch = (values) => {

						dispatch(fetchPlantsByCommonName(values.plantCommonName))

	};


	return (

		<Formik
			initialValues={plant}
			onSubmit={submitSearch}
			validationSchema={validator}
		>
			{SearchFormContent}
		</Formik>

	)
};