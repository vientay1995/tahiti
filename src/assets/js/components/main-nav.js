const MainNav = () => {
  // Elements
  const $body = $('body');
  const $navBtn = $('.main-nav__button');
  const $navItems = $('.main-nav__item');
  const $navLinks = $('.main-nav__item__link');
  const $mainNavList = $('.main-nav__list');
  const $closeSubmenuBtn = $('.main-nav__item__sub-menu-close');

  // Classes
  const navListActive = 'main-nav__list--active';
  const navItemActive = 'main-nav__item--active';

  // Funcs
  const navToggle = () => {
    $navBtn.on('click', () => {
      $mainNavList.toggleClass(navListActive);
    });
  };

  const submenuToggle = () => {
    $navLinks.on('click', (e) => {
      const $target = $(e.target);
      const $thisItem = $target.parent();

      $thisItem.siblings().removeClass(navItemActive);

      $thisItem.toggleClass(navItemActive);
    });

    $body.mouseup((e) => {
      if (!$navItems.is(e.target) && $navItems.has(e.target).length === 0) {
        $navItems.removeClass(navItemActive);
      }
    });
  };

  const closeSubmenu = () => {
    $closeSubmenuBtn.on('click', (e) => {
      const $thisItem = $(e.target).closest('.main-nav__item');
      $thisItem.removeClass(navItemActive);
    });
  };

  navToggle();
  submenuToggle();
  closeSubmenu();
};

export default MainNav;
