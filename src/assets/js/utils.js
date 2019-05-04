import { map } from 'lodash';

const $body = $('body');
export const customSelect = ($elements) => {
  if (!$elements.length) {
    return false;
  }

  const generateOptions = ($elm) => {
    const $select = $elm.find('select');
    const $options = $select.find('option');
    const options = map($options, opt => `<li> ${$(opt).val()} </li>`);
    const fakeSelect = `<div class='custom-select-wrapper'>
                        <span class='fake-field'></span>
                        <ul class='fake-list'>${options.join('')}</ul>
                      </div>`;

    $elm.addClass('custom-select');
    $elm.append(fakeSelect);
  };

  $elements.each((index) => {
    const $elm = $elements.eq(index);
    if (!$elm.hasClass('custom-select')) {
      generateOptions($elm);
    }
  });

  $body.on('click', '.custom-select .fake-field', (e) => {
    const $target = $(e.target);
    const $element = $target.closest('.custom-select');
    const $fakeList = $target.next();

    $fakeList.addClass('active');
    $element.addClass('max-index');
    $element.addClass('focused');
  });

  $body.on('click', '.custom-select li', (e) => {
    const $target = $(e.target);
    const $element = $target.closest('.custom-select');
    const $fakeField = $element.find('.fake-field');
    const $fakeList = $target.parent();
    const $select = $element.find('select');
    const val = $target.text().trim();

    $fakeList.removeClass('active');
    $element.removeClass('max-index');
    $fakeField.text(val);
    // const $options = $select.find('option');
    // const $opt = filter($options, opt => $(opt).val().trim() === val)[0];
    $select.val(val).prop('selected', true);

    if ($fakeField.text()) {
      $element.addClass('focused');
    } else {
      $element.removeClass('focused');
    }
  });

  $body.on('mouseup', (e) => {
    const $fakeList = $('.fake-list');
    if (!$fakeList.is(e.target) && $fakeList.has(e.target).length === 0) {
      $fakeList.removeClass('active');
      $fakeList.closest('.custom-select').removeClass('max-index');

      $fakeList.closest('.custom-select').each((idx) => {
        const $elm = $fakeList.closest('.custom-select').eq(idx);
        if (!$elm.find('.fake-field').text()) {
          $elm.removeClass('focused');
        }
      });
    }
  });
  return true;
};

export const inputAnimation = ($input) => {
  if (!$input.length) {
    return;
  }

  $input.on('focus', (e) => {
    const $target = $(e.target);
    const $wrapper = $target.parent();

    $wrapper.addClass('focused');
  });

  $input.on('blur change', (e) => {
    const $target = $(e.target);
    const $wrapper = $target.parent();
    if (!$target.val()) {
      $wrapper.removeClass('focused');
    }
  });
};

export const createGroup = (html, $fields, start, titleText) => {
  let newGroup = html;
  const itemsToReplace = [];

  $fields.each((idx) => {
    const $elm = $fields.eq(idx);
    const id = $elm.attr('id');
    itemsToReplace.push(id);
  });

  itemsToReplace.forEach((item) => {
    const id = `id="${item}"`;
    const idTo = `id="${item}-${start}"`;
    const name = `name="${item}"`;
    const nameTo = `name="${item}-${start}"`;
    const title = `<h4 class="form-group__title">${titleText} 1</h4>`;
    const titleTo = `<h4 class="form-group__title">${titleText} ${start}</h4>`;

    newGroup = newGroup.replace(title, titleTo);
    newGroup = newGroup.replace(id, idTo);
    newGroup = newGroup.replace(name, nameTo);
  });

  return newGroup;
};

export const singleDatePickerOpts = {
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
