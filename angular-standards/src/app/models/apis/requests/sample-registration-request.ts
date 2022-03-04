export class SampleRegistrationRequest {
  email_id!: string;
  password!: string;
  section!: string;
  application!: string;
  surname!: string;
  other_name!: string;
  nic!: string;
  gender!: string;
  photo!: string;
  country!: string;
  contact_details!: SampleRegistrationContactRequest;
  address_details!: SampleRegistrationAddressRequest;
  status!: string;
}

export class SampleRegistrationContactRequest {
  constructor(
    private_phone_number: string[],
    private_mobile_number: string[],
    business_phone_number: string[]
  ) {
    this.private_phone_number = private_phone_number;
    this.private_mobile_number = private_mobile_number;
    this.business_phone_number = business_phone_number;
  }
  private_phone_number: string[];
  private_mobile_number: string[];
  business_phone_number: string[];
}

export class SampleRegistrationAddressRequest {
  constructor(
    address1: string,
    address2: string,
    address3: string,
    address4: string,
    address5: string
  ) {
    this.address1 = address1;
    this.address2 = address2;
    this.address3 = address3;
    this.address4 = address4;
    this.address5 = address5;
  }

  address1: string;
  address2: string;
  address3: string;
  address4: string;
  address5: string;
}
