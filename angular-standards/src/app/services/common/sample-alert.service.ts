import { Injectable } from "@angular/core";
import { SampleAlert } from "src/app/models/common/sample-alert";
import Swal, { SweetAlertIcon, SweetAlertResult } from "sweetalert2";

@Injectable({
  providedIn: "root",
})
export class SampleAlertService {
  constructor() {}

  private mix(sampleAlert: SampleAlert): typeof Swal {
    return Swal.mixin({
      title: sampleAlert.title,
      titleText: sampleAlert.titleText,
      text: sampleAlert.text,
      icon: sampleAlert.icon,
      iconColor: sampleAlert.iconColor,
      iconHtml: sampleAlert.iconHtml,
      width: sampleAlert.width,
      padding: sampleAlert.padding,
      showConfirmButton: sampleAlert.showConfirmButton,
      showDenyButton: sampleAlert.showDenyButton,
      showCancelButton: sampleAlert.showCancelButton,
      confirmButtonText: sampleAlert.confirmButtonText,
      denyButtonText: sampleAlert.denyButtonText,
      cancelButtonText: sampleAlert.cancelButtonText,
      confirmButtonColor: sampleAlert.confirmButtonColor,
      denyButtonColor: sampleAlert.denyButtonColor,
      cancelButtonColor: sampleAlert.cancelButtonColor,
      reverseButtons: sampleAlert.reverseButtons,
      position: sampleAlert.position,
      timer: sampleAlert.timer,
      timerProgressBar: sampleAlert.timerProgressBar,
      html: sampleAlert.html,
      footer: sampleAlert.footer,
      showClass: sampleAlert.showClass,
      hideClass: sampleAlert.hideClass,
      backdrop: sampleAlert.backdrop,
      toast: sampleAlert.toast,
      target: sampleAlert.target,
      input: sampleAlert.input,
      color: sampleAlert.color,
      background: sampleAlert.background,
      grow: sampleAlert.grow,
      heightAuto: sampleAlert.heightAuto,
      didOpen: sampleAlert.didOpen,
      allowOutsideClick: sampleAlert.allowOutsideClick,
      allowEscapeKey: sampleAlert.allowEscapeKey,
      allowEnterKey: sampleAlert.allowEnterKey,
      buttonsStyling: sampleAlert.buttonsStyling,
      showCloseButton: sampleAlert.showCloseButton,
      imageUrl: sampleAlert.imageUrl,
      imageWidth: sampleAlert.imageWidth,
      imageHeight: sampleAlert.imageHeight,
      inputLabel: sampleAlert.inputLabel,
      inputPlaceholder: sampleAlert.inputPlaceholder,
      inputValue: sampleAlert.inputValue,
    });
  }

  public showAlert(
    title: string,
    text?: string,
    icon?: SweetAlertIcon,
    iconColor?: string,
    iconHtml?: string
  ): Promise<SweetAlertResult<any>> {
    return Swal.fire({
      title: title,
      text: text,
      icon: icon,
      iconColor: iconColor,
      iconHtml: iconHtml,
    });
  }

  public showAlertWithOptions(
    sampleAlert: SampleAlert
  ): Promise<SweetAlertResult<any>> {
    return this.mix(sampleAlert).fire();
  }

  public showToast(
    title: string,
    text?: string,
    icon?: SweetAlertIcon,
    iconColor?: string,
    iconHtml?: string,
    didOpen?: any
  ): Promise<SweetAlertResult<any>> {
    return Swal.fire({
      title: title,
      text: text,
      icon: icon,
      iconColor: iconColor,
      iconHtml: iconHtml,
      showConfirmButton: false,
      timer: 1500,
      position: "top-right",
      timerProgressBar: true,
      toast: true,
      didOpen: (toastWindow) => {
        toastWindow.addEventListener("mouseenter", Swal.stopTimer);
        toastWindow.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
  }

  public showToastWithOptions(
    sampleAlert: SampleAlert
  ): Promise<SweetAlertResult<any>> {
    return this.mix(sampleAlert).fire();
  }

  public showProgress(sampleAlert?: SampleAlert) {
    Swal.fire({
      title: sampleAlert?.title ? sampleAlert.title : "Please Wait!",
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  public hideProgress() {
    Swal.hideLoading();
    Swal.close();
  }
}
