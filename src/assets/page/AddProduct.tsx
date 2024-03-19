import "./AddProduct.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createProduct } from "../../api/productApi";

const AddProduct = () => {
  const formik = useFormik({
    initialValues: {
      make: "",
      model: "",
      year: undefined,
      engine: "",
      transmission: "",
      price: undefined,
      link: "",
    },
    validationSchema: Yup.object({
      make: Yup.string()
        .matches(
          /^(?:[a-zA-Z0-9]+(?:\s|-|\(\))?)+$/,
          "Must be letters, dashes, numbers, spaces or the forllowing special characters: - ()"
        )
        .required("Required"),
      model: Yup.string()
        .matches(
          /^(?:[a-zA-Z0-9]+(?:\s|-|\(\))?)+$/,
          "Must be letters, dashes, numbers, spaces or the forllowing special characters: - ()"
        )
        .required("Required"),
      year: Yup.number()
        .min(1900, "Year must be after 1900")
        .required("Required"),
      engine: Yup.string()
        .matches(
          /^(?:[a-zA-Z0-9]+(?:\s|-|\(\))?)+$/,
          "Must be letters, dashes, numbers, spaces or the forllowing special characters: - ()"
        )
        .required("Required"),
      transmission: Yup.string()
        .matches(
          /^(?:[a-zA-Z0-9]+(?:\s|-|\(\))?)+$/,
          "Must be letters, dashes, numbers, spaces or the forllowing special characters: - ()"
        )
        .required("Required"),
      price: Yup.number().min(0, "Price must be above 0").required("Required"),
      link: Yup.string().url("Must be a valid URL"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await createProduct(values);
        console.log("Product added successfully", response.data);
      } catch (err) {
        console.error("Failed to add Product", err);
      } finally {
        resetForm({});
      }
    },
  });
  return (
    <>
      <form action="#" method="post" onSubmit={formik.handleSubmit}>
        <div className="header-contaner">
          <h1>Add Product</h1>
        </div>

        <div className="input-field">
          <input
            type="text"
            id="make"
            name="make"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.make}
            required
            pattern="^(?:[a-zA-Z0-9]+(?:\s|-|\(\))?)+$"
            placeholder=" "
          ></input>
          {formik.touched.make && formik.errors.make ? (
            <div className="requirement-message">{formik.errors.make}</div>
          ) : null}
          <label htmlFor="make">Make:</label>
        </div>

        <div className="input-field">
          <input
            type="text"
            id="model"
            name="model"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.model}
            required
            pattern="^(?:[a-zA-Z0-9]+(?:\s|-|\(\))?)+$"
            placeholder=" "
          ></input>
          {formik.touched.model && formik.errors.model ? (
            <div className="requirement-message">{formik.errors.model}</div>
          ) : null}
          <label htmlFor="model">Model:</label>
        </div>

        <div className="input-field">
          <input
            type="number"
            id="year"
            name="year"
            className="num"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.year}
            required
            pattern="^[1-9][0-9][0-9][0-9]$"
            placeholder=" "
          ></input>
          {formik.touched.year && formik.errors.year ? (
            <div className="requirement-message">{formik.errors.year}</div>
          ) : null}
          <label htmlFor="year">Year:</label>
        </div>

        <div className="input-field">
          <input
            type="text"
            id="engine"
            name="engine"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.engine}
            required
            pattern="^(?:[a-zA-Z0-9]+(?:\s|-|\(\))?)+$"
            placeholder=" "
          ></input>
          {formik.touched.engine && formik.errors.engine ? (
            <div className="requirement-message">{formik.errors.engine}</div>
          ) : null}
          <label htmlFor="engine">Engine Name:</label>
        </div>

        <div className="input-field">
          <input
            type="text"
            id="transmission"
            name="transmission"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.transmission}
            required
            pattern="^(?:[a-zA-Z0-9]+(?:\s|-|\(\))?)+$"
            placeholder=" "
          ></input>
          {formik.touched.transmission && formik.errors.transmission ? (
            <div className="requirement-message">
              {formik.errors.transmission}
            </div>
          ) : null}
          <label htmlFor="transmission">Transmission:</label>
        </div>

        <div className="input-field">
          <input
            type="nume"
            id="estimated_value_cad"
            name="estimated_value_cad"
            className="num"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
            required
            pattern="^\d*$"
            placeholder=" "
          ></input>
          {formik.touched.price && formik.errors.price ? (
            <div className="requirement-message">{formik.errors.price}</div>
          ) : null}
          <label htmlFor="estimated_value_cad">Price:</label>
        </div>

        <div className="input-field image-link">
          <input
            type="url"
            id="image"
            name="link"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.link}
            required
            // pattern="^\d\d\d\d$"
            placeholder=" "
          ></input>
          {formik.touched.link && formik.errors.link ? (
            <div className="requirement-message">{formik.errors.link}</div>
          ) : null}
          <label htmlFor="image">Image Link:</label>
        </div>

        <input type="submit" value="Submit"></input>
      </form>
    </>
  );
};

export default AddProduct;
