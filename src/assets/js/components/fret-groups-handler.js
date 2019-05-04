import { customSelect, createGroup } from '../utils';

const FretGroupsHandler = () => {
  const $body = $('body');
  const $initGroup = $('.package-description-group');
  const $initFields = $initGroup.find('input[type="text"], select');
  const $addGroupBtn = $('.js-fret-add-group');
  const $groupHandleBtns = $('.group-handle-buttons');
  const $selectItems = $('.select-item--placeholder');
  let start = 2;
  const groupHtml = !$initGroup.length ? ''
    : `<div class="form-group form-group--fret package-description-group added-group">
      <button class="fret-groupe-close-btn js-close-group">
        <i class="icon icon-remove"></i>
      </button>
      ${$initGroup.html()}
    </div>`;

  $groupHandleBtns.before(createGroup(groupHtml, $initFields, start, 'Groupe'));

  $addGroupBtn.on('click', () => {
    start += 1;
    const $prevGroup = $('.added-group');
    const newGroup = createGroup(groupHtml, $initFields, start, 'Groupe');
    $groupHandleBtns.before(newGroup);
    $prevGroup.find('.js-close-group').hide();
    customSelect($selectItems);
  });

  $body.on('click', '.js-close-group', (e) => {
    const $target = $(e.target);
    const $currentGroup = $target.closest('.added-group');
    const $prevGroup = $currentGroup.prev();

    start -= 1;
    $currentGroup.remove();
    $prevGroup.find('.js-close-group').show();
  });
};

export default FretGroupsHandler;
