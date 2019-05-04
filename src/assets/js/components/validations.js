import 'jquery-validation';

const validationForm = () => {
  const setRules = ($element) => {
    $element.rules('add', {
      required: true,
      messages: {
        required: 'Obligatoire',
        email: 'Email invalide',
      },
    });
  };

  // Newsletter form validation
  (function validateNewsletter() {
    const $newsletterForm = $('#newsletter-form');
    const $newsletterSubmitBtn = $('#newsletter-submit');
    const $newsletterFields = $newsletterForm.find('input:required');
    const $fieldName = $('#newsletter-name');
    const $fieldFirstName = $('#newsletter-first-name');
    const $fieldEmail = $('#newsletter-email');

    const newsletterOpts = {
      rules: {
        'newsletter-email': {
          required: true,
          email: true,
        },
      },
    };

    const newsletterValidator = $newsletterForm.validate(newsletterOpts);

    $newsletterSubmitBtn.on('click', () => {
      newsletterValidator.form();
      setRules($fieldName);
      setRules($fieldFirstName);
      setRules($fieldEmail);

      $newsletterFields.on('keydown change', (e) => {
        const $field = $(e.target);
        newsletterValidator.element($field);
        setRules($field);
      });
    });
  }());

  (function validateBookingbar() {
    const $bookingForm = $('#booking-form');
    const $bookingFields = $bookingForm.find('input:required');
    const $bookingSubmitBtn = $('#booking-form-submit');
    const $fieldDepart = $('[name="b-depart"]');
    const $fieldArrive = $('[name="b-arrive"]');

    const bookingFormValidator = $bookingForm.validate();

    $bookingSubmitBtn.on('click', () => {
      bookingFormValidator.form();
      setRules($fieldDepart);
      setRules($fieldArrive);

      $bookingFields.on('keydown change', (e) => {
        const $field = $(e.target);
        bookingFormValidator.element($field);
        setRules($field);
      });
    });
  }());
};

export default validationForm;
