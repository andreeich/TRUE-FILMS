import setupDropdown from './dropdown';
import setupMobileMenu from './mobileMenu';
import setupPreloader from './preloader';
import setupBtnHex from './btnHex';
import './slider';
// ! Do not update!!! Custom changes.
import 'flowbite/dist/datepicker';

setupDropdown('[data-type="dropdown"]');
setupMobileMenu('mobile-menu');
setupPreloader();
setupBtnHex('.btn-hex');
