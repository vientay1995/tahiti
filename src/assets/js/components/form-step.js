const FormStep = () => {
  const $body = $('body, html');
  const $stepSwitch = $('[data-to-step]');
  const $formSteps = $('.js-form-step');
  const $breadcrumbSteps = $('.js-bc-step');
  const $breadcrumb = $('.breadcrumbs');
  const top = $breadcrumb.length ? $breadcrumb.offset().top : 0;

  $formSteps.eq(0).addClass('active');
  $breadcrumbSteps.eq(0).addClass('active');

  $stepSwitch.on('click', (e) => {
    e.preventDefault();
    const $target = $(e.target);
    const toStep = $target.data('to-step');
    const $toStep = $(`.${toStep}`);
    const $toStepBc = $(`.bc-${toStep}`);
    $formSteps.slideUp(700);
    $toStep.slideDown(700);
    $breadcrumbSteps.removeClass('active');
    $toStepBc.addClass('active');

    $body.animate({
      scrollTop: top,
    }, 500);
  });
};

export default FormStep;
