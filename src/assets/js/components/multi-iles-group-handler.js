import {
  createGroup, customSelect, inputAnimation, singleDatePickerOpts,
} from '../utils';

const MultiIlesGroupHandler = () => {
  const $body = $('body');

  const fireDatePicker = ($element) => {
    const opts = singleDatePickerOpts;
    $element.daterangepicker(opts, (start) => {
      $element.val(start.format('DD/MM/YYYY'));
    });

    $element.on('show.daterangepicker', (e, picker) => {
      const $picker = picker.container;
      $picker.addClass('shown');
    });

    $element.on('hide.daterangepicker', (e, picker) => {
      const $picker = picker.container;
      $picker.removeClass('shown');
    });
  };

  // VOLS VARIABLES
  let volStart = 2;
  const $volGroup = $('.vol-group');
  const $volFields = $volGroup.find('input[type="text"], select');
  const $volGroupHandleButtons = $('.vol-group-handle-buttons');
  const $addVolGroup = $('.js-add-vol-group');
  const $selectItems = $('.select-item--placeholder');
  const volGroupHtml = !$volGroup.length ? ''
    : `<div class="form-group form-group--fret multi-iles-group vol-group added-group">
      <button class="fret-groupe-close-btn js-remove-multi-iles-group">
        <i class="icon icon-remove"></i>
      </button>
      ${$volGroup.html()}
    </div>`;

  // PASSENGERS VARIABLES
  let passengerStart = 2;
  const $passengerGroupWrapper = $('.passenger-groups');
  const $passengerGroup = $('.passenger-group--init');
  const $passengerFields = $passengerGroup.find('input[type="text"], select');
  const $addPassengerGroup = $('.js-add-passenger-group');
  const passengerGroupHtml = !$passengerGroup.length ? ''
    : `<div class="form-group form-group--fret multi-iles-group passenger-group added-group">
      <button class="fret-groupe-close-btn js-remove-multi-iles-group">
        <i class="icon icon-remove"></i>
      </button>
      ${$passengerGroup.html()}
    </div>`;

  // VOLS HANDLING
  const multiIlesDepart = '#multi-iles-depart';
  fireDatePicker($(multiIlesDepart));
  $volGroupHandleButtons.before(createGroup(volGroupHtml, $volFields, volStart, 'Vol'));
  fireDatePicker($(`${multiIlesDepart}-${volStart}`));
  inputAnimation($('.input-animation input'));

  $addVolGroup.on('click', () => {
    volStart += 1;
    const $prevGroup = $('.vol-group.added-group');
    const newGroup = createGroup(volGroupHtml, $volFields, volStart, 'Vol');
    $volGroupHandleButtons.before(newGroup);
    $prevGroup.find('.js-remove-multi-iles-group').hide();
    customSelect($selectItems);
    inputAnimation($('.input-animation input'));
    fireDatePicker($(`${multiIlesDepart}-${volStart}`));
  });

  // PASSENGERS HANDLING
  $passengerGroupWrapper.append(createGroup(passengerGroupHtml, $passengerFields, passengerStart, 'Passager'));
  $addPassengerGroup.on('click', () => {
    passengerStart += 1;
    const $prevGroup = $('.passenger-group.added-group');
    const newGroup = createGroup(passengerGroupHtml, $passengerFields, passengerStart, 'Passager');
    $passengerGroupWrapper.append(newGroup);
    $prevGroup.find('.js-remove-multi-iles-group').hide();
    customSelect($selectItems);
  });

  $body.on('click', '.js-remove-multi-iles-group', (e) => {
    const $target = $(e.target);
    const $currentGroup = $target.closest('.added-group');
    const $prevGroup = $currentGroup.prev();

    $currentGroup.remove();
    $prevGroup.find('.js-remove-multi-iles-group').show();
    if ($currentGroup.hasClass('vol-group')) {
      volStart -= 1;
    }

    if ($currentGroup.hasClass('passenger-group')) {
      passengerStart -= 1;
    }
  });
};

export default MultiIlesGroupHandler;
