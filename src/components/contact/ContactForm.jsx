
const ContactForm = ({ formik }) => (
  <form className="contact-form" onSubmit={formik.handleSubmit}>
    <div className="form-group name-group">
      <div className="form-field">
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <span className="error-message">{formik.errors.firstName}</span>
        ) : null}
      </div>
      <div className="form-field">
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <span className="error-message">{formik.errors.lastName}</span>
        ) : null}
      </div>
    </div>

    <div className="form-group">
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? (
        <span className="error-message">{formik.errors.email}</span>
      ) : null}
    </div>

    <div className="form-group">
      <input
        type="text"
        id="subject"
        name="subject"
        placeholder="Subject"
        value={formik.values.subject}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.subject && formik.errors.subject ? (
        <span className="error-message">{formik.errors.subject}</span>
      ) : null}
    </div>

    <div className="form-group">
      <textarea
        id="message"
        name="message"
        placeholder="Message"
        rows="5"
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      ></textarea>
      {formik.touched.message && formik.errors.message ? (
        <span className="error-message">{formik.errors.message}</span>
      ) : null}
    </div>

    <button type="submit" className="contact-button submit-button">
      Submit Message
    </button>
  </form>
);

export default ContactForm