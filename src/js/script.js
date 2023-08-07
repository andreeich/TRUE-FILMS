// ! Do not update!!! Custom changes.
// ? From Flowbite Datepicker
import './datepicker';

import setupDropdown from './dropdown';
import setupMobileMenu from './mobileMenu';
import setupPreloader from './preloader';
import setupBtnHex from './btnHex';
import setupScrollTo from './scrollTo';
import './slider';

setupDropdown('[data-type="dropdown"]');
setupMobileMenu('mobile-menu');
setupPreloader();
setupBtnHex('.btn-hex');
setupScrollTo('header nav a', 'mobile-menu');
