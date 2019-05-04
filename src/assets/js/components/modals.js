const Modals = () => {
  const $body = $('body');
  const $tahitiModalContent = $('.tahiti-modal-inner');
  // Close modals
  const $closeModal = $('.tahiti-close-modal');
  $closeModal.on('click', (e) => {
    const $target = $(e.target);
    const $modal = $target.closest('.tahiti-modal');

    $modal.removeClass('shown');
    $body.removeClass('modal-open');
  });

  $body.mouseup((e) => {
    if (!$tahitiModalContent.is(e.target) && $tahitiModalContent.has(e.target).length === 0) {
      $tahitiModalContent.parent().removeClass('shown');
      $body.removeClass('modal-open');
    }
  });

  // Cookie modal
  const $cookieModal = $('.cookie-modal');
  const $cookieModalAccept = $('.cookie-modal-accept');

  $cookieModal.addClass('shown');
  $cookieModalAccept.on('click', () => {
    $cookieModal.removeClass('shown');
  });

  // Newsletter modal
  const $newsletterButton = $('.newsletter__button');
  const $newsletterModal = $('.newsletter-modal');

  $newsletterButton.on('click', () => {
    // e.preventDefault();
    $newsletterModal.addClass('shown');
    $body.addClass('modal-open');
  });
};

export default Modals;
