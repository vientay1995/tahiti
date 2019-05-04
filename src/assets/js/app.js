import 'jquery';
// import 'bootstrap';

import Inputmask from 'inputmask';
import MainNav from './components/main-nav';
import CustomForm from './components/custom-form';
import Sliders from './components/sliders';
import FormStep from './components/form-step';
import Modals from './components/modals';
import BookingBar from './components/booking-bar';
import FretForm from './components/fret-form';
import FretGroupsHandler from './components/fret-groups-handler';
import MultiIlesGroupHandler from './components/multi-iles-group-handler';
import ValidationForm from './components/validations';

class App {
  constructor() {
    MainNav();
    CustomForm();
    Sliders();
    FormStep();
    Modals();
    BookingBar();
    FretForm();
    FretGroupsHandler();
    MultiIlesGroupHandler();
    ValidationForm();
    Inputmask().mask(document.querySelectorAll('input'));
  }

  static factory() {
    const app = new App();
    return app;
  }
}

export default App;

$(() => {
  App.factory();
});
