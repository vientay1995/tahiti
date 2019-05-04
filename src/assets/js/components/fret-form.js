const FretForm = () => {
  const $body = $('body');
  const $fretDepart = $('#fret-depart');
  const $fretDepart2 = $('#fret-depart-2');
  const $fretTicketNumber = $('#fret-ticket-number, #fret-ticket-number-2');
  const $flightTables = $('#flight-tables-modal');
  const $flightTablesContent = $('.flight-list-inner');
  const $closeFlightTables = $('.js-close-flight-list');

  const singleDatePickerOpts = {
    opens: 'left',
    singleDatePicker: true,
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

  const fireDatePicker = ($element, callback) => {
    $element.daterangepicker(singleDatePickerOpts, (start) => {
      $element.val(start.format('DD/MM/YYYY'));
      if (callback) {
        callback($element);
      }
    });
  };

  const focusOnFretTicketNumber = ($datePickerField) => {
    const $ticketNumberField = $datePickerField.closest('.fret-form-item').next().find('input');
    if (!$ticketNumberField) {
      return;
    }

    $ticketNumberField.focus();
  };

  $fretTicketNumber.on('focus', () => {
    $flightTables.addClass('shown');
  });

  $closeFlightTables.on('click', (e) => {
    e.preventDefault();
    $flightTables.removeClass('shown');
  });

  $body.mousedown((e) => {
    if (!$flightTablesContent.is(e.target) && $flightTablesContent.has(e.target).length === 0) {
      $flightTablesContent.parent().removeClass('shown');
    }
  });

  // SUMMARY HANDLING
  const $fretForm = $('#fret-form');
  const $summaryItems = $fretForm.find('[summary-data-from]');
  const $syncDataBtn = $fretForm.find('.js-sync-data');

  const summarySyncData = ($items) => {
    $items.each((idx) => {
      const $item = $summaryItems.eq(idx);
      const target = $item.attr('summary-data-from');
      const $targetField = $(`#${target}`);
      const value = $targetField.val();
      let label = '';
      if ($targetField.attr('data-has-label')) {
        if ($targetField.prop('tagName') === 'INPUT') {
          label = `${$targetField.next().text()}:`;
        } else if ($targetField.prop('tagName') === 'SELECT') {
          label = `${$targetField.prev().text()}:`;
        }
      }

      $item.text(`${label} ${value}`);
    });
  };

  $syncDataBtn.on('click', () => {
    summarySyncData($summaryItems);
  });

  fireDatePicker($fretDepart, focusOnFretTicketNumber);
  fireDatePicker($fretDepart2, focusOnFretTicketNumber);
};

export default FretForm;
