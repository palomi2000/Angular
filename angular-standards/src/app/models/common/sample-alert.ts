import {
  SweetAlertGrow,
  SweetAlertIcon,
  SweetAlertInput,
  SweetAlertPosition,
} from 'sweetalert2';

//https://sweetalert2.github.io/#configuration
export class SampleAlert {
  title?: string; //The title of the popup, as HTML.
  titleText?: string; //The title of the popup, as text. Useful to avoid HTML injection.
  text?: string; //A description for the popup, If text and html parameters are provided in the same time, html will be used.
  html?: string; //A HTML description for the popup. If text and html parameters are provided in the same time, html will be used. [Security] SweetAlert2 does NOT sanitize this parameter. It is the developer's responsibility to escape any user input when using the html option, so XSS attacks would be prevented.
  icon?: SweetAlertIcon; //The icon of the popup. Icon animation: warning, error, success, info, and question.
  iconColor?: string; //Use this to change the color of the icon.
  iconHtml?: string; //The custom HTML content for an icon.
  showConfirmButton?: boolean = false; //If set to false, a "Confirm"-button will not be shown.
  showDenyButton?: boolean = false; //If set to true, a "Deny"-button will be shown. It can be useful when you want a popup with 3 buttons.
  showCancelButton?: boolean = false; //If set to true, a "Cancel"-button will be shown, which the user can click on to dismiss the modal.
  reverseButtons: boolean = false; //Set to true if you want to invert default buttons positions ("Confirm"-button on the right side).
  confirmButtonText?: string = 'Ok'; //Use this to change the text on the "Confirm"-button.
  denyButtonText?: string = 'Deny'; //Use this to change the text on the "Deny"-button.
  cancelButtonText?: string = 'Cancel'; //Use this to change the text on the "Cancel"-button.
  confirmButtonColor?: string; //Use this to change the background color of the "Confirm"-button. The default color is #3085d6
  denyButtonColor?: string; //Use this to change the background color of the "Deny"-button. The default color is #dd6b55
  cancelButtonColor?: string; //Use this to change the background color of the "Cancel"-button. The default color is #aaa
  position?: SweetAlertPosition; //Popup window position, can be 'top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', or 'bottom-end'.
  timer?: number; //Auto close timer of the popup. Set in ms (milliseconds). See also Swal.getTimerLeft(), Swal.stopTimer(), Swal.resumeTimer(), Swal.toggleTimer(), Swal.isTimerRunning() and Swal.increaseTimer().
  timerProgressBar?: boolean; //If set to true, the timer will have a progress bar at the bottom of a popup. Mostly, this feature is useful with toasts.
  width?: number | string; //Popup window width, including paddings (box-sizing: border-box). Can be in px or %. The default width is 32rem.
  padding?: number | string; //Popup window padding. The default padding is 1.25rem.
  footer?: string; //The footer of the popup. Can be either plain text or HTML.
  showClass?: SilAlertAnimation; //CSS classes for animations when showing a popup (fade in)
  hideClass?: SilAlertAnimation; //CSS classes for animations when hiding a popup (fade out)
  backdrop?: boolean | string = true; //Whether or not SweetAlert2 should show a full screen click-to-dismiss backdrop. Can be either a boolean or a string which will be assigned to the CSS background property.
  toast?: boolean; //Whether or not an alert should be treated as a toast notification. This option is normally coupled with the position parameter and a timer. Toasts are NEVER autofocused.
  target?: string; //The container element for adding popup into.
  input?: SweetAlertInput; //Input field type, can be text, email, password, number, tel, range, textarea, select, radio, checkbox, file and url.
  color?: string; //Color for title, content and footer (CSS color property). The default color is '#545454'.
  background?: string; //Popup window background (CSS background property). The default background is '#fff'.
  grow?: SweetAlertGrow; //Paired with window position, sets the direction the popup should grow in, can be set to 'row', 'column', 'fullscreen', or false.
  heightAuto?: boolean; //By default, SweetAlert2 sets html's and body's CSS height to auto !important. If this behavior isn't compatible with your project's layout, set heightAuto to false.
  didOpen?: any; //Popup lifecycle hook. Asynchronously runs after the popup has been shown on screen. Provides popup DOM element as the argument
  allowOutsideClick?: boolean = false; //If set to false, the user can't dismiss the popup by clicking outside it. You can also pass a custom function returning a boolean value, e.g. if you want to disable outside clicks for the loading state of a popup.
  allowEscapeKey?: boolean; //If set to false, the user can't dismiss the popup by pressing the Esc key. You can also pass a custom function returning a boolean value, e.g. if you want to disable the Esc key for the loading state of a popup.
  allowEnterKey?: boolean; //If set to false, the user can't confirm the popup by pressing the Enter or Space keys, unless they manually focus the confirm button. You can also pass a custom function returning a boolean value.
  buttonsStyling?: boolean; //Apply default styling to buttons. If you want to use your own classes (e.g. Bootstrap classes) set this parameter to false.
  showCloseButton?: boolean = true; //Set to true to show close button in top right corner of the popup.
  imageUrl?: string; //Add a customized icon for the popup. Should contain a string with the path or URL to the image.
  imageWidth?: number | string; //If imageUrl is set, you can specify imageWidth to describes image width in px.
  imageHeight?: number | string; //Custom image height in px.
  inputLabel?: string; //Input field label.
  inputPlaceholder?: string; //Input field placeholder.
  inputValue?: string; //Input field initial value.
}

export class SilAlertAnimation {
  popup?: string;
  backdrop?: string;
  icon?: string;
}
