import 'jquery-ui/ui/widgets/autocomplete';
import 'daterangepicker';
import Destination from '../fixtures/destinations';

const BookingBar = () => {
  // Autocomplete
  const $bookingDepart = $('[name="b-depart"]');
  const $bookingArrive = $('[name="b-arrive"]');

  $bookingDepart.autocomplete({
    source: Destination,
    select: () => {
      $bookingArrive.focus();
    },
    minLength: 0,
  });

  $bookingDepart.on('focus', (e) => {
    $(e.target).autocomplete('search', '');
  });

  $bookingArrive.autocomplete({
    source: Destination,
    minLength: 0,
  }).focus((e) => {
    $(e.target).autocomplete('search', '');
  });

  // Date picker
  const $bookingDepartDate = $('[name="b-depart-date"]');
  const $bookingArriveDate = $('[name="b-retour-date"]');
  const $datepickerFields = $('.datepicker-field');
  const datePickerOpts = {
    opens: 'left',
    autoApply: true,
    autoUpdateInput: false,
    locale: {
      firstDay: 1,
      monthNames: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
    },
  };

  $datepickerFields.on('show.daterangepicker', (e, picker) => {
    const $picker = picker.container;
    $picker.addClass('shown');
  });

  $datepickerFields.on('hide.daterangepicker', (e, picker) => {
    const $picker = picker.container;
    $picker.removeClass('shown');
  });

  const updateDatepicker = (start, end) => {
    $bookingDepartDate.val(start.format('DD/MM/YYYY'));
    $bookingArriveDate.val(end.format('DD/MM/YYYY'));

    $bookingDepartDate.data('daterangepicker').setStartDate(start);
    $bookingDepartDate.data('daterangepicker').setEndDate(end);

    $bookingArriveDate.data('daterangepicker').setStartDate(start);
    $bookingArriveDate.data('daterangepicker').setEndDate(end);
  };

  $bookingDepartDate.daterangepicker(datePickerOpts, (start, end) => {
    updateDatepicker(start, end);
  });

  $bookingArriveDate.daterangepicker(datePickerOpts, (start, end) => {
    updateDatepicker(start, end);
  });

  // Radio check
  const $ticketType = $('[name="ticket-type"]');
  const $retourItem = $bookingArriveDate.closest('.booking-input--date');

  $ticketType.on('change', () => {
    const value = $('[name="ticket-type"]:checked').val();

    if (value === 'aller_simple') {
      $retourItem.hide();
    } else {
      $retourItem.show();
    }
  });

  // Select passengers
  const $passengers = $('[name="passengers"]');
  const $discount = $('[name="discount"]');
  const $passengersInfo = $('.passengers-info');
  const $passengersInfoCustom = $('.passengers-info-custom');
  const $passengersInfoItems = $passengersInfo.find('.passenger-info-item');
  const $passengersInfoCustomItems = $passengersInfoCustom.find('.passenger-info-item');

  $passengersInfoCustom.hide();
  $passengersInfoItems.hide();
  $passengersInfoCustomItems.hide();

  $passengersInfoItems.eq(0).show();
  $passengersInfoCustomItems.eq(0).show();

  $discount.on('change', (e) => {
    const $target = $(e.target);
    if ($target.is(':checked')) {
      $passengersInfo.hide();
      $passengersInfoCustom.show();
    } else {
      $passengersInfo.show();
      $passengersInfoCustom.hide();
    }
  });

  $passengers.on('change', (e) => {
    const $target = $(e.target);
    const value = Number($target.find(':selected').val());

    $passengersInfoItems.hide();
    $passengersInfoCustomItems.hide();

    for (let i = 0; i < value; i += 1) {
      $passengersInfoItems.eq(i).show();
      $passengersInfoCustomItems.eq(i).show();
    }
  });
};

export default BookingBar;
